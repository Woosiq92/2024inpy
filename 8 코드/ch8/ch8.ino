const int pinSW = 8; //switch pin번호
const int pinY = A0; //y축 pin번호
const int pinX = A1; //X축 pin번호

void setup()
{
  Serial.begin(9600);
  pinMode(pinSW, INPUT_PULLUP);
}

void loop()
{
  //각 data핀 값 읽어서 변수에 저장
  int valueY = analogRead(pinY);
  int valueX = analogRead(pinX);
  int valueSW = digitalRead(pinSW);


  //조이스틱 data값에 따라 p5js로 키번호를 보낸다
  
  //X축 방향값
  //left
  if (valueX <= 450) {
    Serial.println(37);
    delay(50);
  }

  //right
  else if (valueX >= 550) {
    Serial.println(39);
    delay(50);
  }

  //left,right 아닐때
  else {
    Serial.println(36);
    delay(50);
  }

  //Y축 방향값
  //down
  if (valueY <= 450) {
    Serial.println(38);
    delay(50);
  }
  
  //up
  else if (valueY >= 550) {
    Serial.println(40);
    delay(50);
  }

  //down,up 아닐때
  else {
    Serial.println(41);
    delay(50);
  }

  //switch 눌렸을때
  if (!valueSW) {
    Serial.println(32);
    delay(50);
  }
  
  //아닐때
  else {
    Serial.println(31);
    delay(50);
  }

  delay(100);
}
