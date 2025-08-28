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
            <Link href={"https://api.whatsapp.com/message/J4NEQ5STKZW3B1?autoload=1&app_absent=0"}><button className={`${style.btnOrcamento} ${style.pulseOrange}`}>
              Solicitar Orçamento
            </button></Link>
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
          <div className={style.serviceCard}>
            <h4>Serviço Suspensão</h4>
            <p>Inspeção e substituição da Suspensão.</p>
          </div>
          <div className={style.serviceCard}>
            <h4>Troca de Pneu Geral</h4>
            <p>Troca de pneus.</p>
          </div>
          <div className={style.serviceCard}>
            <h4>Torno Mecânico</h4>
            <p>Todos os serviços envolvendo o torno.</p>
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
      <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.grid}>
          {/* Logo + descrição */}
          <div>
            <div className={style.logoBox}>
              <div className={style.logoIcon}>
                <svg
                  className={style.svgIcon}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2L3 7v11a1 1 0 001 1h3v-7h6v7h3a1 1 0 001-1V7l-7-5z" />
                </svg>
              </div>
              <h3 className={style.logoText}>AutoMecânicaLeôncio</h3>
            </div>
            <p className={style.description}>
              Sua oficina de confiança há mais de 15 anos. Qualidade, agilidade
              e preço justo.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className={style.title}>Serviços</h4>
            <ul className={style.list}>
              <li><a href="#">Manutenção Preventiva</a></li>
              <li><a href="#">Mecânica Geral</a></li>
              <li><a href="#">Diagnóstico</a></li>
              <li><a href="#">Ar Condicionado</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className={style.title}>Contato</h4>
            <ul className={style.list}>
              <li>(83) 99343-2434</li>
              <li>automecanicaleoncio@gmail.com</li>
              <li>Rua Manoel Eucrácio de Lira</li>
              <li>Centro - Esperança PB</li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className={style.title}>Redes Sociais</h4>
            <div className={style.social}>
              <a href="#">📘</a>
              <a href="https://www.instagram.com/leoncioautomecanica/">📷</a>
              <a href="https://api.whatsapp.com/message/J4NEQ5STKZW3B1?autoload=1&app_absent=0">📞</a>
            </div>
          </div>
        </div>

        {/* Rodapé final */}
        <div className={style.copy}>
          <p>&copy; 2018 AutoMecânicaLeôncio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
    </div>
    
  );
}
