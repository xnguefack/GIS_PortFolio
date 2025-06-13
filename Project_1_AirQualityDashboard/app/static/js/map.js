const map = L.map('map').setView([49.2827, -123.1207], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

fetch('/api/airquality')
    .then(res => res.json())
    .then(data => {
        const values = data.hourly;
        const pm10 = values.pm10[0];
        const pm25 = values.pm2_5[0];
        const co = values.carbon_monoxide[0];

        const popupContent = `
            <strong>Air Quality:</strong><br>
            PM10: ${pm10}<br>
            PM2.5: ${pm25}<br>
            CO: ${co}
        `;

        L.marker([49.2827, -123.1207])
            .addTo(map)
            .bindPopup(popupContent)
            .openPopup();
    });
