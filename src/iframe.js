// import "./sass/style.scss";
// import "./js/iframe"

import ResizeObserver from 'resize-observer-polyfill';

(function () {
    if (window.top === window) {
        // no iframe
        return;
    }

    function onResize() {
        const {width, height} = document.body.parentElement.getBoundingClientRect();
        window.top.postMessage({
            type: 'resize',
            height: height,
            width: width,
        }, '*');
    }

    const ro = new ResizeObserver(onResize);
    ro.observe(document.body.parentElement);

    const inputs = document.querySelectorAll('input');
    for (let i of inputs) {
        i.addEventListener('change', onResize, false);
    }

})();

