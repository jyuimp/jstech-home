import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "이용약관",
  description: `${SITE.fullName}의 서비스 이용약관입니다. 서비스 이용에 관한 기본적인 조건과 절차를 안내합니다.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="이용약관" />

      <article className="container-px mx-auto max-w-3xl py-16">
        <div className="space-y-12 text-[15px] leading-[1.8] text-muted">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. 목적</h2>
            <p className="mt-3">
              본 약관은 {SITE.fullName}({SITE.name})이 제공하는 서비스의 이용과 관련하여 회사와 이용자 간의
              권리, 의무 및 책임 사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. 정의</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>&ldquo;서비스&rdquo;란 {SITE.fullName}이 제공하는 임베디드 개발 관련 모든 서비스를 의미합니다.</li>
              <li>&ldquo;이용자&rdquo;란 본 약관에 따라 회사가 제공하는 서비스를 받는 자를 의미합니다.</li>
              <li>&ldquo;콘텐츠&rdquo;란 서비스 내에 게시된 텍스트, 이미지, 코드, 문서 등 모든 자료를 의미합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. 서비스의 제공</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>{SITE.fullName}은 임베디드 개발, IoT 솔루션, 하드웨어 설계, 시스템 통합, 양산 지원 등의 서비스를 제공합니다.</li>
              <li>서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다. 다만, 시스템 점검 등 불가피한 사유가 있을 경우 예외로 합니다.</li>
              <li>서비스의 내용은 회사의 사정에 따라 변경될 수 있으며, 변경 시 사전에 공지합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. 이용자의 의무</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>이용자는 본 약관 및 관련 법령을 준수하여야 합니다.</li>
              <li>이용자는 서비스 이용과 관련하여 다음 각호의 행위를 하여서는 안 됩니다.
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>타인의 정보를 도용하거나 부정하게 사용하는 행위</li>
                  <li>서비스의 운영을 고의로 방해하거나 서비스를 악용하는 행위</li>
                  <li>서비스에 게시된 정보를 무단으로 변경하거나 삭제하는 행위</li>
                  <li>서비스의 저작권 및 지식재산권을 침해하는 행위</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. 지식재산권</h2>
            <p className="mt-3">
              서비스에 대한 저작권 및 지식재산권은 {SITE.fullName}에 있습니다. 이용자는 회사의 서면에 의한
              사전 동의 없이 서비스 내의 콘텐츠를 복제, 수정, 배포, 상업적 이용할 수 없습니다.
            </p>
            <p className="mt-3">
              프로젝트 진행 과정에서 생성된 결과물의 지식재산권은 별도의 계약에 따라 결정되며, 계약 미체결 시
              {SITE.fullName}에 귀속됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. 면책조항</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>{SITE.fullName}은 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다.</li>
              <li>이용자가 서비스 이용과 관련하여 기대하는 이익에 대하여 책임을 지지 않습니다.</li>
              <li>이용자가 본인의 개인정보를 관리하지 않아 발생하는 손해에 대하여 책임을 지지 않습니다.</li>
              <li>{SITE.fullName}은 이용자가 게시하거나 전송한 콘텐츠에 대하여 책임을 지지 않습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. 약관의 변경</h2>
            <p className="mt-3">
              본 약관은 관련 법령의 변경이나 회사의 정책 변경에 따라 변경될 수 있습니다. 변경된 약관은 공지한
              날로부터 효력이 발생하며, 이용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. 분쟁 해결</h2>
            <p className="mt-3">
              본 약관은 대한민국 법률에 따릅니다. {SITE.fullName}과 이용자 간에 발생한 분쟁에 대해서는
              서울중앙지방법원을 전속 관할 법원으로 합니다.
            </p>
            <p className="mt-3">
              공고일자: {SITE.established} &nbsp;|&nbsp; 시행일자: {SITE.established}
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
