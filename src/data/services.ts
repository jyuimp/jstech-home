export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  features: string[];
  mcus: string[];
  industries: string[];
};

export const services: Service[] = [
  {
    slug: "firmware",
    title: "펌웨어 개발",
    short: "MCU 기반 펌웨어 설계·구현",
    description:
      "STM32, ESP32, ATmel, ARM Cortex 등 다양한 MCU 플랫폼에서 안정적이고 최적화된 펌웨어를 개발합니다. RTOS부터 베어메탈까지 프로젝트 요구사항에 맞는 최적의 구조를 설계합니다.",
    icon: "Cpu",
    features: [
      "MCU 플랫폼별 펌웨어 설계·구현",
      "RTOS / 베어메탈 구조 설계",
      "디바이스 드라이버 개발",
      "저전력 / 실시간 처리 최적화",
      "OTA 업데이트 지원",
    ],
    mcus: ["STM32", "ESP32", "ATmel", "ARM Cortex"],
    industries: ["의료기기", "스마트팩토리", "IoT/스마트홈", "모빌리티"],
  },
  {
    slug: "iot",
    title: "IoT 솔루션",
    short: "센서·통신·클라우드 통합",
    description:
      "WiFi, BLE, LoRa, MQTT, Modbus 등 다양한 통신 프로토콜을 활용한 IoT 솔루션을 구축합니다. 센서 데이터 수집부터 클라우드 연동까지 엔드투엔드 솔루션을 제공합니다.",
    icon: "Wifi",
    features: [
      "통신 프로토콜 설계 (UART/SPI/I2C/CAN/LoRa/WiFi/BLE)",
      "클라우드 연동 (MQTT, HTTP)",
      "산업용 프로토콜 (MQTT, Modbus)",
      "데이터 수집·모니터링 시스템",
      "OTA 원격 업데이트",
    ],
    mcus: ["ESP32", "STM32", "ATmel", "ARM Cortex"],
    industries: ["IoT/스마트홈", "스마트팩토리", "모빌리티", "소비재"],
  },
  {
    slug: "hardware",
    title: "하드웨어 설계",
    short: "회로 설계·PCB·센서 인터페이스",
    description:
      "회로 설계부터 PCB 제작, 센서 인터페이스까지 하드웨어 전반을 설계합니다. 프로토타입부터 양산을 고려한 안정적인 회로 설계를 제공합니다.",
    icon: "CircuitBoard",
    features: [
      "회로 설계 및 시뮬레이션",
      "PCB 설계 및 제작 관리",
      "센서 인터페이스 설계",
      "전원부 설계 및 EMI/EMC 고려",
      "양산 친화적 설계",
    ],
    mcus: ["STM32", "ESP32", "ATmel", "ARM Cortex"],
    industries: ["의료기기", "스마트팩토리", "IoT/스마트홈", "소비재"],
  },
  {
    slug: "integration",
    title: "시스템 통합",
    short: "웹·앱·서버·클라우드 통합 개발",
    description:
      "임베디드 시스템과 연동되는 웹/앱 애플리케이션, 서버/클라우드 백엔드를 통합 개발합니다. Qt 기반 데스크톱 GUI부터 모바일 앱까지 제품의 완성도를 높입니다.",
    icon: "Boxes",
    features: [
      "Qt 기반 데스크톱/임베디드 GUI",
      "웹/모바일 애플리케이션 개발",
      "서버/클라우드 백엔드",
      "C# 윈도우 연동 솔루션",
      "HW/SW 통합 검증",
    ],
    mcus: ["ARM Cortex", "STM32", "ESP32"],
    industries: ["스마트팩토리", "의료기기", "모빌리티", "IoT/스마트홈"],
  },
  {
    slug: "production",
    title: "양산 지원",
    short: "BOM·소싱·인증·양산 관리",
    description:
      "시제품에서 양산까지 단단하게 이어지도록 BOM 관리, 부품 소싱, KC/EMC 인증 지원, 양산 관리까지 원스톱으로 제공합니다.",
    icon: "Factory",
    features: [
      "BOM 관리 및 부품 소싱",
      "KC/EMC 인증 지원",
      "양산 테스트 및 품질 관리",
      "공급사 관리",
      "납품 후 기술 지원",
    ],
    mcus: ["STM32", "ESP32", "ATmel"],
    industries: ["의료기기", "스마트팩토리", "모빌리티", "소비재"],
  },
];
