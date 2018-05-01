import './scss/index.scss';

import EventSystem from 'boilerplate/general/js/EventSystem.js';

export default class CSSJSModule {
    constructor(el) {
    	let squares = document.querySelectorAll('.squared');

    	el.parentNode.block('test');

        const onTest = function() {
            console.log('>>>>> test');
        }

    	squares.forEach(function(square) {
            square.subscribe('test', onTest);
    	});

        squares[0].addEventListener('click', function(e) {
            document.body.emit(new Event('test'));
        })

        squares[1].addEventListener('click', function(e) {
            el.emit(new Event('test'));
        })

        squares[2].addEventListener('click', function(e) {
            EventSystem.broadcast(new Event('test'));
        })

        squares[3].addEventListener('click', function(e) {
            el.parentNode.unblock('test');
        })

        squares[4].addEventListener('click', function(e) {
            el.parentNode.block('test');
        })

        squares[5].addEventListener('click', function(e) {
            this.broadcast(new Event('test'));
        })
    }
}
