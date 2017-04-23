/* script */
var c,
    islandPainting = {
        settings: {
            canvas: document.getElementById("canvasPaint"),
            canvasWidth: 1000,
            canvasHeight: 500,
            island: "island.svg",
            moon: "moon.svg",
            clouds: ["cloud1.svg", "cloud2.svg", "cloud3.svg", "cloud4.svg", "cloud5.svg"],
            star_count: 100,
            star_colors: ["#3F9275", "#296B59", "#449170"],



        },
        init: function () {
            c = this.settings;
            this.drawBackground();
            this.drawStars();
            this.drawImg(c.moon, 300, 70, 500, 500);
            this.drawImg(c.island, 0, 0, c.canvasWidth, c.canvasHeight);
        },

        drawBackground: function () {
            ctx = c.canvas.getContext("2d");
            grd = ctx.createLinearGradient(0, 0, 600, 0);
            grd.addColorStop(0, "#184A4E")
            grd.addColorStop(1, "#184A52")
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, c.canvasWidth, c.canvasHeight);
        },

        drawStars: function () {
            ctx = c.canvas.getContext("2d");
            for (var i = 0; i < c.star_count; i++) {
                var x = Math.random() * c.canvas.offsetWidth,
                y = Math.random() * c.canvas.offsetHeight,
                radius = Math.random() * 1.2;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, 360)
                ctx.fillStyle = islandPainting.getRandom(c.star_colors)
                ctx.fill();
            };
            

        },

        drawImg: function (source, x, y, w, h) {
            ctx = c.canvas.getContext("2d")
            var img = new Image();
            img.onload = function () {
                ctx.drawImage(img, x, y, w, h);
            }
            img.src = source;
        },

        getRandom: function(list) {
            return list[Math.floor(Math.random() * list.length)];
        },
    };

(function () {
    islandPainting.init();
})();