# Quble Security Research Blog

Quble 팀의 보안 연구 및 기술 기록을 게시하는 블로그입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 글 추가 방법

1. `app/content.ts`의 `posts` 배열에 제목, 작성자 GitHub 핸들, 날짜, 주소를 추가합니다.
2. 기존 `app/posts/test/page.tsx`를 복사해 `app/posts/<주소>/page.tsx`를 만들고 글 내용을 작성합니다.
3. 새 브랜치에서 변경 사항을 커밋하고 `main` 브랜치로 Pull Request를 보냅니다.

`main`에 합쳐지면 GitHub Actions가 자동으로 블로그를 배포합니다.
