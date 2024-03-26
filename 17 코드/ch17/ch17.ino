
#define TRIG 9 //TRIG 핀 설정 (초음파 출력 핀)
#define ECHO 8 //ECHO 핀 설정 (초음파 입력 핀)

void setup() {
  Serial.begin(9600);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
}



void loop()
{
  long duration, distance, actionNum;
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  duration = pulseIn (ECHO, HIGH); //초음파가 반사되어 돌아오는데 걸린 시간
  //초음파센서의 거리값을 Cm로 환산
  distance = duration * 17 / 1000;

  Serial.println(distance);

  delay(1000);
}
