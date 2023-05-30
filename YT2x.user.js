// ==UserScript==
// @name         YouTube 2x Speed
// @namespace    598
// @version      1.0
// @description  Sets every YouTube video to 2x speed by default.
// @author       luka598
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function setPlaybackRate() {
        let players = document.querySelectorAll('.html5-main-video');
        if (document.readyState != "complete" || players.length == 0){
            setTimeout(setPlaybackRate, 500)
            return;
        }
        players.forEach(function(player) {
            player.playbackRate = 2;
        });
    }

    function init(){
        setPlaybackRate()
        //window.addEventListener("load", setPlaybackRate)
    }

    init()
})();
