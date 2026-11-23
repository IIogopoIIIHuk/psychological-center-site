(function () {
    if (!window.L) return;

    document.querySelectorAll(".place-map").forEach(function (el) {
        var lat = Number(el.getAttribute("data-lat"));
        var lon = Number(el.getAttribute("data-lon"));
        if (!lat || !lon) return;

        var map = L.map(el, {
            scrollWheelZoom: false,
            zoomControl: true
        }).setView([lat, lon], 18);
        map.attributionControl.setPrefix(false);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap",
            maxZoom: 19
        }).addTo(map);

        L.marker([lat, lon], {
            icon: L.divIcon({
                className: "place-pin",
                iconSize: [18, 18],
                iconAnchor: [9, 9]
            }),
            keyboard: false,
            title: "ул. Советская, 14"
        }).addTo(map);

        el.addEventListener("click", function () {
            map.scrollWheelZoom.enable();
        });
    });
})();
