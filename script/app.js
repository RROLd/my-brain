// ── RENK PALETİ ──────────────────────────────────────────────
const groupColors = {
    merkez:    '#4494ef',
    kategori:  '#3b82f6',
    beceri:    '#10b981',
    altgrup:   '#34d399',
    proje:     '#f59e0b',
    tutku:     '#8b5cf6'
};

const graphData = {
  "nodes": [
    {
      "id": "Merkez", "name": "Brain", "val": 45, "group": "merkez",
      "desc": "Ben Ravan Gahramanlı. 18 yaşındayım ve bilgisayar mühendisliği okuyorum. Web arayüzleri, Discord botları, oyunlar ve teknoloji tarafında kendimi geliştirmeyi seviyorum. Bu harita da benim projelerimi, ilgi alanlarımı ve öğrenme yolculuğumu keşfetmen için hazırlandı.",
      // Buraya kendi profil fotoğrafının URL'sini yaz:
      "img": "img/brain.png"
    },
    {
      "id": "Beceriler", "name": "Yetenekler & Beceriler", "val": 22, "group": "kategori",
      "desc": "HTML, CSS, JavaScript, C# ve temel siber güvenlik tarafında kendimi geliştiriyorum. Amacım sadece kod yazmak değil; göze güzel gelen, çalışan ve mantığı sağlam projeler üretmek.",
      "img": "img/ytnk.png"
    },
    // ── BECERİ ALT GRUPLARI ─────────────────────────────────────
    {
      "id": "BeceriBackend", "name": "Backend", "val": 16, "group": "altgrup",
      "desc": "Sunucu tarafı mantık, veri yönetimi ve sistem altyapısı tarafında kendimi geliştirdiğim alan. C# ve genel programlama temellerim burada toplanıyor.",
      "img": "img/csharp.png"
    },
    {
      "id": "BeceriFrontend", "name": "Frontend", "val": 16, "group": "altgrup",
      "desc": "Kullanıcının gördüğü ve etkileşime girdiği arayüz tarafı. HTML, CSS ve JavaScript ile göze hoş gelen, akıcı arayüzler kurduğum alan.",
      "img": "img/htmlcss.png"
    },
    {
      "id": "BeceriDiller", "name": "Güvenlik & Sistemler", "val": 16, "group": "altgrup",
      "desc": "Siber güvenlik, sistem analizi ve ağ tarafında kendimi geliştirdiğim alan. Kontrollü ve meraklı bir şekilde öğrenmeye odaklanıyorum.",
      "img": "img/kali.png"
    },
    {
      "id": "HizliKavrama", "name": "Hızlı Kavrama", "val": 14, "group": "beceri",
      "desc": "Yeni bir konuyu, aracı veya teknolojiyi kısa sürede kavrayıp pratiğe dökebiliyorum. Bilmediğim bir şeyle karşılaştığımda uzun süre takılmadan mantığını çözüp kullanmaya başlıyorum.",
      "img": "img/ytnk.png"
    },
    {
      "id": "Projeler", "name": "Projelerim", "val": 22, "group": "kategori",
      "desc": "Kendi çapımda geliştirdiğim web siteleri, bot sistemleri ve arayüz denemeleri burada toplanıyor. Her proje bana yeni bir şey öğretiyor; bazen tasarım, bazen backend mantığı, bazen de kullanıcı deneyimi.",
      "img": "img/project.png",
      "panelImg": "img/project.png"
    },
    {
      "id": "Tutkular", "name": "İlgi Alanları & Siber Dünyam", "val": 22, "group": "kategori",
      "desc": "Oyunlar, sistem optimizasyonu, donanım, siber güvenlik ve yeni teknolojiler ilgimi çekiyor. Hem eğlenmeyi hem de bu alanlardan teknik olarak bir şeyler öğrenmeyi seviyorum.",
      "img": "img/sbr.png"
    },
    {
      "id": "JS", "name": "JavaScript (Node.js)", "val": 13, "group": "beceri",
      "desc": "JavaScript ve Node.js ile özellikle Discord bot mantıkları, dinamik web özellikleri ve küçük otomasyonlar geliştiriyorum. Kodun arka tarafta nasıl çalıştığını görmek ve onu kullanıcıya düzgün yansıtmak hoşuma gidiyor.",
      "img": "img/js.jpg"
    },
    {
      "id": "Frontend", "name": "Frontend (HTML/CSS)", "val": 11, "group": "beceri",
      "desc": "Frontend tarafında HTML, CSS ve JavaScript ile göze güzel gelen, responsive ve canlı arayüzler yapmayı seviyorum. Bu alanda amacım sadece sayfa kurmak değil; siteye giren kişinin ilk anda tasarımı hissetmesi.",
      "img": "img/htmlcss.png",
      "panelImg": "img/htmlcss.png"
    },
    {
      "id": "CSharp", "name": "C# & Programlama", "val": 13, "group": "beceri",
      "desc": "C# ile programlama temellerimi, algoritma mantığımı ve nesne yönelimli düşünme becerimi geliştiriyorum. Bilgisayar mühendisliği okurken bu temel benim için önemli bir iskelet gibi.",
      "img": "img/csharp.png"
    },
    {
      "id": "Cyber", "name": "Siber Güvenlik & Pentest", "val": 11, "group": "beceri",
      "desc": "Siber güvenlik tarafında ağ tarama, temel pentest mantığı, Kali Linux araçları ve sistemlerin nasıl çalıştığını anlama konuları ilgimi çekiyor. Bu alanı merak ederek ve kontrollü şekilde öğreniyorum.",
      "img": "img/kali.png",
      "panelImg": "img/kali.png"
    },
    {
      "id": "ValthrionBot", "name": "Valthrion Bot", "val": 18, "group": "proje",
      "desc": "Valthrion, kendi çapımda Discord botları geliştirdiğim bir isim. Bunu büyük bir şirket gibi değil, kişisel bot projelerimi ve özel sistem denemelerimi topladığım bir marka gibi düşünebilirsin. Sunucu yönetimi, otomasyon, komut sistemleri ve özel Discord özellikleri üzerine çalışıyorum.",
      "img": "img/valthrion.png",
      "panelImg": "img/valthrion.png"
    },
    {
      "id": "PortfolioWeb", "name": "valthrion.online", "val": 17, "group": "proje",
      "desc": "valthrion.online, kendimi, projelerimi ve dijital kimliğimi göstermek için hazırladığım web alanı. Frontend tarafında geliştirdiğim tasarım zevkini ve Valthrion ismini aynı yerde toplamayı hedefliyorum.",
      "img": "img/valthrion.png",
      "panelImg": "img/valthrion.png"
    },
    // ── YENİ EKLENEN PROJE DÜĞÜMÜ ───────────────────────────────
    {
      "id": "CryptoTerminal", "name": "Crypto Terminal", "val": 16, "group": "proje",
      "desc": "Kripto para verilerini, grafik analizlerini ve piyasa takibini tek bir arayüzde toplamayı hedefleyen terminal fikrim. Bu tarz projeler hem veri okuma hem de arayüz tasarlama tarafında beni geliştiriyor.",
      "img": "img/crypto.png",
      "panelImg": "img/crypto.png"
    },
    {
      "id": "Gaming", "name": "Taktik Oyunlar & Optimizasyon", "val": 14, "group": "tutku",
      "desc": "CS2, Valorant ve FiveM gibi oyunlar oynuyorum. Rekabetçi oyunlarda refleks, takım oyunu ve sistem performansı önemli olduğu için oyun tarafı bende teknoloji merakıyla birleşiyor.",
      "img": "img/ste-(2).png"
    },
    {
      "id": "Hardware", "name": "FPS & Oyun Ayarları", "val": 14, "group": "tutku",
      "desc": "Oyunlarda akıcı deneyim, doğru grafik ayarları, input lag azaltma ve sistemden daha stabil performans alma tarafıyla ilgileniyorum. Donanım muhabbetinden çok pratik ayar ve oyun performansı tarafı bana daha yakın.",
      "img": "img/ste.png",
      "panelImg": "img/ste.png"
    },
    // ── OYUN DÜĞÜMLERİ ──────────────────────────────────────────
    {
      "id": "CS2", "name": "Counter-Strike 2", "val": 12, "group": "tutku",
      "desc": "Counter-Strike 2, rekabetçi refleks, takım koordinasyonu ve oyun içi karar verme tarafını sevdiğim oyunlardan biri. Aim, taktik ve performans ayarı birleşince benim için çok keyifli oluyor.",
      "img": "img/cs2.png"
    },
    {
      "id": "FiveM", "name": "FiveM (GTA 5 RP)", "val": 12, "group": "tutku",
      "desc": "FiveM tarafında rol yapma, sunucu düzeni, karakter deneyimi ve topluluk dinamikleri ilgimi çekiyor. Hem oyun hem de sistem mantığı olan bir alan gibi görüyorum.",
      "img": "img/fivem.png"
    }
  ],
  "links": [
    { "source": "Merkez", "target": "Beceriler" },
    { "source": "Merkez", "target": "Projeler" },
    { "source": "Merkez", "target": "Tutkular" },
    { "source": "Beceriler", "target": "BeceriBackend" },
    { "source": "Beceriler", "target": "BeceriFrontend" },
    { "source": "Beceriler", "target": "BeceriDiller" },
    { "source": "Beceriler", "target": "HizliKavrama" },
    { "source": "BeceriBackend", "target": "CSharp" },
    { "source": "BeceriFrontend", "target": "JS" },
    { "source": "BeceriFrontend", "target": "Frontend" },
    { "source": "BeceriDiller", "target": "Cyber" },
    { "source": "Projeler", "target": "ValthrionBot" },
    { "source": "Projeler", "target": "PortfolioWeb" },
    // ── YENİ EKLENEN PROJE BAĞLANTISI ───────────────────────────
    { "source": "Projeler", "target": "CryptoTerminal" },
    { "source": "Tutkular", "target": "Gaming" },
    { "source": "Tutkular", "target": "Hardware" },
    { "source": "JS", "target": "ValthrionBot", "label": "Bot Altyapısı" },
    { "source": "Frontend", "target": "PortfolioWeb", "label": "Arayüz Kodlama" },
    { "source": "Cyber", "target": "Hardware", "label": "Sistem Analizi" },
    { "source": "JS", "target": "PortfolioWeb", "label": "Dinamik Yapı" },
    { "source": "Gaming", "target": "CS2", "label": "Rekabetçi" },
    { "source": "Gaming", "target": "FiveM", "label": "Roleplay" }
  ]
};

const categoryAnchors = {
    merkez: { x: 0, y: -70 },
    Beceriler: { x: -210, y: 90 },
    Projeler: { x: 225, y: 90 },
    Tutkular: { x: 0, y: 245 }
};

// Düğümün ait olduğu ana kategori (kök düğümler hariç her node burada).
const parentOf = {
    BeceriBackend: 'Beceriler',
    BeceriFrontend: 'Beceriler',
    BeceriDiller: 'Beceriler',
    HizliKavrama: 'Beceriler',
    CSharp: 'BeceriBackend',
    JS: 'BeceriFrontend',
    Frontend: 'BeceriFrontend',
    Cyber: 'BeceriDiller',
    ValthrionBot: 'Projeler',
    PortfolioWeb: 'Projeler',
    CryptoTerminal: 'Projeler',
    Gaming: 'Tutkular',
    Hardware: 'Tutkular',
    CS2: 'Gaming',
    FiveM: 'Gaming'
};

// Her düğümün kendi ebeveynine göre konum sapması (kümede dağılım için).
const nodeOffsets = {
    BeceriBackend: { x: -96, y: -34 },
    BeceriFrontend: { x: 18, y: -100 },
    BeceriDiller: { x: 104, y: -28 },
    HizliKavrama: { x: 4, y: 108 },
    CSharp: { x: -34, y: 78 },
    JS: { x: -58, y: -76 },
    Frontend: { x: 58, y: -76 },
    Cyber: { x: 36, y: 78 },
    ValthrionBot: { x: -78, y: -72 },
    PortfolioWeb: { x: 84, y: -54 },
    CryptoTerminal: { x: 8, y: 94 },
    Gaming: { x: -88, y: -52 },
    Hardware: { x: 92, y: -46 },
    CS2: { x: -112, y: 74 },
    FiveM: { x: 36, y: 98 }
};

// Bir düğümün konumunu, ebeveyn zincirini takip ederek hesaplar.
// Böylece merkez -> kategori -> altgrup -> beceri gibi her derinlikte çalışır.
function getClusterTarget(node) {
    if (node.group === 'merkez') return categoryAnchors.merkez;
    if (node.group === 'kategori') return categoryAnchors[node.id] || { x: 0, y: 0 };

    const parentId = parentOf[node.id];
    const offset = nodeOffsets[node.id] || { x: 0, y: 0 };

    if (!parentId) return offset;

    // Ebeveyn bir ana kategori mi (anchor'da var) yoksa bir alt grup mu?
    const parentAnchor = categoryAnchors[parentId];
    if (parentAnchor) {
        return { x: parentAnchor.x + offset.x, y: parentAnchor.y + offset.y };
    }

    const grandParentId = parentOf[parentId];
    const grandAnchor = categoryAnchors[grandParentId] || { x: 0, y: 0 };
    const parentOffset = nodeOffsets[parentId] || { x: 0, y: 0 };

    return {
        x: grandAnchor.x + parentOffset.x + offset.x,
        y: grandAnchor.y + parentOffset.y + offset.y
    };
}

function categoryClusterForce(strength = 0.14) {
    let nodes = [];

    function force(alpha) {
        nodes.forEach(node => {
            const target = getClusterTarget(node);
            const nodeStrength = node.group === 'merkez' ? strength * 1.25 : strength;

            node.vx += (target.x - node.x) * nodeStrength * alpha;
            node.vy += (target.y - node.y) * nodeStrength * alpha;
        });
    }

    force.initialize = nextNodes => {
        nodes = nextNodes;
    };

    return force;
}

// ── RESIM CACHE ───────────────────────────────────────────────
const imageCache = {};

function loadImage(url) {
    if (imageCache[url]) return imageCache[url];
    const img = new Image();
    img.src = url;
    imageCache[url] = img;
    return img;
}

// Tüm resimleri önceden yükle
graphData.nodes.forEach(n => { if (n.img) loadImage(n.img); });

// ── DOM ───────────────────────────────────────────────────────
const panel       = document.getElementById('detail-panel');
const closeBtn    = document.getElementById('close-btn');
const openPanelBtn= document.getElementById('open-panel-btn');
const nodeGroup   = document.getElementById('node-group');
const nodeName    = document.getElementById('node-name');
const nodeDesc    = document.getElementById('node-desc');
const panelAvatar = document.getElementById('panel-avatar');
const panelAvatarWrap = document.getElementById('panel-avatar-wrap');
const panelShowcase = document.getElementById('panel-showcase');

let graph;
let currentSelectedNode = null;
let pulseAngle = 0; // merkez animasyonu için
let sceneTime = 0;
let floatStarted = false;
const pointer = { x: 0, y: 0 };
const cursorState = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    lastX: window.innerWidth / 2,
    lastY: window.innerHeight / 2,
    trailTick: 0
};

initNeuralBackground();
initGraph(graphData);
initCosmicCursor();

window.addEventListener('pointermove', event => {
    pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
    pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
});

function initCosmicCursor() {
    const cursor = document.getElementById('cosmic-cursor');
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) {
        document.body.style.cursor = 'auto';
        return;
    }

    const interactiveSelector = 'button, a, canvas';

    window.addEventListener('pointermove', event => {
        const dx = event.clientX - cursorState.lastX;
        const dy = event.clientY - cursorState.lastY;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;

        cursorState.x += (event.clientX - cursorState.x) * 0.34;
        cursorState.y += (event.clientY - cursorState.y) * 0.34;
        cursorState.lastX = event.clientX;
        cursorState.lastY = event.clientY;

        cursor.classList.add('is-visible');
        cursor.classList.toggle('is-active', !!event.target.closest(interactiveSelector));
        cursor.style.transform = `translate3d(${cursorState.x - 17}px, ${cursorState.y - 17}px, 0) rotate(${angle}deg)`;

        cursorState.trailTick += 1;
        if (cursorState.trailTick % 2 === 0) {
            spawnCursorTrail(event.clientX, event.clientY);
        }
    });

    window.addEventListener('pointerdown', () => cursor.classList.add('is-active'));
    window.addEventListener('pointerup', () => cursor.classList.remove('is-active'));
    document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
}

function spawnCursorTrail(x, y) {
    const dot = document.createElement('span');
    const size = 4 + Math.random() * 6;
    dot.className = 'cursor-trail';
    dot.style.left = `${x + (Math.random() - 0.5) * 12}px`;
    dot.style.top = `${y + (Math.random() - 0.5) * 12}px`;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.background = Math.random() > 0.55 ? '#fbbf24' : '#22d3ee';
    document.body.appendChild(dot);
    window.setTimeout(() => dot.remove(), 720);
}

// ── 3D ARKA PLAN ─────────────────────────────────────────────
function initNeuralBackground() {
    const canvas = document.getElementById('neural-bg');
    if (!canvas || !window.THREE) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 72;

    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const particleCount = window.innerWidth < 50 ? 50 : 50;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const palette = [
        new THREE.Color('#22d3ee'),
        new THREE.Color('#34d399'),
        new THREE.Color('#fb7185'),
        new THREE.Color('#fbbf24'),
        new THREE.Color('#93c5fd')
    ];

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = 24 + Math.random() * 58;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const color = palette[i % palette.length];

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);

        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particles = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({
            size: 0.42,
            vertexColors: true,
            transparent: true,
            opacity: 0.86,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        })
    );
    scene.add(particles);

    const ringGroup = new THREE.Group();
    const ringMaterial = new THREE.LineBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.24,
        blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < 5; i++) {
        const curve = new THREE.EllipseCurve(0, 0, 18 + i * 7, 7 + i * 3, 0, Math.PI * 2);
        const points = curve.getPoints(160).map(point => new THREE.Vector3(point.x, point.y, (i - 2) * 4));
        const ring = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), ringMaterial.clone());
        ring.rotation.x = 0.62 + i * 0.26;
        ring.rotation.y = i * 0.42;
        ring.material.opacity = 0.12 + i * 0.028;
        ringGroup.add(ring);
    }
    scene.add(ringGroup);
    ringGroup.visible = false;

    const resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', resize);

    const animate = () => {
        requestAnimationFrame(animate);
        const time = performance.now() * 0.00035;

        particles.rotation.y = time + pointer.x * 0.08;
        particles.rotation.x = Math.sin(time * 0.72) * 0.18 + pointer.y * 0.06;
        ringGroup.rotation.y = -time * 1.4 + pointer.x * 0.12;
        ringGroup.rotation.x = Math.sin(time) * 0.22 + pointer.y * 0.08;
        camera.position.x += (pointer.x * 3.8 - camera.position.x) * 0.035;
        camera.position.y += (-pointer.y * 2.8 - camera.position.y) * 0.035;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };

    animate();
}

// ── GRAFİK BAŞLATMA ───────────────────────────────────────────
function initGraph(data) {
    const container = document.getElementById('graph-container');

    graph = ForceGraph()(container)
        .graphData(data)
        .backgroundColor('rgba(0,0,0,0)')
        .nodeId('id')
        .nodeVal(d => d.val)
        // Görsel daire yarıçapı Math.sqrt(val) * 2.85 ile çiziliyor (aşağıdaki
        // nodeCanvasObject içinde), ama kütüphanenin varsayılan tıklama/sürükleme
        // alanı Math.sqrt(val) * 4 kullanıyor. Bu fark, küçük node'larda
        // tıklanabilir alanların komşu node'ların üzerine taşmasına ve bazı
        // tıklamaların yanlış node'a (veya hiçbirine) gitmesine yol açıyordu.
        // Burada ikisini eşitliyoruz.
        .nodeRelSize(2.85)

        .linkColor(link => {
            const source = typeof link.source === 'object' ? link.source : data.nodes.find(n => n.id === link.source);
            const target = typeof link.target === 'object' ? link.target : data.nodes.find(n => n.id === link.target);
            const sourceColor = source ? groupColors[source.group] : '#38bdf8';
            const targetColor = target ? groupColors[target.group] : '#38bdf8';
            return link.label ? `${targetColor}cc` : `${sourceColor}99`;
        })
        .linkWidth(link => link.label ? 2.8 : 2)
        .linkDirectionalParticles(link => link.label ? 2 : 1)
        .linkDirectionalParticleSpeed(0.009)
        .linkDirectionalParticleWidth(link => link.label ? 3.4 : 2.6)

        .nodeCanvasObject((node, ctx, globalScale) => {
            sceneTime += 0.002;
            const isCenter = node.group === 'merkez';
            const radius = Math.sqrt(node.val) * 2.85; // okunaklılık için büyük düğümler
            const color  = groupColors[node.group] || '#ffffff';
            const nodePhase = [...node.id].reduce((sum, char) => sum + char.charCodeAt(0), 0) * 0.03;
            const breath = 1;
            const drawRadius = radius * breath;
            const floatX = Math.sin(sceneTime * 0.72 + nodePhase) * (isCenter ? 0.8 : 2.2);
            const floatY = Math.cos(sceneTime * 0.58 + nodePhase) * (isCenter ? 0.7 : 1.9);
            const drawX = node.x + floatX;
            const drawY = node.y + floatY;

            // Güvenlik Kontrolü: Koordinatlar sayısal olarak geçerli mi?
            const hasValidCoords = typeof node.x === 'number' && typeof node.y === 'number' && !isNaN(node.x) && !isNaN(node.y);

            // ── MERKEZ: animasyonlu parlama halkası ──
            if (isCenter && hasValidCoords) {
                pulseAngle += 0.006;

                let pulseRadius = drawRadius * 1.88;
                // pulseRadius'un geçersiz olma durumunu filtrele
                if (isNaN(pulseRadius) || !isFinite(pulseRadius)) {
                    pulseRadius = drawRadius * 1.8;
                }

                const maxGradRadius = pulseRadius * 1.5;

                // Sadece yarıçaplar mantıklı ve pozitifse gradyan oluştur
                if (maxGradRadius > 0 && drawRadius > 0) {
                    try {
                        // Dış parıltı degradesi
                        const grad = ctx.createRadialGradient(drawX, drawY, drawRadius, drawX, drawY, maxGradRadius);
                        grad.addColorStop(0, 'rgba(34, 211, 238, 0.45)');
                        grad.addColorStop(0.48, 'rgba(251, 113, 133, 0.16)');
                        grad.addColorStop(1, 'rgba(251,113,133,0)');
                        ctx.beginPath();
                        ctx.arc(drawX, drawY, maxGradRadius, 0, 2 * Math.PI);
                        ctx.fillStyle = grad;
                        ctx.fill();
                    } catch (e) {
                        console.warn("Gradient oluşturulamadı, es geçiliyor:", e);
                    }
                }

                // Parlayan halka
                ctx.beginPath();
                ctx.arc(drawX, drawY, pulseRadius, 0, 2 * Math.PI);
                ctx.strokeStyle = 'rgba(251,113,133,0.42)';
                ctx.lineWidth = 2 / globalScale;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(drawX, drawY, pulseRadius * 1.35, 0, 2 * Math.PI);
                ctx.strokeStyle = 'rgba(34,211,238,0.25)';
                ctx.lineWidth = 1.2 / globalScale;
                ctx.stroke();
            }

            // Eğer koordinatlar henüz yüklenmediyse çizimin kalanını bu frame için pas geç
            if (!hasValidCoords) return;

            // ── SEÇİLİ DÜĞÜM: beyaz halo ──
            if (currentSelectedNode && node.id === currentSelectedNode.id) {
                ctx.beginPath();
                ctx.arc(drawX, drawY, drawRadius * 1.45, 0, 2 * Math.PI);
                ctx.strokeStyle = 'rgba(255,255,255,0.72)';
                ctx.lineWidth = 2.4 / globalScale;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(drawX, drawY, drawRadius * 1.85, 0, 2 * Math.PI);
                ctx.strokeStyle = `${color}55`;
                ctx.lineWidth = 1.2 / globalScale;
                ctx.stroke();
            }

            drawNodeAura(ctx, drawX, drawY, drawRadius, color, globalScale, nodePhase, isCenter);

            // ── DÜĞÜM DAİRESİ ──
            ctx.save();
            ctx.beginPath();
            ctx.arc(drawX, drawY, drawRadius, 0, 2 * Math.PI);
            const nodeGrad = ctx.createRadialGradient(
                drawX - drawRadius * 0.3,
                drawY - drawRadius * 0.35,
                drawRadius * 0.1,
                drawX,
                drawY,
                drawRadius
            );
            nodeGrad.addColorStop(0, '#ffffff');
            nodeGrad.addColorStop(0.18, color);
            nodeGrad.addColorStop(1, '#020617');
            ctx.fillStyle = nodeGrad;
            ctx.fill();

            // ── RESİM (clip ile daireye sığdır) ──
            if (node.img) {
                const img = imageCache[node.img];
                if (img && img.complete && img.naturalWidth > 0) {
                    ctx.clip();
                    const imageSpin = Math.sin(sceneTime * 0.28 + nodePhase) * 0.01;
                    ctx.translate(drawX, drawY);
                    ctx.rotate(imageSpin);
                    ctx.drawImage(img, -drawRadius, -drawRadius, drawRadius * 2, drawRadius * 2);
                    ctx.rotate(-imageSpin);
                    ctx.translate(-drawX, -drawY);
                    drawHologramScan(ctx, drawX, drawY, drawRadius, color, nodePhase);
                }
            }
            ctx.restore();

            // ── DÜĞÜM ETKİNİ (renkli çerçeve) ──
            ctx.beginPath();
            ctx.arc(drawX, drawY, drawRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = isCenter ? 'rgba(34, 211, 238, 0.95)' : `${color}aa`;
            ctx.lineWidth = isCenter ? 3.2 / globalScale : 1.7 / globalScale;
            ctx.stroke();

            const shineAngle = sceneTime * 2.2 + nodePhase;
            ctx.beginPath();
            ctx.arc(drawX, drawY, drawRadius * 1.08, shineAngle, shineAngle + Math.PI * 0.55);
            ctx.strokeStyle = 'rgba(255,255,255,0.82)';
            ctx.lineWidth = 1.8 / globalScale;
            ctx.stroke();

            // ── YAZI ──
            const fontSize = Math.max((isCenter ? 18 : 15.5) / globalScale, isCenter ? 8.5 : 7);
            ctx.font = `800 ${fontSize}px 'Plus Jakarta Sans', sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#f8fafc';

            const label = node.name;
            const labelY = drawY + drawRadius + fontSize * 1.08;
            const labelWidth = ctx.measureText(label).width;
            const labelPaddingX = 10 / globalScale;
            const labelPaddingY = 6 / globalScale;
            const labelHeight = fontSize + labelPaddingY * 2;
            const labelRadius = 7 / globalScale;

            ctx.save();
            ctx.shadowColor = 'rgba(0,0,0,0.65)';
            ctx.shadowBlur = 12 / globalScale;
            ctx.fillStyle = 'rgba(2, 6, 23, 0.82)';
            roundedRect(
                ctx,
                drawX - labelWidth / 2 - labelPaddingX,
                labelY - labelHeight / 2,
                labelWidth + labelPaddingX * 2,
                labelHeight,
                labelRadius
            );
            ctx.fill();
            ctx.strokeStyle = `${color}66`;
            ctx.lineWidth = 1 / globalScale;
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.globalAlpha = 0.18;
            ctx.fillStyle = color;
            roundedRect(
                ctx,
                drawX - labelWidth / 2 - labelPaddingX,
                labelY - labelHeight / 2,
                labelWidth + labelPaddingX * 2,
                labelHeight,
                labelRadius
            );
            ctx.fill();
            ctx.restore();

            // Yazı gölgesi
            ctx.shadowColor = color;
            ctx.shadowBlur = isCenter ? 18 : 11;
            ctx.fillStyle = '#f8fafc';
            ctx.fillText(label, drawX, labelY);
            ctx.shadowBlur = 0;
        })

        .nodeCanvasObjectMode(() => 'replace')

        .onNodeClick(node => {
            currentSelectedNode = node;
            updatePanelContent(node);
            graph.centerAt(node.x, node.y, 700);
            graph.zoom(Math.max(graph.zoom(), 2.45), 700);
        });

    graph.d3Force('charge').strength(node => {
        if (node.group === 'kategori') return -520;
        if (node.group === 'altgrup') return -340;
        return -245;
    });
    graph.d3Force('link').distance(link => link.label ? 96 : 82);
    graph.d3Force('cluster', categoryClusterForce(window.innerWidth < 768 ? 0.19 : 0.13));

    setTimeout(() => {
        graph.centerAt(window.innerWidth < 768 ? 0 : -130, 55, 1200);
        graph.zoom(window.innerWidth < 768 ? 1.05 : 1.18, 1200);
        const centerNode = data.nodes.find(n => n.id === 'Merkez');
        if (centerNode) {
            currentSelectedNode = centerNode;
            preparePanelContent(centerNode);
        }
        startLazyNodeMotion(data);
    }, 400);
}

function startLazyNodeMotion(data) {
    if (floatStarted || !graph) return;
    floatStarted = true;

    data.nodes.forEach(node => {
        const target = getClusterTarget(node);
        node.x = Number.isFinite(node.x) ? node.x : target.x;
        node.y = Number.isFinite(node.y) ? node.y : target.y;
        node.vx = 0;
        node.vy = 0;
    });

    graph.d3ReheatSimulation();
}

function roundedRect(ctx, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function drawNodeAura(ctx, x, y, radius, color, globalScale, phase, isCenter) {
    const pulse = (Math.sin(sceneTime * 2.1 + phase) + 1) / 2;
    const auraRadius = radius * (isCenter ? 1.42 : 1.24) + pulse * radius * 0.18;
    const sparkCount = isCenter ? 8 : 5;

    ctx.save();
    ctx.globalCompositeOperation = 'screen';

    const glow = ctx.createRadialGradient(x, y, radius * 0.82, x, y, auraRadius * 1.48);
    glow.addColorStop(0, `${color}00`);
    glow.addColorStop(0.46, `${color}16`);
    glow.addColorStop(1, `${color}00`);
    ctx.beginPath();
    ctx.arc(x, y, auraRadius * 1.48, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    for (let i = 0; i < sparkCount; i++) {
        const angle = phase + i * ((Math.PI * 2) / sparkCount);
        const twinkle = (Math.sin(sceneTime * 3.4 + phase + i * 1.7) + 1) / 2;
        const sparkRadius = auraRadius + Math.sin(sceneTime * 1.3 + i) * radius * 0.06;
        const dotX = x + Math.cos(angle) * sparkRadius;
        const dotY = y + Math.sin(angle) * sparkRadius;
        const dotSize = Math.max((1.2 + twinkle * 2.1) / globalScale, 0.9);

        ctx.beginPath();
        ctx.arc(dotX, dotY, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = twinkle > 0.72 ? '#ffffff' : color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 9 + twinkle * 10;
        ctx.fill();
    }

    ctx.restore();
}

function drawHologramScan(ctx, x, y, radius, color, phase) {
    const scan = ((Math.sin(sceneTime * 3.2 + phase) + 1) / 2) * radius * 2 - radius;

    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    const grad = ctx.createLinearGradient(x - radius, y + scan - 10, x + radius, y + scan + 10);
    grad.addColorStop(0, 'rgba(255,255,255,0)');
    grad.addColorStop(0.48, `${color}22`);
    grad.addColorStop(0.5, 'rgba(255,255,255,0.42)');
    grad.addColorStop(0.52, `${color}22`);
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(x - radius, y + scan - 10, radius * 2, 20);

    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    for (let lineY = y - radius; lineY < y + radius; lineY += 6) {
        ctx.fillRect(x - radius, lineY, radius * 2, 1);
    }
    ctx.restore();
}

// ── PANEL GÜNCELLEME ──────────────────────────────────────────
function updatePanelContent(node) {
    const color = groupColors[node.group];

    nodeGroup.textContent = node.group;
    nodeGroup.style.backgroundColor = `${color}22`;
    nodeGroup.style.color = color;
    nodeGroup.style.border = `1px solid ${color}55`;

    nodeName.textContent = node.name;
    nodeDesc.textContent  = node.desc;

    if (node.panelImg) {
        panelShowcase.src = node.panelImg;
        panelShowcase.alt = `${node.name} görseli`;
        panelShowcase.style.display = 'block';
    } else {
        panelShowcase.removeAttribute('src');
        panelShowcase.alt = '';
        panelShowcase.style.display = 'none';
    }

    // Avatar
    if (node.img) {
        panelAvatar.src = node.img;
        panelAvatar.style.display = 'block';
        panelAvatarWrap.style.borderColor = color;
        panelAvatarWrap.style.boxShadow = `0 0 20px ${color}55`;
    } else {
        panelAvatar.src = '';
        panelAvatar.style.display = 'none';
    }

    // Merkez için özel class
    if (node.group === 'merkez') {
        panelAvatarWrap.classList.add('is-center');
    } else {
        panelAvatarWrap.classList.remove('is-center');
    }

    panel.classList.add('open');
}

function preparePanelContent(node) {
    updatePanelContent(node);
    panel.classList.remove('open');
}


// ── 3D EXPLORER MODU ─────────────────────────────────────────
(function () {
    const explorerBtn    = document.getElementById('explorer-btn');
    const explorerOverlay= document.getElementById('explorer-overlay');
    const explorerClose  = document.getElementById('explorer-close');
    const explorerCanvas = document.getElementById('explorer-canvas');
    const explorerInfo   = document.getElementById('explorer-info');
    const explorerNodeName = document.getElementById('explorer-node-name');
    const explorerNodeDesc = document.getElementById('explorer-node-desc');

    let explorerActive = false;
    let animId = null;
    let pointerLocked = false;

    // Kamera durumu
    const cam = {
        x: 0, y: 0, z: 300,
        yaw: 0, pitch: 0,
        speed: 80
    };
    const keys = {};

    // Düğüm 3D konumları (haritadan al, z rastgele dağıt)
    let nodes3D = [];
    let links3D = [];

    function buildScene() {
        nodes3D = graphData.nodes.map(n => {
            const target = getClusterTarget(n);
            return {
                ...n,
                x3: (target.x || 0) * 2.2,
                y3: -(target.y || 0) * 2.2,
                z3: (Math.random() - 0.5) * 320,
                radius: Math.sqrt(n.val) * 14
            };
        });

        links3D = graphData.links.map(l => ({
            source: typeof l.source === 'object' ? l.source.id : l.source,
            target: typeof l.target === 'object' ? l.target.id : l.target,
            label: l.label
        }));
    }

    // ── Canvas renderer ──────────────────────────────────────
    let W, H;
    const ctx3 = explorerCanvas.getContext('2d');
    let fov = 600;

    function resize() {
        W = explorerCanvas.width  = window.innerWidth;
        H = explorerCanvas.height = window.innerHeight;
        fov = Math.min(W, H) * 0.95;
    }

    function project(x, y, z) {
        // Kamera dönüşümü: yaw (y ekseni), pitch (x ekseni)
        const cosY = Math.cos(cam.yaw), sinY = Math.sin(cam.yaw);
        const cosP = Math.cos(cam.pitch), sinP = Math.sin(cam.pitch);

        const dx = x - cam.x, dy = y - cam.y, dz = z - cam.z;

        // Yaw (sol-sağ)
        const rx = dx * cosY - dz * sinY;
        const ry = dy;
        const rz = dx * sinY + dz * cosY;

        // Pitch (yukarı-aşağı)
        const ry2 = ry * cosP - rz * sinP;
        const rz2 = ry * sinP + rz * cosP;

        if (rz2 >= -1) return null; // arkamızda
        const scale = fov / -rz2;
        return {
            sx: W / 2 + rx * scale,
            sy: H / 2 + ry2 * scale,
            scale,
            depth: -rz2
        };
    }

    function renderExplorer(dt) {
        ctx3.clearRect(0, 0, W, H);

        // Arka plan
        ctx3.fillStyle = '#030712';
        ctx3.fillRect(0, 0, W, H);

        // Yıldızlar (statik, arka plan)
        ctx3.save();
        ctx3.fillStyle = 'rgba(148,163,184,0.28)';
        for (let i = 0; i < 200; i++) {
            // deterministik "yıldız" konumlar
            const sx = ((i * 2973.41) % W);
            const sy = ((i * 1847.13) % H);
            const sr = ((i * 0.37) % 1.4) + 0.3;
            ctx3.beginPath();
            ctx3.arc(sx, sy, sr, 0, Math.PI * 2);
            ctx3.fill();
        }
        ctx3.restore();

        // Bağları çiz (arkadan öne sırala)
        for (const link of links3D) {
            const sNode = nodes3D.find(n => n.id === link.source);
            const tNode = nodes3D.find(n => n.id === link.target);
            if (!sNode || !tNode) continue;

            const ps = project(sNode.x3, sNode.y3, sNode.z3);
            const pt = project(tNode.x3, tNode.y3, tNode.z3);
            if (!ps || !pt) continue;

            const sColor = groupColors[sNode.group] || '#38bdf8';
            const avgDepth = (ps.depth + pt.depth) / 2;
            const alpha = Math.min(0.55, 120 / avgDepth);

            ctx3.save();
            ctx3.beginPath();
            ctx3.moveTo(ps.sx, ps.sy);
            ctx3.lineTo(pt.sx, pt.sy);
            ctx3.strokeStyle = link.label
                ? `${sColor}${Math.round(alpha * 255).toString(16).padStart(2,'0')}`
                : `rgba(148,163,184,${alpha * 0.55})`;
            ctx3.lineWidth = link.label ? Math.max(1, 2.5 * Math.min(ps.scale, pt.scale) * 0.18) : Math.max(0.5, 1.2);
            ctx3.stroke();
            ctx3.restore();
        }

        // Düğümleri derinliğe göre sırala (uzak önce)
        const sorted = nodes3D
            .map(n => ({ n, proj: project(n.x3, n.y3, n.z3) }))
            .filter(o => o.proj !== null)
            .sort((a, b) => b.proj.depth - a.proj.depth);

        const now = performance.now() * 0.001;

        for (const { n, proj } of sorted) {
            const { sx, sy, scale, depth } = proj;
            const color = groupColors[n.group] || '#ffffff';
            const r = Math.max(8, n.radius * scale * 0.14);
            const alpha = Math.min(1, 280 / depth);

            ctx3.save();
            ctx3.globalAlpha = alpha;

            // Glow
            const glow = ctx3.createRadialGradient(sx, sy, r * 0.2, sx, sy, r * 2.2);
            glow.addColorStop(0, `${color}44`);
            glow.addColorStop(1, `${color}00`);
            ctx3.beginPath();
            ctx3.arc(sx, sy, r * 2.2, 0, Math.PI * 2);
            ctx3.fillStyle = glow;
            ctx3.fill();

            // Daire gövdesi
            const nodeGrad = ctx3.createRadialGradient(sx - r * 0.3, sy - r * 0.35, r * 0.1, sx, sy, r);
            nodeGrad.addColorStop(0, '#ffffff');
            nodeGrad.addColorStop(0.22, color);
            nodeGrad.addColorStop(1, '#020617');
            ctx3.beginPath();
            ctx3.arc(sx, sy, r, 0, Math.PI * 2);
            ctx3.fillStyle = nodeGrad;
            ctx3.fill();

            // İmaj (billboard — daireye sığdır)
            if (n.img) {
                const img = imageCache[n.img];
                if (img && img.complete && img.naturalWidth > 0) {
                    ctx3.save();
                    ctx3.beginPath();
                    ctx3.arc(sx, sy, r, 0, Math.PI * 2);
                    ctx3.clip();
                    ctx3.drawImage(img, sx - r, sy - r, r * 2, r * 2);
                    ctx3.restore();
                }
            }

            // Çerçeve + parlama şeridi
            ctx3.beginPath();
            ctx3.arc(sx, sy, r, 0, Math.PI * 2);
            ctx3.strokeStyle = n.group === 'merkez' ? 'rgba(34,211,238,0.95)' : `${color}cc`;
            ctx3.lineWidth = n.group === 'merkez' ? 3 : 1.5;
            ctx3.stroke();

            const shineAngle = now * 2.2 + [...n.id].reduce((s, c) => s + c.charCodeAt(0), 0) * 0.03;
            ctx3.beginPath();
            ctx3.arc(sx, sy, r * 1.08, shineAngle, shineAngle + Math.PI * 0.55);
            ctx3.strokeStyle = 'rgba(255,255,255,0.72)';
            ctx3.lineWidth = 1.4;
            ctx3.stroke();

            // Etiket — billboard (her zaman ekrana dönük, yani sadece 2D yaz)
            const fontSize = Math.max(11, Math.min(20, r * 0.9));
            ctx3.font = `800 ${fontSize}px 'Plus Jakarta Sans', sans-serif`;
            ctx3.textAlign = 'center';
            ctx3.textBaseline = 'middle';
            const labelY = sy + r + fontSize * 1.15;
            const lw = ctx3.measureText(n.name).width;
            const lp = 8, lph = 5;

            ctx3.fillStyle = 'rgba(2,6,23,0.86)';
            ctx3.beginPath();
            ctx3.roundRect(sx - lw / 2 - lp, labelY - fontSize / 2 - lph, lw + lp * 2, fontSize + lph * 2, 5);
            ctx3.fill();
            ctx3.strokeStyle = `${color}55`;
            ctx3.lineWidth = 1;
            ctx3.stroke();

            ctx3.fillStyle = '#f8fafc';
            ctx3.shadowColor = color;
            ctx3.shadowBlur = 8;
            ctx3.fillText(n.name, sx, labelY);
            ctx3.shadowBlur = 0;

            ctx3.restore();
        }
    }

    // ── WASD hareketi ────────────────────────────────────────
    function moveCamera(dt) {
        const speed = cam.speed * dt;
        const cosY = Math.cos(cam.yaw), sinY = Math.sin(cam.yaw);

        if (keys['w'] || keys['arrowup']) {
            cam.x -= sinY * speed;
            cam.z -= cosY * speed;
        }
        if (keys['s'] || keys['arrowdown']) {
            cam.x += sinY * speed;
            cam.z += cosY * speed;
        }
        if (keys['a'] || keys['arrowleft']) {
            cam.x -= cosY * speed;
            cam.z += sinY * speed;
        }
        if (keys['d'] || keys['arrowright']) {
            cam.x += cosY * speed;
            cam.z -= sinY * speed;
        }
        if (keys['q'] || keys['shift']) cam.y += speed;
        if (keys['e'] || keys[' '])    cam.y -= speed;
    }

    let lastTime = 0;
    function loop(time) {
        if (!explorerActive) return;
        const dt = Math.min((time - lastTime) / 1000, 0.05);
        lastTime = time;
        moveCamera(dt);
        renderExplorer(dt);
        animId = requestAnimationFrame(loop);
    }

    // ── Pointer Lock fare bakış açısı ────────────────────────
    function onMouseMove(e) {
        if (!pointerLocked) return;
        const sens = 0.0018;
        cam.yaw   += e.movementX * sens;
        cam.pitch  = Math.max(-Math.PI / 2 + 0.05, Math.min(Math.PI / 2 - 0.05, cam.pitch + e.movementY * sens));
    }

    function onPointerLockChange() {
        pointerLocked = document.pointerLockElement === explorerCanvas;
    }

    explorerCanvas.addEventListener('click', () => {
        explorerCanvas.requestPointerLock();
    });

    document.addEventListener('pointerlockchange', onPointerLockChange);
    document.addEventListener('mousemove', onMouseMove);

    // Düğüme tıklama (pointer lock olmadan tıklama)
    explorerCanvas.addEventListener('click', (e) => {
        if (pointerLocked) return;
        const rect = explorerCanvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        let closest = null, closestDist = 40;
        for (const n of nodes3D) {
            const proj = project(n.x3, n.y3, n.z3);
            if (!proj) continue;
            const r = Math.max(8, n.radius * proj.scale * 0.14);
            const dist = Math.hypot(proj.sx - mx, proj.sy - my);
            if (dist < r + 12 && dist < closestDist) {
                closestDist = dist;
                closest = n;
            }
        }

        if (closest) {
            explorerNodeName.textContent = closest.name;
            explorerNodeDesc.textContent  = closest.desc;
            explorerInfo.classList.remove('hidden');
            setTimeout(() => explorerInfo.classList.add('hidden'), 6000);
        }
    });

    // Ortada crosshair tıklaması (pointer lock modunda bakılan düğüm)
    document.addEventListener('mousedown', (e) => {
        if (!pointerLocked || !explorerActive) return;
        const center = { sx: W / 2, sy: H / 2 };
        let closest = null, closestDist = 60;
        for (const n of nodes3D) {
            const proj = project(n.x3, n.y3, n.z3);
            if (!proj) continue;
            const r = Math.max(8, n.radius * proj.scale * 0.14);
            const dist = Math.hypot(proj.sx - center.sx, proj.sy - center.sy);
            if (dist < r + 20 && dist < closestDist) {
                closestDist = dist;
                closest = n;
            }
        }
        if (closest) {
            explorerNodeName.textContent = closest.name;
            explorerNodeDesc.textContent  = closest.desc;
            explorerInfo.classList.remove('hidden');
            setTimeout(() => explorerInfo.classList.add('hidden'), 6000);
        }
    });

    // Klavye
    window.addEventListener('keydown', e => {
        if (!explorerActive) return;
        keys[e.key.toLowerCase()] = true;
        if (e.key === 'Escape') closeExplorer();
    });
    window.addEventListener('keyup', e => { keys[e.key.toLowerCase()] = false; });

    // ── Aç / kapat ───────────────────────────────────────────
    function openExplorer() {
        buildScene();
        // Kamerayı merkez düğümünün önüne yerleştir
        const center = nodes3D.find(n => n.id === 'Merkez');
        if (center) {
            cam.x = center.x3; cam.y = center.y3; cam.z = center.z3 + 220;
        } else {
            cam.x = 0; cam.y = 0; cam.z = 300;
        }
        cam.yaw = 0; cam.pitch = 0;

        explorerOverlay.classList.remove('hidden');
        explorerActive = true;
        resize();
        lastTime = performance.now();
        animId = requestAnimationFrame(loop);
    }

    function closeExplorer() {
        explorerActive = false;
        explorerOverlay.classList.add('hidden');
        if (animId) cancelAnimationFrame(animId);
        if (document.pointerLockElement) document.exitPointerLock();
        Object.keys(keys).forEach(k => delete keys[k]);
        explorerInfo.classList.add('hidden');
    }

    explorerBtn.addEventListener('click', openExplorer);
    explorerClose.addEventListener('click', closeExplorer);
    window.addEventListener('resize', () => { if (explorerActive) resize(); });
})();