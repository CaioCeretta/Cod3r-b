import { CalculateInstallment } from '@gstore/core'

export default function useParcelamento(value: number, quantity: number = 12) {
    return new CalculateInstallment().execute(value, quantity)
}
