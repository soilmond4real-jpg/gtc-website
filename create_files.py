import os

# Path to your project
project_path = r"C:\Users\user\Downloads\gtc-standard-site-final"
public_folder = os.path.join(project_path, "public")

# Create public folder if it doesn't exist
os.makedirs(public_folder, exist_ok=True)

# Create index.html content
index_html_content = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Geospatial Task Consultancy - Nigeria's leading geospatial solutions provider" />
    <title>GTC - Geospatial Task Consultancy</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>"""

# Create favicon.ico placeholder (as SVG)
favicon_content = """<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" fill="#1a4f8c" rx="8"/>
<text x="16" y="22" text-anchor="middle" fill="white" font-family="Arial" font-weight="bold" font-size="16">GTC</text>
</svg>"""

# Write the files
with open(os.path.join(public_folder, "index.html"), "w", encoding="utf-8") as f:
    f.write(index_html_content)

with open(os.path.join(public_folder, "favicon.ico"), "w", encoding="utf-8") as f:
    f.write(favicon_content)

print("✅ Created index.html and favicon.ico in public folder")
print("🚀 Now run: yarn start")