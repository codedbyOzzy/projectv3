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
  Link2, PocketKnife, Repeat2, Bot,
  MessageCircle, Send, Radio, Tv, CalendarDays, HeartPulse,
  PanelRight, History, Music2, Gamepad2, ShieldAlert, MonitorPlay,
  SquarePen, Layers, MessagesSquare, Save
} from 'lucide-react';
import './index.css';

import imgWidget from './assets/screenshots/widget.png';
import imgCommand from './assets/screenshots/command_bar.png';
import imgChat from './assets/screenshots/chat.png';
import imgNightShift from './assets/screenshots/night_shift.png';
import imgWorkflows from './assets/screenshots/workflows.png';
import imgKazePlayer from './assets/screenshots/kazeplayer.jpg';
import imgWebAssistant from './assets/screenshots/aria_web_assistant.png';

// ── i18n ──────────────────────────────────────────────────────────────────────
const T = {
  tr: {
    navFeatures: 'Özellikler',
    navPartners: 'Partnerler',
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
    stat1n: '18+',      stat1l: 'Yerleşik Araç',
    stat2n: 'Özgür',    stat2l: 'Model Seçimi (BYOK)',
    stat3n: '%100',     stat3l: 'Yerel & Offline (Ollama)',
    stat4n: 'TR + EN',  stat4l: 'Tam Çift Dil Destek',
    hlTag: 'ÖNE ÇIKANLAR',
    hlH: ['Bir asistandan ', 'fazlası', '.'],
    hlCards: [
      { title:'ARIA Intelligence', desc:"Web sayfasında, WhatsApp ve Telegram'da yapılandırılmış zekâ — bulutta ya da tamamen cihazında.", href:'#ask-aria' },
      { title:'Canvas', desc:'Kod ve dokümanları sohbetin yanında canlı, düzenlenebilir bir tuvalde birlikte üret.', href:'#canvas' },
      { title:'Night Shift 2.0', desc:'Siz uyurken otonom görev zincirleri çalışır; sabah rapor hazır.', href:'#night-shift' },
      { title:'Model Özgürlüğü', desc:'BYOK · Private/Fast/Best/Cheap modları · yerel Ollama tek tuşla.', href:'#model' },
      { title:'Multi-Agent Swarm', desc:'Router görevi böler, uzman ajanlara dağıtır.', href:'#features' },
      { title:'Proaktif Zeka', desc:'Sen sormadan bağlamı analiz eder, önceden harekete geçer.', href:'#proactive' },
    ],
    showcaseH: 'Arayüzü Keşfedin',
    showcaseSub: 'Karanlık, minimalist ve pürüzsüz. Sadece işinize odaklanmanız için özel olarak tasarlandı.',
    showcaseTabs: ['Komut Çubuğu', 'Sohbet', 'Night Shift', 'Rutinler', 'Widget'],
    manifestoH: 'Sohbet etmekle yetinmeyin.\nBilgisayarınızı yönetin.',
    manifestoP: "Chatbot'lar sorulara cevap verir. ARIA ise gerçekten iş yapar — dosya okur, kod yazar, API çağırır, gece görevler kurar ve sabah size rapor sunar.",
    manifestoCta: 'Nasıl Çalışır?',
    scrollLabel: 'Bir kısayol. Sonsuz güç.',
    partnersBadge: 'İŞ ORTAKLIĞI',
    partnersH: ['ARIA × ', 'KazePlayer', ' Entegrasyonu'],
    partnersP: "Resmi iş ortağımız KazePlay ARIA'ya gömülü olarak geldi. Kullanıcılar anime içeriklerine ayrı bir tarayıcı veya uygulama açmadan, doğrudan ARIA içinden erişebiliyor. KazePlay × ARIA entegrasyonu sayesinde platform ARIA'nın içinde sorunsuz çalışıyor — partnerliğimizin ilk somut ürünü.",

    // Ask ARIA — Intelligence
    aiOver: 'TANIŞTIRIYORUZ',
    aiTitle: 'ARIA Intelligence',
    aiSub: 'Bir kısayol uzaklığında zekâ. Web sayfasında, WhatsApp\'ta, Telegram\'da — seçtiğin içeriği ARIA anlar, yapılandırır ve yanıtlar. Bulutta ya da tamamen cihazında.',
    aiModeCloud: 'Bulut · Groq',
    aiModeLocal: 'Cihazda · Ollama',
    aiShotCaption: 'Ask ARIA — herhangi bir web sayfasında yapılandırılmış özet',
    aiCards: [
      { title: "Web'de yapılandırılmış zekâ", desc: 'Herhangi bir sayfada Ask ARIA. LLM, içeriği Genel Bakış, Önemli Noktalar ve Zaman Çizelgesi olan yapılandırılmış bir karta dönüştürür — ham metin değil, anlam.' },
      { title: 'WhatsApp üzerinde', desc: "Sohbeti gönderene göre okur, okunmamışları özetler, yanıt taslağı üretir. Sen onayla, ARIA göndersin." },
      { title: 'Telegram üzerinde', desc: "Aynı paylaşılan Ask ARIA katmanı Telegram'da da çalışır. Bağlamı kaybetmeden konuşmaları yönet." },
    ],

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
    tBlock6Tag: 'Canvas · Yeni',
    tBlock6H: ['Sohbet değil, ', 'birlikte üretim', '.'],
    tBlock6P: "ARIA uzun bir kod ya da doküman ürettiğinde balona sıkışmaz — sohbetin yanında canlı, düzenlenebilir bir tuval açar. 'Şu fonksiyonu değiştir' de, yerinde güncellesin. Versiyon geçmişi, geri alma ve tek tuşla diske kaydetme dahil.",
    tBlock6Pills: ['Canlı Tuval','Yerinde Revize','Versiyon Geçmişi','Diske Kaydet'],
    canvasVisualTitle: 'Canvas — todo_list.py',
    canvasRevisePlaceholder: "ARIA'dan değişiklik iste…",

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
    intTag: 'Bağlı Dünya',
    intH: ['Tüm dünyanız, ', 'tek pencerede', '.'],
    intP: 'ARIA mesajlaşmadan medyaya, koddan modellere kadar günlük kullandığınız araçlara doğrudan bağlanır. Sekmeler arasında gezinmeden, ayrı uygulamalar açmadan her şeyi ARIA içinden yönetin.',
    intCats: [
      { label: 'İletişim', items: ['WhatsApp','Telegram','Discord','Gmail'] },
      { label: 'Medya & Eğlence', items: ['YouTube Music','KazePlayer','Twitch','Kick'] },
      { label: 'Üretkenlik', items: ['Takvim','Notlar','Hatırlatıcılar','Web Arama','Hava Durumu'] },
      { label: 'Geliştirici & Sistem', items: ['GitHub','PowerShell / Terminal','Dosya Arama','Uygulama Başlatıcı','Ekran Görüşü','Self-Check'] },
      { label: 'AI Modelleri', items: ['OpenAI','Anthropic (Claude)','Groq','Ollama (Yerel)','Gemini'] },
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
      { name:'Free', price:'Ücretsiz', period:'Çıkışta mevcut', desc:'Bireysel kullanım için temel AI işletim sistemi deneyimi.', feats:['Komut Çubuğu (Alt+Space)','Sohbet + Markdown & Kod','Günlük 5 web araması','Temel Clipboard Algılama','Proaktif Bildirimler'], cta:'2026 Q4' },
      { name:'Pro',  price:'Yakında', period:'Fiyat açıklanacak · 2026 Q4', desc:'Night Shift, Canvas, tam model özgürlüğü, sınırsız bellek ve Multi-Agent erişimi.', feats:['Night Shift 2.0','Canvas / Artifact Çalışma Alanı','Sınırsız Model Özgürlüğü (BYOK)','Bilgi Tabanı & Hafıza','Action Receipt tam loglama','Rutinler (Workflow)','Multi-Agent Swarm','Proaktif Zeka Tam Erişim'], cta:'2026 Q4', featured:true },
      { name:'Team', price:'Yakında', period:'Kurumsal fiyatlandırma · 2026 Q4', desc:'Ekipler için ortak hafıza, yönetici paneli ve kurumsal güvenlik.', feats:["Tüm Pro özellikleri",'Paylaşılan Bilgi Tabanı','Ekip Rutinleri','Admin Denetim Paneli','Cihazlar Arası Senkron','SSO & Kurumsal güvenlik'], cta:'2026 Q4' },
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
    footerLinks: { docs:'Dökümantasyon', api:'Eklenti API', github:'GitHub', about:'Hakkımızda', blog:'Blog', privacy:'Gizlilik Politikası', terms:'Kullanım Şartları' },
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
      { name:'Private Mod', desc:'Yerel Ollama — veri cihazdan çıkmaz',        badge:'PRIVATE' },
      { name:'Fast Mod',    desc:'Groq · Llama 3.3 70B — anlık yanıt',          badge:'FAST'    },
      { name:'Best Mod',    desc:'Claude Opus 4 / GPT — en güçlü akıl yürütme', badge:'BEST'    },
      { name:'Cheap Mod',   desc:'Gemini Flash — düşük maliyet, yüksek hacim',  badge:'CHEAP'   },
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
    navPartners: 'Partners',
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
    stat1n: '18+',      stat1l: 'Built-in Tools',
    stat2n: 'Freedom',  stat2l: 'Model Selection (BYOK)',
    stat3n: '100%',     stat3l: 'Local & Offline (Ollama)',
    stat4n: 'TR + EN',  stat4l: 'Full Bilingual Support',
    hlTag: 'HIGHLIGHTS',
    hlH: ['More than ', 'an assistant', '.'],
    hlCards: [
      { title:'ARIA Intelligence', desc:'Structured intelligence on the web, WhatsApp and Telegram — in the cloud or entirely on-device.', href:'#ask-aria' },
      { title:'Canvas', desc:'Build code and documents together in a live, editable canvas beside the chat.', href:'#canvas' },
      { title:'Night Shift 2.0', desc:'Autonomous task chains run while you sleep; a report is ready by morning.', href:'#night-shift' },
      { title:'Model Freedom', desc:'BYOK · Private/Fast/Best/Cheap modes · local Ollama in one keystroke.', href:'#model' },
      { title:'Multi-Agent Swarm', desc:'The Router splits a task and dispatches it to specialist agents.', href:'#features' },
      { title:'Proactive Intelligence', desc:'Analyzes context and acts before you even ask.', href:'#proactive' },
    ],
    showcaseH: 'A Look at ARIA',
    showcaseSub: 'Dark, minimalist, and frictionless. Designed to stay out of your way and let you focus.',
    showcaseTabs: ['Command Bar', 'Chat', 'Night Shift', 'Routines', 'Widget'],
    manifestoH: 'Stop chatting.\nStart commanding.',
    manifestoP: "Chatbots answer questions. ARIA actually gets things done — reads files, writes code, calls APIs, runs overnight tasks, and hands you a report in the morning.",
    manifestoCta: 'See How It Works',
    scrollLabel: 'One shortcut. Infinite power.',
    partnersBadge: 'PARTNERSHIP',
    partnersH: ['ARIA × ', 'KazePlayer', ' Integration'],
    partnersP: 'Our official partner KazePlay comes embedded inside ARIA. Users can access anime content directly within ARIA, without opening a separate browser or app. Thanks to the KazePlay × ARIA integration, the platform works seamlessly inside ARIA — the first concrete product of our partnership.',

    // Ask ARIA — Intelligence
    aiOver: 'INTRODUCING',
    aiTitle: 'ARIA Intelligence',
    aiSub: 'Intelligence, one shortcut away. On a web page, in WhatsApp, in Telegram — ARIA understands, structures, and answers over whatever you select. In the cloud, or entirely on your device.',
    aiModeCloud: 'Cloud · Groq',
    aiModeLocal: 'On-device · Ollama',
    aiShotCaption: 'Ask ARIA — a structured summary on any web page',
    aiCards: [
      { title: 'Structured intelligence on the web', desc: 'Ask ARIA on any page. The LLM turns content into a structured card — Overview, Key Facts, and a Timeline. Not raw text, meaning.' },
      { title: 'On top of WhatsApp', desc: 'Reads the chat by sender, summarizes unread messages, drafts a reply. You approve, ARIA sends.' },
      { title: 'On top of Telegram', desc: 'The same shared Ask ARIA layer works in Telegram too. Manage conversations without losing context.' },
    ],

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
    tBlock6Tag: 'Canvas · New',
    tBlock6H: ['Not a bubble. ', 'A workspace', '.'],
    tBlock6P: "When ARIA produces a long block of code or a document, it doesn't cram it into a chat bubble — it opens a live, editable canvas beside the chat. Say 'change this function' and it updates in place. Version history, undo, and one-click save to disk included.",
    tBlock6Pills: ['Live Canvas','In-place Revise','Version History','Save to Disk'],
    canvasVisualTitle: 'Canvas — todo_list.py',
    canvasRevisePlaceholder: 'Ask ARIA to revise…',

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

    intTag: 'Connected World',
    intH: ['Your whole world, ', 'one window', '.'],
    intP: 'From messaging to media, code to models, ARIA connects directly to the tools you use every day. Manage everything from inside ARIA — no tab-hopping, no separate apps.',
    intCats: [
      { label: 'Communication', items: ['WhatsApp','Telegram','Discord','Gmail'] },
      { label: 'Media & Fun', items: ['YouTube Music','KazePlayer','Twitch','Kick'] },
      { label: 'Productivity', items: ['Calendar','Notes','Reminders','Web Search','Weather'] },
      { label: 'Developer & System', items: ['GitHub','PowerShell / Terminal','File Search','App Launcher','Screen Vision','Self-Check'] },
      { label: 'AI Models', items: ['OpenAI','Anthropic (Claude)','Groq','Ollama (Local)','Gemini'] },
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
      { name:'Free', price:'Free',  period:'Available at launch', desc:'The core AI OS experience for individual users.', feats:['Command Bar (Alt+Space)','Chat + Markdown & Code','5 web searches/day','Basic Clipboard Detection','Proactive Alerts'], cta:'Q4 2026' },
      { name:'Pro',  price:'Soon',  period:'Pricing TBA · Q4 2026', desc:'Night Shift, Canvas, full model freedom, unlimited memory, Multi-Agent access.', feats:['Night Shift 2.0','Canvas / Artifact Workspace','Unlimited Model Freedom (BYOK)','Knowledge Base & Memory','Full Action Receipt logging','Routines (Workflows)','Multi-Agent Swarm','Full Proactive Intelligence'], cta:'Q4 2026', featured:true },
      { name:'Team', price:'Soon',  period:'Enterprise pricing · Q4 2026', desc:'Shared memory, admin panel, and enterprise-grade security for teams.', feats:['All Pro features','Shared Knowledge Base','Team Routines','Admin Dashboard','Cross-device Sync','SSO & Enterprise Security'], cta:'Q4 2026' },
    ],

    ctaBadge: 'Q4 2026 Launch',
    ctaH: 'ARIA is coming.',
    ctaP: 'A personal AI operating system for Windows — launching in Q4 2026 with early access.',

    footerDesc: 'A personal AI operating system for Windows. Launching Q4 2026.',
    footerProduct: 'Product',
    footerDev: 'Developer',
    footerCompany: 'Company',
    footerLinks: { docs:'Documentation', api:'Plugin API', github:'GitHub', about:'About', blog:'Blog', privacy:'Privacy Policy', terms:'Terms of Service' },
    footerCopy: 'All rights reserved.',
    footerBuilt: 'Built in Turkey — Launching Q4 2026',

    receiptTitle: 'Action Receipt — Live Log',
    nsTitle: 'Night Shift 2.0 — 03:47',
    nsTasks: ['Competitor Analysis (Report)','GitHub PR Review','News Summary Generation','Morning Email Draft','Weekly KPI Report'],
    nsProgress: 'Overall Progress',
    msLabel: 'Select Active Mode',
    msTitle: 'Model Selector',
    models: [
      { name:'Private Mode', desc:'Local Ollama — data never leaves your device', badge:'PRIVATE' },
      { name:'Fast Mode',    desc:'Groq · Llama 3.3 70B — instant responses', badge:'FAST' },
      { name:'Best Mode',    desc:'Claude Opus 4 / GPT — maximum reasoning', badge:'BEST' },
      { name:'Cheap Mode',   desc:'Gemini Flash — low cost, high volume', badge:'CHEAP' },
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
          <a href="#partners">{t.navPartners}</a>
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
    { Icon: PanelRight,     title: lang==='tr'?'Tuvalde kod üret'            :'Build code in Canvas',     sub: lang==='tr'?'Düzenlenebilir tuvalde yaz, yerinde revize et'   :'Write in an editable canvas, revise in place',  badge:'Canvas',      color:'#0f0f1a' },
    { Icon: GitPullRequest, title: lang==='tr'?'GitHub PR analiz et'         :'Analyze GitHub PR',        sub: lang==='tr'?'Coder Agent ile kod incelemesi yap'            :'Run code review with Coder Agent',              badge:'Code',        color:'#1a0f0f' },
    { Icon: Clipboard,      title: lang==='tr'?'Pano içeriğini analiz et'    :'Analyze clipboard',        sub: lang==='tr'?'Kopyalanan metni veya kodu anında işle'         :'Instantly process copied text or code',         badge:'Clipboard',   color:'#111111' },
    { Icon: Shuffle,        title: lang==='tr'?'Model değiştir → Private'    :'Switch model → Private',   sub: lang==='tr'?'Yerel Ollama modeline geç, veri dışarı çıkmaz'  :'Use local Ollama, zero data egress',            badge:'Model',       color:'#1a180f' },
    { Icon: MessageCircle,  title: lang==='tr'?'WhatsApp sohbetini özetle'   :'Summarize WhatsApp chat',  sub: lang==='tr'?'Okunmamış mesajları tek bakışta yakala'         :'Catch up on unread messages at a glance',       badge:'WhatsApp',    color:'#0f1a14' },
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

// ── Highlights (Apple-stili bento) ────────────────────────────────────────────
const HL_ICONS = [Sparkles, PanelRight, Moon, Shuffle, Network, BrainCircuit];
function HighlightsSection() {
  const { t } = useLang();
  return (
    <section className="hl-section" id="highlights">
      <div className="wrap">
        <div className="hl-head fade-up">
          <div className="feature-tag">{t.hlTag}</div>
          <h2>{t.hlH[0]}<em>{t.hlH[1]}</em>{t.hlH[2]}</h2>
        </div>
        <div className="hl-bento">
          {t.hlCards.map((c, i) => {
            const IC = HL_ICONS[i];
            return (
              <a key={i} href={c.href} className={`hl-card fade-up hl-c${i}`} style={{transitionDelay:(i*0.06)+'s'}}>
                <div className="hl-card-icon"><IC size={22} /></div>
                <div className="hl-card-body">
                  <h3 className="hl-card-title">{c.title}</h3>
                  <p className="hl-card-desc">{c.desc}</p>
                </div>
                <span className="hl-card-arrow"><ArrowRight size={16} /></span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Showcase ──────────────────────────────────────────────────────────────────
function Showcase() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState(0);
  const images = [imgCommand, imgChat, imgNightShift, imgWorkflows, imgWidget];

  return (
    <section className="showcase" id="showcase">
      <div className="wrap">
        <div className="showcase-header fade-up">
          <h2>{t.showcaseH}</h2>
          <p>{t.showcaseSub}</p>
        </div>
        
        <div className="showcase-tabs fade-up">
          {t.showcaseTabs.map((tab, i) => (
            <button 
              key={i} 
              className={`sc-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="showcase-window-wrapper fade-up">
           <div className="sc-window">
             <img src={images[activeTab]} alt="ARIA Interface" />
           </div>
           <div className="sc-glow" />
        </div>
      </div>
    </section>
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

// ── Partners Section ──────────────────────────────────────────────────────────
function PartnersSection() {
  const { t } = useLang();
  return (
    <section className="partners-section" id="partners">
      <div className="wrap">
        <div className="partners-grid">
          <div className="partners-text fade-up">
            <div className="feature-tag">{t.partnersBadge}</div>
            <h2>
              {t.partnersH[0]}
              <em>{t.partnersH[1]}</em>
              {t.partnersH[2]}
            </h2>
            <p className="partners-desc">{t.partnersP}</p>
            <div className="partners-meta">
              <span className="meta-badge"><Sparkles size={12} /> {t.lang === 'tr' ? 'İlk Somut Ürün' : 'First Concrete Product'}</span>
              <span className="meta-badge"><Cpu size={12} /> {t.lang === 'tr' ? 'Kusursuz Entegrasyon' : 'Seamless Integration'}</span>
            </div>
          </div>
          
          <div className="partners-visual fade-up delay-2">
            <div className="partners-window-wrapper">
              <div className="partners-window">
                <img src={imgKazePlayer} alt="ARIA x KazePlayer Integration" />
              </div>
              <div className="partners-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Feature Scroll ────────────────────────────────────────────────────────────
function FeatureScroll() {
  const { t, lang } = useLang();
  const chips = [
    { Icon: Terminal,      text: lang==='tr'?'Alt+Space Komut Çubuğu':'Alt+Space Command Bar' },
    { Icon: PanelRight,    text: 'Canvas / Artifact' },
    { Icon: Moon,          text: 'Night Shift 2.0' },
    { Icon: BrainCircuit,  text: lang==='tr'?'Proaktif Zeka':'Proactive Intelligence' },
    { Icon: Clipboard,     text: 'Clipboard Intelligence' },
    { Icon: Shuffle,       text: lang==='tr'?'Model Özgürlüğü':'Model Freedom' },
    { Icon: MessageCircle, text: 'WhatsApp' },
    { Icon: Send,          text: 'Telegram' },
    { Icon: Gamepad2,      text: 'Discord' },
    { Icon: Radio,         text: lang==='tr'?'Canlı Yayın (Twitch/Kick)':'Live (Twitch/Kick)' },
    { Icon: Music2,        text: 'YouTube Music' },
    { Icon: Tv,            text: 'KazePlayer' },
    { Icon: Network,       text: 'Multi-Agent Swarm' },
    { Icon: FileText,      text: 'Action Receipt' },
    { Icon: HeartPulse,    text: 'Self-Check' },
    { Icon: Eye,           text: lang==='tr'?'Ekran Görüşü':'Screen Vision' },
    { Icon: CalendarDays,  text: lang==='tr'?'Takvim':'Calendar' },
    { Icon: Bell,          text: lang==='tr'?'Hatırlatıcılar':'Reminders' },
    { Icon: BookOpen,      text: lang==='tr'?'Notlar':'Notes' },
    { Icon: Repeat2,       text: lang==='tr'?'Rutinler':'Routines' },
    { Icon: Search,        text: lang==='tr'?'Web Arama & Özet':'Web Search & Summary' },
    { Icon: ShieldCheck,   text: lang==='tr'?'Gizlilik':'Privacy' },
    { Icon: GitBranch,     text: 'GitHub & Gmail' },
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
    { Icon:Cpu,         label:t.lang==='tr'?'Model Seçimi':'Model', val:'claude-opus-4', success:true,  active:true  },
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

// ── Ask ARIA — "ARIA Intelligence" (Apple Intelligence tarzı) ─────────────────
const AI_CARD_ICONS = [Globe, MessageCircle, Send];
function AriaIntelligenceSection() {
  const { t } = useLang();
  return (
    <section className="ai-section" id="ask-aria">
      <div className="ai-aura" />
      <div className="wrap" style={{position:'relative',zIndex:1}}>
        <div className="ai-head fade-up">
          <div className="ai-over"><Sparkles size={13} style={{marginRight:6}} />{t.aiOver}</div>
          <h2 className="ai-gradient-text">{t.aiTitle}</h2>
          <p className="ai-sub">{t.aiSub}</p>
          <div className="ai-modes">
            <span className="ai-mode"><Server size={13} />{t.aiModeCloud}</span>
            <span className="ai-mode"><ShieldCheck size={13} />{t.aiModeLocal}</span>
          </div>
        </div>

        <div className="ai-showcase fade-up delay-2">
          <div className="ai-window">
            <img src={imgWebAssistant} alt="ARIA Intelligence — Ask ARIA" loading="lazy" />
          </div>
        </div>
        <div className="ai-caption fade-up">{t.aiShotCaption}</div>

        <div className="ai-pillars">
          {t.aiCards.map((c, i) => {
            const IC = AI_CARD_ICONS[i];
            return (
              <div key={i} className="ai-pillar fade-up" style={{transitionDelay:(i*0.1)+'s'}}>
                <div className={`ai-pillar-icon ai-pi-${i}`}><IC size={20} /></div>
                <h3 className="ai-pillar-title">{c.title}</h3>
                <p className="ai-pillar-desc">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Canvas Section (gerçek ekran görüntüsü) ───────────────────────────────────
function CanvasSection() {
  const { t } = useLang();
  const canvasShot = import.meta.env.BASE_URL + 'aria_canvas.png';
  return (
    <section className="canvas-section" id="canvas">
      <div className="wrap">
        <div className="canvas-section-header fade-up">
          <div className="feature-tag canvas-tag">{t.tBlock6Tag}</div>
          <h2>{t.tBlock6H[0]}<em>{t.tBlock6H[1]}</em>{t.tBlock6H[2]}</h2>
          <p>{t.tBlock6P}</p>
          <div className="canvas-section-pills">
            {t.tBlock6Pills.map((p, j) => <span key={j} className="feature-pill">{p}</span>)}
          </div>
        </div>
        <div className="canvas-shot-wrapper fade-up delay-2">
          <div className="canvas-shot-window">
            <img src={canvasShot} alt="ARIA Canvas / Artifact" loading="lazy" />
          </div>
          <div className="canvas-shot-glow" />
        </div>
      </div>
    </section>
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
const CAT_ICONS = [MessagesSquare, MonitorPlay, CalendarDays, Code2, BrainCircuit];
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
              {tier.featured && <div className="featured-badge">{t.lang==='tr'?'Önerilen':'Recommended'}</div>}
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
        <HighlightsSection />
        <Showcase />
        <AriaIntelligenceSection />
        <CanvasSection />
        <Manifesto />
        <PartnersSection />
        <FeatureScroll />
        <FeatureBlocks />
        <ProactiveSection />
        <IntegrationsSection />
        <WorkflowSection />
        <PrivacySection />
        <Pricing />
        <ClosingCTA />
      </main>
      <Footer />
    </LangCtx.Provider>
  );
}
