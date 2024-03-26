#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

#define DHTPIN 2
#define DHTTYPE    DHT11

DHT_Unified dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  //dht 센서 객체 생성
  dht.begin();
  sensor_t sensor;
  dht.temperature().getSensor(&sensor);
  dht.humidity().getSensor(&sensor);
}

void loop() {
  delay(1000);
  //dht 센서 객체에 event 세팅
  sensors_event_t event;

  //온도 센서값 serial전송
  dht.temperature().getEvent(&event);
  Serial.print(event.temperature);
  Serial.print("/");

  //습도 센서값 serial전송
  dht.humidity().getEvent(&event);
  Serial.println(event.relative_humidity);

}
