import { Currency, Installment } from '@gstore/core'
import { IconCreditCard } from '@tabler/icons-react'

export interface PaymentSummaryProps {
    itemsQty: number
    totalPrice: number
    fullTotalPrice: number
    installment: Installment
    completePurchase: () => void
    className?: string
}

export default function PaymentSummary(props: PaymentSummaryProps) {
    return (
        <div
            className={`
                flex flex-col self-start gap-3 
                w-96 px-6 py-8
                bg-violet-dark rounded-xl
                ${props.className ?? ''}
            `}
        >
            <span className="text-xl font-semibold">Summary:</span>
            <div className="flex justify-between">
                <span className="text-zinc-400">Payment Method:</span>
                <span>PIX/Bank Slip</span>
            </div>
            <div className="flex justify-between">
                <span className="text-zinc-400">Total Price:</span>
                <span className="text-emerald-500 font-semibold">
                    {Currency.format(props.fullTotalPrice)}
                </span>
            </div>
            <div className="flex justify-between">
                <span className="text-zinc-400">Discount:</span>
                <span className="text-red-500 font-semibold">
                    -{Currency.format(props.fullTotalPrice - props.totalPrice)}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-zinc-400">Pay in full via PIX or Bank Slip</span>
                <span className="text-emerald-500 font-semibold text-2xl">
                    {Currency.format(props.totalPrice ?? 0)}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-sm text-zinc-300 mt-2">
                    Installments on Credit Card
                </span>
                <div className="text-sm text-zinc-300">
                    up to{' '}
                    <span className="text-white font-semibold">
                        {props.installment.installmentsQty}x
                    </span>{' '}
                    de{' '}
                    <span className="text-white font-semibold">
                        {Currency.format(props.installment.installmentPrice)}
                    </span>
                </div>
            </div>
            <button
                onClick={props.completePurchase}
                className="button bg-indigo-700 mt-7"
            >
                <IconCreditCard size={20} />
                <span>Finish Purchase</span>
            </button>
        </div>
    )
}
