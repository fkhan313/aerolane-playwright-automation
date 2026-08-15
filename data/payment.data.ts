export interface PaymentData {
  cardNumber: string;
  expiry: string;
  cvv: string;
}

// Any card number ending in 0000 triggers a mock 402 decline.
export const DECLINED_CARD_NUMBER = "4242424242420000";
