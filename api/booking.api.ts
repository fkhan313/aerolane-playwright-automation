import type { APIRequestContext } from "@playwright/test";

// Thin wrapper over /api/book, /api/bookings, checkin, cancel.
export class BookingApi {
  constructor(private readonly request: APIRequestContext) {}
}
