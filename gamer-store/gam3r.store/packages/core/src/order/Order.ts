import { Status } from './Status'
import { PaymentMethod } from './PaymentMethod'
import OrderItem from './OrderItem'
import DeliveryOrder from './DeliveryOrder'


export default interface Order {
    id: number
    date: Date
    items: OrderItem[]
    totalPrice: number
    status: Status
    paymentMethod: PaymentMethod
    delivery: DeliveryOrder
}
