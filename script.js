const CHECKER_MESSAGES = {
    pt: {
        empty: "Por favor, digite alguma frase ou texto para analisar!",
        risk: {
            label: "Alerta de Risco:",
            text: "Esta frase possui termos altamente associados a fraudes e boatos inflados (sensacionalismo, senso de urgência ou promessas de brindes). Evite compartilhar sem verificar em fontes oficiais!"
        },
        check: {
            label: "Aviso de Checagem:",
            text: "Cita estudos ou termos oficiais, porém lembre-se de conferir se o nome do órgão ou universidade foi realmente divulgado em portais renomados."
        },
        neutral: {
            label: "Status Neutro:",
            text: "Não detectamos gatilhos óbvios de mentiras automatizadas, mas o passo fundamental é pesquisar o trecho inteiro em mecanismos de busca tradicionais."
        },
        keywords: {
            risk: ["clique aqui", "grátis", "compartilhe", "urgente"],
            check: ["segundo estudos", "pesquisa", "oficial"]
        }
    },
    en: {
        empty: "Please type a phrase or text to analyze!",
        risk: {
            label: "Risk Alert:",
            text: "This phrase contains terms strongly associated with fraud and inflated rumors (sensationalism, urgency, or promises of free gifts). Avoid sharing without checking official sources!"
        },
        check: {
            label: "Verification Notice:",
            text: "Mentions studies or official terms, but remember to confirm whether the institution or university was actually named by reputable outlets."
        },
        neutral: {
            label: "Neutral Status:",
            text: "We didn't detect obvious red flags of automated misinformation, but the key step is still to search the full phrase on a traditional search engine."
        },
        keywords: {
            risk: ["click here", "free", "share this", "urgent"],
            check: ["according to studies", "research", "official"]
        }
    }
};

const CHECKER_COLORS = {
    risk: { bg: "#2a1414", fg: "#e08585" },
    check: { bg: "#241c08", fg: "#e8c766" },
    neutral: { bg: "#1c1c1c", fg: "#f1eee5" }
};

function simularVerificacao() {
    const input = document.getElementById('news-input');
    const resultBox = document.getElementById('checker-result');
    if (!input || !resultBox) return;

    const lang = (typeof getCurrentLang === "function") ? getCurrentLang() : "pt";
    const messages = CHECKER_MESSAGES[lang] || CHECKER_MESSAGES.pt;
    const value = input.value.trim().toLowerCase();

    if (value === '') {
        alert(messages.empty);
        return;
    }

    resultBox.classList.remove('hidden');

    const hasRisk = messages.keywords.risk.some((word) => value.includes(word));
    const hasCheck = messages.keywords.check.some((word) => value.includes(word));

    if (hasRisk) {
        resultBox.style.backgroundColor = CHECKER_COLORS.risk.bg;
        resultBox.style.color = CHECKER_COLORS.risk.fg;
        resultBox.innerHTML = `<strong>${messages.risk.label}</strong> ${messages.risk.text}`;
    } else if (hasCheck) {
        resultBox.style.backgroundColor = CHECKER_COLORS.check.bg;
        resultBox.style.color = CHECKER_COLORS.check.fg;
        resultBox.innerHTML = `<strong>${messages.check.label}</strong> ${messages.check.text}`;
    } else {
        resultBox.style.backgroundColor = CHECKER_COLORS.neutral.bg;
        resultBox.style.color = CHECKER_COLORS.neutral.fg;
        resultBox.innerHTML = `<strong>${messages.neutral.label}</strong> ${messages.neutral.text}`;
    }
}

document.addEventListener('languagechange', () => {
    const resultBox = document.getElementById('checker-result');
    const input = document.getElementById('news-input');
    if (resultBox && input && !resultBox.classList.contains('hidden') && input.value.trim() !== '') {
        simularVerificacao();
    }
});

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', highlightActiveNav);
