

document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const sweetMessage = document.getElementById('sweet-message');
    const question = document.querySelector('.container h1');
    const optionsDiv = document.querySelector('.options');

    
    yesButton.addEventListener('click', function() {
        question.style.display = 'none';
        optionsDiv.style.display = 'none';
        sweetMessage.style.display = 'block';
    });

    
    noButton.addEventListener('mouseover', function() {
        
        if (noButton.style.position !== 'absolute') {
            noButton.style.position = 'absolute';
        }

        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        
        const padding = 20; 
        const randomX = Math.random() * (windowWidth - buttonWidth - 2 * padding) + padding;
        const randomY = Math.random() * (windowHeight - buttonHeight - 2 * padding) + padding;

        
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    });

    
});