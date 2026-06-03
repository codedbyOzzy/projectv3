import { Command } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar glass-panel">
      <div className="navbar-container">
        <div className="logo">
          <Command size={24} color="var(--accent-color)" />
          <span>ARIA V3</span>
        </div>
        <nav className="nav-links">
          <a href="#features">Özellikler</a>
          <a href="#showcase">Arayüz</a>
          <a href="#pricing">Planlar</a>
        </nav>
        <a href="#download" className="nav-cta">Hemen İndir</a>
      </div>
    </header>
  );
}
