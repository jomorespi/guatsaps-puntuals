let mix = require('laravel-mix')

mix
    .js('src/js/app.js', 'js')
    .sass('src/sass/app.sass', 'css')
    .setPublicPath('dist')
    .browserSync({
        server:'./',
        files: ['./**/*.html', './dist'],
    })