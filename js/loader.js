async function loadDashboard() {

    const response = await fetch("data/dashboard.json");

    const data = await response.json();

    document.getElementById("temperature").textContent = data.temperature;

    document.getElementById("humidity").textContent = data.humidity;

    document.getElementById("day").textContent = data.day;

    document.getElementById("treatment").textContent = data.treatment;

}