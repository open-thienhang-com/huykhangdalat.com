# Hotel GET APIs Spec

Mục tiêu: dùng tài liệu này làm prompt/spec cho một AI khác để rà soát, kiểm thử, chuẩn hóa tài liệu, hoặc triển khai client cho toàn bộ `GET` API của module `hotel`.

Repo context:
- Project path: `cmd/api.thienhang.com`
- Module path: `cmd/api.thienhang.com/modules/hotel`
- Base route prefix thực tế: do hệ thống Data Mesh mount. Trong môi trường local hiện dùng:
    - `http://api.thienhang.com/data-mesh/domains/hotel`

Yêu cầu bắt buộc:
1. Không sửa module khác nếu không được yêu cầu.
2. Chỉ bám theo contract thực tế trong code hiện có của module `hotel`.
3. Không tự ý đổi path nếu chưa xác minh trong code.
4. Nếu chuẩn hóa response hoặc route, phải nêu rõ khác biệt giữa "hiện trạng" và "đề xuất".
5. Khi mô tả response, ưu tiên phản ánh shape hiện tại thay vì shape lý tưởng.

Nguồn sự thật trong code:
- `modules/hotel/__init__.py`
- `modules/hotel/routes/apartment.py`
- `modules/hotel/routes/room.py`
- `modules/hotel/routes/booking.py`
- `modules/hotel/routes/review.py`
- `modules/hotel/routes/rating.py`
- `modules/hotel/routes/healthcheck.py`
- Model tham chiếu:
    - `modules/hotel/models/apartment.py`
    - `modules/hotel/models/room.py`
    - `modules/hotel/models/booking.py`
    - `modules/hotel/models/review.py`
    - `modules/hotel/models/rating.py`

## GET APIs cần liệt kê/kiểm thử

### 1. Version
- Method: `GET`
- Path: `/version`
- Full local URL:
    - `http://api.thienhang.com/data-mesh/domains/hotel/version`
- Expected response shape:
```json
{
  "version": "1.0.0"
}
```

### 2. Health Check
- Method: `GET`
- Path: `/health/health-check`
- Full local URL:
    - `http://api.thienhang.com/data-mesh/domains/hotel/health/health-check`
- Expected response shape:
```json
{
  "message": "Health check passed",
  "data": "ok",
  "total": 1
}
```

### 3. List Apartments
- Method: `GET`
- Path: `/apartments`
- Full local URL:
    - `http://api.thienhang.com/data-mesh/domains/hotel/apartments`
- Expected response shape:
```json
{
  "message": "Apartments listed",
  "data": [
    {
      "_id": "apt_001",
      "property": {
        "id": "prop_001",
        "name": "string",
        "description": "string",
        "has_pool": true,
        "has_elevator": true,
        "total_apartments": 10,
        "address": {
          "country": "string",
          "city": "string",
          "street": "string",
          "house_number": "string",
          "latitude": 0,
          "longitude": 0
        }
      },
      "amenities": [
        {
          "id": "am_001",
          "name": "WiFi",
          "description": "string",
          "is_available": true
        }
      ],
      "images": ["https://example.com/a.jpg"],
      "address": {
        "country": "string",
        "city": "string",
        "street": "string",
        "house_number": "string",
        "latitude": 0,
        "longitude": 0
      },
      "hotline": "string",
      "email": "string",
      "room_ids": ["room_001"],
      "title": "string",
      "description": "string",
      "price_per_day": 150,
      "price_per_month": 4000,
      "total_area": 150,
      "is_furnished": true,
      "is_garage": false,
      "bedrooms": 3,
      "bathrooms": 2,
      "max_guests": 6,
      "is_booked": false,
      "is_active": true,
      "is_available_for_booking": true,
      "maintenance_mode": false,
      "available_from": "2025-01-01T00:00:00",
      "available_until": "2025-12-31T23:59:59",
      "currency": "USD",
      "minimum_stay_days": 1,
      "maximum_stay_days": 365,
      "check_in_time": "14:00",
      "check_out_time": "11:00",
      "smoking_allowed": false,
      "pets_allowed": false,
      "parties_allowed": false,
      "cancellation_policy": "flexible",
      "free_cancellation_hours": 24
    }
  ]
}
```

### 4. Get Apartment Detail
- Method: `GET`
- Path: `/apartments/{apartment_id}`
- Full local URL example:
    - `http://api.thienhang.com/data-mesh/domains/hotel/apartments/apt_001`
- Expected response shape:
```json
{
  "message": "Apartment fetched",
  "data": {
    "_id": "apt_001",
    "property": {},
    "amenities": [],
    "images": [],
    "address": {},
    "hotline": "string",
    "email": "string",
    "room_ids": [],
    "title": "string",
    "description": "string",
    "price_per_day": 150,
    "price_per_month": 4000,
    "total_area": 150,
    "is_furnished": true,
    "is_garage": false,
    "bedrooms": 3,
    "bathrooms": 2,
    "max_guests": 6,
    "is_booked": false,
    "is_active": true,
    "is_available_for_booking": true,
    "maintenance_mode": false,
    "available_from": "2025-01-01T00:00:00",
    "available_until": "2025-12-31T23:59:59",
    "currency": "USD",
    "minimum_stay_days": 1,
    "maximum_stay_days": 365,
    "check_in_time": "14:00",
    "check_out_time": "11:00",
    "smoking_allowed": false,
    "pets_allowed": false,
    "parties_allowed": false,
    "cancellation_policy": "flexible",
    "free_cancellation_hours": 24
  }
}
```

### 5. Get Room Detail
- Method: `GET`
- Path: `/rooms/room/{room_id}`
- Full local URL example:
    - `http://api.thienhang.com/data-mesh/domains/hotel/rooms/room/room_001`
- Expected response shape:
```json
{
  "message": "Room fetched",
  "data": {
    "id": "room_001",
    "apartment_id": "apt_001",
    "name": "Master Bedroom",
    "room_type": "bedroom",
    "area": 30.5,
    "bed_count": 2,
    "bed_type": "king",
    "has_window": true,
    "has_balcony": true,
    "has_private_bathroom": true,
    "has_air_conditioning": true,
    "has_heating": true,
    "room_order": 1,
    "max_occupancy": 2,
    "is_available": true,
    "maintenance_required": false,
    "has_tv": true,
    "has_wifi": true,
    "has_desk": true,
    "has_closet": true,
    "description": "string",
    "created_at": "2026-03-14T00:00:00",
    "updated_at": "2026-03-14T00:00:00"
  }
}
```

### 6. List Rooms
- Method: `GET`
- Path: `/rooms/rooms`
- Full local URL:
    - `http://api.thienhang.com/data-mesh/domains/hotel/rooms/rooms`
- Expected response shape:
```json
{
  "message": "Rooms listed",
  "data": [
    {
      "id": "room_001",
      "apartment_id": "apt_001",
      "name": "string",
      "room_type": "bedroom",
      "area": 30.5,
      "bed_count": 2,
      "bed_type": "king",
      "has_window": true,
      "has_balcony": true,
      "has_private_bathroom": true,
      "has_air_conditioning": true,
      "has_heating": true,
      "room_order": 1,
      "max_occupancy": 2,
      "is_available": true,
      "maintenance_required": false,
      "has_tv": true,
      "has_wifi": true,
      "has_desk": true,
      "has_closet": true,
      "description": "string",
      "created_at": "2026-03-14T00:00:00",
      "updated_at": "2026-03-14T00:00:00"
    }
  ]
}
```

### 7. Get Booking Detail
- Method: `GET`
- Path: `/bookings/booking/{booking_id}`
- Full local URL example:
    - `http://api.thienhang.com/data-mesh/domains/hotel/bookings/booking/book_001`
- Expected response shape:
```json
{
  "message": "Booking fetched",
  "data": {
    "id": "book_001",
    "apartment_id": "apt_001",
    "account_id": "acc_001",
    "check_in": "2026-03-20T14:00:00",
    "check_out": "2026-03-25T11:00:00",
    "day_price": 150,
    "month_price": 4000,
    "total_price": 750,
    "count_of_days": 5,
    "payment_status": "unpaid",
    "booking_status": "pending",
    "is_active": true,
    "created": "2026-03-14T00:00:00",
    "updated": "2026-03-14T00:00:00",
    "canceled_at": null,
    "canceled_reason": null,
    "special_requests": "string",
    "guest_count": 2
  }
}
```

### 8. List Bookings
- Method: `GET`
- Path: `/bookings/bookings`
- Full local URL:
    - `http://api.thienhang.com/data-mesh/domains/hotel/bookings/bookings`
- Expected response shape:
```json
{
  "message": "Bookings listed",
  "data": [
    {
      "id": "book_001",
      "apartment_id": "apt_001",
      "account_id": "acc_001",
      "check_in": "2026-03-20T14:00:00",
      "check_out": "2026-03-25T11:00:00",
      "day_price": 150,
      "month_price": 4000,
      "total_price": 750,
      "count_of_days": 5,
      "payment_status": "unpaid",
      "booking_status": "pending",
      "is_active": true,
      "created": "2026-03-14T00:00:00",
      "updated": "2026-03-14T00:00:00",
      "canceled_at": null,
      "canceled_reason": null,
      "special_requests": "string",
      "guest_count": 2
    }
  ]
}
```

### 9. Get Review Detail
- Method: `GET`
- Path: `/reviews/review/{review_id}`
- Full local URL example:
    - `http://api.thienhang.com/data-mesh/domains/hotel/reviews/review/rev_001`
- Expected response shape:
```json
{
  "message": "Review fetched",
  "data": {
    "_id": "rev_001",
    "title": "Excellent stay",
    "review": "Great location and clean rooms",
    "account_id": "acc_001",
    "apartment_id": "apt_001",
    "booking_id": "book_001",
    "date_posted": "2026-03-14 10:30",
    "date_updated": "2026-03-14 11:00"
  }
}
```

### 10. List Reviews
- Method: `GET`
- Path: `/reviews/reviews`
- Full local URL:
    - `http://api.thienhang.com/data-mesh/domains/hotel/reviews/reviews`
- Expected response shape:
```json
{
  "message": "Reviews listed",
  "data": [
    {
      "_id": "rev_001",
      "title": "Excellent stay",
      "review": "Great location and clean rooms",
      "account_id": "acc_001",
      "apartment_id": "apt_001",
      "booking_id": "book_001",
      "date_posted": "2026-03-14 10:30",
      "date_updated": "2026-03-14 11:00"
    }
  ]
}
```

### 11. Get Rating Detail
- Method: `GET`
- Path: `/ratings/rating/{rating_id}`
- Full local URL example:
    - `http://api.thienhang.com/data-mesh/domains/hotel/ratings/rating/rating_001`
- Expected response shape:
```json
{
  "message": "Rating fetched",
  "data": {
    "_id": "rating_001",
    "apartment_id": "apt_001",
    "booking_id": "book_001",
    "account_id": "acc_001",
    "cleanliness": 4.5,
    "location": 5.0,
    "value": 4.0,
    "facilities": 4.5,
    "avg_rating": 4.5,
    "comment": "Very good overall",
    "created_at": "2026-03-14T10:30:00"
  }
}
```

### 12. List Ratings
- Method: `GET`
- Path: `/ratings/ratings`
- Full local URL:
    - `http://api.thienhang.com/data-mesh/domains/hotel/ratings/ratings`
- Expected response shape:
```json
{
  "message": "Ratings listed",
  "data": [
    {
      "_id": "rating_001",
      "apartment_id": "apt_001",
      "booking_id": "book_001",
      "account_id": "acc_001",
      "cleanliness": 4.5,
      "location": 5.0,
      "value": 4.0,
      "facilities": 4.5,
      "avg_rating": 4.5,
      "comment": "Very good overall",
      "created_at": "2026-03-14T10:30:00"
    }
  ]
}
```

## Lưu ý quan trọng về hiện trạng
1. Route naming hiện chưa đồng nhất:
    - Apartments dùng `/apartments` và `/{id}`
    - Rooms dùng `/rooms/room/{id}` và `/rooms/rooms`
    - Bookings dùng `/bookings/booking/{id}` và `/bookings/bookings`
    - Reviews dùng `/reviews/review/{id}` và `/reviews/reviews`
    - Ratings dùng `/ratings/rating/{id}` và `/ratings/ratings`
2. Response shape hiện chưa đồng nhất:
    - Một số endpoint trả `{message, data}`
    - Health check trả `{message, data, total}`
    - Version chỉ trả `{version}`
3. Module hiện không có pagination cho list GET APIs.
4. Module hiện không có query filters cho GET list APIs.
5. Nếu AI khác đề xuất chuẩn hóa, phải tách rõ:
    - "As-is contract"
    - "Recommended contract"

## Nhiệm vụ gợi ý cho AI khác
1. Liệt kê lại toàn bộ GET APIs và xác nhận path chính xác từ code.
2. Kiểm tra Swagger/OpenAPI có phản ánh đúng route hay không.
3. Kiểm tra response thực tế có khớp spec này không.
4. Nếu cần, đề xuất chuẩn hóa route naming:
    - `/rooms/{id}` thay vì `/rooms/room/{id}`
    - `/bookings/{id}` thay vì `/bookings/booking/{id}`
    - `/reviews/{id}` thay vì `/reviews/review/{id}`
    - `/ratings/{id}` thay vì `/ratings/rating/{id}`
5. Nếu cần, đề xuất chuẩn hóa response shape theo một contract chung.
