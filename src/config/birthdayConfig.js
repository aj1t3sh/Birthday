/**
 * Central Configuration File for Bauni's Birthday Blessing Website
 * 
 * 📸 PHOTO INSTRUCTIONS:
 * To add your sister's real photo, replace `public/images/bauni.jpg` with her photo!
 * You can also edit any text, greetings, or details below.
 */

// Dynamic base URL support for both local development and GitHub Pages (/Birthday/)
const baseUrl = import.meta.env.BASE_URL || '/';

export const birthdayConfig = {
  // Personal Details
  realName: "Komal",
  nickname: "Bauni",
  relationship: "Sister",
  sender: "Your Brother",
  
  // Photo Settings (compatible with GitHub Pages base path /Birthday/)
  // Replace public/images/bauni.jpg with Bauni's photo
  photoPath: `${baseUrl}images/bauni.jpg`.replace('//', '/'),
  
  // Screen 1: Loading Screen
  loading: {
    text: "Preparing a little surprise for Bauni... 🎁✨",
    durationMs: 2400,
  },

  // Screen 2: Welcome Screen
  welcome: {
    tagline: "Hey Bauni 👀",
    subtitle: "Someone has something special for you...",
    buttonText: "Open Your Surprise 🎁",
  },

  // Screen 3: Main Birthday Hero
  hero: {
    mainHeading: "🎉 Happy Birthday, Komal! 🎂",
    subHeading: "But for me... you'll always be Bauni ❤️",
    message: "Today isn't just another day...\nIt's the day someone very special came into this world. ❤️✨",
    buttonText: "A Message For You 💌",
  },

  // Screen 4: Personal Blessing Letter
  letter: {
    salutation: "Dear Bauni ❤️,",
    paragraphs: [
      "Today, I just want you to know how special you are.",
      "I may not always say it, but having you in my life is something I truly cherish.",
      "On your birthday, I pray that your life is always filled with happiness, beautiful memories, success, peace, and countless reasons to smile.",
      "May every dream in your heart slowly become a reality.",
      "May every difficult moment make you stronger, and may every beautiful moment become a memory worth keeping forever.",
      "Keep believing in yourself, keep smiling, and always remember that you are capable of achieving wonderful things.",
      "No matter how much time passes, you'll always be my Bauni. ❤️",
      "I hope this new year of your life brings you more happiness, more adventures, more success, and everything your heart truly wishes for.",
    ],
    closingGreeting: "Happy Birthday once again, Bauni! 🎂✨",
    closingWish: "May this be the beginning of your most beautiful chapter yet. ❤️",
    signOff: "With lots of love,",
    senderName: "Your Brother ❤️"
  },

  // Screen 5: Photo Memory Section
  starSection: {
    badge: "Special Memory ✨",
    title: "The Star of Today ✨",
    quote: "The world became a little more beautiful the day you arrived. ❤️",
    traits: [
      { emoji: "✨", label: "Pure Sunshine", desc: "Lighting up every room with your genuine smile" },
      { emoji: "💖", label: "Heart of Gold", desc: "Always caring, strong, and deeply cherished" },
      { emoji: "🌸", label: "Forever Bauni", desc: "No matter how big you grow, always our little star" }
    ]
  },

  // Screen 6: Make a Wish
  wishSection: {
    title: "Close your eyes, Bauni... 🌟",
    subtitle: "And make a wish.",
    buttonText: "Make My Wish 🎂",
    revealedMessage: "May every beautiful wish in your heart come true. ✨❤️",
    subCelebration: "Keep shining brighter than the stars! 🌟"
  },

  // Screen 7: Final Surprise Screen
  finalScreen: {
    line1: "Bauni, you deserve all the happiness in the world. ❤️",
    line2: "Keep smiling. Keep shining. Keep being you. ✨",
    line3Heading: "🎉 Happy Birthday, Komal! 🎂",
    line4Sign: "From your brother, with lots and lots of love ❤️",
    footerNote: "Made especially for Bauni ❤️",
    replayButton: "Experience Again 🔁"
  }
};
