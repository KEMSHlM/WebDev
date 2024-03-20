export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Features Products</h2>
    </>
  );
}
