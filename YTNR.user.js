// ==UserScript==
// @name         YouTube No Recomended
// @namespace    598
// @version      1.0
// @description  Removes recomended videos from Youtube
// @author       luka598
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function removeRelated() {
        let nodes = document.querySelectorAll('#related');
        nodes.forEach(function(node) {
            node.hidden=true
        });
        setTimeout(removeRelated, 5000)
    }

    function removeRecomended() {
        console.log("Removing recomended")
        let nodes = document.querySelectorAll('ytm-rich-grid-renderer');
        nodes.forEach(function(node) {
            node.hidden=true
        });
        setTimeout(removeRecomended, 5000)
    }

    function init(){
        if (window.location.href.includes("watch")){
            removeRelated()
        } else {
            removeRecomended()
        }
    }

    init()
})();