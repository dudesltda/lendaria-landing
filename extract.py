import re
data = open(r'C:\Users\conta\.gemini\antigravity\brain\54efb932-5f0f-4db1-8bc0-af26cc42905c\.system_generated\steps\127\content.md', encoding='utf-8').read()
urls = re.findall(r'https?://[^\s\"\']+', data)
print(list(set(urls)))
