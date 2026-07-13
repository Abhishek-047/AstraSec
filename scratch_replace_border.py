import os

files = [
    "src/app/contact/page.tsx",
    "src/app/conduct/page.tsx",
    "src/app/events/page.tsx"
]

for fpath in files:
    with open(fpath, "r") as f:
        content = f.read()
    
    # The user wants the EXACT bright yellow color for the borders as shown in the screenshot
    content = content.replace("1px solid #8b6914", "1px solid #c9a84c")
    content = content.replace("1.5px solid #8b6914", "1.5px solid #c9a84c")
    content = content.replace('borderColor="#8b6914"', 'borderColor="#c9a84c"')
    
    with open(fpath, "w") as f:
        f.write(content)
