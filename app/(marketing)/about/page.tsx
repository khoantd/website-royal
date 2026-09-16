import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Công ty SaaS Việt Nam xây dựng CRM, ERP và giải pháp AI cho doanh nghiệp vừa và nhỏ.",
};

const PRODUCT_LAYERS = [
  {
    title: "Sản phẩm lõi CRM và ERP",
    body: "Đây là nền tảng chính của công ty, được thiết kế cho quy trình bán hàng, vận hành và tăng trưởng đặc thù của SME Việt Nam.",
  },
  {
    title: "Đào tạo và nâng cao năng lực AI cho đội ngũ",
    body: "Chương trình VABIX AI-First Workforce Training (AFET-W™) và nền tảng SaaS PromptHub giúp doanh nghiệp chuyển đổi đội ngũ theo hướng AI-First một cách có phương pháp, không dừng ở việc dùng công cụ đơn lẻ.",
  },
  {
    title: "Công cụ ra quyết định và kiểm soát chất lượng AI",
    body: "Sản phẩm ClearAI chuyên chất vấn và làm rõ đầu ra của các mô hình AI, giúp lãnh đạo doanh nghiệp tin cậy khi đưa AI vào công việc thực tế.",
  },
  {
    title: "Nền tảng kiến trúc và vận hành kỹ thuật",
    body: "RS Architect phục vụ quản trị kiến trúc doanh nghiệp, đi kèm các giải pháp chuyên biệt như LOS scoring cho lĩnh vực tín dụng và giải pháp phiên âm âm thanh ứng dụng AI cho các ngành có nhu cầu xử lý dữ liệu hội thoại lớn.",
  },
  {
    title: "Tự động hóa và tích hợp kênh vận hành",
    body: "Các pipeline tự động hóa xây dựng trên n8n phục vụ đồng bộ dữ liệu Zalo OA và các kênh khách hàng khác, giúp SME kết nối dữ liệu từ nhiều nguồn vào một trục vận hành thống nhất.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <header className="max-w-3xl">
        <p className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-[0.2em] text-brand-navy">
          Về chúng tôi
        </p>
        <h1 className="font-[family-name:var(--font-display)] mt-3 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
          Royal Solution
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600 md:text-xl">
          Công ty SaaS Việt Nam xây dựng CRM, ERP và giải pháp AI cho doanh nghiệp vừa và nhỏ.
        </p>
      </header>

      <section className="mt-16 max-w-3xl lg:mt-20" aria-labelledby="intro-heading">
        <h2
          id="intro-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
        >
          Giới thiệu chung
        </h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">
          Royal Solution là công ty phần mềm dịch vụ Việt Nam, được sáng lập vào tháng 11 năm 2025 bởi ông Khoa, một nhà lãnh đạo sản phẩm và công nghệ có hơn 15 năm kinh nghiệm trong ngành ngân hàng, fintech và AI tại Việt Nam và Hàn Quốc. Công ty tập trung phục vụ phân khúc doanh nghiệp vừa và nhỏ, nhóm khách hàng đóng vai trò xương sống của nền kinh tế Việt Nam nhưng lâu nay bị kẹt giữa hai lựa chọn không phù hợp, hoặc là các nền tảng ngoại quá lớn và quá đắt, hoặc là các phần mềm nội địa chỉ đáp ứng nghĩa vụ kế toán tối thiểu.
        </p>
      </section>

      <section className="mt-14 max-w-3xl border-t border-zinc-200 pt-14 lg:mt-16 lg:pt-16" aria-labelledby="mission-heading">
        <h2
          id="mission-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
        >
          Sứ mệnh
        </h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">
          Chúng tôi tin rằng doanh nghiệp SME Việt Nam xứng đáng có công cụ phần mềm được thiết kế theo đúng cách họ bán hàng, vận hành và tăng trưởng, thay vì các phiên bản bản địa hóa sơ sài gắn thêm vào nền tảng ngoại. Sứ mệnh của Royal Solution là thu hẹp khoảng cách này, mang chuẩn mực kiến trúc, dữ liệu và quản trị rủi ro của doanh nghiệp lớn đến với mức chi phí và tốc độ triển khai phù hợp cho SME.
        </p>
      </section>

      <section className="mt-14 max-w-3xl border-t border-zinc-200 pt-14 lg:mt-16 lg:pt-16" aria-labelledby="origin-heading">
        <h2
          id="origin-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
        >
          Nguồn gốc
        </h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">
          Royal Solution là công ty thứ hai của người sáng lập. Trước đó, ông Khoa đã sáng lập Micro Solution vào năm 2020 và vận hành công ty này đến đầu năm 2026. Năm năm xây dựng phần mềm cho doanh nghiệp Việt Nam đã giúp đội ngũ hiểu rõ những khoảng trống thực sự của thị trường, cũng như hiểu được điều gì tạo nên một mô hình phục vụ SME bền vững. Royal Solution ra đời chính là nơi những bài học đó được áp dụng ở một tầm vóc và chiều sâu sản phẩm cao hơn.
        </p>
      </section>

      <section className="mt-14 border-t border-zinc-200 pt-14 lg:mt-16 lg:pt-16" aria-labelledby="products-heading">
        <div className="max-w-3xl">
          <h2
            id="products-heading"
            className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
          >
            Danh mục sản phẩm và giải pháp
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">
            Danh mục của Royal Solution được tổ chức thành các lớp giá trị mà một SME hiện đại cần đến trên hành trình chuyển đổi số và ứng dụng AI.
          </p>
        </div>

        <ul className="mt-10 max-w-3xl space-y-8">
          {PRODUCT_LAYERS.map((layer) => (
            <li key={layer.title} className="border-l border-[#C5A059] pl-5 sm:pl-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-zinc-900 md:text-xl">
                {layer.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-600">{layer.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 max-w-3xl border-t border-zinc-200 pt-14 lg:mt-16 lg:pt-16" aria-labelledby="difference-heading">
        <h2
          id="difference-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
        >
          Điểm khác biệt
        </h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">
          Điều làm Royal Solution khác biệt không phải là số lượng tính năng, mà là cách công ty được xây dựng. Nền tảng kỹ thuật của chúng tôi kế thừa kỷ luật kiến trúc và quản trị rủi ro từ môi trường ngân hàng và fintech quy mô lớn, nơi người sáng lập từng đảm nhận các vai trò sản phẩm và công nghệ tại FE Credit, VIB, Home Credit Việt Nam và giữ vai trò Head of AI Product tại AI+DI. Tuy nhiên, cách chúng tôi triển khai cho khách hàng lại giữ đúng tinh thần thực dụng và tốc độ của một công ty phục vụ SME, với mức chi phí phù hợp cho doanh nghiệp đang tăng trưởng.
        </p>
      </section>

      <Button
        asChild
        className="mt-12 cursor-pointer rounded-xl bg-cta text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
      >
        <Link href="/contact">Trao đổi dự án</Link>
      </Button>
    </div>
  );
}
