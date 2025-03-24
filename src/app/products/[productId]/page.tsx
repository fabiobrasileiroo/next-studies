import { notFound } from 'next/navigation'

interface infoParams {
  params: {
    productId: string
  }
}

export default async function Info({ params }: infoParams) {
  const {productId} = await params
  console.log(parseInt(productId) <  100)
  if(parseInt(productId) > 100) {
    notFound()
  }
  return (
    <div>
      <p>Information {productId}</p>
    </div>
  )
}