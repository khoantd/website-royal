<a id="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/github.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Shadcn UI Kit</h3>

  <p align="center">
    Shadcn UI Kit is a comprehensive collection of ready-to-use admin dashboards, website templates, and customizable components.
    <br />
    <br />
    <a href="https://shadcnuikit.com/">Home Page</a>
    &nbsp;&bull;&nbsp;
    <a href="https://shadcnuikit.com/dashboard/default">Dashboards</a>
    &nbsp;&bull;&nbsp;
    <a href="https://shadcnuikit.com/templates">Templates</a>
    &nbsp;&bull;&nbsp;
    <a href="https://free.shadcnuikit.com/">Free</a>
  </p>
    <br />
</div>

## 🚀 API Setup

### Environment Variables

Tạo file `.env.local` (copy từ `.env.example`):

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000

# Resend — form liên hệ gửi email
RESEND_API_KEY=re_xxxxxxxxx
EMAIL_FROM=Royal Solution <onboarding@resend.dev>
CONTACT_EMAIL=hello@royalsolution.vn
```

Form `/contact` dùng Server Action + Resend: gửi thông báo tới `CONTACT_EMAIL` (reply-to = email khách) và email xác nhận tới người gửi. Dùng `onboarding@resend.dev` khi chưa verify domain.

### Cấu trúc API

- **Axios**: `api/axiosClient.ts` - baseURL, auto Bearer token, 401 → redirect `/login`
- **Services**: `services/auth.service.ts`, `services/user.service.ts`
- **TanStack Query**: `hooks/useUsers.ts` - cache, loading, error
- **ProtectedRoute**: Bảo vệ `/dashboard/*`, chưa login → redirect `/login`

### API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/auth/login` | Login - body: `{ email, password }` |
| GET | `/users?page=1&limit=10` | Danh sách users (cần token) |

---

## 💎 About Shadcn UI Kit

**Shadcn UI Kit** is a comprehensive and versatile collection of ready-to-use admin dashboards, website templates, and fully customizable components designed for modern web applications. It goes beyond standard UI libraries by offering enhanced functionality, greater design flexibility, and a seamless user experience. Whether you're building complex admin panels or sleek landing pages, Shadcn UI Kit provides the tools you need to create visually appealing and highly functional interfaces with ease.

<img src="public/preview.png" alt="shadcn free dashboard preview 1" width="100%">
<img src="public/preview2.png" alt="shadcn free dashboard preview 2" width="100%">

## 🪄 Get Lifetime Access (PRO)

Get lifetime use of the premium version of Shadcn UI Kit with hundreds of UI components, dashboards, website templates and pre-built pages. Free updates, newly added components and templates are also included.

| Free Version   | [Shadcn UI Kit PRO](https://shadcnuikit.com/pricing) |
| -------------- | ---------------------------------------------------- |
| 1 Dashboard    | ✔ 10 Dashboards                                     |
| 5+ Pages       | ✔ 50+ Pages                                         |
| 1 Color Scheme | ✔ 10+ Web Apps                                      |
|                | ✔ 100+ Premium Components                           |
|                | ✔ Premium Templates                                 |
|                | ✔ 5+ Color Schemes                                  |
|                | ✔ Theme Customization                               |
|                | ✔ Dark/Light Mode 🌙                                |
|                | ✔ LTR/RTL Support                                   |
|                | ✔ New Sidebar                                       |
|                | ✔ Multiple Layouts                                  |
|                | ✔ and more..                                        |

✅ [Click here](https://shadcnuikit.com/pricing) to get the Shadcn UI Kit and review it in detail

## ✉️ Contact

Toby Belhome - [@TobyBelhome](https://x.com/TobyBelhome)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
