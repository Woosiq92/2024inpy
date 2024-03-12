#include <LiquidCrystal_I2C.h> // i2c LCD 라이브러리

LiquidCrystal_I2C lcd(0x27,16,2); // LCD 객체 설정 

void setup() {
  lcd.init(); // LCD 초기화
  lcd.backlight(); // LCD 불 켜기
  Serial.begin(9600); // 시리얼 통신 시작
}

void loop() {
  if(Serial.available() > 0) { // p5js => Arduino
    byte data = Serial.read(); // 시리얼 데이터 읽기
    lcd.setCursor(0,0);
    lcd.print(data); // LCD에 데이터 출력
  }
}
