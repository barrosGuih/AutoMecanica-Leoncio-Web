"use client";

import { useEffect } from "react";
import style from "./page.module.css";
import Link from "next/link";

export default function AutoMecanica() {
  useEffect(() => {
    // Scroll suave nos links de navegação
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);

  return (
    <div className={style.siteContainer}>
      {/* Header */}
      <header className={style.siteHeader}>
        <div className={style.navContainer}>
          <div className={style.navContent}>
            <div className={style.logoArea}>
              <div className={style.logoIcon}>
                <span className={style.icon}></span>
              </div>
              <span className={style.logoText}>AutoMecânicaLeôncio</span>
            </div>
            <nav className={style.menu}>
              <a href="#hero" className={style.menuItem}>Início</a>
              <a href="#servicos" className={style.menuItem}>Serviços</a>
              <a href="#contato" className={style.menuItem}>Contato</a>
              <Link href="/restrictArea/login/page" className={style.menuItem}>Área Restrita</Link>

            </nav>
            <button className={`${style.btnOrcamento} ${style.pulseOrange}`}>
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className={style.hero}>
        <div className={style.heroContent}>
          <h1 className={style.heroTitle}>Cuidamos do seu carro como se fosse nosso</h1>
          <p className={style.heroSubtitle}>
            Serviços especializados em manutenção automotiva com qualidade e confiança.
          </p>
          <button className={style.btnHero}>Conheça nossos serviços</button>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className={style.services}>
        <h3 className={style.sectionTitle}>Nossos Serviços</h3>
        <div className={style.servicesGrid}>
          <div className={style.serviceCard}>
            <h4>Troca de Óleo</h4>
            <p>Óleo e filtros de qualidade para prolongar a vida útil do motor.</p>
          </div>
          <div className={style.serviceCard}>
            <h4>Alinhamento e Balanceamento</h4>
            <p>Mais segurança, estabilidade e economia de pneus.</p>
          </div>
          <div className={style.serviceCard}>
            <h4>Freios</h4>
            <p>Inspeção e substituição de pastilhas, discos e fluídos.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className={style.contact}>
        <h3 className={style.sectionTitle}>Fale Conosco</h3>
        <form className={style.contactForm}>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu E-mail" required />
          <textarea placeholder="Sua mensagem" rows="5" required />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}
