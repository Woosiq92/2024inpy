#include <Stepper.h>

char serial_char; // seraial data 담을 변수 선언
Stepper stepper(2048, 11, 9, 10, 8); // stepper객체 생성, 핀 할당

void setup() {
  stepper.setSpeed(10); // 모터 속도 초기화
  Serial.begin(9600);
}

void loop() {

  if (Serial.available() > 0) { // p5js => Arduino
    String serialData =  Serial.readString();
    int index1 = serialData.indexOf(',');
    int index2 = serialData.length();
    int speedVal = serialData.substring(0, index1).toInt();
    int angleVal = serialData.substring(index1 + 1, index2).toInt();

    int stepVal = map(angleVal, 0, 360, 0, 2048); //회전각 스템 수
    stepper.setSpeed(speedVal);
    stepper.step(stepVal);
    delay(100);
  }
}
