const mix = require("laravel-mix");

mix.ts("src/test.ts", "dist/test.js").setPublicPath("dist");
