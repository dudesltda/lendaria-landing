import re
data = open(r'C:\Users\conta\.gemini\antigravity\brain\54efb932-5f0f-4db1-8bc0-af26cc42905c\.system_generated\steps\127\content.md', encoding='utf-8').read()
# Find any string containing fetch, get, or json
paths = re.findall(r'[\"\']([/\w\-\.]+?\.json)[\"\']', data)
api_paths = re.findall(r'[\"\'](/api/[\w\-\./]+)[\"\']', data)
supabase = re.findall(r'from\([\"\']([\w\-\_]+)[\"\']\)', data)
print("JSON files:", set(paths))
print("APIs:", set(api_paths))
print("Supabase Tables:", set(supabase))
