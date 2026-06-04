import { useEffect, useState } from 'react';
import './index.css';

// ── ARIA SVG Logo ─────────────────────────────────────────────────────────────
function AriaLogo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="white" fillOpacity="0.08"/>
      <rect x="10" y="10" width="28" height="28" rx="4" fill="none" stroke="white" strokeWidth="1.5"/>
      <line x1="10" y1="24" x2="38" y2="24" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
      <line x1="24" y1="10" x2="24" y2="38" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
      <circle cx="24" cy="24" r="4" fill="white"/>
    </svg>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className="navbar" style={scrolled ? {borderBottomColor:'rgba(255,255,255,0.12)'} : {}}>
      <div className="wrap" style={{width:'100%',maxWidth:'var(--max)',margin:'0 auto',padding:'0 24px'}}>
        <a href="#" className="nav-logo">
          <AriaLogo size={22} />
          ARIA
        </a>
        <div className="nav-links">
          <a href="#features">Özellikler</a>
          <a href="#night-shift">Night Shift 2.0</a>
          <a href="#model">Model Özgürlüğü</a>
          <a href="#privacy">Gizlilik</a>
          <a href="#pricing">Planlar</a>
        </div>
        <div className="nav-cta-group">
          <a href="#" className="btn btn-ghost">Giriş Yap</a>
          <a href="#download" className="btn btn-solid">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Windows İndir
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const DEMO_ITEMS = [
  { icon: '🌙', title: 'Night Shift 2.0 başlat', sub: 'Otonom görev kuyruğu — gece çalışır', badge: 'Night Shift', color: '#1a1a2e' },
  { icon: '🧠', title: 'Knowledge Base\'i güncelle', sub: 'Proje dosyalarını RAG hafızasına ekle', badge: 'Bellek', color: '#1a2e1a' },
  { icon: '⚡', title: 'GitHub PR analiz et', sub: 'Coder Agent ile kod incelemesi yap', badge: 'Kod', color: '#2e1a1a' },
  { icon: '📋', title: 'Pano içeriğini analiz et', sub: 'Kopyalanan metni veya kodu anında işle', badge: 'Clipboard', color: '#1a1a1a' },
  { icon: '🔀', title: 'Model değiştir → Private', sub: 'Yerel Llama modeline geç, veri dışarı çıkmaz', badge: 'Model', color: '#2e2a1a' },
  { icon: '📧', title: 'Gmail özeti çıkar', sub: 'Son 24 saatin önemli e-postalarını listele', badge: 'Workflow', color: '#1a2e2e' },
];

function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [typed, setTyped] = useState('');
  const phrases = ['ARIA ne yapabilir?', 'GitHub PR analiz et', 'Night Shift başlat', 'Gmail özeti', 'Model değiştir'];
  const phraseIdx = Math.floor(Date.now() / 3000) % phrases.length;

  useEffect(() => {
    let phrase = phrases[0];
    let i = 0;
    const interval = setInterval(() => {
      if (i <= phrase.length) {
        setTyped(phrase.slice(0, i));
        i++;
      } else {
        setTimeout(() => { i = 0; phrase = phrases[(phrases.indexOf(phrase) + 1) % phrases.length]; }, 1500);
      }
    }, 80);
    const rotate = setInterval(() => setActiveIdx(p => (p + 1) % DEMO_ITEMS.length), 2000);
    return () => { clearInterval(interval); clearInterval(rotate); };
  }, []);

  return (
    <section className="hero">
      <div className="hero-gradient" />
      <div className="wrap" style={{position:'relative',zIndex:1}}>
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          ARIA V3 — Windows için Kişisel AI İşletim Sistemi
        </div>
        <h1>Bilgisayarınızın<br />kontrol merkezi.</h1>
        <p className="hero-sub">
          Komut satırı değil, AI işletim sistemi. Tek kısayolla dilediğiniz modeli,
          ajanı ve iş akışını anında harekete geçirin.
        </p>
        <div className="hero-actions">
          <a id="download" href="#" className="btn btn-solid">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Windows İçin İndir — Ücretsiz
          </a>
          <a href="#features" className="btn btn-ghost">Tüm Özellikler →</a>
        </div>

        {/* Live Command Palette */}
        <div className="command-demo">
          <div className="command-demo-outer">
            <div className="command-bar">
              <div className="command-bar-icon">
                <AriaLogo size={14} />
              </div>
              <input
                className="command-input"
                readOnly
                value={typed}
                placeholder="ARIA'ya bir şey söyle..."
              />
              <div className="command-kbd">
                <span className="kbd">Alt</span>
                <span className="kbd">Space</span>
              </div>
            </div>
            <div className="command-results">
              <div className="command-section-label">Öneriler</div>
              {DEMO_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className={`command-item${i === activeIdx ? ' active' : ''}`}
                  onMouseEnter={() => setActiveIdx(i)}
                >
                  <div className="command-item-icon" style={{background: item.color, borderRadius: 8}}>
                    {item.icon}
                  </div>
                  <div className="command-item-text">
                    <div className="command-item-title">{item.title}</div>
                    <div className="command-item-sub">{item.sub}</div>
                  </div>
                  <span className="command-item-badge">{item.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function Stats() {
  return (
    <div className="stat-bar">
      <div className="wrap">
        {[
          { n: '100+', l: 'Araç & Entegrasyon' },
          { n: '6', l: 'Desteklenen AI Modeli' },
          { n: '<200ms', l: 'Ortalama Yanıt Süresi' },
          { n: '%100', l: 'Yerel Çalışma Seçeneği' },
        ].map((s, i) => (
          <div className="stat-item fade-up" key={i} style={{transitionDelay: i * 0.1 + 's'}}>
            <div className="stat-number">{s.n}</div>
            <div className="stat-label">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Manifesto ─────────────────────────────────────────────────────────────────
function Manifesto() {
  return (
    <section className="manifesto">
      <div className="wrap">
        <div className="fade-up">
          <h2>Sohbet etmekle yetinmeyin.<br />Bilgisayarınızı yönetin.</h2>
          <p>
            Chatbot'lar sorulara cevap verir. ARIA ise gerçekten iş yapar —
            dosya okur, kod yazar, API çağırır, gece görevler kurar ve sabah size rapor sunar.
          </p>
          <a href="#features" className="btn btn-ghost">Nasıl Çalışır? →</a>
        </div>
      </div>
    </section>
  );
}

// ── Feature Scroll ────────────────────────────────────────────────────────────
const CHIPS = [
  { icon: '⌨️', text: 'Alt+Space Command OS' },
  { icon: '🌙', text: 'Night Shift 2.0' },
  { icon: '🧠', text: 'Otonom Profil Öğrenimi' },
  { icon: '📋', text: 'Clipboard Intelligence' },
  { icon: '🔀', text: 'Model Özgürlüğü (BYOK)' },
  { icon: '🗂️', text: 'Knowledge Base & RAG' },
  { icon: '🤖', text: 'Multi-Agent Swarm' },
  { icon: '📜', text: 'Action Receipt' },
  { icon: '🔒', text: 'Gizlilik & Güvenlik Paneli' },
  { icon: '💬', text: 'Conversation Threads' },
  { icon: '⚙️', text: 'Workflow Builder' },
  { icon: '🌐', text: 'Web Search & Scraping' },
  { icon: '📁', text: 'Dosya Sürükle-Bırak' },
  { icon: '🚀', text: 'GitHub & Gmail Entegrasyonu' },
  { icon: '🎤', text: 'Sesli Komut' },
];

function FeatureScroll() {
  const doubled = [...CHIPS, ...CHIPS];
  return (
    <div className="feature-scroll">
      <h2>Bir kısayol. Sonsuz güç.</h2>
      <div className="scroll-track-wrap">
        <div className="scroll-inner">
          {doubled.map((c, i) => (
            <div className="feature-chip" key={i}>
              <span className="feature-chip-icon">{c.icon}</span>
              <span className="feature-chip-text">{c.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Feature Block: Action Receipt ─────────────────────────────────────────────
function ActionReceiptVisual() {
  return (
    <div className="feature-visual-card">
      <div className="visual-header">
        <div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div>
        <span className="visual-title">Action Receipt — İşlem Makbuzu</span>
      </div>
      <div className="visual-body">
        <div className="receipt-rows">
          <div className="receipt-row active">
            <span className="r-icon">🤖</span>
            <span className="r-label">Model Seçimi</span>
            <span className="r-val success">claude-3.5-sonnet</span>
          </div>
          <div className="receipt-row">
            <span className="r-icon">📂</span>
            <span className="r-label">Okunan Dosya</span>
            <span className="r-val">core/router.py (1.2kb)</span>
          </div>
          <div className="receipt-row">
            <span className="r-icon">🌐</span>
            <span className="r-label">Web İsteği</span>
            <span className="r-val">api.github.com → 200 OK</span>
          </div>
          <div className="receipt-row">
            <span className="r-icon">📝</span>
            <span className="r-label">Üretilen Çıktı</span>
            <span className="r-val">847 token · 1.2s</span>
          </div>
          <div className="receipt-row">
            <span className="r-icon">📋</span>
            <span className="r-label">Panoya Kopyalandı</span>
            <span className="r-val success">✓ Tamamlandı</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature Block: Night Shift ─────────────────────────────────────────────────
function NightShiftVisual() {
  return (
    <div className="feature-visual-card">
      <div className="visual-header">
        <div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div>
        <span className="visual-title">Night Shift 2.0 — 03:47</span>
      </div>
      <div className="visual-body">
        <div className="ns-queue">
          {[
            { s: 'done', name: 'Rakip Analizi (Rapor)', time: '01:20' },
            { s: 'done', name: 'GitHub PR Tarama', time: '02:15' },
            { s: 'running', name: 'Haber Özeti Üretimi', time: '~03:50' },
            { s: 'queued', name: 'Sabah E-posta Taslağı', time: '—' },
            { s: 'queued', name: 'Haftalık KPI Raporu', time: '—' },
          ].map((t, i) => (
            <div className="ns-task" key={i}>
              <span className={`ns-status ${t.s}`} />
              <span className="ns-task-name">{t.name}</span>
              <span className="ns-task-time">{t.time}</span>
            </div>
          ))}
        </div>
        <div className="ns-progress" style={{marginTop: 16}}>
          <div className="ns-progress-label">
            <span>Genel İlerleme</span>
            <span style={{color:'#34d399'}}>65%</span>
          </div>
          <div className="ns-progress-bar">
            <div className="ns-progress-fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature Block: Model Freedom ──────────────────────────────────────────────
function ModelFreedomVisual() {
  const [sel, setSel] = useState(0);
  const models = [
    { name: 'Private Mod', desc: 'Llama 3.1 70B — Yerel, veri dışarı çıkmaz', badge: 'badge-private' },
    { name: 'Fast Mod', desc: 'Groq / Llama — Anlık yanıt, düşük gecikme', badge: 'badge-fast' },
    { name: 'Best Mod', desc: 'Claude 3.5 / GPT-4o — Maksimum akıl yürütme', badge: 'badge-best' },
    { name: 'Cheap Mod', desc: 'Gemini Flash — Düşük maliyet, yüksek hacim', badge: 'badge-cheap' },
  ];
  return (
    <div className="feature-visual-card">
      <div className="visual-header">
        <div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div>
        <span className="visual-title">Model Seçici</span>
      </div>
      <div className="visual-body">
        <div className="model-selector-label">Aktif Mod Seç</div>
        <div className="model-grid">
          {models.map((m, i) => (
            <div key={i} className={`model-card${sel === i ? ' selected' : ''}`} onClick={() => setSel(i)}>
              <div className="model-card-name">{m.name}</div>
              <div className="model-card-desc">{m.desc}</div>
              <div className={`model-badge ${m.badge}`}>{m.name.split(' ')[0].toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Feature Block: Clipboard ──────────────────────────────────────────────────
function ClipboardVisual() {
  const [active, setActive] = useState(0);
  return (
    <div className="feature-visual-card">
      <div className="visual-header">
        <div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div>
        <span className="visual-title">Clipboard Intelligence</span>
      </div>
      <div className="visual-body">
        <div className="clip-code">
          <div><span className="hl">def</span> <span className="hl2">analyze_profile</span>(user_msg: <span className="hl3">str</span>) -&gt; <span className="hl3">dict</span>:</div>
          <div>    lang = _detect_lang(user_msg)</div>
          <div>    exp = _extract_expertise(user_msg)</div>
          <div style={{color:'#555'}}>    # TODO: edge case fix</div>
          <div>    <span className="hl">return</span> {'{'}<span className="hl3">"lang"</span>: lang{'}'}</div>
        </div>
        <div className="clip-popup">
          <div className="clip-popup-title">Pano Algılandı · Python Kodu</div>
          {[
            { icon: '🔍', text: 'Kodu Açıkla', kbd: '↵' },
            { icon: '🐛', text: 'Hata Bul ve Düzelt', kbd: '⌘E' },
            { icon: '⚡', text: 'Optimize Et', kbd: '⌘O' },
            { icon: '📝', text: 'Dokümantasyon Yaz', kbd: '⌘D' },
          ].map((a, i) => (
            <div key={i} className={`clip-action${active === i ? ' active' : ''}`} onMouseEnter={() => setActive(i)}>
              <span className="clip-action-icon">{a.icon}</span>
              <span className="clip-action-text">{a.text}</span>
              <span className="clip-action-kbd">{a.kbd}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Feature Block: Multi-Agent ────────────────────────────────────────────────
function MultiAgentVisual() {
  return (
    <div className="feature-visual-card">
      <div className="visual-header">
        <div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div>
        <span className="visual-title">Multi-Agent Swarm</span>
      </div>
      <div className="visual-body">
        <div className="agent-diagram">
          <div className="agent-center">🎯</div>
          <div style={{display:'flex',alignItems:'flex-start',gap:40,position:'relative',marginTop:0}}>
            {[
              {icon:'💻',label:'Coder Agent'},
              {icon:'🔬',label:'Researcher'},
              {icon:'✍️',label:'Writer Agent'},
            ].map((a, i) => (
              <div key={i} className="agent-line">
                <div className="agent-connector" />
                <div className="agent-node">
                  <div className="agent-node-icon">{a.icon}</div>
                  <div className="agent-node-label">{a.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{marginTop: 20, padding: '12px 14px', background:'rgba(255,255,255,0.03)', borderRadius: 8, border:'1px solid var(--border)'}}>
          <div style={{fontSize: 11, color:'var(--text3)', marginBottom: 8, fontWeight: 600}}>SON GÖREV</div>
          <div style={{fontSize: 12, color: '#ccc'}}>
            "shadcn/ui kullanarak bir dashboard bileşeni yaz" →
            <span style={{color:'#34d399'}}> Router → Coder Agent → 247 satır, tests dahil ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── All Feature Blocks ─────────────────────────────────────────────────────────
function FeatureBlocks() {
  const blocks = [
    {
      tag: 'Şeffaflık',
      h2: <>Her adımı <em>görün</em>.</>,
      p: 'ARIA arka planda ne yaptığını gizlemez. Action Receipt (İşlem Makbuzu) ile hangi modele istek attığını, hangi dosyayı okuduğunu ve kaç token harcadığını anlık olarak izleyin. Güven, kara kutuda olmaz.',
      pills: ['Action Receipt', 'Anlık Loglama', 'Token Takibi', 'Model İzleme'],
      visual: <ActionReceiptVisual />,
      flip: false,
    },
    {
      tag: 'Night Shift 2.0',
      h2: <>Siz uyurken <em>ARIA çalışır</em>.</>,
      p: 'Günün sonunda görev listesini bırakın, sabah hazır raporlarla karşılayın. Night Shift 2.0, öz-doğrulama ve kalite kontrol sistemi ile otonom görev zincirlerini yönetir. Hazır şablonlar: Rakip analizi, haber özeti, KPI raporu.',
      pills: ['Otonom Görev Kuyruğu', 'Kalite Kontrol', 'Hazır Şablonlar', 'Sabah Raporu'],
      visual: <NightShiftVisual />,
      flip: true,
      id: 'night-shift',
    },
    {
      tag: 'Model Özgürlüğü',
      h2: <>Tek bir <em>sağlayıcıya</em> kilitlenmeyin.</>,
      p: 'Kendi API anahtarlarınızı (BYOK) ekleyin. Görevinize göre Private, Fast, Best veya Cheap modunu seçin. Yerel Ollama ile bulut modellerini tek tuşla değiştirin. Hiçbir veri izniniz olmadan dışarı çıkmaz.',
      pills: ['BYOK Desteği', 'Yerel Ollama', 'OpenAI / Claude', 'Groq Fast API'],
      visual: <ModelFreedomVisual />,
      flip: false,
      id: 'model',
    },
    {
      tag: 'Clipboard Intelligence',
      h2: <>Ctrl+C yaptığınız an <em>ARIA hazır</em>.</>,
      p: "Kopyaladığınız kodu, hata logunu veya URL'yi anlık analiz eder. Command OS üzerinden tek tuşla 'Kodu açıkla', 'Hata bul', 'Optimize et' veya 'Dökümantasyon yaz' komutlarını uygular.",
      pills: ['Otomatik Algılama', 'Kod Analizi', 'Hata Ayıklama', 'Smart Paste'],
      visual: <ClipboardVisual />,
      flip: true,
    },
    {
      tag: 'Multi-Agent Ekosistemi',
      h2: <>Tek bot değil, <em>uzmanlar ekibi</em>.</>,
      p: 'Router Agent karmaşık görevleri parçalar ve Coder, Researcher, Writer gibi uzmanlara dağıtır. Ajan sürüsü (Swarm Intelligence) ile büyük projeleri insan ekibi disiplininde yönetin.',
      pills: ['Router Agent', 'Coder Agent', 'Researcher Agent', 'Writer Agent'],
      visual: <MultiAgentVisual />,
      flip: false,
    },
  ];

  return (
    <div id="features">
      {blocks.map((b, i) => (
        <div className={`feature-block${b.flip ? ' flip' : ''}`} key={i} id={b.id}>
          <div className="wrap">
            <div className="feature-text fade-up">
              <div className="feature-tag">{b.tag}</div>
              <h2>{b.h2}</h2>
              <p>{b.p}</p>
              <div className="feature-pills">
                {b.pills.map((p, j) => <span key={j} className="feature-pill">{p}</span>)}
              </div>
            </div>
            <div className="feature-visual fade-up delay-2">{b.visual}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: 'ARIA ile her sabah yapılacaklarımı otomatik olarak hazır buluyorum. Night Shift bir gece asistanı değil, gerçek bir iş ortağı.',
    name: 'Ahmet Y.', role: 'Senior Backend Developer', avatar: '👨‍💻',
  },
  {
    quote: 'Model özgürlüğü özelliği oyun değiştirici. Gizli projelerde yerel modeli, hızlı işlerde Groq\'u, derin analizde Claude\'u kullanıyorum.',
    name: 'Selin K.', role: 'AI Araştırmacısı', avatar: '👩‍🔬',
  },
  {
    quote: 'Action Receipt sayesinde ARIA\'nın ne yaptığını tam olarak biliyorum. Yapay zekaya kör güvenmek zorunda değilim artık.',
    name: 'Mert D.', role: 'CTO @ Startup', avatar: '🚀',
  },
  {
    quote: 'Clipboard Intelligence o kadar doğal ki artık kodu kopyaladığımda refleks olarak ARIA\'nın açılmasını bekliyorum.',
    name: 'Zeynep A.', role: 'Full-Stack Developer', avatar: '💻',
  },
  {
    quote: 'Knowledge Base özelliği ile projemin tüm mimarisini ARIA\'ya öğrettim. Artık "bu fonksiyon ne yapıyor?" diye dosya açmıyorum.',
    name: 'Burak Ö.', role: 'Lead Engineer', avatar: '⚡',
  },
  {
    quote: 'Multi-agent swarm ile büyük bir araştırma raporunu 3 saatten 20 dakikaya indirdim. Bu bir araç değil, bir ekip.',
    name: 'Elif T.', role: 'İçerik Stratejisti', avatar: '📊',
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-label">Kullanıcı Yorumları</div>
        <h2>ARIA deneyenlerin söyledikleri</h2>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial-card fade-up" key={i} style={{transitionDelay: (i % 3) * 0.1 + 's'}}>
              <p className="t-quote">"{t.quote}"</p>
              <div className="t-author">
                <div className="t-avatar">{t.avatar}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Workflow Steps ────────────────────────────────────────────────────────────
function WorkflowSection() {
  return (
    <section className="workflow">
      <div className="wrap">
        <h2>Birkaç saniyede başlayın</h2>
        <p>Karmaşık kurulum yok. İndir, aç, Alt+Space'e bas. Hepsi bu.</p>
        <div className="workflow-steps">
          {[
            { icon: '⬇️', num: '01', title: 'İndir ve Kur', desc: 'Windows 10/11 için hafif bir yükleyici. Tek tıkla kurulum, servis yoktur.' },
            { icon: '🔑', num: '02', title: 'API Anahtarını Ekle', desc: 'BYOK modeliyle kendi OpenAI, Anthropic veya Groq anahtarınızı kullanın.' },
            { icon: '⌨️', num: '03', title: 'Alt+Space', desc: 'Command OS açılır. Türkçe veya İngilizce, ne sormak istersen yaz.' },
            { icon: '🚀', num: '04', title: 'ARIA Çalışır', desc: 'Dosyalarınızı okur, web\'i tarar, Night Shift\'i kurar. İş biter.' },
          ].map((s, i) => (
            <div className="workflow-step fade-up" key={i} style={{transitionDelay: i * 0.1 + 's'}}>
              <div className="step-num">{s.num}</div>
              <div className="step-icon">{s.icon}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
              {i < 3 && <div className="step-connector">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Privacy ───────────────────────────────────────────────────────────────────
function PrivacySection() {
  return (
    <section className="privacy" id="privacy">
      <div className="wrap">
        <div className="privacy-text fade-up">
          <div className="feature-tag">Güvenlik & Gizlilik</div>
          <h2>Verileriniz size aittir.<br />Her zaman.</h2>
          <p>
            ARIA, hakkınızda öğrendiği her bilgiyi şifrelemeyle yerel diskinizde saklar.
            Ne bildiğini görürsünüz, ne bilmemesini istediğinizi silebilirsiniz.
            Yerel modeller ile hiçbir veri dışarı çıkmaz.
          </p>
          <div className="privacy-checks">
            {[
              'Tüm hafıza verileri yerel ve şifreli',
              'Local Ollama ile 100% offline kullanım',
              'Her API isteği Action Receipt\'te görünür',
              'Profil verisi tek tıkla tamamen silinir',
              'Hiçbir telemetri veya kullanıcı takibi yok',
            ].map((c, i) => (
              <div className="privacy-check" key={i}>
                <div className="check-ico">✓</div>
                <div className="check-label">{c}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="privacy-visual fade-up delay-2">
          <div className="privacy-card">
            <div className="privacy-card-title">ARIA'nın Bildiği</div>
            {[
              { icon: '👤', key: 'İsim', val: 'Burak (konuşmadan öğrenildi)' },
              { icon: '💻', key: 'Uzmanlık', val: 'Python, React, AI/ML' },
              { icon: '⏰', key: 'En Aktif Saat', val: '22:00 – 02:00' },
              { icon: '🗣️', key: 'Tercih', val: 'Kısa ve öz yanıtlar' },
            ].map((m, i) => (
              <div className="memory-item" key={i}>
                <span className="memory-icon">{m.icon}</span>
                <div>
                  <div className="memory-key">{m.key}</div>
                  <div className="memory-val">{m.val}</div>
                </div>
                <div className="memory-delete">Sil ×</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <h2>Sade fiyatlandırma.</h2>
        <p className="pricing-sub">Gizli ücret yok. Dilediğiniz zaman iptal.</p>
        <div className="pricing-grid">
          {[
            {
              name: 'Free', price: '0', period: 'Sonsuza kadar ücretsiz',
              desc: 'Bireysel kullanım için temel AI işletim sistemi deneyimi.',
              feats: ['Command OS (Alt+Space)', 'Günlük 5 web araması', '3 Conversation Thread', 'Temel Clipboard Algılama', 'Topluluk Desteği'],
              cta: 'Ücretsiz İndir', btnClass: 'tier-btn-ghost',
            },
            {
              name: 'Pro', price: '12', period: '/ay · yıllık faturalandırma',
              desc: 'Güçlü kullanıcılar için. Night Shift, tam model özgürlüğü, sınırsız bellek.',
              feats: ['Night Shift 2.0 (Otonom görevler)', 'Sınırsız Model Özgürlüğü (BYOK)', 'Knowledge Base & RAG', 'Action Receipt tam loglama', 'Workflow Builder', 'Multi-Agent Swarm', 'Öncelikli Destek'],
              cta: 'PRO\'ya Yükselt', btnClass: 'tier-btn-solid', featured: true,
            },
            {
              name: 'Team', price: '39', period: '/kullanıcı/ay',
              desc: 'Ekipler için ortak hafıza, yönetici paneli ve kurumsal güvenlik.',
              feats: ['Tüm Pro özellikleri', 'Paylaşılan Knowledge Base', 'Ekip Workflow\'ları', 'Admin Denetim Paneli', 'Cross-device Sync', 'SSO & Kurumsal güvenlik', 'Özel SLA'],
              cta: 'Satış Ekibi ile İletişim', btnClass: 'tier-btn-ghost',
            },
          ].map((t, i) => (
            <div key={i} className={`pricing-card${t.featured ? ' featured' : ''} fade-up`} style={{transitionDelay: i * 0.1 + 's'}}>
              {t.featured && <div className="featured-badge">En Popüler</div>}
              <div className="tier-name">{t.name}</div>
              <div className="tier-price"><span className="currency">$</span>{t.price}</div>
              <div className="tier-period">{t.period}</div>
              <div className="tier-desc">{t.desc}</div>
              <ul className="tier-feats">
                {t.feats.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <a href="#download" className={`tier-btn ${t.btnClass}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="wrap">
        <div className="fade-up">
          <h2>Bugün deneyin.<br />Ücretsiz.</h2>
          <p>İndir, Alt+Space'e bas, ARIA'nın gücünü hisset.</p>
          <a href="#download" className="btn btn-solid">
            Windows İçin İndir
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo"><AriaLogo size={20} /><span>ARIA</span></div>
            <p>Windows için tasarlanmış kişisel AI işletim sistemi. Sınırları aşın, zamanınızı geri alın.</p>
          </div>
          <div className="footer-col">
            <h5>Ürün</h5>
            <a href="#features">Özellikler</a>
            <a href="#night-shift">Night Shift 2.0</a>
            <a href="#model">Model Özgürlüğü</a>
            <a href="#privacy">Gizlilik</a>
            <a href="#pricing">Planlar</a>
          </div>
          <div className="footer-col">
            <h5>Geliştirici</h5>
            <a href="#">Dökümantasyon</a>
            <a href="#">Eklenti API</a>
            <a href="#">MCP Desteği</a>
            <a href="#">GitHub</a>
          </div>
          <div className="footer-col">
            <h5>Şirket</h5>
            <a href="#">Hakkımızda</a>
            <a href="#">Blog</a>
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Şartları</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} ARIA AI. Tüm hakları saklıdır.</span>
          <div className="footer-logo"><AriaLogo size={18} /><span>ARIA V3</span></div>
          <span className="footer-copy">Windows · Türkiye'de yapılmıştır 🇹🇷</span>
        </div>
      </div>
    </footer>
  );
}

// ── Intersection Observer ─────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Manifesto />
        <FeatureScroll />
        <FeatureBlocks />
        <Testimonials />
        <WorkflowSection />
        <PrivacySection />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
