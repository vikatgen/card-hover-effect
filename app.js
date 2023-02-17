const cards = document.querySelectorAll('.card');
const cardsContainerElement = document.querySelector('#cards');

cardsContainerElement.addEventListener('mousemove', (event) => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    })
})