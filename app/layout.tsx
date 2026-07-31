import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://securityquble.github.io"),
  title: "Quble — Security Research Team",
  description: "Quble 보안 연구팀의 기술 블로그입니다.",
  icons: {
    icon: "/quble-logo.png",
    shortcut: "/quble-logo.png",
  },
  openGraph: {
    title: "Quble — Security Research Team",
    description: "Quble 보안 연구팀의 기술 블로그입니다.",
    type: "website",
    url: "https://securityquble.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quble — Security Research Team",
    description: "Quble 보안 연구팀의 기술 블로그입니다.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
