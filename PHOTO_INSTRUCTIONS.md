# 📸 How to Add Bauni's Photo

Adding your sister's photo is super simple:

1. Copy your photo of **Komal / Bauni**.
2. Rename it to:
   ```
   bauni.jpg
   ```
3. Paste it inside the folder:
   ```
   public/images/bauni.jpg
   ```
   *(Overwriting the existing placeholder)*

---

### Customizing Names or Message
All text, names, nicknames, and messages can be customized in one single file:
👉 `src/config/birthdayConfig.js`

```javascript
export const birthdayConfig = {
  realName: "Komal",
  nickname: "Bauni",
  sender: "Your Brother",
  // ...
};
```
