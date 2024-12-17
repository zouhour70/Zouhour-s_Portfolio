const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

document.querySelector('.submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    var score = 0; 
    var totalQuestions = 12; 

    
    var correctAnswers = ['A', 'B', 'C', 'A', 'B', 'A', 'D', 'B', 'D', 'C', 'A', 'B'];

    var correctResponses = [];

   
    for (var i = 1; i <= totalQuestions; i++) {
        var userAnswer = document.querySelector('input[name="q' + i + '"]:checked');

        
        if (userAnswer) {
            
            if (userAnswer.value === correctAnswers[i - 1]) {
                score++; 
                correctResponses.push('Question ' + i + ': ' + userAnswer.value);
            }
        }
    }

    
    var responseList = '';
    for (var j = 0; j < correctResponses.length; j++) {
        responseList += '<li>' + correctResponses[j] + '</li>';
    }

   
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 
        '<p>Your score: ' + score + ' / ' + totalQuestions + '</p>' +
        '<p>Correct Responses:</p>' +
        '<ul>' + responseList + '</ul>';
});




