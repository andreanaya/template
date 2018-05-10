'use strict';
// Styles
import './general/scss/index.scss';
const objectFitImages = require('object-fit-images')();
import '../.modernizrrc';

import {init} from 'boilerplate/general/js/Core.js';

//Components
import CSSJSModule from './components/css-js-module';
import CSSOnlyModule from './components/css-only-module';
import Typography from './components/typography';

[...document.querySelectorAll('.css-js-module')].forEach( (el) => {
    new CSSJSModule(el);
});

// SVG Sprite
// const files = require.context('./general/svg', true, /^\.\/.*\.svg/);

// var style = document.createElement("style");

// style.appendChild(document.createTextNode(files.keys().reduce((css, key) => {
// 	let icon = files(key);
// 	let viewBox = icon.default.viewBox.split(' ');
// 	let ratio = viewBox[2]/viewBox[3];

// 	return css+'.'+icon.default.id+'{width:'+ratio+'em;height:1em;}'
// }, '.icon{display:inline-block;vertical-align:bottom;}')));

// document.head.appendChild(style);


import Handlebars from 'handlebars/runtime';
import Helpers from './layout/helpers';

Object.keys(Helpers).forEach(function(key) {
	Handlebars.registerHelper(key, Helpers[key]);
});

// import DocsLayout from './layout/views/docs/components/component.hbs';
// // import ComponentLayout from './layout/components/component.hbs';
// console.log(DocsLayout({title:"Hellow World!"}))

init();