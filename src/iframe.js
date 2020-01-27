// import "./sass/style.scss";
// import "./js/iframe"

import ResizeObserver from 'resize-observer-polyfill';

let padding = 0;
const ro = new ResizeObserver((entries, observer) => {
    for (const entry of entries) {
        const {left, top, width, height} = entry.contentRect;
 
        // console.log('Element:', entry.target);
        // console.log(`Element's size: ${ width }px x ${ height }px`);
        // console.log(`Element's paddings: ${ top }px ; ${ left }px`);

        if (top === window) {
            console.log('no iframe');
            return;
        }

        window.top.postMessage({
            type: 'resize',
            height: height + padding,
            width: width + padding,
        }, '*');

    }
});
 
ro.observe(document.body.parentElement);

