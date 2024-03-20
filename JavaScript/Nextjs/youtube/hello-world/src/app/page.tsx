import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <Link href="./blog">Blog</Link>
      <Link href="./products">Products</Link>
    </>
  );
}
