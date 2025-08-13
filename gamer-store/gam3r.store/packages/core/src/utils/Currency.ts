export default class Currency {
  static format(
    value: number,
    locale: string = 'en-US',
    currency: string = 'USD'
  ): string {
    return ( value ?? 0).toLocaleString(locale, {
      style: 'currency',
      currency: currency
    })
  }
}