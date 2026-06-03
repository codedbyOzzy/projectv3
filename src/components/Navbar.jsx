import { Layers } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Layers size={20} strokeWidth={1.5} color="#fff" />
          <span>ARIA</span>
        </div>
        <nav className="nav-links">
          <a href="#night-shift">Night Shift 2.0</a>
          <a href="#model-freedom">Model Özgürlüğü</a>
          <a href="#features">Özellikler</a>
          <a href="#pricing">Planlar</a>
        </nav>
        <div className="nav-actions">
          <a href="#" className="nav-login">Giriş Yap</a>
          <a href="#download" className="nav-cta">İndir</a>
        </div>
      </div>
    </header>
  );
}
