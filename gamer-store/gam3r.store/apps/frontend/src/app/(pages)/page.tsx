import FilterProducts from "@/components/product/FilterProducts";
import ProductList from "@/components/product/ProductList";


export default function Home() {

  return (
    <div className="flex flex-1 flex-col container gap-5 py-10">
      
      <FilterProducts />
      <ProductList />
    
    </div>
  );
}
