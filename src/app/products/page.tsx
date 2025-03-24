import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Produtos'
}
export default function Products() {
  const id = [1, 2, 3]
  return (
    <div>
      <p >Any</p>
      <div className="flex flex-col">
        {id.map((value) => {
          return <Link href={`/products/${value}`}>Ir para página de produtos {value}</Link>
        })}
      </div>
    </div>
  )
}