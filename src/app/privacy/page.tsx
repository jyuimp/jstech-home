import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${SITE.fullName}의 개인정보처리방침입니다. 개인정보의 처리 목적, 항목, 보유 기간 및 정보주체의 권리에 대한 안내입니다.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="개인정보처리방침" />

      <article className="container-px mx-auto max-w-3xl py-16">
        <div className="space-y-12 text-[15px] leading-[1.8] text-muted">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. 개인정보의 처리 목적</h2>
            <p className="mt-3">
              {SITE.fullName}({SITE.name})는 다음의 목적을 위하여 개인정보를 처리합니다.
              처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는
              경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>서비스 문의 및 견적 상담 처리</li>
              <li>프로젝트 계약 및 수행 과정에서의 원활한 의사소통</li>
              <li>서비스 제공에 관한 계약 이행 및 서비스 이용에 따른 본인 인증</li>
              <li>고객 관리 및 서비스 개선을 위한 통계 분석</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. 처리하는 개인정보의 항목</h2>
            <p className="mt-3">
              {SITE.fullName}이 처리하는 개인정보 항목은 다음과 같습니다.
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>필수 항목: 이름, 이메일 주소, 연락처(전화번호)</li>
              <li>선택 항목: 회사명, 직함, 프로젝트 관련 상세 내용</li>
              <li>자동 수집 항목: IP 주소, 쿠키, 접속 로그, 서비스 이용 기록</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. 개인정보의 처리 및 보유 기간</h2>
            <p className="mt-3">
              {SITE.fullName}은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에
              동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>서비스 문의 기록: 문의 처리 완료 후 3년</li>
              <li>계약 관련 기록: 계약 종료 후 5년 (상법, 전자상거래 등에서의 소비자보호에 관한 법률)</li>
              <li>자동 수집 정보: 접속 로그 1년, 쿠키 1년</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. 개인정보의 제3자 제공</h2>
            <p className="mt-3">
              {SITE.fullName}은 정보주체의 동의 없이 개인정보를 외부에 제공하지 않습니다. 다만, 법령에
              근거한 요청이 있는 경우 또는 정보주체가 별도로 동의한 경우에는 예외로 합니다.
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>정보주체의 사전 동의를 받은 경우</li>
              <li>법령에 특별한 규정이 있는 경우</li>
              <li>수사기관의 적법한 수사 요구가 있는 경우</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. 개인정보의 파기</h2>
            <p className="mt-3">
              {SITE.fullName}은 개인정보 보유기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는
              지체 없이 해당 개인정보를 파기합니다.
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>전자적 파일 형태: 복구할 수 없는 기술적 방법으로 영구 삭제</li>
              <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. 정보주체의 권리</h2>
            <p className="mt-3">
              정보주체는 {SITE.fullName}에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>개인정보 열람 요구</li>
              <li>개인정보 정정·삭제 요구</li>
              <li>개인정보 처리정지 요구</li>
              <li>개인정보 처리 고유 식별번호 삭제 요구</li>
            </ol>
            <p className="mt-3">
              권리 행사는 서면, 전화, 전자우편 등을 통하여 하실 수 있으며, {SITE.fullName}은 이에 대해 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. 개인정보 보호책임자</h2>
            <p className="mt-3">
              {SITE.fullName}은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
              정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="mt-4 rounded-lg border border-line bg-surface p-6">
              <dl className="space-y-2 text-sm">
                <div className="flex gap-4">
                  <dt className="min-w-[8rem] font-semibold text-foreground">성명</dt>
                  <dd>{SITE.ceo}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="min-w-[8rem] font-semibold text-foreground">직책</dt>
                  <dd>대표이사</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="min-w-[8rem] font-semibold text-foreground">전화번호</dt>
                  <dd>{SITE.phone}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="min-w-[8rem] font-semibold text-foreground">이메일</dt>
                  <dd>{SITE.email}</dd>
                </div>
              </dl>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. 고지 의무</h2>
            <p className="mt-3">
              본 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이
              있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
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
