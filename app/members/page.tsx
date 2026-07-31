import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { members, posts } from "../content";

export const metadata: Metadata = {
  title: "Members | Quble",
  description: "Quble 보안 연구팀 멤버 목록입니다.",
};

export default function MembersPage() {
  return (
    <main className="site-shell">
      <SiteHeader active="members" />

      <section className="members-page" aria-labelledby="members-title">
        <div className="section-heading">
          <h1 id="members-title">Members</h1>
        </div>

        <div className="members-list">
          {members.map((member) => {
            const postCount = posts.filter((post) => post.author === member.handle).length;

            return (
              <Link
                className="member-list-row"
                href={`/members/${member.handle}`}
                key={member.handle}
                aria-label={`${member.name} 작성 글 보기`}
              >
                <img
                  className="member-list-avatar"
                  src={`https://github.com/${member.handle}.png?size=120`}
                  alt=""
                  loading="lazy"
                />
                <div className="member-list-name">
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
                <span className="member-list-handle">@{member.handle}</span>
                <span className="member-post-count">{postCount} posts</span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
