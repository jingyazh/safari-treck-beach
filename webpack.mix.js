const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/bootstrap.js', 'public/js')
    .vue()
    .css('resources/css/custom.css', 'public/css')
    .css('resources/css/temp.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css');


module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json', '.png', '.jpg'],
        alias: {
            '@': path.resolve('resources'),
        }
    },
};
