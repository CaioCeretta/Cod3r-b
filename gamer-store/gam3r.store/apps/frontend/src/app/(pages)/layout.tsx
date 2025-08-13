import { CartProvider } from "@/data/contexts/CartContext";
import { PaymentProvider } from "@/data/contexts/PaymentContext";
import { ProductsProvider } from "@/data/contexts/ProductsContext";
import Page from "@/components/template/Page";

export default function Layout(props: any) {
  return (
    <ProductsProvider>
      <CartProvider>
        <PaymentProvider>
          <Page>{props.children}</Page>
        </PaymentProvider>
      </CartProvider>
    </ProductsProvider>
  )
}