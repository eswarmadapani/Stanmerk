export interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "ghost";
}

export const hero = {
  badge: "CURRENTLY BOOKING NEW CLIENTS",
  title: [
    "We Edit. You Create. ",
    { text: "Together, You Grow.", accent: true },
  ],
  subtext: "Professional video editing, content mentorship, and strategy for creators and personal brands in India.",
  buttons: [
    { label: "Our Services", href: "#services", variant: "primary" },
  ] as HeroButton[],
  // Only include ratings if you have real data
  ratings: null,
  // Alternative: proof stats
  stats: [
    { label: "Videos Delivered", value: "50+" },
    { label: "Creators Served", value: "5+" },
    { label: "Avg Turnaround", value: "48H" },
  ],
};
