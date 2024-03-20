# OVERVIEW

Next.js 14を学習備忘録．

> [Next.js 14](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=1)

<!--toc:start-->

- [OVERVIEW](#overview)
- [React](#react)
  - [Reactとは？](#reactとは)
  - [Reactの構成](#reactの構成)
- [Next.jsとは？](#nextjsとは)
  - [Next.jsを学ぶ利点](#nextjsを学ぶ利点)
  - [基礎](#基礎) - [Routing](#routing) - [Metadata](#metadata) - [Link Navigation](#link-navigation)
  <!--toc:end-->

# React

## Reactとは？

## Reactの構成

以下は，HTML．

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
```

以下は，App.js.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

このように，rootタグの間にアプリケーションが差し込まれるイメージ．

# Next.jsとは？

## Next.jsを学ぶ利点

1. Routingが簡単
2. API routes
3. Rendering
4. Data fetching
5. Styling
6. Optimization
7. Dev and prod build sysytem

## 基礎

### Routing

Next.jsは，ページという概念に基づいて，ファイルシステムに沿ったルーターを持っている．  
`about`ディレクトリにファイルが追加された時，ルートとして自動で使用可能になる．  
`about`ディレクトリ内のファイルは次の一般的になパターンで定義される．

```sh
.
├── app
│   ├── _lib
│   ├── (auth)
│   │   ├── (with-auth)
│   │   │   ├── layout.tsx
│   │   │   ├── login
│   │   │   │   └── page.tsx
│   │   │   └── register
│   │   │       └── page.tsx
│   │   └── forgot-password
│   │       └── page.tsx
│   ├── about
│   │   └── page.tsx
│   ├── docs
│   │   └── [[...slug]]
│   │       └── page.tsx
│   ├── products
│   │   ├── [productId]
│   │   │   └── reviews
│   │   │       ├── [reviewId]
│   │   │       │   ├── not-found.tsx
│   │   │       │   └── page.tsx
│   │   │       ├── layout.tsx
│   │   │       └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
└── components

20 directories, 19 files
```

上のようなディレクトリ構造では，`http://localhost:3000/about`でアクセス可能．

- Route Groups
  `app`フォルダ以下にあるフォルダは，通常ルーティングされるが，フォルダをルートグループとすることで，  
  そのフォルダがルートのURLパスに含まれないようにすることができる．

  上のフォルダ構成では，フォルダ名に`(auth)`を使うことで，  
  URLパスが`http://localhost:3000/auth/login`ではなく，`http://localhost:3000/login`となる．

  これにより，URLパス構造に影響を与えるkとなく，ルートセグメントとプロジェクトファイルを論理的なグループに分けることができる．  
  kk

- Private Folder
  フォルダ名に`_`をつけることで，ルーティングされないプライベートフォルダを作成することができる．

- Dynamic Routes
  以下は，動的ルートの例．
  `app/blog/[slug]/page.tsx` -> `http://localhost:3000/blog/a`

  ```ts
  export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>;
  }
  ```

  また，[...slug]を用いることで，複数のパスを受け取ることができる．  
  `app/shop/a`, `app/shop/a/b`など．

### Metadata

以下は，`app/products/[productId]/page.tsx`の例．

```ts
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};
```

動的に，`<head>`内の`<title>`を変更することができる．

また，非同期関数を用いることで，fetchの結果からメタデータをつけることができる．

```ts
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};
```

??なぜ，appルートではMetadataの情報をlayout.tsxに書くのに，他のルーティングでは，page.tsxに書くのか??

`default`, `template`, `absolute`のフィールドを使用することができる．

````ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
//```

`templete`により，`%s`に以下の`metadata.title`が代入される．

```ts
export const metadata: Metadata = {
  title: "Invoices",
};
````

`absolute`を使うことで，書き換えることができる．

```ts
export const metadata: Metadata = {
  title: {
    absolute: "Dashboard",
  },
};
```

### Link Navigation

`<Link>`は，Reactのコンポーネントである．Next.jsでルート間をナビゲートする主要な方法．

```ts
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

動的なルートを使うこともできる．

```ts
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // フックを利用して，現在のパス名を取得する．
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            href={link.href}
            key={link.name}
            // もし，リンクがアクティブなら，`font-bold`を適用する．
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
```

`use client`は，特定のコンポーネントやページがクライアントサイドでのみレンダリングされることを意図している場合に宣言される．

Routerを使って，クリックイベントを実装することもできる．

```ts
const router = useRouter();
const handleClick = () => {
  console.log("Order Product");
  router.push("/");
};
```

### Special Files

いくつか特定の機能を持ったファイルが存在する．

1. `page.tsx`
2. `layout.tsx`
3. `templete.tsx`
   layout.tsxとの違いは，際レンダリングされるかどうか．
4. `not-found.tsx`
5. `loading.tsx`
