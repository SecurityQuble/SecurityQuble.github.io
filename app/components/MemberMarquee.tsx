import Link from "next/link";
import { members, type Member } from "../content";

function MemberCard({ member, duplicate = false }: { member: Member; duplicate?: boolean }) {
  return (
    <Link
      className="member-card"
      href={`/members/${member.handle}`}
      tabIndex={duplicate ? -1 : undefined}
      aria-label={duplicate ? undefined : `${member.name} 작성 글 보기`}
    >
      <img
        className="member-avatar"
        src={`https://github.com/${member.handle}.png?size=160`}
        alt=""
        loading="lazy"
      />
      <div className="member-copy">
        <div className="member-name-row">
          <h2>{member.name}</h2>
        </div>
        <p>{member.role}</p>
        <span className="member-handle">@{member.handle}</span>
      </div>
    </Link>
  );
}

export default function MemberMarquee() {
  return (
    <section className="section member-section" aria-labelledby="home-members-title">
      <div className="section-heading member-heading">
        <h1 id="home-members-title">Member</h1>
      </div>

      <div className="member-viewport">
        <div className="member-track">
          <div className="member-group">
            {members.map((member) => (
              <MemberCard member={member} key={member.handle} />
            ))}
          </div>
          <div className="member-group" aria-hidden="true">
            {members.map((member) => (
              <MemberCard member={member} duplicate key={`duplicate-${member.handle}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
