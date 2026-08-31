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
  // PAGE 3 — DYNAMIC INTERACTIVE NOTE
  // -----------------------------------------------------------------
  page3_note: {
    envelopePrompt: "A little something from me ❤️",
    buttonOpen: "Open the note ✉️",
    beats: [
      {
        id: 1,
        title: "Dear Bauni,",
        body: "There is something I don't say often enough.",
        highlight: null,
      },
      {
        id: 2,
        title: "To My Sister",
        body: "I genuinely want you to know how special you are.",
        highlight: "special",
      },
      {
        id: 3,
        title: "As Time Moves",
        body: "Life keeps moving. People grow.\nAnd somehow, time moves faster than we expect.",
        highlight: null,
      },
      {
        id: 4,
        title: "Always Close",
        body: "But some people never really stop feeling like home.",
        highlight: "home",
      },
      {
        id: 5,
        title: "Unchanging",
        body: "For me...\nyou'll always be Bauni. ❤️",
        highlight: "Bauni",
      },
      {
        id: 6,
        title: "My Wish For You",
        body: "I hope life gives you:\n\n✨ more smiles\n✨ more dreams\n✨ more memories\n✨ more reasons to be proud of yourself.",
        highlight: null,
      },
      {
        id: 7,
        title: "Just Be You",
        body: "You don't have to be perfect.\nJust keep being you.",
        highlight: "keep being you",
      },
      {
        id: 8,
        title: "Happy Birthday, Komal.",
        body: "I hope this year gives you everything your heart quietly wishes for.\n\nWith lots of love,\nYour Brother ❤️",
        highlight: null,
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
