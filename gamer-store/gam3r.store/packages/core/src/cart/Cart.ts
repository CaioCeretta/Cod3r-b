
import { Product } from '../product'
import ItemCart from './ItemCart'

export default class Cart {
    constructor(readonly items: ItemCart[] = []) {}

    addItem(product: Product): Cart {
        const item = this.itemsByProduct(product)
        if (item) {
            return new Cart(this.updateItemQuantity(this.items, product, 1))
        } else {
            return new Cart([...this.items, { product, quantity: 1 }])
        }
    }

    removeItem(product: Product) {
        const item = this.itemsByProduct(product)
        if (!item) return this

        return new Cart(this.updateItemQuantity(this.items, product, -1))
    }

    removeProduct(product: Product) {
        const item = this.itemsByProduct(product)
        if (!item) return this

        return new Cart(this.items.filter((item) => item.product.id !== product.id))
    }

    clear() {
        return new Cart()
    }

    get itemsQty() {
        return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0)
    }

    get totalPrice() {
        return this.items
            .map((item) => item.product.basePrice * item.quantity)
            .reduce((a, b) => a + b, 0)
    }

    get fullPrice() {
        return this.items
            .map((item) => item.product.basePrice * item.quantity)
            .reduce((a, b) => a + b, 0)
    }

    private itemsByProduct(product: Product): ItemCart | undefined {
        return this.items.find((item) => item.product.id === product.id)
    }

    private updateItemQuantity(
        items: ItemCart[],
        produto: Product,
        difference: number
    ): ItemCart[] {
        return items
            .map((i) =>
                i.product.id === produto.id ? { ...i, quantity: i.quantity + difference } : i
            )
            .filter((i) => i.quantity > 0)
    }
}
