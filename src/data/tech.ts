export const techStack: {
  category: string;
  items: { name: string; detail: string }[];
}[] = [
  {
    category: "MCU 플랫폼",
    items: [
      { name: "STM32", detail: "ARM Cortex-M 기반, 가장 광범위한 MCU" },
      { name: "ESP32", detail: "WiFi+BLE 내장, IoT 특화" },
      { name: "ATmel (AVR/Mega)", detail: "저전력, 비용 최적화" },
      { name: "ARM Cortex", detail: "고성능 임베디드 애플리케이션" },
    ],
  },
  {
    category: "프로그래밍 언어",
    items: [
      { name: "C", detail: "임베디드 표준, 최적화된 성능" },
      { name: "C++", detail: "복잡한 로직, OOP 기반 개발" },
      { name: "C#", detail: "Qt/데스크톱 앱, 윈도우 연동" },
    ],
  },
  {
    category: "프레임워크",
    items: [{ name: "Qt", detail: "크로스플랫폼 GUI, 모바일/데스크톱" }],
  },
  {
    category: "통신 프로토콜",
    items: [
      { name: "UART, SPI, I2C, CAN", detail: "유선 통신" },
      { name: "WiFi, BLE, LoRa", detail: "무선 IoT 통신" },
      { name: "MQTT, Modbus", detail: "산업용 프로토콜" },
    ],
  },
];
