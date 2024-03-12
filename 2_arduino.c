#include <Wire.h> 
#include <ezButton.h> 

ezButton myButton(7); 

int value = 0; 

void setup() {
  Serial.begin(9600);
  myButton.setDebounceTime(50); 
}

void loop() {
  // put your main code here, to run repeatedly:
  myButton.loop();
  if(myButton.isPressed()) {
    value++; 
  }
  Serial.println(value); 
}
