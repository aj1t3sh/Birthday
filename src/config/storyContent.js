/**
 * ===================================================================
 * 🎂 "A Birthday Celebration in Seven Memories" — Central Configuration
 * ===================================================================
 */

const rawBaseUrl = import.meta.env.BASE_URL || '/';
const baseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl : `${rawBaseUrl}/`;

export function getAssetUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
}

export const storyContent = {
  // Core Personal Details
  name: "Komal",
  nickname: "Bauni",
  sender: "Your Brother",
  relationship: "Sister",
  date: "01 SEPTEMBER",

  // -----------------------------------------------------------------
  // 📸 The 7 Real Photos in the Circular Orbit
  // -----------------------------------------------------------------
  photos: [
    {
      id: 1,
      src: "images/bauni.jpg",
      title: "Pure Joy",
      caption: "Some moments don't need a reason to matter.",
      objectPosition: "center 15%",
    },
    {
      id: 2,
      src: "images/bauni1.jpg",
      title: "Shared Smiles",
      caption: "A little chaos. A lot of memories.",
      objectPosition: "center 12%",
    },
    {
      id: 3,
      src: "images/bauni2.jpg",
      title: "Unchanging Warmth",
      caption: "Somehow, still my Bauni.",
      objectPosition: "center 18%",
    },
    {
      id: 4,
      src: "images/bauni3.jpg",
      title: "Authentic Spirit",
      caption: "Just being you is enough.",
      objectPosition: "center 15%",
    },
    {
      id: 5,
      src: "images/bauni4.jpg",
      title: "Grace & Strength",
      caption: "Growing into someone even more amazing.",
      objectPosition: "center 18%",
    },
    {
      id: 6,
      src: "images/bauni5.jpg",
      title: "Bright Horizons",
      caption: "Here's to more smiles, more memories, more everything.",
      objectPosition: "center 20%",
    },
    {
      id: 7,
      src: "images/bauni6.jpg",
      title: "The Journey Ahead",
      caption: "And somehow... time keeps giving us more memories.",
      objectPosition: "center 15%",
    },
  ],

  // -----------------------------------------------------------------
  // PAGE 1 — BIRTHDAY OPENING
  // -----------------------------------------------------------------
  page1_opening: {
    date: "01 SEPTEMBER",
    lead1: "Today isn't just another day.",
    lead2: "It's Bauni's day. 🎂",
    buttonText: "Open your surprise ✨",
  },

  // -----------------------------------------------------------------
  // PAGE 2 — THE MEMORY ORBIT (The 7-Photo Rotating Wheel)
  // -----------------------------------------------------------------
  page2_orbit: {
    centerTitle: "HAPPY BIRTHDAY",
    centerName: "BAUNI ❤️",
    hint: "Tap any photo to pause & view in full resolution",
    nextButtonText: "A Special Message →",
  },

  // -----------------------------------------------------------------
  // PAGE 3 — DYNAMIC INTERACTIVE NOTE (Heartfelt Hindi Letter)
  // -----------------------------------------------------------------
  page3_note: {
    envelopePrompt: "A little something from me ❤️",
    buttonOpen: "Open the note ✉️",
    beats: [
      {
        id: 1,
        title: "मेरी प्यारी Bauni ❤️",
        body: "आज तुम्हारा दिन है...\nऔर शायद ये बातें मैं तुम्हें\nअक्सर नहीं कहता।",
      },
      {
        id: 2,
        title: "सच कहूँ तो...",
        body: "तुम मेरी ज़िंदगी का\nबहुत खास हिस्सा हो।\n\nचाहे हम कितने भी बड़े हो जाएँ,\nकुछ रिश्ते कभी नहीं बदलते।",
      },
      {
        id: 3,
        title: "वक़्त और ज़िंदगी",
        body: "वक़्त बहुत जल्दी बदल जाता है।\n\nहम बड़े हो जाते हैं,\nज़िंदगी आगे बढ़ जाती है,\nऔर बहुत कुछ बदल जाता है।\n\nलेकिन...",
      },
      {
        id: 4,
        title: "हमेशा के लिए...",
        body: "मेरे लिए तुम हमेशा...\n\nमेरी प्यारी Bauni रहोगी। ❤️",
      },
      {
        id: 5,
        title: "मेरी दुआ ✨",
        body: "मेरी बस यही दुआ है कि...\n\nतुम हमेशा खुश रहो। ✨\n\nतुम्हारे सारे सपने\nएक-एक करके पूरे हों।\n\nऔर ज़िंदगी तुम्हें\nवो सब दे जिसकी तुम हक़दार हो।",
      },
      {
        id: 6,
        title: "खुद पर भरोसा",
        body: "मुश्किलें आएँगी...\n\nलेकिन मुझे पता है\nतुम उन्हें पार कर लोगी।\n\nबस हमेशा खुद पर भरोसा रखना।\n\nऔर कभी भी\nखुद को कम मत समझना। ❤️",
      },
      {
        id: 7,
        title: "बस खुद जैसी रहना",
        body: "परफेक्ट बनने की कोशिश मत करना।\n\nबस...\n\nखुद जैसी हो,\nवैसी ही रहना।\n\nखुश रहना।\nमुस्कुराते रहना।\n\nऔर अपने सपनों के पीछे\nभागते रहना। ✨",
      },
      {
        id: 8,
        title: "Happy Birthday, Komal 🎂",
        body: "जन्मदिन की बहुत-बहुत शुभकामनाएँ,\nKomal। 🎂❤️\n\nमेरी प्यारी Bauni...\n\nदुआ है कि तुम्हारी ज़िंदगी का\nहर नया साल\n\nऔर ज़्यादा खुशियाँ,\nप्यार,\nसफलता,\nऔर खूबसूरत यादें लेकर आए।\n\nहमेशा खुश रहना। ❤️\n\nढेर सारा प्यार,\nतुम्हारा भाई ❤️",
      },
    ],
    nextButtonText: "Time for Cake 🎂 →",
  },

  // -----------------------------------------------------------------
  // PAGE 4 — BIRTHDAY CAKE & WISH CEREMONY 🎂
  // -----------------------------------------------------------------
  page4_cake: {
    intro: "Make a wish, Bauni. ✨",
    buttonBlow: "Blow the candles 🎂",
    blessing: "May every wish you make find its way back to you. ❤️",
    nextButtonText: "One Last Surprise 🎁 →",
  },

  // -----------------------------------------------------------------
  // PAGE 5 — SURPRISE GIFT BOX 🎁
  // -----------------------------------------------------------------
  page5_gift: {
    title: "One last surprise 🎁",
    hint: "Tap the gift box to unwrap",
    revealedMessage: "Your gift is simple.\n\nA reminder that you are loved more than you realize. ❤️",
    nextButtonText: "Grand Finale ✨ →",
  },

  // -----------------------------------------------------------------
  // PAGE 6 — GRAND BIRTHDAY FINALE
  // -----------------------------------------------------------------
  page6_finale: {
    title: "HAPPY BIRTHDAY 🎂",
    name: "KOMAL",
    nickname: "My Bauni. ❤️",
    subline: "Keep smiling.\nKeep dreaming.\nKeep being you.",
    credit: "Made with love\nby your brother ❤️",
    replayButtonText: "↻ Start Again",
    heroPhoto: "images/bauni.jpg",
  },
};
