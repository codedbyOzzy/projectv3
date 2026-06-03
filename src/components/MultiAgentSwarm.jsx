import multiAgentImg from '../assets/multi_agent.png';
import './FeatureSection.css';

export default function MultiAgentSwarm() {
  return (
    <section id="multi-agent" className="feature-section container">
      <div className="feature-content reveal">
        <h2 className="feature-title text-gradient">Multi-Agent Ekosistemi</h2>
        <p className="feature-desc">
          ARIA tek bir yapay zeka değildir, birbirine bağlı uzmanlardan oluşan devasa bir Ajan Sürüsüdür.
          Gönderdiğiniz karmaşık görevler, Router Agent tarafından analiz edilir ve doğru uzmanlara (Coder, Researcher) dağıtılır.
        </p>
        <ul className="feature-list">
          <li><strong>Router Agent:</strong> Görevleri parçalar ve orkestrasyonu sağlar.</li>
          <li><strong>Coder Agent:</strong> Dosyalarınızı analiz edip yepyeni yazılımlar inşa eder.</li>
          <li><strong>Researcher Agent:</strong> Bilgi tabanınızı ve interneti derinlemesine tarar.</li>
        </ul>
      </div>
      
      <div className="feature-visual reveal delay-200">
        <img src={multiAgentImg} alt="Multi Agent UI" className="mockup-img" />
      </div>
    </section>
  );
}
