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
    content:
      "해킹 기법과 mitigation의 공진화를 따라가며, NDSS 2025 BULKHEAD를 통해 PKS 기반 커널 컴포넌트 격리의 방향성을 살펴봅니다.",
    date: "2026-08-04",
    author: "r4uzn",
  },
];
