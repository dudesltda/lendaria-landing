import re

with open('c:\\Users\\conta\\lendaria-ds\\nova-landing-desktop.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace CSS
css_old = r"""  \.footer \.wrap \{ max-width: 1000px; border-left: 2px solid var\(--color-ink\); border-right: 2px solid var\(--color-ink\); margin: 0 auto; padding: 0; background: transparent; position: relative; z-index: 1; \}
  \.footer-divider \{ width: 100%; height: 2px; background: var\(--color-ink\); \}
  \.footer-grid \{ display: grid; grid-template-columns: 4fr 1fr 1fr; gap: 24px; padding: 32px 24px; \}"""

css_new = """  .footer-divider { width: 100%; height: 2px; background: var(--color-ink); }
  .footer-grid { display: grid; grid-template-columns: 4fr 1fr 1fr; gap: 24px; padding: 48px 0; position: relative; z-index: 1; }"""
content = re.sub(css_old, css_new, content)

# Padding bottom of footer bottom
content = re.sub(r'padding: 16px 24px 32px;', 'padding: 24px 0 0;', content)

# Remove media query border removal since it's already removed
content = re.sub(r'    \.footer \.wrap \{ border: none; \}\n', '', content)
content = re.sub(r'padding: 24px;', 'padding: 32px 0;', content) # media query padding


# Replace HTML
html_old = r"""<footer class="footer">
  <div class="wrap">
    <div class="footer-divider"></div>
    <div class="footer-grid">"""

html_new = """<footer class="footer">
  <div class="footer-divider"></div>
  <div class="wrap">
    <div class="footer-grid">"""
content = content.replace(html_old, html_new)

html_old_2 = r"""    </div>
    <div class="footer-divider"></div>
    <div class="footer-bottom">"""

html_new_2 = """    </div>
  </div>
  <div class="footer-divider"></div>
  <div class="wrap" style="position: relative; z-index: 1;">
    <div class="footer-bottom">"""
content = content.replace(html_old_2, html_new_2)

# Also fix the top padding of footer if needed
content = re.sub(r'\.footer \{ background: var\(--color-paper\); color: var\(--color-ink\); padding: 48px 0;', '.footer { background: var(--color-paper); color: var(--color-ink); padding: 0 0 48px;', content)

with open('c:\\Users\\conta\\lendaria-ds\\nova-landing-desktop.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated footer width and dividers.")
