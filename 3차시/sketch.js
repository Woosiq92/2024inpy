let serial;
let value = 0; //읽어온 데이터를 넣을 변수 선언

function setup() {
  createCanvas(300, 300); 
  button = createButton('Click me'); //버튼요소 생성
  button.position(10, 30); //버튼위치 지정
  button.mousePressed(myClick); //버튼을 눌렀을 떄 실행할 함수 등록
  
  serial = new p5.SerialPort(); 
  serial.open('COM5'); 
}

function myClick() {
  serial.write(value++); // p5js => Arduino
}

