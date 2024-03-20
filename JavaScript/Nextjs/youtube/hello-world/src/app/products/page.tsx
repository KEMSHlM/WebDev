import Link from "next/link";

// なぜ，./1はエラーになるのか？
export default function ProductList() {
  return (
    <>
      <Link href="../">Home</Link>
      <h1>ProductList</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h2>
    </>
  );
}
