function randomCirclePlacement() {
    // radiusu 5px olan bir dairə yaradın

    let circle = document.createElement('div')
    circle.className = 'circle'
    document.body.appendChild(circle)

    circle.style.width = '10px'
    circle.style.height = '10px'
    circle.style.borderRadius = '50%'
    circle.style.backgroundColor = 'black'
    circle.style.position = 'absolute'
    let top = Math.floor(Math.random() * 1000);

    let left = Math.floor(Math.random() * 1000);

    circle.style.top = top + "px";
    circle.style.left = left + "px";


}
randomCirclePlacement()