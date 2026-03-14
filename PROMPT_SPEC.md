# Prompt Spec: Angular Hotel Marketplace cho Huy Khang Dalat

## Bản đầy đủ

```text
Hãy tạo một giao diện Web App bằng Angular cho khách sạn/homestay "Huy Khang Dalat" theo mô hình Marketplace chuyên bán phòng.

Mục tiêu cốt lõi:
- Xây dựng một trang web giống như các nền tảng OTA (Online Travel Agent) hoặc trang Booking chuyên nghiệp.
- Tập trung tối đa vào chức năng HIỂN THỊ VÀ BÁN PHÒNG.
- Phong cách thiết kế: Material Design (Sử dụng Angular Material hoặc tự custom CSS theo phong cách Material: có card, ripple effect, shadow phân cấp rõ ràng).
- Màu sắc chủ đạo: Xanh lá cây (Green) bắt mắt, tạo cảm giác tươi mát, tin cậy. Xanh lá được dùng cho các nút CTA, thanh điều hướng, icon.
- Responsive layout: Hoạt động hoàn hảo trên Mobile, có menu ẩn/hiện dạng Sidebar (Menu đứng) trên thiết bị di động và tablet.
- Kiến trúc Component: Ứng dụng phải được chia thành NHIỀU COMPONENT riêng biệt (Sidebar, Header, RoomList, RoomCard, FilterBar...) và có hệ thống component rõ ràng.

Yêu cầu Kỹ thuật & API:
- TÍCH HỢP API THẬT: Toàn bộ dữ liệu phòng phải được lấy từ các API (GET) được định nghĩa trong `API_SPEC.md`. 
  - Gọi `/rooms/rooms` để lấy danh sách phòng.
- Xử lý HTTP Request bằng `HttpClient`, có các trạng thái Loading skeleton, Error handling.
- Dùng Angular phiên bản mới (ưu tiên standalone components).
- Cấu trúc layout: 
  - Bên trái (hoặc ẩn trong drawer): Sidebar (Menu đứng) chứa các mục điều hướng và bộ lọc (Filter).
  - Bên phải (Main content): Danh sách phòng dạng Grid.

Bố cục trang chi tiết:

1. Layout Sườn (App Shell)
- Header (Top Bar):
  - Nút Toggle Sidebar (Hamburger menu).
  - Logo "Huy Khang Marketplace".
  - Thanh tìm kiếm nhanh hoặc input ngày check-in / check-out.
- Sidebar (Menu đứng bên trái):
  - Các Link điều hướng: Tất cả phòng, Đang khuyến mãi, Đã đặt, Quản lý tài khoản, Liên hệ.
  - (Tùy chọn) Khu vực Filter: Lọc theo diện tích, loại giường, tiện ích (máy lạnh, ban công...).

2. Khu vực hiển thị chính (Main Content - Chợ phòng)
- Tiêu đề: "Khám phá phòng nghỉ" hoặc "Phòng đang trống".
- Danh sách phòng (Room Grid): 
  - Render dữ liệu từ API `/rooms/rooms`.
  - Grid chia cột linh hoạt: 1 cột trên Mobile, 2 cột Tablet, 3-4 cột Desktop.
- Room Card (Card bán phòng theo chuẩn Material):
  - Hình ảnh thumbnail (Ảnh phòng - dùng placeholder hoặc array ảnh ngẫu nhiên nếu API chưa có).
  - Badge trạng thái: "Khả dụng" (màu xanh), "Đã đặt" (màu xám/đỏ).
  - Tên phòng (in đậm, to rõ).
  - Thông tin nhanh dạng Icon + Text (Diện tích, số khách tối đa, loại giường).
  - Divider phân cách.
  - Cụm giá: Hiển thị giá nổi bật (ví dụ: 150$/ngày).
  - Nút CTA (Nút chính - Xanh lá đậm): "ĐẶT PHÒNG NGAY" (Chiếm toàn bộ chiều ngang card hoặc căn phải tùy thiết kế).
  - Design card cần có hiệu ứng Elevation (shadow) đặc trưng của Material khi hover.

3. Tính năng Mobile
- Trên mobile, Sidebar sẽ trở thành Navigation Drawer có thể vuốt mở hoặc bấm nút menu trên Header.
- Room Card hiển thị 100% chiều ngang, nút nhấn dễ chạm (touch-friendly).

Yêu cầu Code Đầu ra:
- Khai báo các mô hình dữ liệu (Interface) dựa trên `API_SPEC.md`.
- Chia nhỏ các component: `SidebarComponent`, `HeaderComponent`, `RoomListComponent`, `RoomCardComponent`.
- Module hóa hoặc Standalone nhưng phải thể hiện được cấu trúc phân cấp.
- Output cần bao gồm: TS, HTML, SCSS style cho các component cần thiết để tạo thành một màn hình marketplace hoàn chỉnh.
```

## Bản ngắn

```text
Tạo Web App Angular mô hình Marketplace bán phòng cho khách sạn Huy Khang Dalat.

Yêu cầu thiết kế:
- Phong cách Material Design (có shadow, thẻ card, ripple).
- Màu chủ đạo: Xanh lá cây (Green) nổi bật, kích thích chuyển đổi (đặt phòng).
- Bố cục: Gồm Header, Sidebar (Menu đứng bên trái, có thể ẩn/hiện trên view Mobile), và Khu vực chính (Danh sách phòng).
- Full responsive, tối ưu tuyệt đối cho màn hình Mobile (giao diện vuốt, chạm dễ dàng).

Yêu cầu logic & API:
- Tập trung vào tính năng BÁN PHÒNG.
- Tổ chức code thành nhiều component nhỏ: Header, Sidebar, RoomList, RoomCard,...
- Sử dụng `HttpClient` để call API `/rooms/rooms` (dựa theo `API_SPEC.md`) lấy danh sách các phòng và thông tin (diện tích, giường ngủ...).
- Hiển thị Room Card chuẩn Material Design: Có ảnh, badge trạng thái (còn trống/đã đặt), thông tin tiện ích, giá, và nút CTA "ĐẶT PHÒNG NGAY" to rõ màu xanh lá.
- Xử lý các trạng thái Loading & Error đầy đủ.

Đầu ra: HTML, SCSS, TS cho cấu trúc các component (có thể ghép chung vào App component và các component con) để chạy được giao diện Marketplace hoàn chỉnh chuẩn Material.
```
