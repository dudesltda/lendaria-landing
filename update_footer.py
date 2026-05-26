import re

html_content = """<!-- ===================== FOOTER ===================== -->
<footer class="footer">
  <div class="wrap">
    <div class="footer-divider"></div>
    <div class="footer-grid">
      <div class="footer-brand-col">
        <a href="#" class="w-max opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid-2x2-plus"><path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/><path d="M3 12h11"/><path d="M16 16v6"/><path d="M19 19h-6"/></svg>
        </a>
        <p>Um ecossistema global de educação e inovação com IA.</p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" class="social-link" aria-label="X (Twitter)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <span>Recursos</span>
        <div class="links">
          <a href="#">Blog</a>
          <a href="#">Central de Ajuda</a>
          <a href="#">Suporte</a>
          <a href="#">Comunidade</a>
          <a href="#">Segurança</a>
        </div>
      </div>
      <div class="footer-col">
        <span>Empresa</span>
        <div class="links">
          <a href="#">Sobre Nós</a>
          <a href="#">Carreiras</a>
          <a href="#">Brand Assets</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </div>
    <div class="footer-divider"></div>
    <div class="footer-bottom">
      <p>© <a href="#">Academia Lendária</a>. Todos os direitos reservados 2026.</p>
      <div class="footer-sign-off">
        Construindo o infinito, hoje. <span class="inf"></span>
      </div>
    </div>
  </div>
</footer>"""

css_content = """  /* =========================================================================
     FOOTER MINIMAL (BRUTALISM)
  ========================================================================= */
  .footer { background: var(--color-paper); color: var(--color-ink); padding: 48px 0; border-top: 2px solid var(--color-ink); border-bottom: 2px solid var(--color-ink); position: relative; overflow: hidden; }
  .footer::before { content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(35% 80% at 30% 0%, rgba(26,26,46,0.06), transparent); pointer-events: none; z-index: 0; }
  .footer .wrap { max-width: 1000px; border-left: 2px solid var(--color-ink); border-right: 2px solid var(--color-ink); margin: 0 auto; padding: 0; background: transparent; position: relative; z-index: 1; }
  .footer-divider { width: 100%; height: 2px; background: var(--color-ink); }
  .footer-grid { display: grid; grid-template-columns: 4fr 1fr 1fr; gap: 24px; padding: 32px 24px; }
  
  .footer-brand-col { display: flex; flex-direction: column; gap: 24px; }
  .footer-brand-col svg { width: 32px; height: 32px; stroke: var(--color-ink); transition: transform 200ms ease; }
  .footer-brand-col svg:hover { transform: scale(1.1); }
  .footer-brand-col p { font-family: var(--font-mono); font-size: 14px; max-width: 30ch; color: var(--color-mute); line-height: 1.5; margin: 0; }
  
  .social-links { display: flex; gap: 8px; }
  .social-link { width: 36px; height: 36px; border: 2px solid var(--color-ink); display: flex; align-items: center; justify-content: center; transition: all 100ms linear; background: var(--color-paper); color: var(--color-ink); border-radius: 4px; }
  .social-link:hover { background: var(--color-yellow); transform: translate(-2px, -2px); box-shadow: 2px 2px 0 var(--color-ink); }
  .social-link svg { width: 16px; height: 16px; stroke: currentColor; fill: none; }
  
  .footer-col { display: flex; flex-direction: column; gap: 8px; }
  .footer-col span { font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; color: var(--color-mute); margin-bottom: 4px; letter-spacing: var(--track-loose); }
  .footer-col .links { display: flex; flex-direction: column; gap: 6px; }
  .footer-col .links a { font-family: var(--font-sans); font-size: 14px; font-weight: 500; color: var(--color-ink); text-decoration: none; display: inline-block; width: max-content; transition: color 100ms linear; }
  .footer-col .links a:hover { color: var(--color-yellow); text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 4px; }

  .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px 32px; font-family: var(--font-sans); font-size: 13px; color: var(--color-mute); }
  .footer-bottom p { margin: 0; font-weight: 400; }
  .footer-bottom a { color: var(--color-ink); font-weight: 600; text-decoration: none; }
  .footer-bottom a:hover { color: var(--color-yellow); text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 2px; }
  
  .footer-sign-off { display: flex; align-items: center; gap: 8px; font-family: var(--font-mono); color: var(--color-ink); font-weight: 600; text-transform: uppercase; font-size: 12px; }
  .footer-sign-off .inf { width: 2.2em; height: 1em; vertical-align: middle; background-color: currentColor; display: inline-block; -webkit-mask-image: url('data:image/svg+xml;utf8,%3Csvg%20width%3D%22400%22%20height%3D%22184%22%20viewBox%3D%220%200%20400%20184%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M393.3%2057.2C388.7%2045.8%20381.9%2035.6%20373.2%2026.9C364.4%2018.2%20354.2%2011.4%20342.9%206.8C331.8%202.3%20320.2%200%20308.3%200C296.4%200%20284.8%202.3%20273.8%206.7C262.4%2011.3%20252.2%2018.1%20243.5%2026.8L200%2070.3L156.5%2026.8C147.7%2018.1%20137.5%2011.3%20126.2%206.7C115.2%202.3%20103.6%200%2091.7%200C79.8%200%2068.2%202.3%2057.2%206.7C45.8%2011.3%2035.6%2018.1%2026.9%2026.8C18.2%2035.6%2011.4%2045.8%206.8%2057.1C2.3%2068.2%200%2079.8%200%2091.7C0%20103.6%202.3%20115.2%206.7%20126.2C11.3%20137.6%2018.1%20147.8%2026.8%20156.5C35.5%20165.2%2045.8%20172%2057.1%20176.6C68.1%20181.1%2079.7%20183.3%2091.6%20183.3C103.5%20183.3%20115.1%20181%20126.1%20176.6C137.5%20172%20147.7%20165.2%20156.4%20156.5L199.9%20113L210.4%20123.5L243.4%20156.5C252.2%20165.2%20262.4%20172%20273.7%20176.6C284.7%20181.1%20296.3%20183.3%20308.2%20183.3C320.1%20183.3%20331.7%20181%20342.7%20176.6C354.1%20172%20364.3%20165.2%20373%20156.5C381.7%20147.7%20388.5%20137.5%20393.1%20126.2C397.6%20115.2%20399.8%20103.6%20399.8%2091.7C399.8%2079.8%20397.5%2068.2%20393.1%2057.2H393.3ZM369.7%2091.7C369.7%20108.1%20363.3%20123.6%20351.7%20135.2C340.1%20146.8%20324.7%20153.2%20308.2%20153.2C291.7%20153.2%20276.3%20146.8%20264.7%20135.2L221.2%2091.7L264.7%2048.2C276.3%2036.6%20291.7%2030.2%20308.2%2030.2C324.7%2030.2%20340.1%2036.6%20351.7%2048.2C363.3%2059.8%20369.7%2075.2%20369.7%2091.7ZM178.6%2091.7L135.1%20135.2C123.5%20146.8%20108.1%20153.2%2091.6%20153.2C75.2%20153.2%2059.7%20146.8%2048.1%20135.2C36.5%20123.6%2030.1%20108.2%2030.1%2091.7C30.1%2075.2%2036.5%2059.8%2048.1%2048.2C59.7%2036.6%2075.1%2030.2%2091.6%2030.2C108%2030.2%20123.5%2036.6%20135.1%2048.2L178.5%2091.6V91.7H178.6Z%22%20fill%3D%22black%22%2F%3E%3C%2Fsvg%3E'); mask-size: contain; mask-repeat: no-repeat; mask-position: center; }

  @media (max-width: 768px) {
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; padding: 24px; }
    .footer-brand-col { grid-column: span 2; }
    .footer .wrap { border: none; }
    .footer-bottom { flex-direction: column; gap: 16px; align-items: flex-start; }
  }"""

with open('c:\\Users\\conta\\lendaria-ds\\nova-landing-desktop.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace CSS
content = re.sub(r'\n  \.footer \{.*?\}\n(  \.footer-.*?\}\n)*', '\n' + css_content + '\n', content, flags=re.DOTALL)

# Replace HTML
content = re.sub(r'<!-- ===================== FOOTER ===================== -->\n<footer class="footer">.*</footer>', html_content, content, flags=re.DOTALL)

with open('c:\\Users\\conta\\lendaria-ds\\nova-landing-desktop.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated footer")
