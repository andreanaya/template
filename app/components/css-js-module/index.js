import {register} from 'boilerplate/general/js/Factory.js';

import './scss/index.scss';

export default class CSSJSModule {
    constructor(el) {
    	console.log('CSS JS Module')
    }
}


register('css-js-module', CSSJSModule);