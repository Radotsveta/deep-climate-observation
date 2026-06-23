const climateData = {
    yearly: {
        labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        temps: [14.2, 14.3, 14.5, 14.7, 14.9, 15.0, 15.1, 15.2, 15.3, 15.4]
    },

    monthly: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        temps: [14.8, 14.9, 15.0, 15.2, 15.4, 15.6, 15.8, 15.7, 15.5, 15.3, 15.0, 14.9]
    },

    weekly: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        temps: [15.1, 15.3, 15.2, 15.4, 15.5, 15.6, 15.4]
    },

    daily: {
        labels: ["00h", "04h", "08h", "12h", "16h", "20h", "23h"],
        temps: [15.0, 14.8, 15.2, 15.6, 15.7, 15.4, 15.1]
    }
};

let currentView = "yearly";

const statusText = document.getElementById("statusText");
const button = document.getElementById("predictBtn");
const result = document.getElementById("result");
const dateElement = document.getElementById("currentDate");

const ctx = document.getElementById("climateChart").getContext("2d");

let chart;

/* ---------------- DATE ---------------- */

function updateDate() {
    const today = new Date();

    dateElement.innerHTML = today.toLocaleDateString("en-GB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

/* ---------------- STATUS ---------------- */

function updateStatus() {
    const temp = climateData.daily.temps.at(-1);

    if (temp >= 15.3) {
        statusText.innerHTML = "WARMING ALERT";
        statusText.style.color = "#ff5252";
    } else {
        statusText.innerHTML = "STABLE CLIMATE";
        statusText.style.color = "#00e676";
    }
}

/* ---------------- CHART ---------------- */

function updateChart(view) {

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: "line",

        data: {
            labels: climateData[view].labels,

            datasets: [{
                label: "Temperature (°C)",
                data: climateData[view].temps,

                borderColor: "#00ff99",
                backgroundColor: "rgba(0,255,153,0.1)",

                fill: true,
                tension: 0.35,
                pointRadius: 4,
                pointHoverRadius: 7
            }]
        },

        options: {
            responsive: true,

            animation: {
                duration: 800
            },

            plugins: {
                legend: {
                    labels: {
                        color: "#ffffff"
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: "#ffffff"
                    }
                },

                y: {
                    ticks: {
                        color: "#ffffff"
                    }
                }
            }
        }
    });
}

/* ---------------- AI FORECAST ---------------- */

function calculateForecast(data) {

    const last = data[data.length - 1];
    const prev = data[data.length - 2];

    const trend =
        (last - prev) * 0.7 +
        (Math.random() - 0.5) * 0.1;

    return {
        trend,
        forecast1: last + trend,
        forecast2: last + trend * 2,
        confidence: Math.min(
            95,
            70 + Math.abs(trend * 100)
        )
    };
}

function showForecast(view) {

    const data = climateData[view].temps;
    const forecast = calculateForecast(data);

    result.innerHTML = `
        <strong>Climate Forecast System (${view.toUpperCase()})</strong>

        <br><br>

        Trend:
        ${forecast.trend > 0 ? "Warming" : "Cooling"}

        <br>

        Confidence:
        ${forecast.confidence.toFixed(0)}%

        <br><br>

        Next Step Forecast:

        <br>

        +1 → ${forecast.forecast1.toFixed(1)}°C

        <br>

        +2 → ${forecast.forecast2.toFixed(1)}°C
    `;
}

/* ---------------- VIEW BUTTONS ---------------- */

function setView(view, btn) {

    currentView = view;

    updateChart(view);

    document
        .querySelectorAll(".view-buttons button")
        .forEach(button =>
            button.classList.remove("active")
        );

    if (btn) {
        btn.classList.add("active");
    }

    showForecast(view);
}

/* ---------------- AI BUTTON ---------------- */

button.addEventListener("click", () => {

    result.innerHTML =
        "Analyzing climate data...";

    setTimeout(() => {
        showForecast(currentView);
    }, 2000);
});

/* ---------------- LIVE DATA SIMULATION ---------------- */

setInterval(() => {

    const drift =
        (Math.random() - 0.5) * 0.05;

    climateData.daily.temps[
        climateData.daily.temps.length - 1
    ] += drift;

    updateStatus();

    if (currentView === "daily") {
        updateChart("daily");
    }

}, 5000);

/* ---------------- INITIALIZATION ---------------- */

updateDate();
updateStatus();
updateChart("yearly");

result.innerHTML =
    "Select a view or run AI Prediction.";
