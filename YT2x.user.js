// ==UserScript==
// @name         YouTube 2x Speed
// @namespace    598
// @version      1.2
// @description  Sets every YouTube video to 2x speed by default.
// @author       luka598
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function changePlayback(n) {
        let nodes = document.querySelectorAll('video');
        nodes.forEach(function(node) {
            node.playbackRate=2
        });
        if (n < 3) {setTimeout(()=>changePlayback(n+1), 5000)}
    }

    function init(){
            changePlayback(0)
    }

    init()
})();
