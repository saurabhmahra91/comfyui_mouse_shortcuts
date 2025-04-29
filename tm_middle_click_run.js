// ==UserScript==
// @name         RunPod ComfyUI Instance Run Inference on Middle Click
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Trigger Run button in ComfyUI with middle mouse button on RunPod
// @match        https://*.proxy.runpod.net/*
// @match        http://localhost:8188/*
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

    window.addEventListener('auxclick', function (e) {
        console.log("Aux click detected:", e.button);

        if (e.button === 1) {
            const runButton = document.querySelector('button[aria-label="Run"]');

            if (runButton) {
                runButton.click();
                e.preventDefault();
            }
        }
    });
})();