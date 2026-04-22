export const quizQuestions = [
  {
    id: 1,
    question: "When the beat drops, what is your instant move?",
    options: [
      { text: "I want to jump and move fast!", value: "hiphop", emoji: "⚡" },
      { text: "I feel expressive and dramatic", value: "bollywood", emoji: "🎭" },
      { text: "I want to flow gracefully", value: "contemporary", emoji: "🌊" },
      { text: "I want to have fun and be playful", value: "kids", emoji: "🎉" }
    ]
  },
  {
    id: 2,
    question: "Pick your rehearsal look:",
    options: [
      { text: "Baggy pants and sneakers", value: "hiphop", emoji: "👟" },
      { text: "Colorful traditional fusion", value: "bollywood", emoji: "👗" },
      { text: "Flowy and comfortable", value: "contemporary", emoji: "🩰" },
      { text: "Bright and fun", value: "kids", emoji: "🌈" }
    ]
  },
  {
    id: 3,
    question: "What's your main goal?",
    options: [
      { text: "Learn cool street moves", value: "hiphop", emoji: "🔥" },
      { text: "Dance at weddings and parties", value: "bollywood", emoji: "💃" },
      { text: "Express emotions through movement", value: "contemporary", emoji: "💫" },
      { text: "Build confidence and fitness", value: "ladies", emoji: "💪" }
    ]
  },
  {
    id: 4,
    question: "Choose your playlist vibe:",
    options: [
      { text: "Hip-Hop, Rap, Trap", value: "hiphop", emoji: "🎧" },
      { text: "Bollywood hits", value: "bollywood", emoji: "🎵" },
      { text: "Indie, Acoustic, Emotional", value: "contemporary", emoji: "🎼" },
      { text: "Fun pop songs", value: "kids", emoji: "🎶" }
    ]
  },
  {
    id: 5,
    question: "How do you like to perform?",
    options: [
      { text: "With attitude and swag", value: "hiphop", emoji: "😎" },
      { text: "With expressions and storytelling", value: "bollywood", emoji: "🎬" },
      { text: "With grace and emotion", value: "contemporary", emoji: "✨" },
      { text: "With energy and joy", value: "kids", emoji: "🌟" }
    ]
  },
  {
    id: 6,
    question: "Your dream performance stage is:",
    options: [
      { text: "Street cypher with heavy bass", value: "hiphop", emoji: "🎧" },
      { text: "Big wedding or event spotlight", value: "bollywood", emoji: "🎬" },
      { text: "Artistic black-box theatre", value: "contemporary", emoji: "🎟️" },
      { text: "Fun school stage with friends", value: "kids", emoji: "🎉" },
    ],
  },
];

export const quizResults = {
  hiphop: {
    style: "Hip-Hop",
    description: "You're all about energy, attitude, and street style! Hip-Hop is your calling.",
    recommendedBatch: "Evening Groove - 6:00 PM",
    color: "from-cyan-500 to-blue-500",
    image: "/images/insta_dance_vedio.jpg",
  },
  bollywood: {
    style: "Bollywood",
    description: "You love expressions, drama, and the joy of Indian dance! Bollywood is perfect for you.",
    recommendedBatch: "Bollywood Express - 7:00 AM",
    color: "from-pink-500 to-red-500",
    image: "/images/insta_advertisement.jpg",
  },
  contemporary: {
    style: "Contemporary",
    description: "You're artistic, emotional, and love flowing movements. Contemporary dance suits you best!",
    recommendedBatch: "Contemporary Flow - 7:30 PM",
    color: "from-indigo-500 to-cyan-500",
    image: "/images/insta_advertise.jpg",
  },
  kids: {
    style: "Kids Batch",
    description: "You're playful, energetic, and love having fun! Our Kids Batch is perfect for you.",
    recommendedBatch: "Kids Fun Zone - 4:00 PM",
    color: "from-amber-500 to-orange-500",
    image: "/images/insta_dance_vedio.jpg",
  },
  ladies: {
    style: "Ladies Batch",
    description: "You want fitness, confidence, and a supportive community. Ladies Batch is ideal!",
    recommendedBatch: "Ladies Special - 10:00 AM",
    color: "from-fuchsia-500 to-pink-500",
    image: "/images/insta_advertisement.jpg",
  },
};
