
import os
import shutil

# Configuration
SOURCE_DIR = "/Users/bottoman/Projects/CS-V2/src/pages"
FI_DIR = os.path.join(SOURCE_DIR, "fi")

def mirror_pages():
    print("Starting mirroring process...")
    
    # Walk through all files in src/pages
    for root, dirs, files in os.walk(SOURCE_DIR):
        # Skip the 'fi' directory itself to avoid recursion
        if FI_DIR in root:
            continue
            
        # Skip API routes or other non-page folders if necessary, but for now we mirror everything
        
        for file in files:
            if file.endswith(".astro"):
                # Get relative path from src/pages
                rel_path = os.path.relpath(os.path.join(root, file), SOURCE_DIR)
                
                # Construct target path in src/pages/fi
                target_path = os.path.join(FI_DIR, rel_path)
                
                # Create necessary directories
                os.makedirs(os.path.dirname(target_path), exist_ok=True)
                
                # Check if file already exists
                if not os.path.exists(target_path):
                    print(f"Creating proxy for: {rel_path}")
                    
                    # Create proxy file content
                    # We need to calculate the relative import path back to the original file
                    # Depth of target file
                    depth = len(os.path.dirname(rel_path).split(os.sep))
                    if os.path.dirname(rel_path) == '':
                        depth = 0
                        
                    # ../ for escaping 'fi', then ../ for each level of depth
                    rel_import = "../" * (depth + 1) + rel_path
                    
                    proxy_content = f"""---
import Page from '{rel_import}';
---

<Page />
"""
                    with open(target_path, "w") as f:
                        f.write(proxy_content)
                else:
                    # Optional: Update existing proxy if needed, but for now just skip
                    pass

if __name__ == "__main__":
    mirror_pages()
