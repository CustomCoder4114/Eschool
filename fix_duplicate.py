"""
Cleans backen.py. Save THIS as its own file (fix_duplicate.py) next to backen.py
and run:   python fix_duplicate.py      (do NOT paste it into backen.py)

It does two things:
  1. Removes a copy of this script if it was pasted into backen.py by mistake.
  2. Removes the duplicated "PARENT <-> STUDENT LINKS" block (keeps the newer copy).
A backup is saved as backen.py.bak, and the result is syntax-checked before saving.
"""
import ast, shutil

PATH = "backen.py"
MARKER = "# ============ PARENT <-" + "> STUDENT LINKS ============"
SCRIPT_START = '"""\nRemoves the duplicated'
SCRIPT_END = 'print(f"Done. Removed'

src = open(PATH, encoding="utf-8").read()
fixed = src
notes = []

# 1) strip a pasted-in copy of the script (both old and new wording)
for start_text in (SCRIPT_START, '"""\nCleans backen.py.'):
    while True:
        s = fixed.find(start_text)
        if s == -1:
            break
        e = fixed.find(SCRIPT_END, s)
        if e == -1:
            break
        e = fixed.find("\n", e)
        e = len(fixed) if e == -1 else e + 1
        fixed = fixed[:s] + fixed[e:]
        notes.append("removed pasted copy of this script")

# 2) remove the duplicated block, keeping the second (newer) copy
first = fixed.find(MARKER)
second = fixed.find(MARKER, first + 1) if first != -1 else -1
if first != -1 and second != -1:
    if fixed.find(MARKER, second + 1) != -1:
        print("The block still appears more than twice - not touching the file.")
        raise SystemExit
    fixed = fixed[:first] + fixed[second:]
    notes.append("removed duplicated PARENT <-> STUDENT LINKS block")

if not notes:
    print("Nothing to fix.")
    raise SystemExit

try:
    ast.parse(fixed)
except SyntaxError as e:
    print("Aborted, result would not compile:", e)
    raise SystemExit

shutil.copyfile(PATH, PATH + ".bak")
open(PATH, "w", encoding="utf-8").write(fixed)
print("Done:", "; ".join(notes), "| backup:", PATH + ".bak")