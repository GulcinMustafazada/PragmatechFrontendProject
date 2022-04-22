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
    let circleContainer = document.createElement('div');
    circleContainer.className = 'circle-container';
    document.body.appendChild(circleContainer);
    let circle = document.createElement('div');
    circle.className = 'circle';
    circleContainer.appendChild(circle);
    circle.style.width = `${_radius*2}px`;
    circle.style.height = `${_radius*2}px`;
    circle.style.backgroundColor = `${ _backgroundColor }`;

    circle.style.borderRadius = '100%';
    for (let i = 0; i <= _circleCount; i++) {
        let circle1 = document.createElement('div');
    };

}
createMultipleCircle(1, 2, 50, 'red')