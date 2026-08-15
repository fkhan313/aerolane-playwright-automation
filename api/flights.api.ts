import type { APIRequestContext } from "@playwright/test";

// Thin wrapper over /api/airports and /api/flights.
export class FlightsApi {
  constructor(private readonly request: APIRequestContext) {}
}
