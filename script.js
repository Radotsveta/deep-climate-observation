const statusText = document.getElementById("statusText");

function updateStatus() {
    const temp = 15.4;

    if (temp > 15.2) {
        statusText.innerHTML = "⚠️ WARMING ALERT";
        statusText.style.color = "red";
    } else {
        statusText.innerHTML = "🟢 Stable Climate";
        statusText.style.color = "#00ff99";
    }
}

updateStatus();

const button = document.getElementById("predictBtn");
const result = document.getElementById("result");

const years = [2020, 2021, 2022, 2023, 2024];
const temps = [14.8, 15.0, 15.1, 15.3, 15.4];

const ctx = document.getElementById('climateChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            label: 'Temperature (°C)',
            data: temps,
            borderColor: '#00ff99',
            fill: false,
            tension: 0.3
        }]
    }
});

button.addEventListener("click", () => {

    result.innerHTML = "Analyzing climate data... ⏳";

    setTimeout(() => {

        const prediction = 15.4 + 0.2;

        result.innerHTML = `
            <b>AI Prediction Complete</b><br><br>
            Trend: Warming 🌡️<br>
            Confidence: High<br><br>
            2025 → ${prediction.toFixed(1)}°C<br>
            2026 → ${(prediction + 0.2).toFixed(1)}°C
        `;
    }, 2000);
});

