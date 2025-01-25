// const colors = ['white', 'blue', 'red']
// let cambioColor = 0;

// function cambioColorFondo(){
//     const textElement = document.getElementById('tituloNombre');
//     textElement.style.color = colors[cambioColor];
//     cambioColor = (cambioColor + 1) % colors.length;
// }

// setInterval(cambioColorFondo, 400);

document.addEventListener('DOMContentLoaded', (event) => {
    const dateTimeInput = document.getElementById('reservationDateTime');
    const now = new Date();
    const today = now.toISOString().slice(0, 16);
    dateTimeInput.setAttribute('min', today);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const dateTimeInput = document.getElementById('reservationDateTime');
    const submitBtn = document.getElementById('submitBtn');
    const feedback = document.getElementById('reservationDateTimeFeedback');

    submitBtn.addEventListener('click', (event) => {
        const dateTimeValue = new Date(dateTimeInput.value);
        const hours = dateTimeValue.getHours();

        if (hours < 8 || hours > 20) {
            feedback.style.display = 'block';
            dateTimeInput.classList.add('is-invalid');
            event.preventDefault();
        } else {
            feedback.style.display = 'none';
            dateTimeInput.classList.remove('is-invalid');
        }
    });
});