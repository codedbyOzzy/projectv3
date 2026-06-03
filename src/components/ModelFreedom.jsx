import './FeatureSection.css';

export default function ModelFreedom() {
  return (
    <section id="model-freedom" className="feature-section container reverse">
      <div className="feature-visual reveal delay-200">
        <img src="/model_freedom.png" alt="Model Freedom UI" className="mockup-img" />
      </div>

      <div className="feature-content reveal">
        <h2 className="feature-title text-gradient">Model Özgürlüğü</h2>
        <p className="feature-desc">
          Tek bir sağlayıcıya kilitlenmeyin. Kendi API anahtarlarınızı (BYOK) ekleyin veya tamamen yerel, 
          gizlilik odaklı modeller kullanın. Amacınıza göre modeli sadece tek bir tıklamayla değiştirin.
        </p>
        <ul className="feature-list">
          <li><strong>Private Mod:</strong> Verilerinizi dışarı aktarmayan yerel Llama modelleri.</li>
          <li><strong>Fast Mod:</strong> Anlık yanıtlar için düşük gecikmeli Groq API'si.</li>
          <li><strong>Best Mod:</strong> Karmaşık mantık gerektiren işler için Claude 3.5 veya GPT-4o.</li>
        </ul>
      </div>
    </section>
  );
}
