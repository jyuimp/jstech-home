export type Project = {
  slug: string;
  title: string;
  industry: string;
  tech: string[];
  stage: string;
  period: string;
  result: string;
  description: string;
  outcome: string[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: "smart-factory-monitoring",
    title: "스마트팩토리 설비 모니터링 시스템",
    industry: "스마트팩토리",
    tech: ["STM32", "C", "MQTT", "Modbus"],
    stage: "양산",
    period: "12주",
    result: "생산 효율 23% 개선",
    description:
      "산업용 설비에 센서와 통신 모듈을 장착하여 실시간으로 설비 상태를 수집·모니터링하는 IoT 시스템을 개발했습니다. 데이터는 클라우드로 전송되어 대시보드에서 설비 가동률과 이상 징후를 한눈에 확인할 수 있습니다.",
    outcome: [
      "STM32 기반 데이터 수집 게이트웨이 개발",
      "MQTT/Modbus 기반 산업용 통신 구현",
      "실시간 설비 상태 대시보드 구축",
      "생산 효율 23% 개선 달성",
    ],
    image: "/images/projects/smart-factory.svg",
  },
  {
    slug: "medical-device-ble",
    title: "의료기기용 BLE 무선 측정 모듈",
    industry: "의료기기",
    tech: ["ESP32", "BLE", "C++", "저전력 설계"],
    stage: "양산",
    period: "16주",
    result: "KC 인증 통과",
    description:
      "병원용 휴대 측정 의료기기의 무선 데이터 전송 모듈을 개발했습니다. BLE 통신과 저전력 설계를 적용하여 배터리 수명을 극대화하고, 측정 데이터를 앱으로 안전하게 전송합니다.",
    outcome: [
      "ESP32 기반 BLE 저전력 통신 구현",
      "의료 등급 데이터 암호화 전송",
      "충전 배터리 수명 최적화",
      "KC/EMC 인증 통과",
    ],
    image: "/images/projects/medical-ble.svg",
  },
  {
    slug: "iot-home-hub",
    title: "스마트홈 IoT 허브 & 모바일 앱",
    industry: "IoT/스마트홈",
    tech: ["ARM Cortex", "C", "WiFi", "Qt", "C#"],
    stage: "완료",
    period: "20주",
    result: "출시 후 3,000대 판매",
    description:
      "여러 스마트 기기를 하나로 연결하는 IoT 허브와 이를 제어하는 모바일 앱, 데스크톱 GUI를 통합 개발했습니다. 홈 네트워크를 통해 조명, 온도, 가전을 중앙에서 제어합니다.",
    outcome: [
      "ARM Cortex 기반 IoT 허브 펌웨어 개발",
      "WiFi 통신 및 클라우드 연동",
      "Qt 기반 데스크톱 제어 GUI",
      "출시 후 3,000대 판매 달성",
    ],
    image: "/images/projects/iot-home.svg",
  },
];

export const projectStages = ["설계", "프로토타입", "개발", "테스트", "양산", "완료"];
