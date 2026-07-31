import type { Metadata } from "next";
import Link from "next/link";
import GitHubComments from "../../components/GitHubComments";
import SiteHeader from "../../components/SiteHeader";
import { members, posts } from "../../content";

const post = posts.find((item) => item.slug === "test")!;
const author = members.find((member) => member.handle === post.author)!;

export const metadata: Metadata = {
  title: `${post.title} | Quble`,
  description: post.content,
};

export default function TestPost() {
  return (
    <main className="site-shell" id="top">
      <SiteHeader active="posts" />

      <article className="article">
        <Link className="back-link" href="/">← Posts</Link>
        <header className="article-header">
          <div className="article-heading-copy">
            <h1>{post.title}</h1>
            <Link
              className="article-author"
              href={`/members/${author.handle}`}
            >
              <img src={`https://github.com/${author.handle}.png?size=80`} alt="" />
              <span>{author.name}</span>
              <small>@{author.handle}</small>
            </Link>
          </div>
          <time dateTime={post.date}>{post.date.replaceAll("-", ".")}</time>
        </header>
        <div className="article-content">
          <p>{post.content}</p>
        </div>
      </article>

      <section className="comments-section" aria-labelledby="comments-title">
        <h2 id="comments-title">Comments</h2>
        <p className="comments-note">GitHub 계정으로 로그인해 댓글을 남길 수 있습니다.</p>
        <GitHubComments />
      </section>
    </main>
  );
}
