const NEWS_TICKER_CONFIG = {
    rssUrl: "https://news.google.com/rss/search?q=" + encodeURIComponent('"fake news" OR "golpe digital" OR phishing OR fraude') + "&hl=pt-BR&gl=BR&ceid=BR:pt-BR",
    proxyUrl: "https://api.allorigins.win/raw?url=",
    maxItems: 8,
    fetchTimeoutMs: 7000
};

const TICKER_FALLBACK = {
    pt: [
        "Golpe do PIX falso continua entre os mais denunciados em todo o Brasil",
        "Especialistas alertam para o aumento de deepfakes usados em fraudes financeiras",
        "Phishing por WhatsApp ainda é a principal porta de entrada para golpistas",
        "Bancos reforçam que nunca pedem senha ou código de segurança por telefone",
        "Fake news sobre saúde continuam entre as mais compartilhadas em grupos de mensagens",
        "Agências de checagem relatam aumento de boatos políticos manipulados por inteligência artificial"
    ],
    en: [
        "Fake PIX payment scams remain among the most reported frauds in Brazil",
        "Experts warn of a rise in deepfakes used in financial fraud",
        "WhatsApp phishing is still the main entry point for scammers",
        "Banks reinforce that they never ask for passwords or security codes by phone",
        "Health-related fake news remains among the most shared content in messaging groups",
        "Fact-checkers report a rise in AI-manipulated political rumors"
    ]
};

let tickerState = {
    live: false,
    items: []
};

function getTickerLang() {
    return (typeof getCurrentLang === "function") ? getCurrentLang() : "pt";
}

function tickerTranslate(key, fallbackText) {
    if (typeof translate === "function") {
        const lang = getTickerLang();
        const value = translate(key, lang);
        if (value !== key) return value;
    }
    return fallbackText;
}

function buildTickerItemsHTML(items, isLive) {
    return items.map((item) => {
        if (isLive && item.link) {
            return `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a>`;
        }
        return `<span class="ticker-item">${item.title}</span>`;
    }).join("");
}

function renderTicker() {
    const track = document.getElementById("ticker-track");
    const label = document.getElementById("ticker-label-text");
    const dot = document.getElementById("ticker-dot");
    if (!track || !label) return;

    const lang = getTickerLang();
    const isLive = tickerState.live && tickerState.items.length > 0;
    const items = isLive ? tickerState.items : (TICKER_FALLBACK[lang] || TICKER_FALLBACK.pt).map((title) => ({ title }));

    label.textContent = isLive
        ? tickerTranslate("ticker.live", lang === "en" ? "LIVE" : "AO VIVO")
        : tickerTranslate("ticker.alerts", lang === "en" ? "ALERTS" : "ALERTAS");

    if (dot) dot.classList.toggle("ticker-dot-live", isLive);

    const itemsHTML = buildTickerItemsHTML(items, isLive);
    track.innerHTML = itemsHTML + itemsHTML;
}

function fetchLiveHeadlines() {
    if (typeof fetch !== "function" || typeof DOMParser !== "function") return;

    const controller = (typeof AbortController === "function") ? new AbortController() : null;
    const timeoutId = controller ? setTimeout(() => controller.abort(), NEWS_TICKER_CONFIG.fetchTimeoutMs) : null;
    const proxiedUrl = NEWS_TICKER_CONFIG.proxyUrl + encodeURIComponent(NEWS_TICKER_CONFIG.rssUrl);

    fetch(proxiedUrl, controller ? { signal: controller.signal } : {})
        .then((response) => {
            if (!response.ok) throw new Error("network-error");
            return response.text();
        })
        .then((xmlText) => {
            if (timeoutId) clearTimeout(timeoutId);

            const xmlDoc = new DOMParser().parseFromString(xmlText, "text/xml");
            if (xmlDoc.querySelector("parsererror")) throw new Error("parse-error");

            const itemNodes = Array.from(xmlDoc.querySelectorAll("item")).slice(0, NEWS_TICKER_CONFIG.maxItems);
            if (itemNodes.length === 0) throw new Error("empty-feed");

            const items = itemNodes.map((node) => {
                const titleNode = node.querySelector("title");
                const linkNode = node.querySelector("link");
                return {
                    title: titleNode ? titleNode.textContent : "",
                    link: linkNode ? linkNode.textContent : ""
                };
            }).filter((item) => item.title);

            if (items.length === 0) throw new Error("empty-items");

            tickerState.live = true;
            tickerState.items = items;
            renderTicker();
        })
        .catch(() => {
            if (timeoutId) clearTimeout(timeoutId);
            tickerState.live = false;
            tickerState.items = [];
            renderTicker();
        });
}

function initNewsTicker() {
    if (!document.getElementById("ticker-track")) return;
    renderTicker();
    fetchLiveHeadlines();
}

document.addEventListener("languagechange", renderTicker);
window.addEventListener("load", initNewsTicker);
