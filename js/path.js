(function () {
    var page = document.getElementById("top");
    var path = document.getElementById("route-path");
    if (!page || !path) return;

    function updatePath() {
        var containerRect = page.getBoundingClientRect();
        var dots = page.querySelectorAll("[data-route-dot]");
        var points = [];

        dots.forEach(function (dot) {
            var rect = dot.getBoundingClientRect();
            points.push({
                x: rect.left - containerRect.left + rect.width / 2,
                y: rect.top - containerRect.top + rect.height / 2
            });
        });

        if (points.length < 2) return;

        var d = "M " + points[0].x + " " + points[0].y + " ";

        for (var i = 1; i < points.length; i++) {
            var prev = points[i - 1];
            var curr = points[i];
            var dx = curr.x - prev.x;
            var dy = curr.y - prev.y;
            var sign = dx > 0 ? 1 : -1;

            if (i === 1) {
                var midX = prev.x - 80;
                var midY = prev.y + 240;
                d += "C " + (prev.x + 750) + " " + (prev.y - 20) + ", " + (midX + 400) + " " + (midY - 100) + ", " + midX + " " + midY + " ";
                d += "C " + (midX - 150) + " " + (midY + 120) + ", " + (curr.x - 150) + " " + (curr.y + 50) + ", " + curr.x + " " + curr.y + " ";
            } else if (i === 2) {
                var loopX = Math.max(prev.x, curr.x) + 250;
                var loopY = prev.y + (curr.y - prev.y) / 2;
                d += "C " + (prev.x + 200) + " " + (prev.y + 50) + ", " + (loopX + 100) + " " + (loopY - 150) + ", " + loopX + " " + loopY + " ";
                d += "C " + (loopX - 100) + " " + (loopY + 150) + ", " + (curr.x + 120) + " " + (curr.y - 40) + ", " + curr.x + " " + curr.y + " ";
            } else if (i === 3) {
                var underX = prev.x - 250;
                var underY = prev.y + 150;
                d += "C " + (prev.x + 20) + " " + (prev.y + 80) + ", " + (underX + 150) + " " + (underY - 20) + ", " + underX + " " + underY + " ";
                d += "C " + (underX - 150) + " " + (underY + 20) + ", " + (curr.x - 100) + " " + (curr.y - 150) + ", " + curr.x + " " + curr.y + " ";
            } else {
                var sweepX = Math.max(Math.abs(dx) * 1.2, 250);
                d += "C " + (prev.x + sign * sweepX) + " " + (prev.y + dy * 0.9) + ", " + (curr.x - sign * sweepX) + " " + (curr.y - dy * 0.1) + ", " + curr.x + " " + curr.y + " ";
            }
        }

        path.setAttribute("d", d);
    }

    setTimeout(updatePath, 150);
    window.addEventListener("load", updatePath);
    window.addEventListener("resize", updatePath);
    if (window.ResizeObserver) {
        var observer = new ResizeObserver(updatePath);
        observer.observe(page);
    }
})();
