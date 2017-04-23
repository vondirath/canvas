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
            stars: 50,



        },
        init: function () {
            c = this.settings;
            this.drawBackground();
            setInterval(this.drawStars(), 33);
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
            var create_particle = function () {
                // random position
                this.x = Math.random() * c.canvasWidth;
                this.y = Math.random() * c.canvasHeight;
                this.color = c.star_color;
                this.radius = Math.random() * 2;
                this.color = "rgba(64,139,132,0.5)"
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
    };

(function () {
    islandPainting.init();
})();