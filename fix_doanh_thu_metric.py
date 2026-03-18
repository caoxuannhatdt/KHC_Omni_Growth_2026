import re
import os
import glob

BASE_DIR = r"d:\Omni Growth Workpace\modules\clienteling\monthly\2026"

html_files = []
for month in ["01", "02"]:
    pattern = os.path.join(BASE_DIR, month, "*.html")
    html_files.extend(glob.glob(pattern))

# Skip tong-quan.html in 02 as it's already done
already_done = os.path.join(BASE_DIR, "02", "tong-quan.html")

changed_files = []
skipped_files = []
already_done_files = []

for filepath in sorted(html_files):
    if os.path.normcase(os.path.normpath(filepath)) == os.path.normcase(os.path.normpath(already_done)):
        already_done_files.append(filepath)
        print(f"SKIP (already done): {filepath}")
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # 1. Fix grid class
    new_content = content.replace(
        'class="grid grid-cols-2 md:grid-cols-4 gap-4 h-full"',
        'class="grid grid-cols-3 gap-4 h-full"'
    )

    # 2. Remove Doanh thu metric card block
    doanh_thu_pattern = re.compile(
        r'\s*<div class="metric-card-clean accent-black">\s*'
        r'<div class="mc-title">\s*'
        r'<p class="text-\[10px\] text-slate-500 uppercase font-bold tracking-wide leading-tight">Doanh\s*'
        r'thu</p>\s*'
        r'</div>\s*'
        r'<p class="mc-val text-2xl font-bold text-orange-600">\s*'
        r'.*?</p>\s*'
        r'<p class="text-\[9px\] text-slate-500 font-medium leading-tight px-1">.*?</p>\s*'
        r'</div>',
        re.DOTALL
    )

    new_content = doanh_thu_pattern.sub('', new_content)

    if new_content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        changed_files.append(filepath)
        print(f"CHANGED: {filepath}")
    else:
        skipped_files.append(filepath)
        print(f"NO CHANGE (pattern not found): {filepath}")

print(f"\n=== SUMMARY ===")
print(f"Changed: {len(changed_files)} files")
print(f"No change needed: {len(skipped_files)} files")
print(f"Already done: {len(already_done_files)} files")
for f in changed_files:
    print(f"  OK {os.path.relpath(f, BASE_DIR)}")
