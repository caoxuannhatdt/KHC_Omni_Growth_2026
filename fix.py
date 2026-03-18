import os

file_path = 'd:/Automation.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Font
content = content.replace("@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');", "")
content = content.replace("font-family: 'Inter', sans-serif;", "font-family: Arial, Helvetica, sans-serif;")

# 2. Font sizes
content = content.replace('text-[10px]', 'text-xs')
content = content.replace('text-[9px]', 'text-xs')

content = content.replace('text-xs font-bold text-blue-800', 'text-sm font-bold text-blue-800')
content = content.replace('text-xs font-bold text-emerald-800', 'text-sm font-bold text-emerald-800')

content = content.replace('<span class="font-bold text-yellow-700">1.', '<span class="font-bold text-sm text-yellow-700">1.')
content = content.replace('<span class="font-bold text-slate-600">2.', '<span class="font-bold text-sm text-slate-600\">2.')
content = content.replace('<span class="font-bold text-pink-700">3.', '<span class="font-bold text-sm text-pink-700\">3.')
content = content.replace('<span class="font-bold text-amber-600">4.', '<span class="font-bold text-sm text-amber-600\">4.')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
