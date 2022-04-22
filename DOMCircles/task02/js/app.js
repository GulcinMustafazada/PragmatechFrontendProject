function createMultipleCircle(
    _selector,
    _circleCount,
    _radius,
    _backgroundColor
) {
    // Verilən parametrlərə əsasən iç içə dairələr yaradan metod yazın.[Nümunə](https://i.pinimg.com/originals/20/64/c1/2064c19aa04bac67153ef8832618ccb0.gif)
    // _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
    // _radius->yaradılacaq dairələrdən ən böyük dariənin radiusu daxil ediləcək ədəd olaraq
    // _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq
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
    for (let i = 0; i <= _circleCount; i++) {
        let innercircle = document.createElement('div');
        circle.appendChild(innercircle)
        innercircle.style.width = `${_radius/2}px`
        innercircle.style.height = `${_radius/2}p`
    };


}
createMultipleCircle('.circle-container', 3, 50, 'red')