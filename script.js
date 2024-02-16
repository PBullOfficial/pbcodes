
window.onload = function() {
    if(window !== window.top) {
        document.getElementById('iframe-text-p1').style.display = 'block';
        document.getElementById('socials-text-p1').style.display = 'none';
    }

    let level = getIframeLevel();
    document.getElementById('level').textContent = level;
};

function getIframeLevel() {
    let level = 0;
    let currWindow = window;

    while (currWindow !== window.top) {
        level++;
        currWindow = currWindow.parent;
    }

    return level;
}