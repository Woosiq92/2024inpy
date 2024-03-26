let serial;
let val = 0; //읽어온 데이터를 넣을 변수 선언
let r = 0; // 빨간색 값을 넣을 변수 선언
let g = 0; // 초록색 값을 넣을 변수 선언
let b = 0; // 파란색 값을 넣을 변수 선언

function setup() {
  createCanvas(300, 300);

  serial = new p5.SerialPort();
  serial.list();
  serial.open("COM5");
  serial.on("data", gotData); // 시리얼로 데이터를 받았을 때 콜백
}

function gotData() {
  var actionNum = serial.readLine(); // 시리얼 통신 data를 읽어옵니다

  if (actionNum.length > 0) {
    //읽어온 값이 있다면
    val = Number(actionNum); // val에 저장
  }
}

function draw() {
  // 거리값의 범위에 따라 색상 변경

  if (val < 5) {
    r = 255;
    g = 0;
    b = 0;
  } else if (val < 10) {
    r = 255;
    g = 100;
    b = 0;
  } else if (val < 15) {
    r = 255;
    g = 255;
    b = 0;
  } else if (val < 20) {
    r = 0;
    g = 255;
    b = 0;
  } else if (val < 25) {
    r = 0;
    g = 0;
    b = 255;
  } else if (val < 30) {
    r = 0;
    g = 10;
    b = 255;
  } else {
    r = 100;
    g = 0;
    b = 255;
  }
  background(r, g, b); // 색상값으로 배경색 변경
}
