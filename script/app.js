// ── RENK PALETİ ──────────────────────────────────────────────
const groupColors = {
    merkez:   '#4494ef',
    kategori: '#3b82f6',
    beceri:   '#10b981',
    proje:    '#f59e0b',
    tutku:    '#8b5cf6'
};

const ua = navigator.userAgent || '';
const isAndroid = /Android/i.test(ua);
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const performanceProfile = {
    isAndroid,
    neuralPixelRatio: isAndroid ? 0.82 : Math.min(window.devicePixelRatio || 1, 2),
    graphPixelRatio: isAndroid ? 0.9 : Math.min(window.devicePixelRatio || 1, 2),
    neuralParticles: isAndroid ? 210 : (window.innerWidth < 768 ? 420 : 780),
    ringSegments: isAndroid ? 72 : 160,
    neuralFrameMs: isAndroid ? 50 : 16,
    linkParticles: isAndroid ? 1 : 3,
    linkLabelParticles: isAndroid ? 2 : 5,
    imageSpin: !isAndroid && !prefersReducedMotion,
    hologramScan: !isAndroid && !prefersReducedMotion,
    nodeOrbitDots: isAndroid ? 1 : 2
};

if (isAndroid) {
    document.documentElement.classList.add('android-optimized');
}

const graphData = {
  "nodes": [
    {
      "id": "Merkez", "name": "Brain", "val": 45, "group": "merkez",
      "desc": "Zihnime, projelerime ve geliştirme dünyama hoş geldiniz! Etraftaki düğümlere tıklayarak ekosistemimi keşfedebilirsiniz.",
      // Buraya kendi profil fotoğrafının URL'sini yaz:
      "img": "img/brain.png"
    },
    {
      "id": "Beceriler", "name": "Yetenekler & Beceriler", "val": 22, "group": "kategori",
      "desc": "Geliştirdiğim teknik kaslar ve uzmanlık alanlarım.",
      "img": "img/ytnk.png"
    },
    {
      "id": "Projeler", "name": "Projelerim", "val": 22, "group": "kategori",
      "desc": "Fikir aşamasından canlıya aldığım tüm dijital varlıklar.",
      "img": "img/Untitled.png"
    },
    {
      "id": "Tutkular", "name": "İlgi Alanları & Siber Dünyam", "val": 22, "group": "kategori",
      "desc": "Beni heyecanlandıran, vizyonumu besleyen ve merak duyduğum konular.",
      "img": "img/sbr.png"
    },
    {
      "id": "JS", "name": "JavaScript (Node.js)", "val": 16, "group": "beceri",
      "desc": "Backend entegrasyonları, Discord bot mantıkları ve dinamik web uygulamaları geliştirme yetkinliği.",
      "img": "img/js.jpg"
    },
    {
      "id": "Frontend", "name": "Frontend (HTML/CSS)", "val": 14, "group": "beceri",
      "desc": "Modern, responsive ve kullanıcı dostu arayüz tasarımları.",
      "img": "img/ft.png"
    },
    {
      "id": "CSharp", "name": "C# & Programlama", "val": 14, "group": "beceri",
      "desc": "Algoritma mantığı ve nesne yönelimli programlama temelleri.",
      "img": "img/csharp.png"
    },
    {
      "id": "Cyber", "name": "Siber Güvenlik & Pentest", "val": 14, "group": "beceri",
      "desc": "Ağ tarama (Nmap), Kali Linux araçları ve C2 mimarilerine olan pratik merak.",
      "img": "https://api.dicebear.com/8.x/bottts-neutral/svg?seed=Cyber&backgroundColor=10b981"
    },
    {
      "id": "ValthrionBot", "name": "Valthrion Bot Agency", "val": 18, "group": "proje",
      "desc": "Gelişmiş, satış odaklı ve özel fonksiyonlara sahip Discord botları geliştirdiğim ve sunduğum ajans projem.",
      "img": "img/sv.png"
    },
    {
      "id": "PortfolioWeb", "name": "valthrion.online", "val": 17, "group": "proje",
      "desc": "Cloudflare altyapısı üzerine kurulu, tüm servislerimi ve kimliğimi yansıtan profesyonel web portfolyom.",
      "img": "img/sv.png"
    },
    // ── YENİ EKLENEN PROJE DÜĞÜMÜ ───────────────────────────────
    {
      "id": "CryptoTerminal", "name": "Crypto Terminal", "val": 16, "group": "proje",
      "desc": "Anlık kripto para verilerini, grafik analizlerini ve piyasa takibini tek bir arayüzden sunan gelişmiş terminal projem.",
      "img": "img/b.png"
    },
    {
      "id": "Gaming", "name": "Taktik Oyunlar & Optimizasyon", "val": 14, "group": "tutku",
      "desc": "CS2, Valorant gibi rekabetçi oyunlar and donanım/sistem optimizasyonları üzerine çalışmalar.",
      "img": "img/ste-(2).png"
    },
    {
      "id": "Hardware", "name": "Yüksek Performanslı Donanım", "val": 14, "group": "tutku",
      "desc": "İleri düzey işlemci/ekran kartı mimarileri, soğutma çözümleri ve benchmark testleri.",
      "img": "https://api.dicebear.com/8.x/bottts-neutral/svg?seed=Hardware&backgroundColor=8b5cf6"
    },
    // ── OYUN DÜĞÜMLERİ ──────────────────────────────────────────
    {
      "id": "CS2", "name": "Counter-Strike 2", "val": 12, "group": "tutku",
      "desc": "Stratejik takım koordinasyonu ve yüksek refleks gerektiren rekabetçi taktik FPS deneyimim.",
      "img": "img/cs2.png"
    },
    {
      "id": "FiveM", "name": "FiveM (GTA 5 RP)", "val": 12, "group": "tutku",
      "desc": "Metin ve ses tabanlı karakter simülasyonu, topluluk yönetimi ve rol yapma (Roleplay) dünyası.",
      "img": "img/fivem.png"
    }
  ],
  "links": [
    { "source": "Merkez", "target": "Beceriler" },
    { "source": "Merkez", "target": "Projeler" },
    { "source": "Merkez", "target": "Tutkular" },
    { "source": "Beceriler", "target": "JS" },
    { "source": "Beceriler", "target": "Frontend" },
    { "source": "Beceriler", "target": "CSharp" },
    { "source": "Beceriler", "target": "Cyber" },
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

let graph;
let currentSelectedNode = null;
let pulseAngle = 0; // merkez animasyonu için
let sceneTime = 0;
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
        antialias: !performanceProfile.isAndroid,
        powerPreference: performanceProfile.isAndroid ? 'low-power' : 'high-performance'
    });
    renderer.setPixelRatio(performanceProfile.neuralPixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const particleCount = performanceProfile.neuralParticles;
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
        const points = curve.getPoints(performanceProfile.ringSegments).map(point => new THREE.Vector3(point.x, point.y, (i - 2) * 4));
        const ring = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), ringMaterial.clone());
        ring.rotation.x = 0.62 + i * 0.26;
        ring.rotation.y = i * 0.42;
        ring.material.opacity = 0.12 + i * 0.028;
        ringGroup.add(ring);
    }
    scene.add(ringGroup);

    const resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(performanceProfile.neuralPixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', resize);

    let lastRender = 0;
    const animate = () => {
        requestAnimationFrame(animate);
        const now = performance.now();
        if (now - lastRender < performanceProfile.neuralFrameMs) return;
        lastRender = now;

        const time = now * 0.00035;

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

        .linkColor(link => {
            const source = typeof link.source === 'object' ? link.source : data.nodes.find(n => n.id === link.source);
            const target = typeof link.target === 'object' ? link.target : data.nodes.find(n => n.id === link.target);
            const sourceColor = source ? groupColors[source.group] : '#38bdf8';
            const targetColor = target ? groupColors[target.group] : '#38bdf8';
            return link.label ? `${targetColor}cc` : `${sourceColor}99`;
        })
        .linkWidth(link => link.label ? 2.8 : 2)
        .linkDirectionalParticles(link => link.label ? performanceProfile.linkLabelParticles : performanceProfile.linkParticles)
        .linkDirectionalParticleSpeed(performanceProfile.isAndroid ? 0.006 : 0.009)
        .linkDirectionalParticleWidth(link => link.label ? (performanceProfile.isAndroid ? 2.8 : 3.4) : (performanceProfile.isAndroid ? 2.1 : 2.6))

        .nodeCanvasObject((node, ctx, globalScale) => {
            sceneTime = performance.now() * (performanceProfile.isAndroid ? 0.00055 : 0.001);
            const isCenter = node.group === 'merkez';
            const radius = Math.sqrt(node.val) * 2.85; // okunaklılık için büyük düğümler
            const color  = groupColors[node.group] || '#ffffff';
            const nodePhase = [...node.id].reduce((sum, char) => sum + char.charCodeAt(0), 0) * 0.03;
            const breath = 1 + Math.sin(sceneTime * 2.4 + nodePhase) * 0.045;
            const drawRadius = radius * breath;

            // Güvenlik Kontrolü: Koordinatlar sayısal olarak geçerli mi?
            const hasValidCoords = typeof node.x === 'number' && typeof node.y === 'number' && !isNaN(node.x) && !isNaN(node.y);

            // ── MERKEZ: animasyonlu parlama halkası ──
            if (isCenter && hasValidCoords) {
                pulseAngle += 0.018;
                
                let pulseRadius = drawRadius * 1.8 + Math.sin(pulseAngle) * 4;
                // pulseRadius'un geçersiz olma durumunu filtrele
                if (isNaN(pulseRadius) || !isFinite(pulseRadius)) {
                    pulseRadius = drawRadius * 1.8;
                }

                const maxGradRadius = pulseRadius * 1.5;

                // Sadece yarıçaplar mantıklı ve pozitifse gradyan oluştur
                if (maxGradRadius > 0 && drawRadius > 0) {
                    try {
                        // Dış parıltı degradesi
                        const grad = ctx.createRadialGradient(node.x, node.y, drawRadius, node.x, node.y, maxGradRadius);
                        grad.addColorStop(0, 'rgba(34, 211, 238, 0.45)');
                        grad.addColorStop(0.48, 'rgba(251, 113, 133, 0.16)');
                        grad.addColorStop(1, 'rgba(251,113,133,0)');
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, maxGradRadius, 0, 2 * Math.PI);
                        ctx.fillStyle = grad;
                        ctx.fill();
                    } catch (e) {
                        console.warn("Gradient oluşturulamadı, es geçiliyor:", e);
                    }
                }

                // Parlayan halka
                ctx.beginPath();
                ctx.arc(node.x, node.y, pulseRadius, 0, 2 * Math.PI);
                ctx.strokeStyle = `rgba(251,113,133,${0.42 + 0.28 * Math.sin(pulseAngle)})`;
                ctx.lineWidth = 2 / globalScale;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(node.x, node.y, pulseRadius * 1.35, 0, 2 * Math.PI);
                ctx.strokeStyle = `rgba(34,211,238,${0.24 + 0.18 * Math.cos(pulseAngle * 0.7)})`;
                ctx.lineWidth = 1.2 / globalScale;
                ctx.stroke();
            }

            // Eğer koordinatlar henüz yüklenmediyse çizimin kalanını bu frame için pas geç
            if (!hasValidCoords) return;

            // ── SEÇİLİ DÜĞÜM: beyaz halo ──
            if (currentSelectedNode && node.id === currentSelectedNode.id) {
                ctx.beginPath();
                ctx.arc(node.x, node.y, drawRadius * 1.45, 0, 2 * Math.PI);
                ctx.strokeStyle = 'rgba(255,255,255,0.72)';
                ctx.lineWidth = 2.4 / globalScale;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(node.x, node.y, drawRadius * 1.85, 0, 2 * Math.PI);
                ctx.strokeStyle = `${color}55`;
                ctx.lineWidth = 1.2 / globalScale;
                ctx.stroke();
            }

            drawNodeOrbit(ctx, node, drawRadius, color, globalScale, nodePhase);

            // ── DÜĞÜM DAİRESİ ──
            ctx.save();
            ctx.beginPath();
            ctx.arc(node.x, node.y, drawRadius, 0, 2 * Math.PI);
            const nodeGrad = ctx.createRadialGradient(
                node.x - drawRadius * 0.3,
                node.y - drawRadius * 0.35,
                drawRadius * 0.1,
                node.x,
                node.y,
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
                    const imageSpin = performanceProfile.imageSpin
                        ? (isCenter ? Math.sin(sceneTime * 0.8) * 0.03 : Math.sin(sceneTime + nodePhase) * 0.018)
                        : 0;
                    ctx.translate(node.x, node.y);
                    ctx.rotate(imageSpin);
                    ctx.drawImage(img, -drawRadius, -drawRadius, drawRadius * 2, drawRadius * 2);
                    ctx.rotate(-imageSpin);
                    ctx.translate(-node.x, -node.y);
                    if (performanceProfile.hologramScan) {
                        drawHologramScan(ctx, node, drawRadius, color, nodePhase);
                    }
                }
            }
            ctx.restore();

            // ── DÜĞÜM ETKİNİ (renkli çerçeve) ──
            ctx.beginPath();
            ctx.arc(node.x, node.y, drawRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = isCenter ? 'rgba(34, 211, 238, 0.95)' : `${color}aa`;
            ctx.lineWidth = isCenter ? 3.2 / globalScale : 1.7 / globalScale;
            ctx.stroke();

            const shineAngle = sceneTime * 2.2 + nodePhase;
            ctx.beginPath();
            ctx.arc(node.x, node.y, drawRadius * 1.08, shineAngle, shineAngle + Math.PI * 0.55);
            ctx.strokeStyle = 'rgba(255,255,255,0.82)';
            ctx.lineWidth = 1.8 / globalScale;
            ctx.stroke();

            // ── YAZI ──
            const fontSize = Math.max((isCenter ? 17 : 15) / globalScale, isCenter ? 8 : 6.5);
            ctx.font = `${isCenter ? 'bold ' : ''}${fontSize}px 'Plus Jakarta Sans', sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#f8fafc';

            const label = node.name;
            const labelY = node.y + drawRadius + fontSize * 1.08;
            const labelWidth = ctx.measureText(label).width;
            const labelPaddingX = 8 / globalScale;
            const labelPaddingY = 5 / globalScale;
            const labelHeight = fontSize + labelPaddingY * 2;
            const labelRadius = 7 / globalScale;

            ctx.save();
            ctx.shadowColor = 'rgba(0,0,0,0.65)';
            ctx.shadowBlur = 12 / globalScale;
            ctx.fillStyle = 'rgba(2, 6, 23, 0.72)';
            roundedRect(
                ctx,
                node.x - labelWidth / 2 - labelPaddingX,
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

            // Yazı gölgesi
            ctx.shadowColor = color;
            ctx.shadowBlur = isCenter ? 14 : 8;
            ctx.fillStyle = '#f8fafc';
            ctx.fillText(label, node.x, labelY);
            ctx.shadowBlur = 0;
        })

        .nodeCanvasObjectMode(() => 'replace')

        .onNodeClick(node => {
            currentSelectedNode = node;
            updatePanelContent(node);
            graph.centerAt(node.x, node.y, 700);
            graph.zoom(Math.max(graph.zoom(), 2.45), 700);
        });

    if (typeof graph.pixelRatio === 'function') {
        graph.pixelRatio(performanceProfile.graphPixelRatio);
    }

    graph.d3Force('charge').strength(performanceProfile.isAndroid ? -260 : -360);
    graph.d3Force('link').distance(link => {
        const baseDistance = link.label ? 145 : 118;
        return performanceProfile.isAndroid ? baseDistance * 0.9 : baseDistance;
    });

    if (performanceProfile.isAndroid) {
        if (typeof graph.d3AlphaDecay === 'function') graph.d3AlphaDecay(0.045);
        if (typeof graph.d3VelocityDecay === 'function') graph.d3VelocityDecay(0.42);
        if (typeof graph.cooldownTicks === 'function') graph.cooldownTicks(90);
    }

    setTimeout(() => {
        graph.zoom(1.78, 1200);
        const centerNode = data.nodes.find(n => n.id === 'Merkez');
        if (centerNode) {
            currentSelectedNode = centerNode;
            preparePanelContent(centerNode);
        }
    }, 400);
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

function drawNodeOrbit(ctx, node, radius, color, globalScale, phase) {
    const orbitRadius = radius * 1.32;
    const orbitAngle = sceneTime * 2.6 + phase;

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(
        node.x,
        node.y,
        orbitRadius,
        orbitRadius * 0.42,
        orbitAngle * 0.32,
        0,
        Math.PI * 2
    );
    ctx.strokeStyle = `${color}35`;
    ctx.lineWidth = 1 / globalScale;
    ctx.stroke();

    for (let i = 0; i < performanceProfile.nodeOrbitDots; i++) {
        const angle = orbitAngle + i * Math.PI;
        const x = node.x + Math.cos(angle) * orbitRadius;
        const y = node.y + Math.sin(angle) * orbitRadius * 0.42;

        ctx.beginPath();
        ctx.arc(x, y, Math.max(2.2 / globalScale, 1.2), 0, Math.PI * 2);
        ctx.fillStyle = i === 0 ? '#ffffff' : color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    ctx.restore();
}

function drawHologramScan(ctx, node, radius, color, phase) {
    const scan = ((Math.sin(sceneTime * 3.2 + phase) + 1) / 2) * radius * 2 - radius;

    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    const grad = ctx.createLinearGradient(node.x - radius, node.y + scan - 10, node.x + radius, node.y + scan + 10);
    grad.addColorStop(0, 'rgba(255,255,255,0)');
    grad.addColorStop(0.48, `${color}22`);
    grad.addColorStop(0.5, 'rgba(255,255,255,0.42)');
    grad.addColorStop(0.52, `${color}22`);
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(node.x - radius, node.y + scan - 10, radius * 2, 20);

    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    for (let y = node.y - radius; y < node.y + radius; y += 6) {
        ctx.fillRect(node.x - radius, y, radius * 2, 1);
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

// ── BUTON OLAYLARI ────────────────────────────────────────────
closeBtn.addEventListener('click', () => panel.classList.remove('open'));

openPanelBtn.addEventListener('click', () => {
    if (currentSelectedNode) panel.classList.add('open');
});
