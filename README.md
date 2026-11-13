# Geneworld — Biotechnology Application Platform

> **"Công nghệ sinh học — từ nghiên cứu đến ứng dụng."**  
> Nền tảng giao diện web hiện đại giới thiệu hệ sinh thái công nghệ sinh học, năng lực R&D, nhà máy sản xuất GMP và danh mục sản phẩm y sinh học chuyên sâu của **Geneworld**.

---

## 📌 Tổng quan dự án

**Geneworld UI** (`geneworld-ui`) là ứng dụng web tương tác hiệu năng cao được xây dựng nhằm giới thiệu hệ sinh thái công nghệ sinh học toàn diện của Công ty TNHH MTV Geneworld (trụ sở tại Khu Công Nghệ Cao TP.HCM - SHTP). 

Website đóng vai trò là cầu nối khoa học kỹ thuật và thương mại giữa:
- **Đội ngũ khoa học & Cơ sở R&D:** Công bố các nghiên cứu, 6 công nghệ cốt lõi và hệ sinh thái khép kín.
- **Đối tác chuyên ngành B2B:** Bệnh viện, thẩm mỹ viện, phòng khám da liễu, đối tác gia công OEM/ODM và chuyển giao công nghệ.
- **Người tiêu dùng B2C:** Cung cấp thông tin minh bạch về thành phần, hoạt chất sinh học và các kênh phân phối chính hãng.

---

## 🧬 6 Nền tảng công nghệ sinh học cốt lõi

1. **Công nghệ Tế bào gốc (Stem Cell Conditioned Media):** Khai thác dịch nuôi cấy giàu peptide, cytokines và các yếu tố tăng trưởng tự nhiên (EGF, FGF) hỗ trợ tái tạo mô biểu bì.
2. **Công nghệ Canh tác & Chiết xuất Hữu cơ (Organic):** Nguồn thảo dược hữu cơ chuẩn hóa từ Nông trại sinh học Gen-Green, chiết xuất nhiệt độ thấp bảo toàn hoạt chất flavonoids & axit hữu cơ.
3. **Công nghệ Lên men — Hệ vi sinh (Microbiome):** Ứng dụng quá trình lên men kiểm soát vi sinh để sản sinh postbiotics, axit lactic sinh học củng cố hàng rào bảo vệ biểu bì.
4. **Công nghệ Nuôi cấy Vi tảo (Spirulina):** Hệ thống quang sinh học khép kín tách chiết hoạt chất chống oxy hóa tự nhiên Phycocyanin đậm đặc.
5. **Công nghệ Nano sinh học (Nano Liposome):** Hệ mang vi nang phospholipid kích thước 50–100nm tối ưu hóa khả năng hấp thu qua màng tế bào.
6. **Công nghệ Kít tách chiết PRP y khoa:** Quy trình và bộ kít vô trùng chuẩn y khoa tách chiết huyết tương giàu tiểu cầu với gel phân tầng độc quyền.

---

## ✨ Tính năng nổi bật

- 🎨 **Hero Bio Canvas & Animation:** Trực quan hóa không gian cấu trúc phân tử sinh học và chuỗi DNA tương tác thời gian thực bằng HTML5 Canvas và Anime.js.
- 🔬 **Hệ sinh thái toàn diện (Ecosystem Hub):** Trình diễn 8 trụ cột khép kín: R&D, Phòng Lab vô trùng, Nhà máy chuẩn GMP/ISO, Nông trại Gen-Green, Sơ chế dược liệu, Đào tạo lâm sàng, Nghiên cứu thị trường và Thương mại hóa.
- 📦 **Danh mục sản phẩm thông minh:**
  - Bộ lọc linh hoạt theo nhóm giải pháp (Phục hồi màng tế bào, Dịu da vi tảo, Dược mỹ phẩm hữu cơ, Kít y tế chuyên khoa).
  - Phân loại rõ ràng theo đối tượng mục tiêu: B2B, B2C hoặc đa kênh.
  - Modal chi tiết sản phẩm hiển thị đầy đủ bảng thành phần, công nghệ áp dụng và quy cách đóng gói.
- 🤝 **Hệ thống tư vấn & Đối tác B2B Modal:** Biểu mẫu đăng ký hợp tác chuyên biệt cho:
  - Bệnh viện & Cơ sở y tế.
  - Thẩm mỹ viện & Phòng khám da liễu.
  - Gia công sản xuất theo yêu cầu (OEM/ODM).
  - Đại lý phân phối & Chuyển giao phác đồ chuyên môn.
- 🛒 **Shop Modal & Mua sắm:** Tích hợp liên kết các kênh mua sắm chính hãng và hotline tư vấn trực tiếp.
- 📚 **Thư viện tri thức (Knowledge Base):** Cung cấp các bài viết khoa học chuyên sâu về cơ chế tái tạo mô tế bào, hoạt chất chống oxy hóa quang sinh học và cân bằng hệ vi sinh da.
- 💬 **Trợ lý điều hướng nổi (Floating Assistant):** Hỗ trợ tra cứu nhanh công nghệ, đặt lịch tư vấn và kết nối hỗ trợ 24/7.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Thành phần | Công nghệ | Chi tiết sử dụng |
| :--- | :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) | Server-Side Rendering, Static Optimization, File-based Routing |
| **UI Library** | [React 18](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/) | Kiến trúc component module hóa, type-safe toàn diện |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Tùy biến Design Tokens y sinh học (GW Deep, GW Teal, Charcoal) |
| **Animation** | [Framer Motion 11](https://www.framer.com/motion/) & [Anime.js 3.2](https://animejs.com/) | Hiệu ứng chuyển động phân tử, chuyển tab mượt mà, micro-interactions |
| **Primitives UI** | [@radix-ui/react-*](https://www.radix-ui.com/) | Accessible dialogs, tabs, slots không phụ thuộc style |
| **Icons** | [Lucide React](https://lucide.dev/) | Bộ icon vector hiện đại, tối ưu dung lượng bundle |

---

## 📂 Cấu trúc thư mục dự án

```text
Geneworld/
├── public/                     # Tài nguyên tĩnh (ảnh, logo, icons)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Style toàn cục & cấu hình CSS variables
│   │   ├── layout.tsx          # Root Layout & cấu hình SEO metadata
│   │   └── page.tsx            # Trang chủ điều hướng chính (State-driven tabs)
│   ├── components/
│   │   ├── layout/             # Các thành phần cấu trúc khung trang
│   │   │   ├── Navbar.tsx           # Thanh điều hướng với mega menu
│   │   │   ├── Footer.tsx           # Chân trang & liên kết bản quyền
│   │   │   └── FloatingAssistant.tsx# Widget hỗ trợ tương tác nổi
│   │   ├── modals/             # Hộp thoại tương tác (Popup)
│   │   │   ├── B2BModal.tsx         # Đăng ký hợp tác B2B & OEM/ODM
│   │   │   ├── ProductModal.tsx     # Chi tiết thông số & thành phần sản phẩm
│   │   │   └── ShopModal.tsx        # Cửa sổ hướng dẫn mua hàng & phân phối
│   │   ├── pages/              # Các view nội dung trang con
│   │   │   ├── AboutPage.tsx        # Trang giới thiệu chi tiết doanh nghiệp
│   │   │   └── ProductsPage.tsx     # Trang tra cứu danh mục toàn bộ sản phẩm
│   │   ├── sections/           # Các khối nội dung trên trang chủ
│   │   │   ├── Hero.tsx             # Phần mở đầu thu hút
│   │   │   ├── HeroBioCanvas.tsx    # Canvas hoạt họa phân tử sinh học
│   │   │   ├── StatsIntro.tsx       # Số liệu nổi bật & định vị thương hiệu
│   │   │   ├── FeaturedProducts.tsx # Sản phẩm y sinh tiêu biểu
│   │   │   ├── Technologies.tsx     # Khối 6 công nghệ cốt lõi
│   │   │   ├── Ecosystem.tsx        # Khối hệ sinh thái khép kín
│   │   │   ├── Manufacturing.tsx    # Năng lực nhà máy GMP & phòng Lab
│   │   │   ├── B2BPartner.tsx       # Đối tác B2B & mạng lưới liên kết
│   │   │   └── Knowledge.tsx        # Bài viết kiến thức khoa học
│   │   └── ui/                 # Thư viện UI tái sử dụng (Design System)
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── tabs.tsx
│   ├── data/
│   │   └── geneworldData.ts    # Dữ liệu trung tâm (Data Store: Sản phẩm, Công nghệ, Bài viết)
│   └── lib/
│       ├── anime.ts            # Cấu hình & helper cho Anime.js
│       └── utils.ts            # Tiện ích gộp class Tailwind (clsx & twMerge)
├── next.config.mjs             # Cấu hình Next.js
├── tailwind.config.ts          # Cấu hình theme màu & font chữ
├── tsconfig.json               # Cấu hình TypeScript compiler
└── package.json                # Quản lý dependencies và scripts
```

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy

### Yêu cầu hệ thống
- **Node.js:** Phiên bản `18.17.0` trở lên (Khuyến nghị dùng bản LTS).
- **Trình quản lý gói:** `npm`, `yarn`, `pnpm` hoặc `bun`.

### 1. Cài đặt các gói phụ thuộc
Mở terminal tại thư mục gốc của dự án và chạy lệnh:
```bash
npm install
```

### 2. Khởi chạy môi trường phát triển (Development)
```bash
npm run dev
```
Truy cập trình duyệt tại địa chỉ: [http://localhost:3000](http://localhost:3000)

### 3. Kiểm tra mã nguồn (Linting)
```bash
npm run lint
```

### 4. Đóng gói cho môi trường Production (Build & Start)
```bash
# Biên dịch và tối ưu hóa ứng dụng
npm run build

# Khởi chạy server production
npm run start
```

---

## 🎨 Nhận diện & Bảng màu thương hiệu (Brand Tokens)

Dự án áp dụng hệ màu lấy cảm hứng từ thiên nhiên và phòng thí nghiệm y sinh:

| Màu sắc | Mã Hex | Ý nghĩa sử dụng |
| :--- | :--- | :--- |
| **GW Deep Green** | `#006241` | Màu xanh đậm chủ đạo, đại diện cho y sinh học và sự chuẩn mực khoa học. |
| **GW Teal** | `#328D6F` | Màu xanh ngọc chuyển tiếp, biểu trưng cho sự sinh trưởng và công nghệ hữu cơ. |
| **GW Mint** | `#10B981` | Điểm nhấn vi sinh vật, hệ microbiome và tính tươi mới tự nhiên. |
| **GW Charcoal** | `#424143` | Màu chữ và nội dung, tạo cảm giác sang trọng, dễ đọc và tương phản tốt. |
| **Soft Background** | `#F5F8F6` | Màu nền xám ngọc nhẹ nhàng, giảm mỏi mắt khi xem báo cáo khoa học. |

---

## 📞 Liên hệ & Thông tin bản quyền

- **Doanh nghiệp:** Công ty TNHH Một Thành Viên Geneworld
- **Địa chỉ:** Lô I-5C SHTP, Khu Công Nghệ Cao, P. Tăng Nhơn Phú B, TP. Thủ Đức, TP. Hồ Chí Minh
- **Hotline:** 1900 636 496
- **Email:** info@geneworld.vn
- **Website:** [https://geneworld.vn](https://geneworld.vn)

---
*© 2026 Geneworld. All rights reserved.*
