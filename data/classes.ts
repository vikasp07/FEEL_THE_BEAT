export interface DanceClass {
  id: number;
  name: string;
  description: string;
  image: string;
  levels: string[];
  ageGroup: string;
  duration: string;
  color: string;
}

export interface Batch {
  id: number;
  name: string;
  time: string;
  days: string;
  style: string;
  level: string;
  seatsLeft: number;
  ageGroup: string;
}

export const classes: DanceClass[] = [
  {
    id: 1,
    name: "Hip-Hop",
    description: "Urban street dance with high energy moves and freestyle expression",
    image: "/images/insta_dance_vedio.jpg",
    levels: ["Beginner", "Intermediate", "Advanced"],
    ageGroup: "12+",
    duration: "60 min",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    name: "Bollywood",
    description: "Energetic Indian dance fusion with expressive storytelling",
    image: "/images/insta_advertisement.jpg",
    levels: ["Beginner", "Intermediate", "Advanced"],
    ageGroup: "8+",
    duration: "60 min",
    color: "from-pink-500 to-red-500",
  },
  {
    id: 3,
    name: "Contemporary",
    description: "Fluid movements combining ballet, modern, and jazz techniques",
    image: "/images/insta_advertise.jpg",
    levels: ["Intermediate", "Advanced"],
    ageGroup: "14+",
    duration: "75 min",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    id: 4,
    name: "Ladies Batch",
    description: "Exclusive sessions for women focusing on fitness and confidence",
    image: "/images/insta_advertisement.jpg",
    levels: ["All Levels"],
    ageGroup: "18+",
    duration: "60 min",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    id: 5,
    name: "Kids Batch",
    description: "Fun and engaging dance classes designed for young dancers",
    image: "/images/insta_dance_vedio.jpg",
    levels: ["Beginner"],
    ageGroup: "5-12",
    duration: "45 min",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 6,
    name: "Self-Defence",
    description: "Practical self-defense techniques combined with fitness training",
    image: "/images/image_trophy.jpg",
    levels: ["All Levels"],
    ageGroup: "12+",
    duration: "60 min",
    color: "from-rose-500 to-slate-700",
  },
];

export const batches: Batch[] = [
  {
    id: 1,
    name: "Morning Warriors",
    time: "6:00 AM - 7:00 AM",
    days: "Mon, Wed, Fri",
    style: "Hip-Hop",
    level: "Intermediate",
    seatsLeft: 3,
    ageGroup: "18-35",
  },
  {
    id: 2,
    name: "Bollywood Express",
    time: "7:00 AM - 8:00 AM",
    days: "Tue, Thu, Sat",
    style: "Bollywood",
    level: "Beginner",
    seatsLeft: 5,
    ageGroup: "12-50",
  },
  {
    id: 3,
    name: "Kids Fun Zone",
    time: "4:00 PM - 4:45 PM",
    days: "Mon to Fri",
    style: "Kids Batch",
    level: "Beginner",
    seatsLeft: 2,
    ageGroup: "5-12",
  },
  {
    id: 4,
    name: "Ladies Special",
    time: "10:00 AM - 11:00 AM",
    days: "Mon, Wed, Fri",
    style: "Ladies Batch",
    level: "All Levels",
    seatsLeft: 4,
    ageGroup: "18-45",
  },
  {
    id: 5,
    name: "Evening Groove",
    time: "6:00 PM - 7:00 PM",
    days: "Mon to Sat",
    style: "Hip-Hop",
    level: "Advanced",
    seatsLeft: 1,
    ageGroup: "16-30",
  },
  {
    id: 6,
    name: "Contemporary Flow",
    time: "7:30 PM - 8:45 PM",
    days: "Tue, Thu, Sat",
    style: "Contemporary",
    level: "Intermediate",
    seatsLeft: 6,
    ageGroup: "14-40",
  },
];
