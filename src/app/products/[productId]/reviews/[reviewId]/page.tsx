import { notFound } from 'next/navigation'
interface ReviewsParams {
  params: {
    productId: string
    reviewId: string
  }
}

export default async function Review({ params }: ReviewsParams) {
  const { productId, reviewId } = await params
  if (parseInt(reviewId) > 1000 || parseInt(productId) > 100) {
    notFound()
  }

  return (
    <div>
      <p>Produto {productId}</p>
      <p>Review {reviewId}</p>
    </div>
  )
}