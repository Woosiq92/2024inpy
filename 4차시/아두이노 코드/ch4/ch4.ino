int led = 11;
int value = 0; // p5js에 전송할 변수

void setup() {
  Serial.begin(9600); // 시리얼 통신 시작
  pinMode(led, OUTPUT); // 13번핀 출력모드
}

void loop() {
  int cds = analogRead(A0); //조도센서 값 읽기
  Serial.println(cds); //Arduino => p5js
  
  if(Serial.available() > 0) { // p5js => Arduino
    byte ledLight = Serial.read(); // 시리얼 데이터 읽기
    analogWrite(led,ledLight); // LED에 출력
  }
  delay(100);
}
