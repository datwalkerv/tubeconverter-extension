// ==UserScript==
// @name         TubeConverter Extension
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simple 320kbps mp3 downloader
// @author       datwalkerv
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    const urlParams = new URLSearchParams(window.location.search)
    const videoId = urlParams.get('v')
    const getTrack = await fetch(`https://tube-converter.vercel.app/mp3/${videoId}`)
    const track = await getTrack.json();

    const button = document.createElement('a');
    button.setAttribute('href', track.links.hh.link);
    button.innerHTML = "MP3";
    button.style.padding = "1.2rem";
    button.style.borderRadius = "20px";
    button.style.textDecoration = 'none';
    button.style.background = "#FE0000";
    button.style.color = "white";
    button.style.marginLeft = "1rem";
    button.style.fontWeight="bold";
    document.querySelector("div#owner[class='item style-scope ytd-watch-metadata']").appendChild(button);
})();