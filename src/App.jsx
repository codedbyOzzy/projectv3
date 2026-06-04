import { useEffect, useState } from 'react';
import {
  Moon, Database, GitPullRequest, Clipboard, Shuffle, Mail,
  Eye, FileText, Globe, CheckCircle,
  Clock, Cpu, Zap,
  ShieldCheck, MessageSquare, Search,
  FolderOpen, Mic, Terminal, Network,
  ChevronRight, BellRing, Code2, BookOpen, SlidersHorizontal,
  UserCog, ArrowRight, Sparkles, Activity, Server, GitBranch
} from 'lucide-react';
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
          <a href="#waitlist" className="btn btn-ghost">Giriş Yap</a>
          <a href="#waitlist" className="btn btn-solid">
            <BellRing size={13} />
            Bekleme Listesine Katıl
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const DEMO_ITEMS = [
  { Icon: Moon,          title: 'Night Shift 2.0 başlat',    sub: 'Otonom görev kuyruğu — gece çalışır',              badge: 'Night Shift', color: '#0f0f1a' },
  { Icon: Database,      title: "Knowledge Base'i güncelle",  sub: 'Proje dosyalarını RAG hafızasına ekle',            badge: 'Bellek',      color: '#0f1a0f' },
  { Icon: GitPullRequest,title: 'GitHub PR analiz et',        sub: 'Coder Agent ile kod incelemesi yap',               badge: 'Kod',         color: '#1a0f0f' },
  { Icon: Clipboard,     title: 'Pano içeriğini analiz et',   sub: 'Kopyalanan metni veya kodu anında işle',           badge: 'Clipboard',   color: '#111111' },
  { Icon: Shuffle,       title: 'Model değiştir → Private',   sub: 'Yerel Llama modeline geç, veri dışarı çıkmaz',     badge: 'Model',       color: '#1a180f' },
  { Icon: Mail,          title: 'Gmail özeti çıkar',          sub: 'Son 24 saatin önemli e-postalarını listele',        badge: 'Workflow',    color: '#0f1a1a' },
];

function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const phrases = ['ARIA ne yapabilir?', 'GitHub PR analiz et', 'Night Shift başlat', 'Gmail özeti', 'Model değiştir'];

  useEffect(() => {
    let phrase = phrases[0];
    let i = 0;
    const interval = setInterval(() => {
      if (i <= phrase.length) { setTyped(phrase.slice(0, i)); i++; }
      else { setTimeout(() => { i = 0; phrase = phrases[(phrases.indexOf(phrase) + 1) % phrases.length]; }, 1500); }
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
          ARIA V3 — 2026 Q4'te geliyor
        </div>
        <h1>Bilgisayarınızın<br />kontrol merkezi.</h1>
        <p className="hero-sub">
          Komut satırı değil, AI işletim sistemi. Tek kısayolla dilediğiniz modeli,
          ajanı ve iş akışını anında harekete geçirin.
        </p>
        <div className="hero-actions">
          <a id="waitlist" href="#waitlist-form" className="btn btn-solid">
            <BellRing size={15} />
            Bekleme Listesine Katıl
          </a>
          <a href="#features" className="btn btn-ghost">Tüm Özellikler <ArrowRight size={14} style={{marginLeft:4}} /></a>
        </div>

        {/* Release badge */}
        <div className="release-badge">
          <Clock size={13} />
          <span>Tahmini Çıkış: <strong>2026 Q4</strong> — Windows 10 / 11</span>
        </div>

        {/* Live Command Palette */}
        <div className="command-demo">
          <div className="command-demo-outer">
            <div className="command-bar">
              <div className="command-bar-icon">
                <AriaLogo size={14} />
              </div>
              <input className="command-input" readOnly value={typed} placeholder="ARIA'ya bir şey söyle..." />
              <div className="command-kbd">
                <span className="kbd">Alt</span>
                <span className="kbd">Space</span>
              </div>
            </div>
            <div className="command-results">
              <div className="command-section-label">Öneriler</div>
              {DEMO_ITEMS.map((item, i) => {
                const IconComp = item.Icon;
                return (
                  <div key={i} className={`command-item${i === activeIdx ? ' active' : ''}`} onMouseEnter={() => setActiveIdx(i)}>
                    <div className="command-item-icon" style={{background: item.color, borderRadius: 8}}>
                      <IconComp size={16} color="rgba(255,255,255,0.7)" />
                    </div>
                    <div className="command-item-text">
                      <div className="command-item-title">{item.title}</div>
                      <div className="command-item-sub">{item.sub}</div>
                    </div>
                    <span className="command-item-badge">{item.badge}</span>
                  </div>
                );
              })}
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
          { n: '6',    l: 'Desteklenen AI Modeli' },
          { n: '<200ms', l: 'Hedef Yanıt Süresi' },
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
          <p>Chatbot'lar sorulara cevap verir. ARIA ise gerçekten iş yapar —
            dosya okur, kod yazar, API çağırır, gece görevler kurar ve sabah size rapor sunar.</p>
          <a href="#features" className="btn btn-ghost">Nasıl Çalışır? <ChevronRight size={14} style={{marginLeft:4}} /></a>
        </div>
      </div>
    </section>
  );
}

// ── Feature Scroll ────────────────────────────────────────────────────────────
const CHIPS = [
  { Icon: Terminal,      text: 'Alt+Space Command OS' },
  { Icon: Moon,          text: 'Night Shift 2.0' },
  { Icon: UserCog,       text: 'Otonom Profil Öğrenimi' },
  { Icon: Clipboard,     text: 'Clipboard Intelligence' },
  { Icon: Shuffle,       text: 'Model Özgürlüğü (BYOK)' },
  { Icon: Database,      text: 'Knowledge Base & RAG' },
  { Icon: Network,       text: 'Multi-Agent Swarm' },
  { Icon: FileText,      text: 'Action Receipt' },
  { Icon: ShieldCheck,   text: 'Gizlilik & Güvenlik' },
  { Icon: MessageSquare, text: 'Conversation Threads' },
  { Icon: Workflow,      text: 'Workflow Builder' },
  { Icon: Search,        text: 'Web Search & Scraping' },
  { Icon: FolderOpen,    text: 'Dosya Sürükle-Bırak' },
  { Icon: GitBranch,     text: 'GitHub & Gmail Entegrasyonu' },
  { Icon: Mic,           text: 'Sesli Komut' },
];

function FeatureScroll() {
  const doubled = [...CHIPS, ...CHIPS];
  return (
    <div className="feature-scroll">
      <h2>Bir kısayol. Sonsuz güç.</h2>
      <div className="scroll-track-wrap">
        <div className="scroll-inner">
          {doubled.map((c, i) => {
            const IconComp = c.Icon;
            return (
              <div className="feature-chip" key={i}>
                <IconComp size={14} className="feature-chip-icon" style={{color:'rgba(255,255,255,0.5)'}} />
                <span className="feature-chip-text">{c.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Feature Block Visuals ─────────────────────────────────────────────────────
function ActionReceiptVisual() {
  const rows = [
    { Icon: Cpu,         label: 'Model Seçimi',        val: 'claude-3.5-sonnet', success: true, active: true },
    { Icon: FolderOpen,  label: 'Okunan Dosya',        val: 'core/router.py (1.2kb)', success: false, active: false },
    { Icon: Globe,       label: 'Web İsteği',          val: 'api.github.com → 200 OK', success: false, active: false },
    { Icon: FileText,    label: 'Üretilen Çıktı',      val: '847 token · 1.2s', success: false, active: false },
    { Icon: CheckCircle, label: 'Panoya Kopyalandı',   val: 'Tamamlandı', success: true, active: false },
  ];
  return (
    <div className="feature-visual-card">
      <div className="visual-header">
        <div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div>
        <span className="visual-title">Action Receipt — İşlem Makbuzu</span>
      </div>
      <div className="visual-body">
        <div className="receipt-rows">
          {rows.map((r, i) => {
            const IconComp = r.Icon;
            return (
              <div key={i} className={`receipt-row${r.active ? ' active' : ''}`}>
                <IconComp size={13} className="r-icon" style={{color:'rgba(255,255,255,0.4)',flexShrink:0}} />
                <span className="r-label">{r.label}</span>
                <span className={`r-val${r.success ? ' success' : ''}`}>{r.val}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function NightShiftVisual() {
  const tasks = [
    { done: true,    name: 'Rakip Analizi (Rapor)',  time: '01:20' },
    { done: true,    name: 'GitHub PR Tarama',       time: '02:15' },
    { running: true, name: 'Haber Özeti Üretimi',    time: '~03:50' },
    { queued: true,  name: 'Sabah E-posta Taslağı',  time: '—' },
    { queued: true,  name: 'Haftalık KPI Raporu',    time: '—' },
  ];
  return (
    <div className="feature-visual-card">
      <div className="visual-header">
        <div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div>
        <span className="visual-title">Night Shift 2.0 — 03:47</span>
      </div>
      <div className="visual-body">
        <div className="ns-queue">
          {tasks.map((t, i) => (
            <div className="ns-task" key={i}>
              <span className={`ns-status${t.done ? ' done' : t.running ? ' running' : ' queued'}`} />
              <span className="ns-task-name">{t.name}</span>
              <span className="ns-task-time">{t.time}</span>
            </div>
          ))}
        </div>
        <div className="ns-progress" style={{marginTop:16}}>
          <div className="ns-progress-label"><span>Genel İlerleme</span><span style={{color:'#34d399'}}>65%</span></div>
          <div className="ns-progress-bar"><div className="ns-progress-fill"/></div>
        </div>
      </div>
    </div>
  );
}

function ModelFreedomVisual() {
  const [sel, setSel] = useState(0);
  const models = [
    { name: 'Private Mod', desc: 'Llama 3.1 70B — Yerel, veri dışarı çıkmaz', badge: 'badge-private', label: 'PRIVATE' },
    { name: 'Fast Mod',    desc: 'Groq / Llama — Anlık yanıt, düşük gecikme', badge: 'badge-fast',    label: 'FAST' },
    { name: 'Best Mod',    desc: 'Claude 3.5 / GPT-4o — Maksimum akıl yürütme', badge: 'badge-best', label: 'BEST' },
    { name: 'Cheap Mod',   desc: 'Gemini Flash — Düşük maliyet, yüksek hacim', badge: 'badge-cheap',  label: 'CHEAP' },
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
              <div className={`model-badge ${m.badge}`}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClipboardVisual() {
  const [active, setActive] = useState(0);
  const actions = [
    { Icon: BookOpen, text: 'Kodu Açıkla',         kbd: '↵' },
    { Icon: Zap,      text: 'Hata Bul ve Düzelt',  kbd: '⌘E' },
    { Icon: Activity, text: 'Optimize Et',          kbd: '⌘O' },
    { Icon: FileText, text: 'Dokümantasyon Yaz',    kbd: '⌘D' },
  ];
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
          {actions.map((a, i) => {
            const IconComp = a.Icon;
            return (
              <div key={i} className={`clip-action${active === i ? ' active' : ''}`} onMouseEnter={() => setActive(i)}>
                <IconComp size={13} className="clip-action-icon" style={{color:'rgba(255,255,255,0.5)',flexShrink:0}} />
                <span className="clip-action-text">{a.text}</span>
                <span className="clip-action-kbd">{a.kbd}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MultiAgentVisual() {
  const agents = [
    { Icon: Code2,    label: 'Coder Agent' },
    { Icon: Search,   label: 'Researcher' },
    { Icon: FileText, label: 'Writer Agent' },
  ];
  return (
    <div className="feature-visual-card">
      <div className="visual-header">
        <div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div>
        <span className="visual-title">Multi-Agent Swarm</span>
      </div>
      <div className="visual-body">
        <div className="agent-diagram">
          <div className="agent-center"><Network size={26} color="rgba(255,255,255,0.8)" /></div>
          <div style={{display:'flex',alignItems:'flex-start',gap:40,marginTop:0}}>
            {agents.map((a, i) => {
              const IconComp = a.Icon;
              return (
                <div key={i} className="agent-line">
                  <div className="agent-connector" />
                  <div className="agent-node">
                    <div className="agent-node-icon"><IconComp size={20} color="rgba(255,255,255,0.6)" /></div>
                    <div className="agent-node-label">{a.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{marginTop:20,padding:'12px 14px',background:'rgba(255,255,255,0.03)',borderRadius:8,border:'1px solid var(--border)'}}>
          <div style={{fontSize:11,color:'var(--text3)',marginBottom:8,fontWeight:600}}>SON GÖREV</div>
          <div style={{fontSize:12,color:'#ccc'}}>
            "shadcn/ui dashboard bileşeni yaz" →
            <span style={{color:'#34d399'}}> Router → Coder Agent → 247 satır, tests dahil</span>
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
      p: 'ARIA arka planda ne yaptığını gizlemez. Action Receipt ile hangi modele istek attığını, hangi dosyayı okuduğunu ve kaç token harcadığını anlık olarak izleyin. Güven, kara kutuda olmaz.',
      pills: ['Action Receipt', 'Anlık Loglama', 'Token Takibi', 'Model İzleme'],
      visual: <ActionReceiptVisual />, flip: false,
    },
    {
      tag: 'Night Shift 2.0', id: 'night-shift',
      h2: <>Siz uyurken <em>ARIA çalışır</em>.</>,
      p: 'Günün sonunda görev listesini bırakın, sabah hazır raporlarla karşılayın. Night Shift 2.0, öz-doğrulama ve kalite kontrol sistemi ile otonom görev zincirlerini yönetir.',
      pills: ['Otonom Görev Kuyruğu', 'Kalite Kontrol', 'Hazır Şablonlar', 'Sabah Raporu'],
      visual: <NightShiftVisual />, flip: true,
    },
    {
      tag: 'Model Özgürlüğü', id: 'model',
      h2: <>Tek bir <em>sağlayıcıya</em> kilitlenmeyin.</>,
      p: 'Kendi API anahtarlarınızı (BYOK) ekleyin. Görevinize göre Private, Fast, Best veya Cheap modunu seçin. Yerel Ollama ile bulut modellerini tek tuşla değiştirin.',
      pills: ['BYOK Desteği', 'Yerel Ollama', 'OpenAI / Claude', 'Groq Fast API'],
      visual: <ModelFreedomVisual />, flip: false,
    },
    {
      tag: 'Clipboard Intelligence',
      h2: <>Ctrl+C yaptığınız an <em>ARIA hazır</em>.</>,
      p: "Kopyaladığınız kodu, hata logunu veya URL'yi anlık analiz eder. Command OS üzerinden tek tuşla 'Kodu açıkla', 'Hata bul', 'Optimize et' komutlarını uygular.",
      pills: ['Otomatik Algılama', 'Kod Analizi', 'Hata Ayıklama', 'Smart Paste'],
      visual: <ClipboardVisual />, flip: true,
    },
    {
      tag: 'Multi-Agent Ekosistemi',
      h2: <>Tek bot değil, <em>uzmanlar ekibi</em>.</>,
      p: 'Router Agent karmaşık görevleri parçalar ve Coder, Researcher, Writer gibi uzmanlara dağıtır. Swarm Intelligence ile büyük projeleri insan ekibi disiplininde yönetin.',
      pills: ['Router Agent', 'Coder Agent', 'Researcher Agent', 'Writer Agent'],
      visual: <MultiAgentVisual />, flip: false,
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
              <div className="feature-pills">{b.pills.map((p, j) => <span key={j} className="feature-pill">{p}</span>)}</div>
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
  { quote: 'ARIA ile her sabah yapılacaklarımı otomatik olarak hazır buluyorum. Night Shift bir gece asistanı değil, gerçek bir iş ortağı.', name: 'Ahmet Y.', role: 'Senior Backend Developer' },
  { quote: 'Model özgürlüğü özelliği oyun değiştirici. Gizli projelerde yerel modeli, hızlı işlerde Groq\'u, derin analizde Claude\'u kullanıyorum.', name: 'Selin K.', role: 'AI Araştırmacısı' },
  { quote: 'Action Receipt sayesinde ARIA\'nın ne yaptığını tam olarak biliyorum. Yapay zekaya kör güvenmek zorunda değilim artık.', name: 'Mert D.', role: 'CTO @ Startup' },
  { quote: 'Clipboard Intelligence o kadar doğal ki artık kodu kopyaladığımda refleks olarak ARIA\'nın açılmasını bekliyorum.', name: 'Zeynep A.', role: 'Full-Stack Developer' },
  { quote: 'Knowledge Base ile projemin tüm mimarisini ARIA\'ya öğrettim. Artık "bu fonksiyon ne yapıyor?" diye dosya açmıyorum.', name: 'Burak Ö.', role: 'Lead Engineer' },
  { quote: 'Multi-agent swarm ile büyük bir araştırma raporunu 3 saatten 20 dakikaya indirdim. Bu bir araç değil, bir ekip.', name: 'Elif T.', role: 'İçerik Stratejisti' },
];

const T_ICONS = [Code2, Sparkles, Eye, Clipboard, Database, Network];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-label">Erken Erişim Kullanıcıları</div>
        <h2>ARIA'yı deneyenlerin söyledikleri</h2>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => {
            const IconComp = T_ICONS[i];
            return (
              <div className="testimonial-card fade-up" key={i} style={{transitionDelay: (i % 3) * 0.1 + 's'}}>
                <p className="t-quote">"{t.quote}"</p>
                <div className="t-author">
                  <div className="t-avatar"><IconComp size={16} color="rgba(255,255,255,0.6)" /></div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Workflow Steps ────────────────────────────────────────────────────────────
const STEP_ICONS = [Server, SlidersHorizontal, Terminal, Zap];

function WorkflowSection() {
  const steps = [
    { num: '01', Icon: Server,           title: 'Kur',               desc: 'Windows 10/11 için hafif yükleyici. Tek tıkla kurulum, servis gerekmez.' },
    { num: '02', Icon: SlidersHorizontal,title: 'API Anahtarını Ekle',desc: 'BYOK modeliyle kendi OpenAI, Anthropic veya Groq anahtarınızı kullanın.' },
    { num: '03', Icon: Terminal,          title: 'Alt+Space',         desc: 'Command OS açılır. Türkçe veya İngilizce, ne sormak istersen yaz.' },
    { num: '04', Icon: Zap,              title: 'ARIA Çalışır',       desc: 'Dosyalarınızı okur, web\'i tarar, Night Shift\'i kurar. İş biter.' },
  ];
  return (
    <section className="workflow">
      <div className="wrap">
        <h2>Birkaç adımda başlayın</h2>
        <p>Karmaşık kurulum yok. Kur, Alt+Space'e bas. Hepsi bu.</p>
        <div className="workflow-steps">
          {steps.map((s, i) => {
            const IconComp = s.Icon;
            return (
              <div className="workflow-step fade-up" key={i} style={{transitionDelay: i * 0.1 + 's'}}>
                <div className="step-num">{s.num}</div>
                <div className="step-icon"><IconComp size={28} color="rgba(255,255,255,0.7)" /></div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
                {i < 3 && <div className="step-connector"><ArrowRight size={14} /></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Privacy ───────────────────────────────────────────────────────────────────
const PRIVACY_ITEM_ICONS = [UserCog, Clock, MessageSquare, Shuffle];

function PrivacySection() {
  const checks = [
    'Tüm hafıza verileri yerel ve şifreli',
    'Local Ollama ile %100 offline kullanım',
    'Her API isteği Action Receipt\'te görünür',
    'Profil verisi tek tıkla tamamen silinir',
    'Hiçbir telemetri veya kullanıcı takibi yok',
  ];
  const memories = [
    { Icon: UserCog,       key: 'İsim',              val: 'Burak (konuşmadan öğrenildi)' },
    { Icon: Code2,         key: 'Uzmanlık',           val: 'Python, React, AI/ML' },
    { Icon: Clock,         key: 'En Aktif Saat',      val: '22:00 – 02:00' },
    { Icon: MessageSquare, key: 'Tercih',              val: 'Kısa ve öz yanıtlar' },
  ];
  return (
    <section className="privacy" id="privacy">
      <div className="wrap">
        <div className="privacy-text fade-up">
          <div className="feature-tag">Güvenlik & Gizlilik</div>
          <h2>Verileriniz size aittir.<br />Her zaman.</h2>
          <p>ARIA, hakkınızda öğrendiği her bilgiyi şifrelemeyle yerel diskinizde saklar.
            Ne bildiğini görürsünüz, ne bilmemesini istediğinizi silebilirsiniz.</p>
          <div className="privacy-checks">
            {checks.map((c, i) => (
              <div className="privacy-check" key={i}>
                <div className="check-ico"><CheckCircle size={12} color="#34d399" /></div>
                <div className="check-label">{c}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="privacy-visual fade-up delay-2">
          <div className="privacy-card">
            <div className="privacy-card-title">ARIA'nın Bildiği</div>
            {memories.map((m, i) => {
              const IconComp = m.Icon;
              return (
                <div className="memory-item" key={i}>
                  <IconComp size={16} className="memory-icon" color="rgba(255,255,255,0.4)" />
                  <div>
                    <div className="memory-key">{m.key}</div>
                    <div className="memory-val">{m.val}</div>
                  </div>
                  <div className="memory-delete">Sil</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pricing ── (Yakında)  ─────────────────────────────────────────────────────
function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: 'Ücretsiz',
      period: 'Çıkışta mevcut',
      desc: 'Bireysel kullanım için temel AI işletim sistemi deneyimi.',
      feats: ['Command OS (Alt+Space)', 'Günlük 5 web araması', '3 Conversation Thread', 'Temel Clipboard Algılama', 'Topluluk Desteği'],
      cta: 'Bekleme Listesine Katıl', btnClass: 'tier-btn-ghost',
    },
    {
      name: 'Pro',
      price: 'Yakında',
      period: 'Fiyat açıklanacak · 2026 Q4',
      desc: 'Night Shift, tam model özgürlüğü, sınırsız bellek ve Multi-Agent erişimi.',
      feats: ['Night Shift 2.0', 'Sınırsız Model Özgürlüğü (BYOK)', 'Knowledge Base & RAG', 'Action Receipt tam loglama', 'Workflow Builder', 'Multi-Agent Swarm', 'Öncelikli Destek'],
      cta: 'Erken Erişim Kaydı', btnClass: 'tier-btn-solid', featured: true,
    },
    {
      name: 'Team',
      price: 'Yakında',
      period: 'Kurumsal fiyatlandırma · 2026 Q4',
      desc: 'Ekipler için ortak hafıza, yönetici paneli ve kurumsal güvenlik.',
      feats: ['Tüm Pro özellikleri', 'Paylaşılan Knowledge Base', 'Ekip Workflow\'ları', 'Admin Denetim Paneli', 'Cross-device Sync', 'SSO & Kurumsal güvenlik', 'Özel SLA'],
      cta: 'Bilgi Almak İstiyorum', btnClass: 'tier-btn-ghost',
    },
  ];
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="fade-up">
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:16}}>
            <Clock size={14} color="var(--text3)" />
            <span style={{fontSize:12,color:'var(--text3)',fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase'}}>Fiyatlandırma · 2026 Q4</span>
          </div>
          <h2>Şeffaf ve sade planlar.</h2>
          <p className="pricing-sub">Fiyatlar 2026 Q4 lansmanında açıklanacak. Erken erişim için bekleme listesine katılın.</p>
        </div>
        <div className="pricing-grid">
          {tiers.map((t, i) => (
            <div key={i} className={`pricing-card${t.featured ? ' featured' : ''} fade-up`} style={{transitionDelay: i * 0.1 + 's'}}>
              {t.featured && <div className="featured-badge">En Popüler</div>}
              <div className="tier-name">{t.name}</div>
              <div className="tier-price" style={t.price === 'Yakında' ? {fontSize:28,paddingTop:10} : {}}>
                {t.price !== 'Yakında' && t.price !== 'Ücretsiz' && <span className="currency">$</span>}
                {t.price}
              </div>
              <div className="tier-period">{t.period}</div>
              <div className="tier-desc">{t.desc}</div>
              <ul className="tier-feats">{t.feats.map((f, j) => <li key={j}>{f}</li>)}</ul>
              <a href="#waitlist-form" className={`tier-btn ${t.btnClass}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Waitlist CTA ──────────────────────────────────────────────────────────────
function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) setDone(true);
  };
  return (
    <section className="cta-banner" id="waitlist-form">
      <div className="wrap">
        <div className="fade-up">
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:20}}>
            <BellRing size={16} color="rgba(255,255,255,0.5)" />
            <span style={{fontSize:12,color:'var(--text3)',fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase'}}>2026 Q4 Lansmanı</span>
          </div>
          <h2>Hazır olun.<br />ARIA geliyor.</h2>
          <p>Lansman öncesi bildirim almak ve erken erişim fırsatından yararlanmak için bekleme listesine katılın.</p>
          {done ? (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:10,padding:'16px 28px',background:'rgba(52,211,153,0.1)',border:'1px solid rgba(52,211,153,0.25)',borderRadius:10,maxWidth:400,margin:'0 auto'}}>
              <CheckCircle size={18} color="#34d399" />
              <span style={{color:'#34d399',fontWeight:500}}>Bekleme listesine eklendi. Teşekkürler!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{display:'flex',gap:8,maxWidth:420,margin:'0 auto',flexWrap:'wrap',justifyContent:'center'}}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="e-posta adresiniz"
                required
                style={{flex:1,minWidth:200,padding:'12px 16px',background:'rgba(255,255,255,0.04)',border:'1px solid var(--border)',borderRadius:8,color:'#fff',fontFamily:'var(--font)',fontSize:14,outline:'none'}}
              />
              <button type="submit" className="btn btn-solid" style={{whiteSpace:'nowrap'}}>
                <BellRing size={14} />
                Bildir
              </button>
            </form>
          )}
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
            <p>Windows için kişisel AI işletim sistemi. 2026 Q4 lansmanı için bekleme listesine katılın.</p>
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
          <span className="footer-copy">Türkiye'de geliştiriliyor — Çıkış: 2026 Q4</span>
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
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
