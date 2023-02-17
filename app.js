const cards = document.querySelectorAll('.card');

const handleOnMouseMove = (event) => {
    const { currentTarget: target } = event;

    const rect = target.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);

}

cards.forEach((card) => {
    card.addEventListener('mousemove', (event) => handleOnMouseMove(event));
})