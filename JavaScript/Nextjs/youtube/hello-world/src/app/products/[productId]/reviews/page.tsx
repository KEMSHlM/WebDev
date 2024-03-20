export default function ReviewList({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Reviews for product {params.productId}</h1>;
}
