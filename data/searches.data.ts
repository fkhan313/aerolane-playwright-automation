export interface SearchQuery {
  tripType: "oneway" | "roundtrip";
  from: string;
  to: string;
  departDate: string;
  returnDate?: string;
  cabin: "economy" | "premium" | "business" | "first";
}
