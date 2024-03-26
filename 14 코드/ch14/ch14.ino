#include <Servo.h>
Servo servo; // servo변수 정의
int servoPin = 9; // servoPin 변수 정의 & 핀번호 할당

int servoAngle = 0; // 서모보터 각도 변수 정의
void setup() {
  Serial.begin(9600);
  servo.attach(servoPin); //servo변수에게 제어핀 할당
}

void loop() {
  if (Serial.available() > 0) { // p5js => Arduino
    servoAngle = Serial.read(); // 시리얼 데이터 읽기
    servo.write(servoAngle); //서보모터 각도 변경
  }
}
