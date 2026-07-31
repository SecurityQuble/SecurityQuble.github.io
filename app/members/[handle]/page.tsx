import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { members, posts } from "../../content";

export const dynamicParams = false;

export function generateStaticParams() {
  return members.map((member) => ({ handle: member.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const member = members.find((item) => item.handle === handle);

  return {
    title: member ? `${member.name} | Quble` : "Member | Quble",
    description: member ? `${member.name}이 작성한 Quble 기술 글입니다.` : "Quble 멤버 글 목록",
  };
}

export default async function MemberPostsPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const member = members.find((item) => item.handle === handle);

  if (!member) return null;

  const memberPosts = posts.filter((post) => post.author === member.handle);

  return (
    <main className="site-shell">
      <SiteHeader active="members" />

      <section className="member-profile">
        <Link className="back-link" href="/members">← Members</Link>
        <div className="member-profile-heading">
          <img src={`https://github.com/${member.handle}.png?size=180`} alt="" />
          <div>
            <div className="member-profile-name">
              <h1>{member.name}</h1>
            </div>
            <p>{member.role}</p>
            <a
              className="member-profile-github"
              href={`https://github.com/${member.handle}`}
              target="_blank"
              rel="noreferrer"
            >
              @{member.handle} ↗
            </a>
          </div>
        </div>

        <div className="member-posts-heading">
          <h2>Posts</h2>
          <span>{memberPosts.length}</span>
        </div>

        <div className="member-posts-list">
          {memberPosts.length > 0 ? (
            memberPosts.map((post) => (
              <Link className="post-row" href={`/posts/${post.slug}`} key={post.slug}>
                <div>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                </div>
                <time dateTime={post.date}>{post.date.replaceAll("-", ".")}</time>
              </Link>
            ))
          ) : (
            <p className="no-posts">작성한 글이 없습니다.</p>
          )}
        </div>
      </section>
    </main>
  );
}
