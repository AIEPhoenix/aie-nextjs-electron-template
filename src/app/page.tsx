'use client';
import { CodeHighlight } from '@mantine/code-highlight';
import { Button } from '@mantine/core';
import Image from 'next/image';
import TestIcon from '@/assets/icon.svg';
import styles from './page.module.scss';
import styled from '@emotion/styled';

const StyledTestIcon = styled(TestIcon)`
  color: red;
`;

const TestBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <StyledTestIcon />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className={styles.title}>test</div>
        <span className="icon-[mdi-light--home]"></span>
        <TestBox />
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            component="a"
            className="rounded-full text-white/85 border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
            Deploy now
          </Button>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <CodeHighlight
          code={`
        // posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

export default Blog
          `}
          language="tsx"
          radius="md"
        />
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
