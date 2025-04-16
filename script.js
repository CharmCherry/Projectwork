window.addEventListener('load', () => {
    alert("Welcome to Racheal's Portfolio!");
});

const header = document.querySelector('header');

header.addEventListener('click', () => {
    header.style.backgroundColor = '#ffcccb'; 
    header.style.transition = 'background-color 0.3s ease';
});
