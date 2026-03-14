export interface Room {
  id: string;
  apartment_id: string;
  name: string;
  room_type: string;
  area: number;
  bed_count: number;
  bed_type: string;
  has_window: boolean;
  has_balcony: boolean;
  has_private_bathroom: boolean;
  has_air_conditioning: boolean;
  has_heating: boolean;
  room_order: number;
  max_occupancy: number;
  is_available: boolean;
  maintenance_required: boolean;
  has_tv: boolean;
  has_wifi: boolean;
  has_desk: boolean;
  has_closet: boolean;
  description: string;
  created_at: string;
  updated_at: string;
  // Synthetic attributes for UI
  price_per_day?: number;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}
