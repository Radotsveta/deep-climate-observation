# deep-climate-observation
AI-powered climate monitoring prototype designed for the Space Challenges program application. The system simulates neural network-based approaches for climate prediction and satellite data analysis, demonstrating how AI can be applied in environmental monitoring systems.


## Research: Neural Networks and Data Usage in This Project

This research is directly connected to the implemented prototype, which includes data visualization, AI simulation, and satellite-based analysis concepts.

This project demonstrates a simplified AI-based climate monitoring system.  
It does not use trained deep learning models, but simulates how different neural networks are applied in real-world climate observation systems.

---

## Neural Networks Used and Their Relation to the Project

### LSTM (Long Short-Term Memory Networks)

In real climate science, LSTM networks are used for time-series forecasting of environmental data such as temperature changes over time.

In this project, climate data is structured as yearly temperature values:

2020 → 14.8°C  
2021 → 15.0°C  
2022 → 15.1°C  
2023 → 15.3°C  
2024 → 15.4°C  

This represents a time-series dataset, which is the type of data LSTM models process.

In this prototype, LSTM behavior is simulated through a trend-based prediction function that estimates future temperature increase based on previous values.

---

### CNN (Convolutional Neural Networks)

CNNs are commonly used for processing satellite imagery and visual environmental data.

In real applications, they are used for:
- cloud detection
- ice melting analysis
- ocean temperature monitoring
- land and vegetation classification

In this project, CNN is represented through the Satellite AI Observation section, which simulates how satellite image data would be processed in a real system.

---

### Transformer Models (Conceptual Use)

Transformers are used for analyzing long-range dependencies in large and complex datasets.

In climate systems, they are useful for global-scale prediction models.

In this project, they are included as a conceptual model for future improvements in climate prediction systems.

---

## How Data is Used in This Project

The system uses structured and simplified climate data:

### Data Structure
Climate data is stored as arrays of yearly values:

const years = [2020, 2021, 2022, 2023, 2024];  
const temps = [14.8, 15.0, 15.1, 15.3, 15.4];

---

### Data Visualization
The data is visualized using a line chart (Chart.js), which represents climate trends over time.

---

### AI Simulation
Instead of a trained neural network, the project uses a simplified algorithm that:

- analyzes the latest temperature values
- applies a linear trend increase
- generates a future prediction

This simulates how an AI forecasting model would behave in a real system.

---

## Data Flow in the System

Climate Data (arrays)  
→ Table Representation  
→ Graph Visualization (Chart.js)  
→ AI Simulation (Prediction Button)  
→ Output Forecast


