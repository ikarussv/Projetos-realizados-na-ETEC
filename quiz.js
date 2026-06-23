const QUIZ_DATA = {
    pt: [
        {
            question: "Você recebeu um link no WhatsApp dizendo que o governo está dando um auxílio de R$ 500 para quem responder a uma pesquisa. O link termina em '.site-gratis.ru'. O que você faz?",
            options: [
                "Clico no link e respondo rápido para não perder a chance.",
                "Compartilho com a minha família primeiro antes de testar.",
                "Não clico. O endereço do site é suspeito e o governo usa canais oficiais (.gov.br)."
            ],
            correct: 2,
            feedback: "Correto! O governo brasileiro sempre usa o final de site '.gov.br'. Links estranhos (.net, .ru, .site) geralmente são golpes para roubar seus dados."
        },
        {
            question: "Uma notícia bombástica com o título 'Urgente: Descoberto segredo que cura doenças instantaneamente!!' aparece na sua rede social, mas nenhum grande jornal fala sobre isso. O que isso indica?",
            options: [
                "É uma Fake News. Títulos exagerados e falta de cobertura em outros veículos são sinais claros de desinformação.",
                "Os grandes jornais estão tentando esconder a verdade da população.",
                "A notícia é tão nova que só aquela pessoa descobriu."
            ],
            correct: 0,
            feedback: "Excelente! Se um fato é muito grande e nenhum jornalista de veículos de confiança publicou, trata-se de um boato sensacionalista."
        },
        {
            question: "Uma foto mostra uma praia coberta de lixo com a legenda dizendo que é o litoral de São Paulo neste fim de semana. Como garantir que isso é verdade?",
            options: [
                "Acredito imediatamente, pois a foto está ali provando.",
                "Faço uma busca reversa da imagem ou procuro notícias locais para checar o contexto e a data real da foto.",
                "Comento na foto criticando as pessoas daquela cidade sem pesquisar."
            ],
            correct: 1,
            feedback: "Muito bem! Muitas vezes imagens reais de outros anos ou de outros países são usadas fora de contexto para gerar polêmica atual."
        }
    ],
    en: [
        {
            question: "You receive a link on WhatsApp saying the government is giving R$500 to anyone who answers a survey. The link ends in '.free-site.ru'. What do you do?",
            options: [
                "Click the link and answer quickly so I don't miss the chance.",
                "Share it with my family first before trying it.",
                "I don't click. The address looks suspicious, and the government uses official channels (.gov.br)."
            ],
            correct: 2,
            feedback: "Correct! The Brazilian government always uses the '.gov.br' domain ending. Strange links (.net, .ru, .site) are usually scams designed to steal your data."
        },
        {
            question: "A sensational story titled 'Urgent: Secret cure for all diseases discovered instantly!!' appears on your social feed, but no major newspaper is covering it. What does that suggest?",
            options: [
                "It's fake news. Exaggerated headlines and a lack of coverage elsewhere are clear signs of disinformation.",
                "Major newspapers are trying to hide the truth from the public.",
                "The story is so new that only that one person discovered it."
            ],
            correct: 0,
            feedback: "Excellent! If something this big happened and no trustworthy outlet reported it, it's most likely a sensationalist rumor."
        },
        {
            question: "A photo shows a beach covered in trash, captioned as the São Paulo coastline from this weekend. How can you confirm whether that's true?",
            options: [
                "Believe it right away, since the photo is right there as proof.",
                "Run a reverse image search or look for local news to check the real context and date of the photo.",
                "Comment on the photo criticizing people from that city without checking anything."
            ],
            correct: 1,
            feedback: "Well done! Real photos from other years or other countries are often used out of context to stir up current controversy."
        }
    ]
};

const QUIZ_LABELS = {
    pt: { progress: (current, total) => `Pergunta ${current} de ${total}`, score: (score, total) => `Você acertou ${score} de ${total} perguntas!`, correctAlert: "Resposta Correta!\n\n", wrongAlert: "Resposta Incorreta...\n\n",
        feedbackPerfect: "Parabéns! Você é um verdadeiro mestre na identificação de Fake News e sabe navegar com segurança.",
        feedbackGood: "Bom trabalho! Você já conhece alguns truques da desinformação, mas fique ainda mais atento aos detalhes.",
        feedbackLow: "Atenção! Você precisa praticar mais a checagem de fatos para não cair nas armadilhas da internet." },
    en: { progress: (current, total) => `Question ${current} of ${total}`, score: (score, total) => `You got ${score} out of ${total} questions right!`, correctAlert: "Correct Answer!\n\n", wrongAlert: "Incorrect Answer...\n\n",
        feedbackPerfect: "Congratulations! You're a true master at spotting fake news and know how to browse safely.",
        feedbackGood: "Good job! You already know some disinformation tricks, but pay even closer attention to the details.",
        feedbackLow: "Watch out! You need more practice fact-checking so you don't fall into internet traps." }
};

let currentQuestionIndex = 0;
let score = 0;

function getQuizLang() {
    return (typeof getCurrentLang === "function") ? getCurrentLang() : "pt";
}

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    if (!quizContainer || !resultContainer) return;

    resultContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');

    const lang = getQuizLang();
    const data = QUIZ_DATA[lang];
    const labels = QUIZ_LABELS[lang];

    const progressText = document.getElementById('quiz-progress');
    const questionText = document.getElementById('quiz-question');
    const optionsContainer = document.querySelector('.quiz-options');

    progressText.innerText = labels.progress(currentQuestionIndex + 1, data.length);
    questionText.innerText = data[currentQuestionIndex].question;

    optionsContainer.innerHTML = '';
    data[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const lang = getQuizLang();
    const data = QUIZ_DATA[lang];
    const labels = QUIZ_LABELS[lang];
    const currentQuestion = data[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        score++;
        alert(labels.correctAlert + currentQuestion.feedback);
    } else {
        alert(labels.wrongAlert + currentQuestion.feedback);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < data.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const lang = getQuizLang();
    const data = QUIZ_DATA[lang];
    const labels = QUIZ_LABELS[lang];

    document.getElementById('quiz-container').classList.add('hidden');
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');

    const scoreText = document.getElementById('result-score');
    const feedbackText = document.getElementById('result-feedback');

    scoreText.innerText = labels.score(score, data.length);

    if (score === data.length) {
        feedbackText.innerText = labels.feedbackPerfect;
    } else if (score >= 1) {
        feedbackText.innerText = labels.feedbackGood;
    } else {
        feedbackText.innerText = labels.feedbackLow;
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

document.addEventListener('languagechange', () => {
    const resultContainer = document.getElementById('result-container');
    if (resultContainer && !resultContainer.classList.contains('hidden')) {
        showResults();
    } else if (document.getElementById('quiz-container')) {
        loadQuestion();
    }
});

window.addEventListener('load', function () {
    if (document.getElementById('quiz-container')) {
        loadQuestion();
    }
});
