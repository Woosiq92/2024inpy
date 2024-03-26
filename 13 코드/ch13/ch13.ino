int clapLedPin = 7; // 박수 LED핀 정의, 7번핀 할당
int shakerLedPin = 6; // 쉐이커 LED핀 정의, 7번핀 할당
int pianoLedPin = 5; // 피아노 LED핀 정의, 7번핀 할당

void setup() {
  pinMode(clapLedPin, OUTPUT);
  pinMode(shakerLedPin, OUTPUT);
  pinMode(pianoLedPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) { // p5js => Arduino
    byte actionCode = Serial.read(); // 시리얼 데이터 읽기
    // 웹에서 보낸 값에 따라 LED를 제어해줍니다
    switch (actionCode) {
      case 0 :
        digitalWrite(clapLedPin, HIGH);
        digitalWrite(shakerLedPin, LOW);
        digitalWrite(pianoLedPin, LOW);
        break;
      case 1 :
        digitalWrite(clapLedPin, LOW);
        digitalWrite(shakerLedPin, HIGH);
        digitalWrite(pianoLedPin, LOW);
        break;
      case 2 :
        digitalWrite(clapLedPin, LOW);
        digitalWrite(shakerLedPin, LOW);
        digitalWrite(pianoLedPin, HIGH);
        break;
      default :
        digitalWrite(clapLedPin, LOW);
        digitalWrite(shakerLedPin, LOW);
        digitalWrite(pianoLedPin, LOW);
        break;
    }
  }
}
