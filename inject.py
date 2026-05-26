import json
import re

with open('hubs_coords.json', 'r', encoding='utf-8') as f:
    hubs = json.load(f)

# Sort hubs by name for consistency
hubs = sorted(hubs, key=lambda x: x['name'])

html_buttons = ""
css_rules = ""
js_array = "    const markers = [\n"

for h in hubs:
    safe_id = h['id'].replace('ã', 'a').replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u').replace('ç', 'c').replace(' ', '-')
    
    html_buttons += f'    <button class="globe-marker" type="button" data-marker="{safe_id}">{h["name"]}<span>{h["users"]} membros</span></button>\n'
    css_rules += f'  .globe-marker[data-marker="{safe_id}"] {{ position-anchor: --cobe-{safe_id}; opacity: var(--cobe-visible-{safe_id}, 0); filter: blur(calc((1 - var(--cobe-visible-{safe_id}, 0)) * 8px)); }}\n'
    js_array += f'      {{ id: "{safe_id}", location: [{h["location"][0]:.4f}, {h["location"][1]:.4f}], name: "{h["name"]}", users: {h["users"]} }},\n'

js_array += "    ];"

with open('nova-landing-desktop.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace HTML
content = re.sub(r'<button class="globe-marker".*?</button>\s*(<button class="globe-marker".*?</button>\s*)*', html_buttons, content, flags=re.DOTALL)

# Replace CSS
content = re.sub(r'  \.globe-marker\[data-marker="hq"\].*?(\s*\.globe-marker\[data-marker="[^"]+"\].*?)*\n', '\n' + css_rules, content)

# Replace JS array
content = re.sub(r'    const markers = \[.*?\];', js_array, content, flags=re.DOTALL)

# Also update markerColor to Yellow in JS if the user asked for yellow pins
content = re.sub(r'markerColor: \[0.1, 0.2, 0.45\]', 'markerColor: [0.98, 0.75, 0.14]', content)

with open('nova-landing-desktop.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated nova-landing-desktop.html with 55 hubs.")
