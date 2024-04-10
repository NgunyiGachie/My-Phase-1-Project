document.addEventListener("DOMContentLoaded", (event) => {

    function fetchRequests(capital) {
        fetch(`https://restcountries.com/v3.1/capital/${capital}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error))
    }
    fetchRequests("Hanoi"); // example usage

    function question1() {
        const options = document.getElementById('question1').getElementsByClassName('options')[0];
        const correctAnswer = document.getElementById('option1-1');

        options.addEventListener('click', (event) => {
            const clickedOption = event.target;
            const clickedOptionText = clickedOption.textContent;
            if (clickedOption === correctAnswer) {
                clickedOption.innerHTML += ' <span style="color: green">&#10004;</span>';
            } else {
                clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
            }
        })
    }
    question1();

    // question 2
    function question2() {
        const options = document.getElementById('question2').getElementsByClassName('options')[0];
        const correctAnswer = document.getElementById('option2-3');
        options.addEventListener('click', (event) => {
            const clickedOption = event.target;
            const clickedOptionText = clickedOption.textContent;
            if (clickedOption === correctAnswer) {
                clickedOption.innerHTML += ' <span style="color: green">&#10004;</span>';
            } else {
                clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
            }

        })
    }
    question2();
    
    // question 3
    function question3() {
        const options = document.getElementById('question3').getElementsByClassName('options')[0];
        const correctAnswer = document.getElementById('option3-1');
        options.addEventListener('click', (event) => {
            const clickedOption = event.target;
            const clickedOptionText = clickedOption.textContent;
            if (clickedOption === correctAnswer) {
                clickedOption.innerHTML += ' <span style="color: green">&#10004;</span>';
            } else {
                clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
            }

        })
    }
    question3();
    
    // question 4
    function question4() {
        const options = document.getElementById('question4').getElementsByClassName('options')[0];
        const correctAnswer = document.getElementById('option4-5');
        options.addEventListener('click', (event) => {
            const clickedOption = event.target;
            const clickedOptionText = clickedOption.textContent;
            if (clickedOption === correctAnswer) {
                clickedOption.innerHTML += ' <span style="color: green">&#10004;</span>';
            } else {
                clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
            }

        })
    }
    question4();

    // question 5
    function question5() {
        const options = document.getElementById('question5').getElementsByClassName('options')[0];
        const correctAnswer = document.getElementById('option5-3');
        options.addEventListener('click', (event) => {
            const clickedOption = event.target;
            const clickedOptionText = clickedOption.textContent;
            if (clickedOption === correctAnswer) {
                clickedOption.innerHTML += ' <span style="color: green">&#10004;</span>';
            } else {
                clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
            }

        })
    }
    question5();
    
    // question 6
    function question6() {
        const options = document.getElementById('question6').getElementsByClassName('options')[0];
        const correctAnswer = document.getElementById('option6-3');
        options.addEventListener('click', (event) => {
            const clickedOption = event.target;
            const clickedOptionText = clickedOption.textContent;
            if (clickedOption === correctAnswer) {
                clickedOption.innerHTML += ' <span style="color: green">&#10004;</span>';
            } else {
                clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
            }

        })
    }
    question6();
    
    // question 7
    function question7() {
        const options = document.getElementById('question7').getElementsByClassName('options')[0];
        const correctAnswer = document.getElementById('option7-1');
        options.addEventListener('click', (event) => {
            const clickedOption = event.target;
            const clickedOptionText = clickedOption.textContent;
            if (clickedOption === correctAnswer) {
                clickedOption.innerHTML += ' <span style="color: green">&#10004;</span>';
            } else {
                clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
            }

        })
    }
    question7();
    
    // question 8
    function question8() {
        const options = document.getElementById('question8').getElementsByClassName('options')[0];
        const correctAnswer = document.getElementById('option8-2');
        options.addEventListener('click', (event) => {
            const clickedOption = event.target;
            const clickedOptionText = clickedOption.textContent;
            if (clickedOption === correctAnswer) {
                clickedOption.innerHTML += ' <span style="color: green">&#10004;</span>';
            } else {
                clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
            }

        })
    }
    question8();

    // question 9
    function question9() {
        const options = document.getElementById('question9').getElementsByClassName('options')[0];
        const correctAnswer = document.getElementById('option9-5');
        options.addEventListener('click', (event) => {
            const clickedOption = event.target;
            const clickedOptionText = clickedOption.textContent;
            if (clickedOption === correctAnswer) {
                clickedOption.innerHTML += ' <span style="color: green">&#10004;</span>';
            } else {
                clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
            }

        })
    }
    question9();

    // question 10
    function question10() {
        const options = document.getElementById('question10').getElementsByClassName('options')[0];
        const correctAnswer = document.getElementById('option10-3');
        options.addEventListener('click', (event) => {
            const clickedOption = event.target;
            const clickedOptionText = clickedOption.textContent;
            if (clickedOption === correctAnswer) {
                clickedOption.innerHTML += ' <span style="color: green">&#10004;</span>';
            } else {
                clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
            }

        })
    }
    question10();

    // add keypress event listener for user to choose an answer by pressing enter on their keyboard
    function addKeyboardNavigation() {
        const options = document.querySelectorAll('.options li');
        options.forEach(option => {
            option.addEventListener('keypress', function(event) {
                if (event.keyCode === 13) {
                    handleOptionSelection(event.target);
                }
            });
        });
    }

    function addKeyDownNavigation() {
        const options = document.querySelectorAll('.options li');
        options.forEach(option => {
            option.addEventListener('keydown', function(event) {
                if (event.keyCode === 40) {
                    handleOptionSelection(event.target);
                }
            });
        });
    }

    const correctAnswerIds = [
        "option1-1",
        "option2-3",
        "option3-1",
        "option4-5",
        "option5-3",
        "option6-3",
        "option7-1",
        "option8-2",
        "option9-5",
        "option10-3"
     ]
    
     function handleOptionSelection(clickedOption) {
        const clickedOptionId = clickedOption.id;
        if (correctAnswerIds.includes(clickedOptionId)) {
            clickedOption.innerHTML += ' <span style="color: green">&10004;</span>';
        } else {
            clickedOption.innerHTML += ' <span style="color: red">&#10008;</span>';
        }

    }
    addKeyboardNavigation();
    addKeyDownNavigation();

    const quizOptions = [
        { 
            question: "I am bordered by Mongolia, Russia, Kyrgyzstan in the North and Vietnam in the South. What is my capital city?",
            options: ["Beijing", "Pyongyang", "Hanoi", "Seoul", "Kabul"],
            correctAnswer: "Beijing",
        },
        
        {
            question: "I am bordered by every South American country except Chile. What is my capital city?",
            options: ["Buenos Aires", "Bogota", "Brasilia", "Rio De Janeiro", "Montevideo"],
            correctAnswer: "Brasilia",
        },
        {
            question: "I am bordered by Singapore, Phillipines, and India. I am renowned for having the largest coastline in the world. What is my capital city?",
            options: ["Jakarta", "Moresby", "Canberra", "Kuala Lumpur", "Bangkok"],
            correctAnswer: "Jakarta"
        },
        {
            question: "I am bordered by the Atlantic Ocean, Algeria, and Mali. I am also host to a geographical pecularity called the 'Eye of the Sahara'. What is my capital city?",
            options: ["Tripoli", "Rabat", "Dakar", "Tunis", "Nouakchott"],
            correctAnswer: "Nouakchott"
        },
        {
            question: "I have no land border because I am an island nation. The capital of my nearest neighbor is Ottawa. What is my capital city?",
            options: ["Reykjavik", "Copenhagen", "Nuuk", "Torshavn", "Oslo"],
            correctAnswer: "Nuuk"
        },
        {
            question: "My border in the North is the largest international border in the world. I also border two oceans in the East and West. What is my capital city?",
            options: ["Ottawa", "Moscow", "Washington D.C.", "Mexico City", "Beijing"],
            correctAnswer: "Washington D.C."
        },
        {
            question: "I have the most country borders in Africa. I am also the continent's second largest country. What is my capital city?",
            options: ["Kinshasa", "Algiers", "Khartoum", "Niamey", "Abuja"],
            correctAnswer: "Kinshasa"
        },
        {
            question: "I am somewhere between Asia and Europe. I also border the following seas: The Black Sea, The Mediterranian Sea, and The Aegean Sea. What is my capital city?",
            options: ["Athens", "Ankara", "Riga", "Tbilisi", "Yerevan"],
            correctAnswer: "Ankara"
        },
        {
            question: "I am the most mountanious country in Europe. Two of my five borders are Italy and France. What is my capital city?",
            options: ["Berlin", "Madrid", "London", "Vienna", "Bern"],
            correctAnswer: "Bern"
        },
        {
            question: "I appear as an S shape on the map. I am bordered by China, Laos, and Cambodia. What is my capital city?",
            options: ["Phnom Penh", "Bangkok", "Hanoi", "Seoul", "Tokyo"],
            correctAnswer: "Hanoi"
        }
    ];

    function myQuizResults() {
        const userAnswers = ["Beijing", "Brasilia", "Jakarta", "Nouakchott", "Nuuk", "Washington D.C.", "Kinshasa", "Ankara", "Bern", "Hanoi"];
        let score = 0;
        let results = document.getElementById('results');
        let yourScore = document.createElement('div');
        yourScore.textContent = 'Your Score: ';
        userAnswers.forEach((userAnswer, index) => {
        const correctAnswer = quizOptions[index].correctAnswer;
        if (userAnswer === correctAnswer) {
            score++;
        }
    });
        yourScore.textContent += score;
        results.appendChild(yourScore);
    }
    myQuizResults();

    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function() {
        event.preventDefault();
        myQuizResults();
    });
    

});


