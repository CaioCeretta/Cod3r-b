/* Here we are going to define a class for the calculation related to the installments, and this calculation is something that
represent the logic of our business, so it shoudln't be "tangled" to the backend of our application, because the rules
utilize only the programming languages, and as lower the dependency of frameworks, better, because in this way we isolate */

import { MAX_INSTALLMENTS_NUMBER, MONTHLY_INTEREST_RATE } from '../constants'
import Installments from './Installment'

export default class CalculateInstallment {
  execute(
    value: number,
    installmentsQty: number = MAX_INSTALLMENTS_NUMBER,
    interestRate: number = MONTHLY_INTEREST_RATE
  ): Installments {
    if (installmentsQty < 2 || installmentsQty > 12) {
      throw new Error('Installments quantity should be between 2 and 12')
    }

    const totalWithInterest = this.calculateCompoundInterest(value, interestRate, installmentsQty)

    return {
      installmentPrice: this.withTwoDecimalCases(totalWithInterest / installmentsQty),
      totalPrice: this.withTwoDecimalCases(totalWithInterest),
      installmentsQty,
      interestRate

    }
  }

  private calculateCompoundInterest(totalValue: number, monthlyRate: number, installmentsQty: number) {
    return totalValue * Math.pow(1 + monthlyRate, installmentsQty)
  }

  private withTwoDecimalCases(value: number): number {
    return Math.round(value * 100) / 100
  }
}