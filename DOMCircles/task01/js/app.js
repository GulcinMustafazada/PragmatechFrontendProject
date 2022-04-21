function createCircle(_selector, _radius, _backgroundColor) {
    let circleContainer = document.createElement('div')
    circleContainer.className = 'circle-container'
    document.body.appendChild(circleContainer)
    let circle = document.createElement('div')
    circle.className = 'circle'
    circleContainer.appendChild(circle)
    circle.style.width = `${_radius*2}px`
    circle.style.height = `${_radius*2}px`
    circle.style.backgroundColor = `${ _backgroundColor }`

    circle.style.borderRadius = '100%'
    let

}
createCircle(1, 30, 'green')