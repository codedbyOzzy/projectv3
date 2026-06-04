import { useEffect, useState, createContext, useContext } from 'react';
import {
  Moon, Database, GitPullRequest, Clipboard, Shuffle, Mail,
  Eye, FileText, Globe, CheckCircle, Bell,
  Clock, Cpu, Zap, Workflow,
  ShieldCheck, MessageSquare, Search,
  FolderOpen, Mic, Terminal, Network,
  ChevronRight, Code2, BookOpen, SlidersHorizontal,
  UserCog, ArrowRight, Sparkles, Activity, Server, GitBranch,
  Languages, Lightbulb, PlugZap, TrendingUp, BrainCircuit,
  Link2, PocketKnife, Repeat2, Bot
} from 'lucide-react';
import './index.css';

// ── i18n ──────────────────────────────────────────────────────────────────────
const T = {
  tr: {
    navFeatures: 'Özellikler',
    navNightShift: 'Night Shift 2.0',
    navModel: 'Model Özgürlüğü',
    navPrivacy: 'Gizlilik',
    navPricing: 'Planlar',
    navLogin: 'Giriş Yap',
    eyebrow: "ARIA V3 — 2026 Q4'te geliyor",
    heroH1: 'Bilgisayarınızın\nkontrol merkezi.',
    heroSub: 'Komut satırı değil, AI işletim sistemi. Tek kısayolla dilediğiniz modeli, ajanı ve iş akışını anında harekete geçirin.',
    heroCtaScroll: 'Özellikleri Keşfet',
    heroFeatures: 'Tüm Özellikler',
    releaseLabel: 'Tahmini Çıkış:',
    releaseSuffix: 'Windows 10 / 11',
    demoSuggestions: 'Öneriler',
    stat1n: 'Sınırsız', stat1l: 'Araç ve Entegrasyon',
    stat2n: 'Özgür',    stat2l: 'Model Seçimi (BYOK)',
    stat3n: 'Anında',   stat3l: 'Düşünce Hızında Yanıt',
    stat4n: '%100',     stat4l: 'Sizin Kontrolünüzde',
    manifestoH: 'Sohbet etmekle yetinmeyin.\nBilgisayarınızı yönetin.',
    manifestoP: "Chatbot'lar sorulara cevap verir. ARIA ise gerçekten iş yapar — dosya okur, kod yazar, API çağırır, gece görevler kurar ve sabah size rapor sunar.",
    manifestoCta: 'Nasıl Çalışır?',
    scrollLabel: 'Bir kısayol. Sonsuz güç.',

    // Feature blocks
    tBlock1Tag: 'Şeffaflık',
    tBlock1H: ['Her adımı ', 'görün', '.'],
    tBlock1P: 'ARIA arka planda ne yaptığını gizlemez. Action Receipt ile hangi modele istek attığını, hangi dosyayı okuduğunu ve kaç token harcadığını anlık izleyin. Güven kara kutuda olmaz.',
    tBlock1Pills: ['Action Receipt','Anlık Loglama','Token Takibi','Model İzleme'],
    tBlock2Tag: 'Night Shift 2.0',
    tBlock2H: ['Siz uyurken ', 'ARIA çalışır', '.'],
    tBlock2P: 'Günün sonunda görev listesini bırakın, sabah hazır raporlarla karşılayın. Night Shift 2.0 öz-doğrulama ve kalite kontrol sistemi ile otonom görev zincirlerini yönetir.',
    tBlock2Pills: ['Otonom Görev Kuyruğu','Kalite Kontrol','Hazır Şablonlar','Sabah Raporu'],
    tBlock3Tag: 'Model Özgürlüğü',
    tBlock3H: ['Tek bir ', 'sağlayıcıya', ' kilitlenmeyin.'],
    tBlock3P: 'Kendi API anahtarlarınızı (BYOK) ekleyin. Görevinize göre Private, Fast, Best veya Cheap modunu seçin. Yerel Ollama ile bulut modellerini tek tuşla değiştirin.',
    tBlock3Pills: ['BYOK Desteği','Yerel Ollama','OpenAI / Claude','Groq Fast API'],
    tBlock4Tag: 'Clipboard Intelligence',
    tBlock4H: ['Ctrl+C yaptığınız an ', 'ARIA hazır', '.'],
    tBlock4P: "Kopyaladığınız kodu, hata logunu veya URL'yi anlık analiz eder. Command OS üzerinden 'Kodu açıkla', 'Hata bul', 'Optimize et' komutlarını tek tuşla uygular.",
    tBlock4Pills: ['Otomatik Algılama','Kod Analizi','Hata Ayıklama','Smart Paste'],
    tBlock5Tag: 'Multi-Agent Ekosistemi',
    tBlock5H: ['Tek bot değil, ', 'uzmanlar ekibi', '.'],
    tBlock5P: 'Router Agent karmaşık görevleri parçalar ve Coder, Researcher, Writer gibi uzmanlara dağıtır. Swarm Intelligence ile büyük projeleri insan ekibi disiplininde yönetin.',
    tBlock5Pills: ['Router Agent','Coder Agent','Researcher Agent','Writer Agent'],

    // Proactive Intelligence section
    proTag: 'Proaktif Zeka',
    proH: ['Siz fark etmeden ', 'ARIA fark eder', '.'],
    proP: 'Geleneksel AI araçları sizi bekler. ARIA ise sisteminizi, alışkanlıklarınızı ve bağlamı sürekli analiz ederek siz sormadan önce harekete geçer.',
    proCards: [
      { title: 'Bağlam Farkındalığı', desc: 'Aynı hata logunu 3 kez panoya kopyaladığınızı fark eder ve otomatik çözüm önerir — siz hiçbir şey yazmadan.' },
      { title: 'Alışkanlık Haritası', desc: "Her gün 09:00'da GitHub açtığınızı bilir. O saatte PR özeti hazır olur, beklemeniz gerekmez." },
      { title: 'Akıllı Zamanlama', desc: "Toplantı takviminizdeki boş bloklara Night Shift görevlerini otomatik yerleştirir. Dikkat dağıtmaz, sessizce çalışır." },
      { title: 'Proaktif Uyarılar', desc: 'Çalıştığınız kütüphanede kritik güvenlik açığı çıktığında ARIA sizi bilgilendirir — siz hiç aramadan.' },
      { title: 'Görev Tahmini', desc: 'Yeni bir Git branch açtığınızda, projenin önceki koduna bakarak yapılması gerekenleri önceden listeler.' },
      { title: 'Bağlamsal Model Seçimi', desc: 'Kısa bir not için Cheap mod, derin mimari analiz için Best mod seçimini otomatik yapar.' },
    ],

    // Integrations section
    intTag: 'Entegrasyonlar',
    intH: ['Her araçla ', 'konuşur', '.'],
    intP: 'ARIA, günlük kullandığınız araçlara doğrudan bağlanır. Sekmeler arasında geçiş yapmadan, tek bir pencereden her şeyi yönetin.',
    intCats: [
      { label: 'Geliştirici', items: ['GitHub','VS Code','Terminal','Docker','GitLab','Postman'] },
      { label: 'Üretkenlik', items: ['Gmail','Google Calendar','Notion','Obsidian','Slack','Linear'] },
      { label: 'AI & Model', items: ['OpenAI','Anthropic','Groq','Ollama (Yerel)','Gemini','MiniMax'] },
      { label: 'Sistem', items: ['Dosya Sistemi','Clipboard','Sistem Bildirimleri','Windows Search','PowerShell','Registry'] },
    ],

    // Testimonials
    tmonLabel: 'Telegram Kapalı Beta · Kullanıcı Yorumları',
    tmonH: 'Kapalı beta kullanıcıları ne dedi?',

    // Workflow
    wfH: 'Birkaç adımda başlayın',
    wfP: "Karmaşık kurulum yok. Kur, Alt+Space'e bas. Hepsi bu.",
    wfSteps: [
      { num:'01', title:'Kur', desc:'Windows 10/11 için hafif yükleyici. Tek tıkla kurulum, arka plan servisi gerekmez.' },
      { num:'02', title:'API Anahtarı Ekle', desc:'BYOK modeliyle kendi OpenAI, Anthropic veya Groq anahtarınızı kullanın.' },
      { num:'03', title:'Alt+Space', desc:'Command OS açılır. Türkçe veya İngilizce, ne sormak istersen yaz.' },
      { num:'04', title:'ARIA Çalışır', desc:"Dosyalarınızı okur, web'i tarar, Night Shift'i kurar. İş biter." },
    ],

    // Privacy
    privTag: 'Güvenlik & Gizlilik',
    privH: 'Verileriniz size aittir.\nHer zaman.',
    privP: 'ARIA, hakkınızda öğrendiği her bilgiyi şifrelemeyle yerel diskinizde saklar. Ne bildiğini görürsünüz, ne bilmemesini istediğinizi silebilirsiniz.',
    privChecks: [
      'Tüm hafıza verileri yerel ve şifreli',
      'Local Ollama ile %100 offline kullanım',
      "Her API isteği Action Receipt'te görünür",
      'Profil verisi tek tıkla tamamen silinir',
      'Hiçbir telemetri veya kullanıcı takibi yok',
    ],
    privCardTitle: "ARIA'nın Bildiği",
    privMemDelete: 'Sil',

    // Pricing
    pricingBadge: 'Fiyatlandırma · 2026 Q4',
    pricingH: 'Şeffaf ve sade planlar.',
    pricingSub: 'Fiyatlar 2026 Q4 lansmanında açıklanacak.',
    pricingTiers: [
      { name:'Free', price:'Ücretsiz', period:'Çıkışta mevcut', desc:'Bireysel kullanım için temel AI işletim sistemi deneyimi.', feats:['Command OS (Alt+Space)','Günlük 5 web araması','3 Conversation Thread','Temel Clipboard Algılama','Proaktif Bildirimler'], cta:'2026 Q4' },
      { name:'Pro',  price:'Yakında', period:'Fiyat açıklanacak · 2026 Q4', desc:'Night Shift, tam model özgürlüğü, sınırsız bellek ve Multi-Agent erişimi.', feats:['Night Shift 2.0','Sınırsız Model Özgürlüğü (BYOK)','Knowledge Base & RAG','Action Receipt tam loglama','Workflow Builder','Multi-Agent Swarm','Proaktif Zeka Tam Erişim'], cta:'2026 Q4', featured:true },
      { name:'Team', price:'Yakında', period:'Kurumsal fiyatlandırma · 2026 Q4', desc:'Ekipler için ortak hafıza, yönetici paneli ve kurumsal güvenlik.', feats:["Tüm Pro özellikleri",'Paylaşılan Knowledge Base','Ekip Workflow\'ları','Admin Denetim Paneli','Cross-device Sync','SSO & Kurumsal güvenlik'], cta:'2026 Q4' },
    ],

    // CTA
    ctaBadge: '2026 Q4 Lansmanı',
    ctaH: 'ARIA yakında geliyor.',
    ctaP: 'Windows için geliştirilen kişisel AI işletim sistemi — 2026 yılının son çeyreğinde erken erişimle yayına alınacak.',

    // Footer
    footerDesc: 'Windows için kişisel AI işletim sistemi. 2026 Q4 lansmanı.',
    footerProduct: 'Ürün',
    footerDev: 'Geliştirici',
    footerCompany: 'Şirket',
    footerLinks: { docs:'Dökümantasyon', api:'Eklenti API', mcp:'MCP Desteği', github:'GitHub', about:'Hakkımızda', blog:'Blog', privacy:'Gizlilik Politikası', terms:'Kullanım Şartları' },
    footerCopy: 'Tüm hakları saklıdır.',
    footerBuilt: "Türkiye'de geliştiriliyor — Çıkış: 2026 Q4",

    // Visuals
    receiptTitle: 'Action Receipt — İşlem Makbuzu',
    nsTitle: 'Night Shift 2.0 — 03:47',
    nsTasks: ['Rakip Analizi (Rapor)','GitHub PR Tarama','Haber Özeti Üretimi','Sabah E-posta Taslağı','Haftalık KPI Raporu'],
    nsProgress: 'Genel İlerleme',
    msLabel: 'Aktif Mod Seç',
    msTitle: 'Model Seçici',
    models: [
      { name:'Private Mod', desc:'Llama 3.1 70B — Yerel, veri dışarı çıkmaz', badge:'PRIVATE' },
      { name:'Fast Mod',    desc:'Groq / Llama — Anlık yanıt, düşük gecikme',  badge:'FAST'    },
      { name:'Best Mod',    desc:'Claude 3.5 / GPT-4o — Maksimum akıl yürütme',badge:'BEST'    },
      { name:'Cheap Mod',   desc:'Gemini Flash — Düşük maliyet, yüksek hacim', badge:'CHEAP'   },
    ],
    clipTitle: 'Clipboard Intelligence',
    clipDetected: 'Pano Algılandı · Python Kodu',
    clipActions: ['Kodu Açıkla','Hata Bul ve Düzelt','Optimize Et','Dokümantasyon Yaz'],
    swarmTitle: 'Multi-Agent Swarm',
    swarmTask: '"shadcn/ui dashboard bileşeni yaz" → Router → Coder Agent → 247 satır, tests dahil',
    swarmLabel: 'SON GÖREV',
    agentLabels: ['Coder Agent','Researcher','Writer Agent'],
    memoryItems: [
      { key:'İsim',          val:'Burak (konuşmadan öğrenildi)' },
      { key:'Uzmanlık',      val:'Python, React, AI/ML'         },
      { key:'En Aktif Saat', val:'22:00 – 02:00'                },
      { key:'Tercih',        val:'Kısa ve öz yanıtlar'          },
    ],
  },

  en: {
    navFeatures: 'Features',
    navNightShift: 'Night Shift 2.0',
    navModel: 'Model Freedom',
    navPrivacy: 'Privacy',
    navPricing: 'Pricing',
    navLogin: 'Sign In',
    eyebrow: 'ARIA V3 — Launching Q4 2026',
    heroH1: "Your computer's\ncontrol center.",
    heroSub: 'Not a chatbot. An AI operating system. Summon any model, agent, or workflow in milliseconds — with a single shortcut.',
    heroCtaScroll: 'Explore Features',
    heroFeatures: 'All Features',
    releaseLabel: 'Expected Launch:',
    releaseSuffix: 'Windows 10 / 11',
    demoSuggestions: 'Suggestions',
    stat1n: 'Limitless', stat1l: 'Tools & Integrations',
    stat2n: 'Freedom',   stat2l: 'Model Selection (BYOK)',
    stat3n: 'Instant',   stat3l: 'Thought-speed Responses',
    stat4n: '100%',      stat4l: 'In Your Control',
    manifestoH: 'Stop chatting.\nStart commanding.',
    manifestoP: "Chatbots answer questions. ARIA actually gets things done — reads files, writes code, calls APIs, runs overnight tasks, and hands you a report in the morning.",
    manifestoCta: 'See How It Works',
    scrollLabel: 'One shortcut. Infinite power.',

    tBlock1Tag: 'Transparency',
    tBlock1H: ['See every ', 'step', '.'],
    tBlock1P: "ARIA never hides what it's doing. With Action Receipt, you see exactly which model was called, which files were read, and how many tokens were spent — in real time.",
    tBlock1Pills: ['Action Receipt','Live Logging','Token Tracking','Model Monitor'],
    tBlock2Tag: 'Night Shift 2.0',
    tBlock2H: ['ARIA works ', 'while you sleep', '.'],
    tBlock2P: 'Drop your task list before bed. Wake up to finished reports. Night Shift 2.0 manages autonomous task chains with self-verification and quality control built in.',
    tBlock2Pills: ['Autonomous Task Queue','Quality Control','Ready Templates','Morning Report'],
    tBlock3Tag: 'Model Freedom',
    tBlock3H: ['Never locked in ', 'to one provider', '.'],
    tBlock3P: 'Bring your own API keys (BYOK). Switch between Private, Fast, Best, or Cheap mode based on the task. Toggle local Ollama models with a single keystroke.',
    tBlock3Pills: ['BYOK Support','Local Ollama','OpenAI / Claude','Groq Fast API'],
    tBlock4Tag: 'Clipboard Intelligence',
    tBlock4H: ['Ctrl+C. ', 'ARIA is ready', '.'],
    tBlock4P: "Instantly analyzes whatever you copy — code, error logs, URLs. Via Command OS, apply 'Explain', 'Find Bugs', 'Optimize' or 'Write Docs' with a single key.",
    tBlock4Pills: ['Auto Detection','Code Analysis','Debugging','Smart Paste'],
    tBlock5Tag: 'Multi-Agent Ecosystem',
    tBlock5H: ['Not one bot. ', 'A specialist team', '.'],
    tBlock5P: 'The Router Agent breaks complex tasks into subtasks and dispatches them to Coder, Researcher, and Writer agents. Manage large projects with team-level discipline.',
    tBlock5Pills: ['Router Agent','Coder Agent','Researcher Agent','Writer Agent'],

    proTag: 'Proactive Intelligence',
    proH: ['ARIA notices things ', 'before you do', '.'],
    proP: 'Traditional AI tools wait to be asked. ARIA continuously analyzes your system, habits, and context — and acts before you even think to ask.',
    proCards: [
      { title: 'Context Awareness', desc: "Notices you've copied the same error log 3 times and offers a fix — without you typing a single word." },
      { title: 'Habit Mapping', desc: 'Knows you open GitHub at 9AM every day. Your PR summary is ready before your coffee.' },
      { title: 'Smart Scheduling', desc: 'Automatically fills your calendar gaps with Night Shift tasks. Quiet, non-intrusive, effective.' },
      { title: 'Proactive Alerts', desc: "A critical CVE drops in a library you're using. ARIA notifies you — before you ever search for it." },
      { title: 'Task Prediction', desc: 'When you open a new Git branch, ARIA reads the existing codebase and pre-lists what needs to be done.' },
      { title: 'Contextual Model Selection', desc: 'Short note? Cheap mode. Deep architecture review? Best mode. Switched automatically.' },
    ],

    intTag: 'Integrations',
    intH: ['Talks to ', 'every tool', '.'],
    intP: 'ARIA connects directly to the tools you use every day. Manage everything from a single window, without switching tabs.',
    intCats: [
      { label: 'Developer', items: ['GitHub','VS Code','Terminal','Docker','GitLab','Postman'] },
      { label: 'Productivity', items: ['Gmail','Google Calendar','Notion','Obsidian','Slack','Linear'] },
      { label: 'AI & Models', items: ['OpenAI','Anthropic','Groq','Ollama (Local)','Gemini','MiniMax'] },
      { label: 'System', items: ['File System','Clipboard','System Notifications','Windows Search','PowerShell','Registry'] },
    ],

    tmonLabel: 'Telegram Closed Beta · User Reviews',
    tmonH: 'What closed beta users said',

    wfH: 'Up and running in minutes',
    wfP: "No complex setup. Install, hit Alt+Space. That's it.",
    wfSteps: [
      { num:'01', title:'Install', desc:'A lightweight installer for Windows 10/11. One click, no background services required.' },
      { num:'02', title:'Add API Key', desc:'Use your own OpenAI, Anthropic, or Groq keys with the BYOK model.' },
      { num:'03', title:'Alt+Space', desc:'Command OS opens. Type in Turkish or English — whatever you need.' },
      { num:'04', title:'ARIA Works', desc:"It reads your files, browses the web, schedules Night Shift. Done." },
    ],

    privTag: 'Security & Privacy',
    privH: 'Your data belongs\nto you. Always.',
    privP: 'ARIA stores everything it learns about you — encrypted — on your local disk. You can see what it knows, and delete anything at any time.',
    privChecks: [
      'All memory data stored locally & encrypted',
      '100% offline mode with local Ollama',
      'Every API call visible in Action Receipt',
      'Profile data deleted with one click',
      'Zero telemetry or user tracking',
    ],
    privCardTitle: 'What ARIA Knows',
    privMemDelete: 'Delete',

    pricingBadge: 'Pricing · Q4 2026',
    pricingH: 'Simple, transparent pricing.',
    pricingSub: 'Pricing will be announced at Q4 2026 launch.',
    pricingTiers: [
      { name:'Free', price:'Free',  period:'Available at launch', desc:'The core AI OS experience for individual users.', feats:['Command OS (Alt+Space)','5 web searches/day','3 Conversation Threads','Basic Clipboard Detection','Proactive Alerts'], cta:'Q4 2026' },
      { name:'Pro',  price:'Soon',  period:'Pricing TBA · Q4 2026', desc:'Night Shift, full model freedom, unlimited memory, Multi-Agent access.', feats:['Night Shift 2.0','Unlimited Model Freedom (BYOK)','Knowledge Base & RAG','Full Action Receipt logging','Workflow Builder','Multi-Agent Swarm','Full Proactive Intelligence'], cta:'Q4 2026', featured:true },
      { name:'Team', price:'Soon',  period:'Enterprise pricing · Q4 2026', desc:'Shared memory, admin panel, and enterprise-grade security for teams.', feats:['All Pro features','Shared Knowledge Base','Team Workflows','Admin Dashboard','Cross-device Sync','SSO & Enterprise Security'], cta:'Q4 2026' },
    ],

    ctaBadge: 'Q4 2026 Launch',
    ctaH: 'ARIA is coming.',
    ctaP: 'A personal AI operating system for Windows — launching in Q4 2026 with early access.',

    footerDesc: 'A personal AI operating system for Windows. Launching Q4 2026.',
    footerProduct: 'Product',
    footerDev: 'Developer',
    footerCompany: 'Company',
    footerLinks: { docs:'Documentation', api:'Plugin API', mcp:'MCP Support', github:'GitHub', about:'About', blog:'Blog', privacy:'Privacy Policy', terms:'Terms of Service' },
    footerCopy: 'All rights reserved.',
    footerBuilt: 'Built in Turkey — Launching Q4 2026',

    receiptTitle: 'Action Receipt — Live Log',
    nsTitle: 'Night Shift 2.0 — 03:47',
    nsTasks: ['Competitor Analysis (Report)','GitHub PR Review','News Summary Generation','Morning Email Draft','Weekly KPI Report'],
    nsProgress: 'Overall Progress',
    msLabel: 'Select Active Mode',
    msTitle: 'Model Selector',
    models: [
      { name:'Private Mode', desc:'Llama 3.1 70B — Local, zero data egress', badge:'PRIVATE' },
      { name:'Fast Mode',    desc:'Groq / Llama — Instant responses, low latency', badge:'FAST' },
      { name:'Best Mode',    desc:'Claude 3.5 / GPT-4o — Maximum reasoning', badge:'BEST' },
      { name:'Cheap Mode',   desc:'Gemini Flash — Low cost, high volume', badge:'CHEAP' },
    ],
    clipTitle: 'Clipboard Intelligence',
    clipDetected: 'Clipboard Detected · Python Code',
    clipActions: ['Explain Code','Find & Fix Bugs','Optimize','Write Documentation'],
    swarmTitle: 'Multi-Agent Swarm',
    swarmTask: '"Build a shadcn/ui dashboard component" → Router → Coder Agent → 247 lines, tests included',
    swarmLabel: 'LATEST TASK',
    agentLabels: ['Coder Agent','Researcher','Writer Agent'],
    memoryItems: [
      { key:'Name',       val:'Burak (learned from conversation)' },
      { key:'Expertise',  val:'Python, React, AI/ML'              },
      { key:'Peak Hours', val:'10 PM – 2 AM'                      },
      { key:'Style Pref', val:'Short and concise answers'         },
    ],
  },
};

// ── Language Context ──────────────────────────────────────────────────────────
const LangCtx = createContext({ lang: 'en', t: T.en, setLang: () => {} });
const useLang = () => useContext(LangCtx);

// ── ARIA Logo ─────────────────────────────────────────────────────────────────
function AriaLogo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="white" fillOpacity="0.08"/>
      <rect x="10" y="10" width="28" height="28" rx="4" fill="none" stroke="white" strokeWidth="1.5"/>
      <line x1="10" y1="24" x2="38" y2="24" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
      <line x1="24" y1="10" x2="24" y2="38" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
      <circle cx="24" cy="24" r="4" fill="white"/>
    </svg>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ lang, setLang }) {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className="navbar" style={scrolled ? {borderBottomColor:'rgba(255,255,255,0.12)'} : {}}>
      <div className="wrap nav-inner">
        <a href="#" className="nav-logo"><AriaLogo size={22} />ARIA</a>
        <div className="nav-links">
          <a href="#features">{t.navFeatures}</a>
          <a href="#night-shift">{t.navNightShift}</a>
          <a href="#proactive">{t.navModel}</a>
          <a href="#privacy">{t.navPrivacy}</a>
          <a href="#pricing">{t.navPricing}</a>
        </div>
        <div className="nav-cta-group">
          <button className="lang-toggle btn btn-ghost" onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')} title="Switch language">
            <Languages size={13} />{lang === 'tr' ? 'EN' : 'TR'}
          </button>
          <div className="release-pill"><Clock size={11} />2026 Q4</div>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const { t, lang } = useLang();
  const [activeIdx, setActiveIdx] = useState(0);
  const [typed, setTyped] = useState('');

  const phrases = lang === 'tr'
    ? ['ARIA ne yapabilir?','GitHub PR analiz et','Night Shift başlat','Gmail özeti','Model değiştir']
    : ['What can ARIA do?','Analyze GitHub PR','Start Night Shift','Summarize emails','Switch to Private mode'];

  const demoItems = [
    { Icon: Moon,           title: lang==='tr'?'Night Shift 2.0 başlat'     :'Start Night Shift 2.0',    sub: lang==='tr'?'Otonom görev kuyruğu — gece çalışır'           :'Autonomous task queue — runs overnight',        badge:'Night Shift', color:'#0f0f1a' },
    { Icon: Database,       title: lang==='tr'?"Knowledge Base'i güncelle"   :'Update Knowledge Base',    sub: lang==='tr'?'Proje dosyalarını RAG hafızasına ekle'          :'Index project files into RAG memory',           badge:'Memory',      color:'#0f1a0f' },
    { Icon: GitPullRequest, title: lang==='tr'?'GitHub PR analiz et'         :'Analyze GitHub PR',        sub: lang==='tr'?'Coder Agent ile kod incelemesi yap'            :'Run code review with Coder Agent',              badge:'Code',        color:'#1a0f0f' },
    { Icon: Clipboard,      title: lang==='tr'?'Pano içeriğini analiz et'    :'Analyze clipboard',        sub: lang==='tr'?'Kopyalanan metni veya kodu anında işle'         :'Instantly process copied text or code',         badge:'Clipboard',   color:'#111111' },
    { Icon: Shuffle,        title: lang==='tr'?'Model değiştir → Private'    :'Switch model → Private',   sub: lang==='tr'?'Yerel Llama modeline geç, veri dışarı çıkmaz'   :'Use local Llama, zero data egress',             badge:'Model',       color:'#1a180f' },
    { Icon: Mail,           title: lang==='tr'?'Gmail özeti çıkar'            :'Summarize Gmail',          sub: lang==='tr'?'Son 24 saatin önemli e-postalarını listele'     :'List key emails from the last 24 hours',        badge:'Workflow',    color:'#0f1a1a' },
  ];

  useEffect(() => {
    let phrase = phrases[0]; let i = 0;
    const iv = setInterval(() => {
      if (i <= phrase.length) { setTyped(phrase.slice(0, i)); i++; }
      else { setTimeout(() => { i = 0; phrase = phrases[(phrases.indexOf(phrase) + 1) % phrases.length]; }, 1500); }
    }, 80);
    const rot = setInterval(() => setActiveIdx(p => (p + 1) % demoItems.length), 2000);
    return () => { clearInterval(iv); clearInterval(rot); };
  }, [lang]);

  return (
    <section className="hero">
      <div className="hero-gradient" />
      <div className="wrap" style={{position:'relative',zIndex:1}}>
        <a href="#closing-cta" className="hero-raycast-badge">
          <div className="rb-glow"></div>
          <div className="rb-content">
            <span className="rb-left"><Sparkles size={14} style={{marginRight: 6, color: '#ff6b6b'}} />{t.eyebrow}</span>
            <span className="rb-divider"></span>
            <span className="rb-right">{t.releaseLabel} {t.releaseSuffix} <ArrowRight size={14} style={{marginLeft: 6}}/></span>
          </div>
        </a>
        <h1>{t.heroH1.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</h1>
        <p className="hero-sub">{t.heroSub}</p>
        <div className="hero-actions">
          <a href="#features" className="btn btn-solid"><Sparkles size={15} />{t.heroCtaScroll}</a>
          <a href="#features" className="btn btn-ghost">{t.heroFeatures} <ArrowRight size={14} style={{marginLeft:4}} /></a>
        </div>

        <div className="command-demo">
          <div className="command-demo-outer">
            <div className="command-bar">
              <div className="command-bar-icon"><AriaLogo size={14} /></div>
              <input className="command-input" readOnly value={typed} placeholder={lang==='tr'?"ARIA'ya bir şey söyle...":'Tell ARIA something...'} />
              <div className="command-kbd"><span className="kbd">Alt</span><span className="kbd">Space</span></div>
            </div>
            <div className="command-results">
              <div className="command-section-label">{t.demoSuggestions}</div>
              {demoItems.map((item, i) => {
                const IC = item.Icon;
                return (
                  <div key={i} className={`command-item${i===activeIdx?' active':''}`} onMouseEnter={() => setActiveIdx(i)}>
                    <div className="command-item-icon" style={{background:item.color,borderRadius:8}}><IC size={16} color="rgba(255,255,255,0.7)" /></div>
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
  const { t } = useLang();
  return (
    <div className="stat-bar">
      <div className="wrap">
        {[{n:t.stat1n,l:t.stat1l},{n:t.stat2n,l:t.stat2l},{n:t.stat3n,l:t.stat3l},{n:t.stat4n,l:t.stat4l}].map((s,i) => (
          <div className="stat-item fade-up" key={i} style={{transitionDelay:i*0.1+'s'}}>
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
  const { t } = useLang();
  return (
    <section className="manifesto">
      <div className="wrap">
        <div className="fade-up">
          <h2>{t.manifestoH.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
          <p>{t.manifestoP}</p>
          <a href="#features" className="btn btn-ghost">{t.manifestoCta} <ChevronRight size={14} style={{marginLeft:4}} /></a>
        </div>
      </div>
    </section>
  );
}

// ── Feature Scroll ────────────────────────────────────────────────────────────
function FeatureScroll() {
  const { t, lang } = useLang();
  const chips = [
    { Icon: Terminal,      text: 'Alt+Space Command OS' },
    { Icon: Moon,          text: 'Night Shift 2.0' },
    { Icon: BrainCircuit,  text: lang==='tr'?'Proaktif Zeka':'Proactive Intelligence' },
    { Icon: UserCog,       text: lang==='tr'?'Otonom Profil':'Autonomous Profile' },
    { Icon: Clipboard,     text: 'Clipboard Intelligence' },
    { Icon: Shuffle,       text: lang==='tr'?'Model Özgürlüğü':'Model Freedom' },
    { Icon: Database,      text: 'Knowledge Base & RAG' },
    { Icon: Network,       text: 'Multi-Agent Swarm' },
    { Icon: FileText,      text: 'Action Receipt' },
    { Icon: ShieldCheck,   text: lang==='tr'?'Gizlilik':'Privacy' },
    { Icon: Workflow,      text: 'Workflow Builder' },
    { Icon: Search,        text: lang==='tr'?'Web Arama':'Web Search' },
    { Icon: Link2,         text: lang==='tr'?'Entegrasyonlar':'Integrations' },
    { Icon: GitBranch,     text: 'GitHub & Gmail' },
    { Icon: Mic,           text: lang==='tr'?'Sesli Komut':'Voice Command' },
    { Icon: Bot,           text: lang==='tr'?'Coder Agent':'Coder Agent' },
    { Icon: Repeat2,       text: lang==='tr'?'Akıllı Zamanlama':'Smart Scheduling' },
  ];
  const doubled = [...chips, ...chips];
  return (
    <div className="feature-scroll">
      <h2>{t.scrollLabel}</h2>
      <div className="scroll-track-wrap">
        <div className="scroll-inner">
          {doubled.map((c,i) => { const IC=c.Icon; return (
            <div className="feature-chip" key={i}>
              <IC size={14} style={{color:'rgba(255,255,255,0.5)',flexShrink:0}} />
              <span className="feature-chip-text">{c.text}</span>
            </div>
          ); })}
        </div>
      </div>
    </div>
  );
}

// ── Feature Block Visuals ─────────────────────────────────────────────────────
function ActionReceiptVisual() {
  const { t } = useLang();
  const rows = [
    { Icon:Cpu,         label:t.lang==='tr'?'Model Seçimi':'Model', val:'claude-3.5-sonnet', success:true,  active:true  },
    { Icon:FolderOpen,  label:t.lang==='tr'?'Okunan Dosya':'File',  val:'core/router.py (1.2kb)',            active:false },
    { Icon:Globe,       label:t.lang==='tr'?'Web İsteği':'Request', val:'api.github.com → 200',             active:false },
    { Icon:FileText,    label:t.lang==='tr'?'Çıktı':'Output',       val:'847 tokens · 1.2s',                active:false },
    { Icon:CheckCircle, label:t.lang==='tr'?'Kopyalandı':'Copied',  val:t.lang==='tr'?'Tamamlandı':'Done', success:true, active:false },
  ];
  return (
    <div className="feature-visual-card">
      <div className="visual-header"><div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div><span className="visual-title">{t.receiptTitle}</span></div>
      <div className="visual-body">
        <div className="receipt-rows">
          {rows.map((r,i)=>{ const IC=r.Icon; return (
            <div key={i} className={`receipt-row${r.active?' active':''}`}>
              <IC size={13} style={{color:'rgba(255,255,255,0.4)',flexShrink:0}} />
              <span className="r-label">{r.label}</span>
              <span className={`r-val${r.success?' success':''}`}>{r.val}</span>
            </div>
          );})}
        </div>
      </div>
    </div>
  );
}

function NightShiftVisual() {
  const { t } = useLang();
  const statuses = ['done','done','running','queued','queued'];
  const times = ['01:20','02:15','~03:50','—','—'];
  return (
    <div className="feature-visual-card">
      <div className="visual-header"><div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div><span className="visual-title">{t.nsTitle}</span></div>
      <div className="visual-body">
        <div className="ns-queue">
          {t.nsTasks.map((name,i) => <div className="ns-task" key={i}><span className={`ns-status ${statuses[i]}`}/><span className="ns-task-name">{name}</span><span className="ns-task-time">{times[i]}</span></div>)}
        </div>
        <div className="ns-progress" style={{marginTop:16}}>
          <div className="ns-progress-label"><span>{t.nsProgress}</span><span style={{color:'#34d399'}}>65%</span></div>
          <div className="ns-progress-bar"><div className="ns-progress-fill"/></div>
        </div>
      </div>
    </div>
  );
}

function ModelFreedomVisual() {
  const { t } = useLang();
  const [sel, setSel] = useState(0);
  const badges = ['badge-private','badge-fast','badge-best','badge-cheap'];
  return (
    <div className="feature-visual-card">
      <div className="visual-header"><div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div><span className="visual-title">{t.msTitle}</span></div>
      <div className="visual-body">
        <div className="model-selector-label">{t.msLabel}</div>
        <div className="model-grid">
          {t.models.map((m,i) => <div key={i} className={`model-card${sel===i?' selected':''}`} onClick={()=>setSel(i)}><div className="model-card-name">{m.name}</div><div className="model-card-desc">{m.desc}</div><div className={`model-badge ${badges[i]}`}>{m.badge}</div></div>)}
        </div>
      </div>
    </div>
  );
}

function ClipboardVisual() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const icons = [BookOpen, Zap, Activity, FileText];
  const kbds = ['↵','⌘E','⌘O','⌘D'];
  return (
    <div className="feature-visual-card">
      <div className="visual-header"><div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div><span className="visual-title">{t.clipTitle}</span></div>
      <div className="visual-body">
        <div className="clip-code">
          <div><span className="hl">def</span> <span className="hl2">analyze_profile</span>(msg: <span className="hl3">str</span>):</div>
          <div>    lang = _detect_lang(msg)</div>
          <div style={{color:'#555'}}>    # TODO: edge case fix</div>
          <div>    <span className="hl">return</span> {'{'}<span className="hl3">"lang"</span>: lang{'}'}</div>
        </div>
        <div className="clip-popup">
          <div className="clip-popup-title">{t.clipDetected}</div>
          {t.clipActions.map((a,i) => { const IC=icons[i]; return <div key={i} className={`clip-action${active===i?' active':''}`} onMouseEnter={()=>setActive(i)}><IC size={13} style={{color:'rgba(255,255,255,0.5)',flexShrink:0}}/><span className="clip-action-text">{a}</span><span className="clip-action-kbd">{kbds[i]}</span></div>; })}
        </div>
      </div>
    </div>
  );
}

function MultiAgentVisual() {
  const { t } = useLang();
  const agentIcons = [Code2, Search, FileText];
  return (
    <div className="feature-visual-card">
      <div className="visual-header"><div className="traffic-lights"><span className="tl-red"/><span className="tl-yellow"/><span className="tl-green"/></div><span className="visual-title">{t.swarmTitle}</span></div>
      <div className="visual-body">
        <div className="agent-diagram">
          <div className="agent-center"><Network size={26} color="rgba(255,255,255,0.8)" /></div>
          <div style={{display:'flex',alignItems:'flex-start',gap:40,marginTop:0}}>
            {t.agentLabels.map((label,i) => { const IC=agentIcons[i]; return (
              <div key={i} className="agent-line">
                <div className="agent-connector" />
                <div className="agent-node">
                  <div className="agent-node-icon"><IC size={20} color="rgba(255,255,255,0.6)" /></div>
                  <div className="agent-node-label">{label}</div>
                </div>
              </div>
            );})}
          </div>
        </div>
        <div style={{marginTop:20,padding:'12px 14px',background:'rgba(255,255,255,0.03)',borderRadius:8,border:'1px solid var(--border)'}}>
          <div style={{fontSize:11,color:'var(--text3)',marginBottom:8,fontWeight:600}}>{t.swarmLabel}</div>
          <div style={{fontSize:12,color:'#ccc'}}>{t.swarmTask.split('→').map((p,i,arr) => i < arr.length-1 ? <span key={i}>{p}→</span> : <span key={i} style={{color:'#34d399'}}>{p}</span>)}</div>
        </div>
      </div>
    </div>
  );
}

// ── Feature Blocks ────────────────────────────────────────────────────────────
function FeatureBlocks() {
  const { t } = useLang();
  const blocks = [
    { tag:t.tBlock1Tag, h:t.tBlock1H, p:t.tBlock1P, pills:t.tBlock1Pills, visual:<ActionReceiptVisual/>, flip:false },
    { tag:t.tBlock2Tag, h:t.tBlock2H, p:t.tBlock2P, pills:t.tBlock2Pills, visual:<NightShiftVisual/>,   flip:true,  id:'night-shift' },
    { tag:t.tBlock3Tag, h:t.tBlock3H, p:t.tBlock3P, pills:t.tBlock3Pills, visual:<ModelFreedomVisual/>, flip:false, id:'model' },
    { tag:t.tBlock4Tag, h:t.tBlock4H, p:t.tBlock4P, pills:t.tBlock4Pills, visual:<ClipboardVisual/>,    flip:true  },
    { tag:t.tBlock5Tag, h:t.tBlock5H, p:t.tBlock5P, pills:t.tBlock5Pills, visual:<MultiAgentVisual/>,   flip:false },
  ];
  return (
    <div id="features">
      {blocks.map((b,i) => (
        <div key={i} className={`feature-block${b.flip?' flip':''}`} id={b.id}>
          <div className="wrap">
            <div className="feature-text fade-up">
              <div className="feature-tag">{b.tag}</div>
              <h2>{b.h[0]}<em>{b.h[1]}</em>{b.h[2]}</h2>
              <p>{b.p}</p>
              <div className="feature-pills">{b.pills.map((p,j) => <span key={j} className="feature-pill">{p}</span>)}</div>
            </div>
            <div className="feature-visual fade-up delay-2">{b.visual}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Proactive Intelligence ────────────────────────────────────────────────────
const PRO_ICONS = [Eye, TrendingUp, Clock, Bell, GitBranch, Cpu];
function ProactiveSection() {
  const { t } = useLang();
  return (
    <section className="proactive-section" id="proactive">
      <div className="wrap">
        <div className="pro-header fade-up">
          <div className="feature-tag">{t.proTag}</div>
          <h2>{t.proH[0]}<em>{t.proH[1]}</em>{t.proH[2]}</h2>
          <p className="pro-desc">{t.proP}</p>
        </div>
        <div className="pro-grid">
          {t.proCards.map((card, i) => {
            const IC = PRO_ICONS[i];
            return (
              <div key={i} className="pro-card fade-up" style={{transitionDelay: (i % 3) * 0.1 + 's'}}>
                <div className="pro-card-icon"><IC size={20} color="rgba(255,255,255,0.7)" /></div>
                <h3 className="pro-card-title">{card.title}</h3>
                <p className="pro-card-desc">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Integrations ──────────────────────────────────────────────────────────────
const CAT_ICONS = [Code2, Workflow, BrainCircuit, PocketKnife];
function IntegrationsSection() {
  const { t } = useLang();
  return (
    <section className="integrations-section" id="integrations">
      <div className="wrap">
        <div className="int-header fade-up">
          <div className="feature-tag">{t.intTag}</div>
          <h2>{t.intH[0]}<em>{t.intH[1]}</em>{t.intH[2]}</h2>
          <p className="int-desc">{t.intP}</p>
        </div>
        <div className="int-grid">
          {t.intCats.map((cat, i) => {
            const IC = CAT_ICONS[i];
            return (
              <div key={i} className="int-cat fade-up" style={{transitionDelay: i * 0.1 + 's'}}>
                <div className="int-cat-header">
                  <IC size={16} color="rgba(255,255,255,0.5)" />
                  <span className="int-cat-label">{cat.label}</span>
                </div>
                <div className="int-items">
                  {cat.items.map((item, j) => (
                    <div key={j} className="int-item">{item}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
const TESTIMONIALS_TR = [
  { quote: 'Night Shift özelliği olmasa inanmam zor olurdu. Gece 02\'de kapatıp yatıyorum, sabah uyandığımda rakip analizi hazır. Bu kadar basit anlatayım.', name: 'Burak A.', role: 'Backend Developer · İstanbul' },
  { quote: 'Sıradan bir kullanıcıyım ama ARIA sayesinde bilgisayarıma hükmediyorum. Dosya bulma ve internetten araştırma yapma hızı inanılmaz. Adeta kişisel asistanım oldu.', name: 'Zeynep K.', role: 'Üniversite Öğrencisi · Ankara' },
  { quote: 'BYOK desteği oyun değiştirici. Anthropic anahtarımı ekledim, şirkete ait verileri yerel Ollama\'ya veriyorum. Güvenlik ekibi de mutlu, ben de.', name: 'Mert D.', role: 'CTO · SaaS Startup, İzmir' },
  { quote: 'Action Receipt olmasaydı arka planda ne döndüğünü anlamazdım. Her şeyin şeffaf olması, projelerimde kodun nasıl çalıştığını anlamamı çok hızlandırdı.', name: 'Selin A.', role: 'Yazılım Mühendisliği Öğrencisi · ODTÜ' },
  { quote: 'Multi-agent swarm\'ı test ettim: "şu proje için teknik döküman hazırla" dedim. 18 dakikada 12 sayfalık döküman çıktı. Normalde bunu yazmak günümü alırdı.', name: 'Emre Y.', role: 'Lead Engineer · Fintech' },
  { quote: 'Türkçe komutlara verdiği yanıtların kalitesi beni şaşırttı. AI araçlarının çoğunda Türkçe "idare eder" seviyesindeyken ARIA sanki ana dili gibi konuşuyor.', name: 'Ayşe T.', role: 'AI Meraklısı & İçerik Üreticisi' },
];
const TESTIMONIALS_EN = [
  { quote: "Night Shift is the only reason I leave my laptop on overnight now. Queued 5 research tasks before bed, woke up to finished reports. My mornings are completely different.", name: 'Marcus W.', role: 'Senior Software Engineer · Berlin' },
  { quote: "The model switching is a lifesaver for my university projects. I use Fast mode for quick lookups, and Best mode when I need Claude-level reasoning for complex assignments.", name: 'Sarah C.', role: 'Computer Science Student · Stanford' },
  { quote: "I was skeptical about the clipboard detection. Two weeks in — I genuinely miss it when I'm on another machine. It just becomes part of how you code.", name: "Ryan O'B.", role: 'Full-Stack Developer · Dublin' },
  { quote: "The Action Receipt transparency feature alone sets this apart from every other AI tool I've used. I know exactly what's happening under the hood at all times.", name: 'Alex R.', role: 'DevOps Engineer · Madrid' },
  { quote: "We tested this on a weekend project — shared Knowledge Base is the real deal. My friend and I use the same context without having to re-explain the codebase.", name: 'Lena M.', role: 'Indie Hacker & AI Enthusiast' },
  { quote: "Ran a multi-agent research task on a competitor landscape. Router split it into 6 subtasks, agents ran in parallel. Got back a structured report in under 20 minutes.", name: 'James P.', role: 'AI Researcher · Singapore' },
];
const T_ICONS_VISUAL = [Moon, Clipboard, ShieldCheck, Eye, Code2, Search, Database, Shuffle, Network, Zap, FileText, Globe];
function Testimonials() {
  const { t, lang } = useLang();
  const data = lang === 'tr' ? TESTIMONIALS_TR : TESTIMONIALS_EN;
  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-label">{t.tmonLabel}</div>
        <h2>{t.tmonH}</h2>
        <div className="testimonials-grid">
          {data.map((item, i) => {
            const IC = T_ICONS_VISUAL[i % T_ICONS_VISUAL.length];
            return (
              <div className="testimonial-card fade-up" key={i} style={{transitionDelay:(i%3)*0.1+'s'}}>
                <p className="t-quote">"{item.quote}"</p>
                <div className="t-author">
                  <div className="t-avatar"><IC size={15} color="rgba(255,255,255,0.6)" /></div>
                  <div>
                    <div className="t-name">{item.name}</div>
                    <div className="t-role">{item.role}</div>
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
function WorkflowSection() {
  const { t } = useLang();
  const icons = [Server, SlidersHorizontal, Terminal, Zap];
  return (
    <section className="workflow">
      <div className="wrap">
        <h2>{t.wfH}</h2>
        <p>{t.wfP}</p>
        <div className="workflow-steps">
          {t.wfSteps.map((s,i) => { const IC=icons[i]; return (
            <div className="workflow-step fade-up" key={i} style={{transitionDelay:i*0.1+'s'}}>
              <div className="step-num">{s.num}</div>
              <div className="step-icon"><IC size={28} color="rgba(255,255,255,0.7)" /></div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
              {i<3 && <div className="step-connector"><ArrowRight size={14} /></div>}
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}

// ── Privacy ───────────────────────────────────────────────────────────────────
function PrivacySection() {
  const { t } = useLang();
  const memIcons = [UserCog, Code2, Clock, MessageSquare];
  return (
    <section className="privacy" id="privacy">
      <div className="wrap">
        <div className="privacy-text fade-up">
          <div className="feature-tag">{t.privTag}</div>
          <h2>{t.privH.split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}</h2>
          <p>{t.privP}</p>
          <div className="privacy-checks">
            {t.privChecks.map((c,i) => <div className="privacy-check" key={i}><div className="check-ico"><CheckCircle size={12} color="#34d399" /></div><div className="check-label">{c}</div></div>)}
          </div>
        </div>
        <div className="privacy-visual fade-up delay-2">
          <div className="privacy-card">
            <div className="privacy-card-title">{t.privCardTitle}</div>
            {t.memoryItems.map((m,i) => { const IC=memIcons[i]; return (
              <div className="memory-item" key={i}>
                <IC size={16} color="rgba(255,255,255,0.4)" />
                <div><div className="memory-key">{m.key}</div><div className="memory-val">{m.val}</div></div>
                <div className="memory-delete">{t.privMemDelete}</div>
              </div>
            );})}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const { t } = useLang();
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="fade-up">
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:16}}>
            <Clock size={14} color="var(--text3)" />
            <span style={{fontSize:12,color:'var(--text3)',fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase'}}>{t.pricingBadge}</span>
          </div>
          <h2>{t.pricingH}</h2>
          <p className="pricing-sub">{t.pricingSub}</p>
        </div>
        <div className="pricing-grid">
          {t.pricingTiers.map((tier,i) => (
            <div key={i} className={`pricing-card${tier.featured?' featured':''} fade-up`} style={{transitionDelay:i*0.1+'s'}}>
              {tier.featured && <div className="featured-badge">{t.lang==='tr'?'En Popüler':'Most Popular'}</div>}
              <div className="tier-name">{tier.name}</div>
              <div className="tier-price" style={tier.price==='Yakında'||tier.price==='Soon'?{fontSize:26,paddingTop:8}:{}}>{tier.price}</div>
              <div className="tier-period">{tier.period}</div>
              <div className="tier-desc">{tier.desc}</div>
              <ul className="tier-feats">{tier.feats.map((f,j) => <li key={j}>{f}</li>)}</ul>
              <div className="tier-cta-label">
                <Clock size={12} style={{marginRight:6}} />{tier.cta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Closing CTA ───────────────────────────────────────────────────────────────
function ClosingCTA() {
  const { t } = useLang();
  return (
    <section className="cta-banner" id="closing-cta">
      <div className="wrap">
        <div className="fade-up">
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,marginBottom:20}}>
            <Clock size={14} color="rgba(255,255,255,0.4)" />
            <span style={{fontSize:12,color:'var(--text3)',fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase'}}>{t.ctaBadge}</span>
          </div>
          <h2>{t.ctaH}</h2>
          <p>{t.ctaP}</p>
          <div className="cta-release-info">
            <div className="cta-badge-row">
              <span className="cta-badge-item"><CheckCircle size={13} style={{marginRight:6}} />Windows 10 / 11</span>
              <span className="cta-badge-item"><CheckCircle size={13} style={{marginRight:6}} />Q4 2026</span>
              <span className="cta-badge-item"><CheckCircle size={13} style={{marginRight:6}} />{t.lang==='tr'?'Türkçe & İngilizce':'Turkish & English'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo"><AriaLogo size={20} /><span>ARIA</span></div>
            <p>{t.footerDesc}</p>
          </div>
          <div className="footer-col">
            <h5>{t.footerProduct}</h5>
            <a href="#features">{t.navFeatures}</a>
            <a href="#night-shift">{t.navNightShift}</a>
            <a href="#proactive">{t.proTag || 'Proactive'}</a>
            <a href="#privacy">{t.navPrivacy}</a>
            <a href="#pricing">{t.navPricing}</a>
          </div>
          <div className="footer-col">
            <h5>{t.footerDev}</h5>
            <a href="#">{t.footerLinks.docs}</a>
            <a href="#">{t.footerLinks.api}</a>
            <a href="#">{t.footerLinks.mcp}</a>
            <a href="#">{t.footerLinks.github}</a>
          </div>
          <div className="footer-col">
            <h5>{t.footerCompany}</h5>
            <a href="#">{t.footerLinks.about}</a>
            <a href="#">{t.footerLinks.blog}</a>
            <a href="#">{t.footerLinks.privacy}</a>
            <a href="#">{t.footerLinks.terms}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} ARIA AI. {t.footerCopy}</span>
          <div className="footer-logo"><AriaLogo size={18} /><span>ARIA V3</span></div>
          <span className="footer-copy">{t.footerBuilt}</span>
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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState('en');
  const t = { ...T[lang], lang };
  useReveal();
  return (
    <LangCtx.Provider value={{ lang, t, setLang }}>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero />
        <Stats />
        <Manifesto />
        <FeatureScroll />
        <FeatureBlocks />
        <ProactiveSection />
        <IntegrationsSection />
        <Testimonials />
        <WorkflowSection />
        <PrivacySection />
        <Pricing />
        <ClosingCTA />
      </main>
      <Footer />
    </LangCtx.Provider>
  );
}
