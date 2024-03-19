const mainCanvas = document.getElementById("main-canvas");
const ctx = mainCanvas.getContext("2d");
const pencil = document.getElementById("pencil");
let drawing = false;
let deltaX = 250;
let deltaY = 250;
const keys = [];

ctx.lineWidth = 20;
ctx.lineCap = "round";
ctx.strokeStyle = "black";

function setup() {
  const serial = new p5.SerialPort();
  //시리얼포트 serial 객체(시리얼 통신에 관련된 변수나 함수의 조합)을 선언한다
  serial.on("data", serialEvent);
  //시리얼 포트로부터 값을 가져오기 위해 실행할 함수를 정의
  serial.open("COM5");
  // 아두이노와 시리얼 연결을 연다(아두이노 시리얼 포트이름을 넣어주어야 합니다)

  //시리얼 데이터를 읽어오기 위한 함수
  function serialEvent() {
    var inString = serial.readLine(); // 시리얼 통신 data를 읽어옵니다
    if (inString.length > 0) {
      //읽어온 값이 있다면
      move(+inString); //move함수를 실행합니다
    }
  }
}

function move(keyCode) {
  //left,right,up,down 키번호가 들어오면 true로 바꿔준다
  if ([32, 37, 38, 39, 40].includes(keyCode)) keys[keyCode] = true;

  //입력된 키 상태에 따라 좌표를 변경해 주거나 키 상태를 false로 바꿔준다
  // left,right 아닐때
  if (keyCode === 36) {
    keys[37] = false;
    keys[39] = false;
  }
  // left
  if (keys[37]) {
    deltaX -= 2;
  }

  // right
  if (keys[39]) {
    deltaX += 2;
  }

  // down,up 아닐때
  if (keyCode === 41) {
    keys[38] = false;
    keys[40] = false;
  }

  // down
  if (keys[38]) {
    deltaY -= 2;
  }

  // up
  if (keys[40]) {
    deltaY += 2;
  }

  // click 아닐때
  if (keyCode === 31) {
    keys[32] = false;
  }

  //캔버스에 그려준다
  canvasDraw();
}

function canvasDraw() {
  //연필 아이콘 위치 변경
  pencil.style.left = deltaX + "px";
  pencil.style.top = deltaY - 60 + "px";

  //조이스틱을 누른 상태가 아닐경우 그림 안그린다
  if (!keys[32]) return;

  //캔버스에 조이스틱으로 이동한 좌표에 따라 그림을 그린다
  ctx.beginPath();
  ctx.moveTo(deltaX, deltaY);
  ctx.lineTo(deltaX, deltaY);
  ctx.stroke();
}
