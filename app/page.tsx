import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import { members, posts } from "./content";

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <SiteHeader active="posts" />

      <section className="section posts-section" aria-label="Posts">
        {posts.map((post) => {
          const author = members.find((member) => member.handle === post.author);

          return (
            <Link
              className="post-row"
              href={`/posts/${post.slug}`}
              aria-label={`${post.title} 글 읽기`}
              key={post.slug}
            >
              <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
              <div className="post-row-meta">
                {author ? (
                  <span className="post-author">
                    <img src={`https://github.com/${author.handle}.png?size=80`} alt="" />
                    <span>{author.name}</span>
                  </span>
                ) : null}
                <time dateTime={post.date}>{post.date.replaceAll("-", ".")}</time>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
