/* script */

var c,
    islandPainting = {
        // app settings, Not split up at this time but can be by defining 
        // an additional data structure.
        settings: {
            canvas: document.getElementById("canvasPaint"),
            canvasWidth: 1000,
            canvasHeight: 500,
            island: "island.svg",
            moon: "moon.svg",
            clouds: ["cloud1.svg", "cloud2.svg", "cloud3.svg", "cloud4.svg", "cloud5.svg"],
            star_count: 1000,
            star_colors: ["#3F9275", "#296B59", "#449170"],
            star_radius: 2,

        },

        // kicks off APP by filling in the pieces one by one.
        init: function () {
            // access settings with c. ie c.canvas
            c = this.settings;
            // defines context for use in every function
            ctx = c.canvas.getContext("2d");
            this.drawBackground();
            this.drawStars();
            this.drawImg(c.moon, 300, 70, 500, 500);
            this.drawImg(c.island, 0, 0, c.canvasWidth, c.canvasHeight);
            this.drawClouds();
        },

        // draws the radiant background
        drawBackground: function () {
            grd = ctx.createLinearGradient(0, 0, 600, 0);
            grd.addColorStop(0, "#184A4E")
            grd.addColorStop(1, "#184A52")
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, c.canvasWidth, c.canvasHeight);
        },

        // draws stars by the star_count setting and star_colors
        drawStars: function () {
            for (var i = 0; i < c.star_count; i++) {
                var x = Math.random() * c.canvasWidth,
                y = Math.random() * c.canvasHeight,
                radius = Math.random() * c.star_radius;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, 360)
                ctx.fillStyle = islandPainting.getRandom(c.star_colors)
                ctx.fill();
            };
        },

 
        drawClouds: function() {
            max_x = c.canvasWidth;
            max_y = c.canvasHeight;
            for (var i = 0; i <c.clouds.length; i++) {
                cloudX = Math.floor(Math.random() * max_x);
                // sets clouds to not spawn too low or too high
                cloudY = Math.floor(Math.random() * (max_y - 300) + 100);
                // calls drawImg with iterator as source
                islandPainting.drawImg(c.clouds[i], cloudX, cloudY, 100, 50);
            }
        },


        // draws an image from source at X and Y axis. Width, Height.
        drawImg: function (source, x, y, width, height) {
            var img = new Image();
            img.onload = function () {
                ctx.drawImage(img, x, y, width, height);
            }
            img.src = source;
        },

        // getRandom helper. returns random index from list input
        getRandom: function(list) {
            return list[Math.floor(Math.random() * list.length)];
        },
        
    };

(function () {
    islandPainting.init();
})();
