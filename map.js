const HOTSPOTS = [
    { name: "Centro", lat: -23.9651144, lng: -46.3876674, count: 565, level: "high" },
    { name: "Vila Margarida", lat: -23.9691736, lng: -46.4088517, count: 394, level: "high" },
    { name: "Itararé", lat: -23.9685027, lng: -46.3636682, count: 205, level: "medium" },
    { name: "Parque Bitaru", lat: -23.9724986, lng: -46.3984709, count: 201, level: "medium" },
    { name: "Cidade Náutica", lat: -23.9511756, lng: -46.4123509, count: 197, level: "medium" },
    { name: "Gonzaguinha", lat: -23.9713935, lng: -46.3852670, count: 105, level: "low" },
    { name: "Humaitá", lat: -23.9504297, lng: -46.4568352, count: 103, level: "low" },
    { name: "Boa Vista", lat: -23.9699055, lng: -46.3726665, count: 99, level: "low" },
    { name: "Nossa Sra. de Fátima", lat: -23.9516620, lng: -46.4050742, count: 41, level: "low" }
];

const MAP_UI = {
    pt: {
        occurrences: "ocorrências",
        period: "registros de roubo e furto, jan–jun/2025",
        rank: "posição",
        streetView: "Ver no Street View",
        appleMaps: "Ver no Apple Maps"
    },
    en: {
        occurrences: "reports",
        period: "robbery and theft reports, Jan–Jun 2025",
        rank: "rank",
        streetView: "View on Street View",
        appleMaps: "View on Apple Maps"
    }
};

const LAYER_LABELS = {
    street: "Mapa / Map",
    satellite: "Satélite / Satellite"
};

const LEVEL_COLOR = {
    high: "#b33939",
    medium: "#d4af37",
    low: "#9c7a1f"
};

const LEVEL_RADIUS = {
    high: 22,
    medium: 16,
    low: 11
};

let riskMapInstance = null;
let riskMarkers = [];

function getMapLang() {
    return (typeof getCurrentLang === "function") ? getCurrentLang() : "pt";
}

function buildStreetViewUrl(spot) {
    return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${spot.lat},${spot.lng}&heading=0&pitch=0&fov=80`;
}

function buildAppleMapsUrl(spot) {
    return `https://maps.apple.com/?ll=${spot.lat},${spot.lng}&q=${encodeURIComponent(spot.name)}&t=k`;
}

function buildPopupContent(spot, lang, rankIndex) {
    const ui = MAP_UI[lang];
    return `<span class="popup-title">${spot.name}</span>` +
        `#${rankIndex + 1} ${ui.rank} · <strong>${spot.count}</strong> ${ui.occurrences}<br>` +
        `<span style="font-size:0.8rem;color:#b0a99b;">${ui.period}</span>` +
        `<div class="popup-view-links">` +
        `<a href="${buildStreetViewUrl(spot)}" target="_blank" rel="noopener noreferrer">${ui.streetView}</a>` +
        `<a href="${buildAppleMapsUrl(spot)}" target="_blank" rel="noopener noreferrer">${ui.appleMaps}</a>` +
        `</div>`;
}

function renderHotspotSidebar(lang) {
    const list = document.getElementById('hotspot-list');
    if (!list) return;
    const ui = MAP_UI[lang];
    list.innerHTML = '';

    HOTSPOTS.forEach((spot, index) => {
        const item = document.createElement('div');
        item.className = 'hotspot-item';
        item.innerHTML = `<span><span class="hotspot-rank">${index + 1}.</span>${spot.name}</span>` +
            `<span class="hotspot-count">${spot.count} ${ui.occurrences}</span>`;
        list.appendChild(item);
    });
}

function refreshMapPopups(lang) {
    riskMarkers.forEach((marker, index) => {
        marker.setPopupContent(buildPopupContent(HOTSPOTS[index], lang, index));
    });
}

function initRiskMap() {
    const mapEl = document.getElementById('risk-map');
    if (!mapEl || typeof L === 'undefined') return;

    riskMapInstance = L.map('risk-map', {
        scrollWheelZoom: false
    }).setView([-23.9608, -46.3950], 13);

    const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(riskMapInstance);

    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
        attribution: 'Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics'
    });

    L.control.layers({
        [LAYER_LABELS.street]: streetLayer,
        [LAYER_LABELS.satellite]: satelliteLayer
    }, null, { position: 'topright', collapsed: false }).addTo(riskMapInstance);

    const lang = getMapLang();

    riskMarkers = HOTSPOTS.map((spot, index) => {
        const marker = L.circleMarker([spot.lat, spot.lng], {
            radius: LEVEL_RADIUS[spot.level],
            color: LEVEL_COLOR[spot.level],
            fillColor: LEVEL_COLOR[spot.level],
            fillOpacity: 0.55,
            weight: 2
        }).addTo(riskMapInstance);

        marker.bindPopup(buildPopupContent(spot, lang, index));
        return marker;
    });

    renderHotspotSidebar(lang);
}

document.addEventListener('languagechange', (e) => {
    if (riskMapInstance) {
        refreshMapPopups(e.detail.lang);
        renderHotspotSidebar(e.detail.lang);
    }
});

window.addEventListener('load', () => {
    if (document.getElementById('risk-map')) {
        initRiskMap();
    }
});
