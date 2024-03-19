#define max_char 12
char r_char;
byte index = 0;
int i;

int redPin = 11;
int greenPin = 10;
int bluePin = 9;

String redTempValue;     
String greenTempValue; 
String blueTempValue;   
int flag = 0;
char currentColor;  

void setup() {
  pinMode(redPin,OUTPUT);
  pinMode(bluePin,OUTPUT);
  pinMode(greenPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  //while is reading the message 
  while(Serial.available() > 0){
    flag = 0;
    if(index < (max_char-1)){         
      r_char = Serial.read(); 
      if(r_char=='R'){
         currentColor = 'R';
         redTempValue = "";
      }
      else if(r_char=='G'){
         currentColor = 'G';
         greenTempValue = "";
      }
      else if(r_char=='B'){
         currentColor = 'B';
         blueTempValue = "";
      }
      if(currentColor == 'R' && r_char!='R'){
         redTempValue += r_char;
      }
      else if(currentColor == 'G' && r_char!='G'){
         greenTempValue += r_char;
      }
      else if(currentColor == 'B' && r_char!='B'){
         blueTempValue += r_char;
      }
      index++;
   }
   
 }
 
 if(flag == 0){
   analogWrite(redPin, redTempValue.toInt());
   analogWrite(greenPin, greenTempValue.toInt());
   analogWrite(bluePin, blueTempValue.toInt());
   flag=1;
   index=0;  
 }
}
