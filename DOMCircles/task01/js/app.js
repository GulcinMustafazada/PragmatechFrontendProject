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
    document.querySelector(`${_selector}`).appendChild(circle)
    circle.style.borderRadius = '100%'


}
createCircle('.circle-container', 30, ' green ')