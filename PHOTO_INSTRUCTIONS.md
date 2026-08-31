# 📸 How to Add / Customize Bauni's Photos

The website is set up to showcase **multiple photos of Bauni** in an interactive story carousel, birthday hero frame, photo wall collage, and fullscreen lightbox!

---

### Step 1: Add your photos to `public/images/`

Place your photos into the `public/images/` folder with simple names like:
- `public/images/bauni1.jpg`
- `public/images/bauni2.jpg`
- `public/images/bauni3.jpg`
- `public/images/bauni4.jpg`
- `public/images/bauni5.jpg`
- `public/images/bauni6.jpg`

*(Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`)*

---

### Step 2: Configure captions & photos in one file

Open:
👉 **`src/config/birthdayConfig.js`**

You will see the `photos` array at the top:
```javascript
photos: [
  {
    id: 1,
    src: "images/bauni1.jpg",
    caption: "A smile that always makes things brighter. ❤️",
    title: "Pure Joy",
  },
  {
    id: 2,
    src: "images/bauni2.jpg",
    caption: "Some memories never need a reason to be special.",
    title: "Cherished Moments",
  },
  // Add as many photos and captions as you like!
]
```

---

### Step 3: Customizing Names, Nicknames, or Messages

Everything is customizable in **`src/config/birthdayConfig.js`**:
- Real name: `Komal`
- Nickname: `Bauni`
- Sender: `Your Brother`
- Personal letter paragraphs
- "Things That Make You... You" cards
- Final birthday wish

---

### Step 4: Deploying Updates to GitHub Pages

After adding your photos and committing them to git:
```bash
git add .
git commit -m "Update photos and memories for Bauni"
git push origin main
```
GitHub Actions will automatically build and deploy the updated website to:
🔗 `https://aj1t3sh.github.io/Birthday/`
