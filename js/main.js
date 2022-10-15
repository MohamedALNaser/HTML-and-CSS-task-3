window.onload = function() {
    let imgRotete = document.querySelector("header .header-imgs :nth-child(1)");
    console.log(imgRotete);
    imgRotete.style.cssText = `animation: span;
        animation-duration: 45s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-play-state: running;
        
`;
};