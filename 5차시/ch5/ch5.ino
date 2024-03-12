int TWO_LED_RED = 5;
int TWO_LED_GREEN= 6;
int SEVEN_LED = 13;

int sevenLedOn = false; // 7-color LED ON/OFF 상태 변수
int twoLedOn = false; // 2-color LED ON/OFF 상태 변수
int redOn = false; // 2-color LED redOn 상태 변수
int greenOn = false; // 2-color LED greenOn 상태 변수
const char* twoLedColor = "red"; // 2-color LED color 상태 변수

void setup() {
  Serial.begin(9600); // 시리얼 통신 시작
  pinMode(TWO_LED_RED, OUTPUT); // 5번핀 출력모드
  pinMode(TWO_LED_GREEN, OUTPUT); // 6번핀 출력모드
  pinMode(SEVEN_LED, OUTPUT); // 13번핀 출력모드
}

void loop() {
  if(Serial.available() > 0) { // p5js => Arduino
    byte actionCode = Serial.read(); // 시리얼 데이터 읽기

    //p5js에서 보낸 값에 따른 LED 상태 정의
    switch(actionCode) {
      case 1:
        sevenLedOn = true;
        break;
      case 2:
        sevenLedOn = false;
        break;
      case 3:
        twoLedOn = true;
        redOn = twoLedColor == "red";
        greenOn = twoLedColor == "green";
        break;
      case 4:
        twoLedOn = false;
        redOn = false;
        greenOn = false;
        break;
      case 5:
        twoLedColor = "red";
        redOn = twoLedOn;
        greenOn = false;
        break;
      case 6:
        twoLedColor = "green";
        redOn = false;
        greenOn = twoLedOn;
        break;
    }

    digitalWrite(TWO_LED_RED, redOn); 
    digitalWrite(TWO_LED_GREEN, greenOn);
    digitalWrite(SEVEN_LED, sevenLedOn);

    delay(100);
  }
}
