const variableLinks = {
    "Consecutive Dry Days": [
        { text: "30-day Plot", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/CDD/plot_CDD_forecasts.png" },
        { text: "30-day Plot + Anomaly", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/CDD/plot_CDD_forecasts_anomaly.png" },
    ],
    "Current Month Skill": [
        { text: "1-month Lead", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Current_month_Skill/plot_WA_multimodel_precipitation_skill_Month_1.png" },
        { text: "1-week Lead", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Current_month_Skill/plot_WA_multimodel_precipitation_skill_Week_1.png" },
        { text: "2-week Lead", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Current_month_Skill/plot_WA_multimodel_precipitation_skill_Week_2.png" },
        { text: "3-week Lead", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Current_month_Skill/plot_WA_multimodel_precipitation_skill_Week_3.png" },
    ],
    "Total Rainfall in mm": [
        { text: "30-day", image: "http://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Total_rainfall/plot_ensemble_median_total_rainfall.png" },
        { text: "Week 1", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Total_rainfall/plot_ensemble_median_total_rainfall_week_1.png" },
        { text: "Week 2", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Total_rainfall/plot_ensemble_median_total_rainfall_week_2.png" },
        { text: "Week 3", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Total_rainfall/plot_ensemble_median_total_rainfall_week_3.png" },
        { text: "Week 4", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Total_rainfall/plot_ensemble_median_total_rainfall_week_4.png" },
    ],
    "Number of Rainy Days": [
    { text: "Week 1 - 00 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_00mm_week_1.png" },
    { text: "Week 2 - 00 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_00mm_week_2.png" },
    { text: "Week 3 - 00 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_00mm_week_3.png" },
    { text: "Week 4 - 00 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_00mm_week_4.png" },

    { text: "Week 1 - 05 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_05mm_week_1.png" },
    { text: "Week 2 - 05 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_05mm_week_2.png" },
    { text: "Week 3 - 05 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_05mm_week_3.png" },
    { text: "Week 4 - 05 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_05mm_week_4.png" },

    { text: "Week 1 - 10 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_10mm_week_1.png" },
    { text: "Week 2 - 10 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_10mm_week_2.png" },
    { text: "Week 3 - 10 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_10mm_week_3.png" },
    { text: "Week 4 - 10 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_10mm_week_4.png" },

    { text: "Week 1 - 25 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_25mm_week_1.png" },
    { text: "Week 2 - 25 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_25mm_week_2.png" },
    { text: "Week 3 - 25 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_25mm_week_3.png" },
    { text: "Week 4 - 25 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_25mm_week_4.png" },

    { text: "Week 1 - 50 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_50mm_week_1.png" },
    { text: "Week 2 - 50 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_50mm_week_2.png" },
    { text: "Week 3 - 50 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_50mm_week_3.png" },
    { text: "Week 4 - 50 mm", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Number_of_rainy_days/plot_ensemble_median_number_of_rainy_days_above_50mm_week_4.png" }
    ],
    "ETo forecasts-Experimental": [
    { text: "Absolute Anomalies - 30 days", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/ETo/subx_eto_west_africa_weekly.png"},
    { text: "Absolute Anomalies - Week 1", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/ETo/subx_eto_anomaly_wa_mme_week1.png"},
    { text: "Absolute Anomalies - Week 2", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/ETo/subx_eto_anomaly_wa_mme_week2.png"},
    { text: "Absolute Anomalies - Week 3", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/ETo/subx_eto_anomaly_wa_mme_week3.png"},
    { text: "Absolute Anomalies - Week 4", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/ETo/subx_eto_anomaly_wa_mme_week4.png"},
    { text: "Percent of Normal - 30 days", image: "https://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/ETo/subx_eto_pon_west_africa_weekly.png"}
    ],
    "Mean Tmax in deg C": [
    { text: "Week 1", image: "http://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Average_temperature/plot_ensemble_median_tasmax_week_1.png"},
    { text: "Week 2", image: "http://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Average_temperature/plot_ensemble_median_tasmax_week_2.png"},
    { text: "Week 3", image: "http://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Average_temperature/plot_ensemble_median_tasmax_week_3.png"},
    { text: "Week 4", image: "http://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Average_temperature/plot_ensemble_median_tasmax_week_4.png"}
    ],
    "Mean Tmin in deg C": [
    { text: "Week 1", image: "http://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Average_temperature/plot_ensemble_median_tasmin_week_1.png"},
    { text: "Week 2", image: "http://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Average_temperature/plot_ensemble_median_tasmin_week_2.png"
    },
    { text: "Week 3", image: "http://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Average_temperature/plot_ensemble_median_tasmin_week_3.png"},
    { text: "Week 4", image: "http://data.chc.ucsb.edu/people/shrad/SubX/Plots/Archive/Latest/W_Africa/Downscaled_forecasts/Average_temperature/plot_ensemble_median_tasmin_week_4.png"}
    ],
};

const linksContainer = document.getElementById("links");
const variableSelect = document.getElementById("variable");
const visualization = document.getElementById("visualization");
const details = document.getElementById("details");
const zoomIn = document.getElementById("zoomIn");
const zoomOut = document.getElementById("zoomOut");

let scale = 1;
let isDragging = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;

// Charger les liens dynamiquement
variableSelect.addEventListener("change", () => {
    const selectedVariable = variableSelect.value;
    linksContainer.innerHTML = " ";

    if (variableLinks[selectedVariable]) {
        variableLinks[selectedVariable].forEach((link) => {
            const anchor = document.createElement("a");
            anchor.href = "#mainPanel";
            anchor.textContent = link.text;
            anchor.className = "block p-2 bg-blue-100 rounded hover:bg-blue-200";
            anchor.addEventListener("click", () => {
                visualization.src = link.image;
                details.textContent = `Region: West Africa | Variable: ${selectedVariable} | Forecast Period: ${link.text}`;
                scale = 1; // Réinitialiser le zoom
                translateX = 0; // Réinitialiser la position
                translateY = 0;
                visualization.style.transform = `translate(0, 0) scale(${scale})`;
            });
            linksContainer.appendChild(anchor);
        });
    }
});

// Zoom avant
zoomIn.addEventListener("click", () => {
    scale += 0.1;
    visualization.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
});

// Zoom arrière
zoomOut.addEventListener("click", () => {
    scale = Math.max(scale - 0.1, 0.5); // Limiter le zoom minimum
    visualization.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
});

// Déplacement de l'image avec la souris (uniquement clic gauche maintenu)
visualization.addEventListener("mousedown", (e) => {
    if (e.button === 0) { // Vérifie que le clic gauche est utilisé
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        visualization.style.cursor = "grabbing";
    }
});

visualization.addEventListener("mousemove", (e) => {
    if (isDragging) {
        e.preventDefault();
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        visualization.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }
});

visualization.addEventListener("mouseup", (e) => {
    if (e.button === 0) { // Vérifie que le clic gauche est relâché
        isDragging = false;
        visualization.style.cursor = "grab";
    }
});

visualization.addEventListener("mouseleave", () => {
    if (isDragging) {
        isDragging = false;
        visualization.style.cursor = "grab";
    }
});

// Zoom sur double-clic
visualization.addEventListener("dblclick", (e) => {
    const rect = visualization.getBoundingClientRect();
    const offsetX = e.clientX - rect.left; // Position X du clic dans l'image
    const offsetY = e.clientY - rect.top;  // Position Y du clic dans l'image

    scale += 0.5; // Augmenter le niveau de zoom
    translateX -= (offsetX - rect.width / 2) * 0.5; // Ajuster le déplacement horizontal
    translateY -= (offsetY - rect.height / 2) * 0.5; // Ajuster le déplacement vertical

    visualization.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
});

// Zoom avec la molette
visualization.addEventListener("wheel", (e) => {
    e.preventDefault();
    const zoomDelta = e.deltaY > 0 ? -0.1 : 0.1;
    scale = Math.max(0.5, scale + zoomDelta); // Limiter le zoom minimum
    visualization.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
});
