// ==UserScript==
// @name         Wave Bypasser
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Byasses Wave Key System Completly
// @author       WaveBypasser
// @match        https://key.getwave.gg/*
// @match        https://linkvertise.com/*
// @match        https://loot-link.com/*
// @match        https://lootdest.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const urlMappings = {
        'https://linkvertise.com/1200269/wave-key-1?o=sharing': 'https://key.getwave.gg/freemium-tasks?a',
        'https://linkvertise.com/1200269/wave-key-2?o=sharing': 'https://key.getwave.gg/freemium-tasks?c',
        'https://linkvertise.com/1200269/wave-key-3?o=sharing': 'https://key.getwave.gg/freemium-tasks?b',
        'https://loot-link.com/s?a71a5892': 'https://key.getwave.gg/freemium-tasks?d',
        'https://lootdest.com/s?da8a5a9c': 'https://key.getwave.gg/freemium-tasks?e',
        'https://lootdest.com/s?15e1e695': 'https://key.getwave.gg/freemium-tasks?f'
    };

    function createNotification(message) {
        var notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.top = '10px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.padding = '20px';
        notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        notification.style.color = 'white';
        notification.style.borderRadius = '10px';
        notification.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
        notification.style.zIndex = '9999';
        notification.style.fontFamily = 'Arial, sans-serif';
        notification.style.fontSize = '16px';
        notification.style.textAlign = 'center';
        notification.innerText = message;
        document.body.appendChild(notification);
    }

    if (urlMappings[window.location.href]) {
        window.addEventListener('load', function() {
            createNotification('Bypassing... Please Wait');
            setTimeout(function() {
                window.location.href = urlMappings[window.location.href];
            }, 5000);
        });
        return; 
    }

    if (window.location.href === 'https://key.getwave.gg/') {
        window.location.href = 'https://key.getwave.gg/freemium-tasks';
        return;
    }

    if (window.location.href === 'https://key.getwave.gg/freemium-tasks?f') {
        return; 
    }

    if (window.location.href.startsWith('https://key.getwave.gg/')) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                var middleX = window.innerWidth / 2;
                var middleY = window.innerHeight / 2;
                var event = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    clientX: middleX,
                    clientY: middleY
                });
                document.elementFromPoint(middleX, middleY).dispatchEvent(event);
            }, 2500);
        }, false);
        return;
    }

    if (window.location.href.startsWith('https://loot-link.com/') || window.location.href.startsWith('https://lootdest.com/')) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                var middleX = window.innerWidth / 2;
                var middleY = window.innerHeight / 2;
                var event = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    clientX: middleX,
                    clientY: middleY
                });
                document.elementFromPoint(middleX, middleY).dispatchEvent(event);
            }, 10000); 
        }, false);
        return; 
    }
})();
