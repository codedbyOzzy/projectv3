import silentProfilingImg from '../assets/silent_profiling.png';
import './FeatureSection.css';

export default function SilentProfiling() {
  return (
    <section id="silent-profiling" className="feature-section container">
      <div className="feature-content reveal">
        <h2 className="feature-title text-gradient">Sessiz Zeka (Otonom Profil)</h2>
        <p className="feature-desc">
          ARIA size yorucu "Onboarding" anketleri sunmaz. Siz çalışırken arka planda sessizce izler 
          ve öğrenir. Kullandığınız teknik terimleri, dili ve aktif saatlerinizi anlayarak 
          kendi yanıt tarzını size özel şekillendirir.
        </p>
        <ul className="feature-list">
          <li><strong>Uzmanlık Analizi:</strong> Python, AI veya React... İlgi alanlarınızı tespit eder.</li>
          <li><strong>Yanıt Stili:</strong> Kısa ve öz yanıtları mı seversiniz yoksa detaylı mı? Öğrenir ve uygular.</li>
          <li><strong>Aktif Saatler:</strong> En çok çalıştığınız saatleri bilerek arka plan görevlerini optimize eder.</li>
        </ul>
      </div>
      
      <div className="feature-visual reveal delay-200">
        <img src={silentProfilingImg} alt="Silent Profiling UI" className="mockup-img" />
      </div>
    </section>
  );
}
