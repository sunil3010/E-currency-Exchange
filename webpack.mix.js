/**
 *  This file is part of changex-exchange
 * ---------------------------------------------------------------
 *  (c) Soft Web <opensoftweb@gmail.com><support@opensoftweb.com>
 * ---------------------------------------------------------------
 *  URL <opensoftweb.com> for live demo
 * ---------------------------------------------------------------
 *  Built with Love
 */
 
const mix = require('laravel-mix');

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
    .sass('resources/sass/app.scss', 'public/css');
