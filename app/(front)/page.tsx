import ProductItem from "@/components/products/products_item";
import data from "@/lib/data";


export default function Home() {
  return (
    <>
      <h2 className="text-2xl py-2">Latest Product</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-col-3 lg:grid-cols-4">
        {
          data.product.map((product) => (
            <ProductItem key={product.slug} product={product} />
          ))
        }
      </div>
    </>
  )
}
 