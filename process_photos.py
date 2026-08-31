import os
import shutil

src_img = r"C:\Users\Elitebook\.gemini\antigravity-ide\brain\0f4eb74a-f38c-4e37-b144-e3ecee3b48ae\.user_uploaded\media_1788206598739.png"
out_dir = r"c:\Users\Elitebook\Desktop\skill-prototype2\public\assets"
os.makedirs(out_dir, exist_ok=True)

# Copy original image
shutil.copy(src_img, os.path.join(out_dir, "sir-adnan-banner.png"))
print("Copied banner image to", os.path.join(out_dir, "sir-adnan-banner.png"))

# Also let's check if PIL is available to crop a portrait version of Sir Adnan preserving his exact photo
try:
    from PIL import Image
    img = Image.open(src_img)
    width, height = img.size
    print(f"Original image size: {width}x{height}")
    
    # Sir Adnan is on the right side of the image (approx from x=0.55 to 1.0)
    # Let's create a dedicated portrait crop for instructor & hero widgets preserving his exact facial features
    crop_box = (int(width * 0.60), 0, width, height)
    portrait = img.crop(crop_box)
    portrait.save(os.path.join(out_dir, "sir-adnan-portrait.png"), quality=95)
    print("Saved portrait crop to", os.path.join(out_dir, "sir-adnan-portrait.png"))

    # Closer headshot crop for avatar and badges
    headshot_box = (int(width * 0.65), int(height * 0.05), int(width * 0.98), int(height * 0.55))
    headshot = img.crop(headshot_box)
    headshot.save(os.path.join(out_dir, "sir-adnan-headshot.png"), quality=95)
    print("Saved headshot crop to", os.path.join(out_dir, "sir-adnan-headshot.png"))
except Exception as e:
    print("PIL processing note:", e)
