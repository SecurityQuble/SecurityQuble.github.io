export type Member = {
  name: string;
  role: string;
  handle: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  content: string;
  date: string;
  author: string;
};

export const members: Member[] = [
  { name: "rauzn", role: "pwn", handle: "r4uzn" },
  { name: "4hnov", role: "pwn", handle: "4hnov" },
  { name: "0w0", role: "rev", handle: "rowocus" },
  { name: "이성준", role: "hardware", handle: "Lee-seongjoon" },
  { name: "hw4yeon", role: "pwn, AI", handle: "hw4yeon" },
  { name: "novice-22", role: "web", handle: "novice-22" },
];

export const posts: BlogPost[] = [
  {
    slug: "system-hacking-mitigation-bulkhead",
    title: "System Mitigation - BULKHEAD",
    content: "",
    date: "2026-08-03",
    author: "r4uzn",
  },
];
