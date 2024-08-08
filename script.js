document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click event to toggle content visibility
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('expanded');
        });
    });
});

document.querySelectorAll('.gallery-container img').forEach(image => {
    image.onclick = () => {
document.querySelector('.popup-image').style.display = 'block';
document.querySelector('.popup-image img').src= image.getAttribute('src');
}
});


document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};

