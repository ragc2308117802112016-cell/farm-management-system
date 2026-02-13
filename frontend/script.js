function fetchData() {
    // Backend API-kuda interact panna
    fetch('/api/farm')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data-display').innerText = `Temperature: ${data.temp}°C | Humidity: ${data.humidity}%`;
        })
        .catch(err => console.log("Backend connect aagala!"));
}