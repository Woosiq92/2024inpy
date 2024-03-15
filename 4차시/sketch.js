let serial;
let val = 0; // 읽어온 데이터를 넣을 변수 선언
let slider; // 슬라이더 요소 넣을 변수 선언

function setup() {
  createCanvas(300, 300);

  slider = createSlider(0, 255, 100); // 슬라이더 생성
  slider.position(60, 15); // 슬라이더 위치 설정
  slider.changed(sliderChanged);  // 슬라이더 이벤트 핸들링 함수 설정
  slider.style('width', '200px'); // 슬라이더 스타일

  serial = new p5.SerialPort();
  serial.list();
  serial.open('COM5');
  serial.on('data', gotData); // 시리얼로 데이터를 받았을 때 콜백
}

function gotData() {
  var inString = serial.readLine(); // 시리얼 통신 data를 읽어옵니다.

  if (inString.length > 0) { // 읽어온 값이 있다면
    val = Number(inString) * 255 / 1024; // 조도센서의 값(0~1024)를 LED값(0~255)로 바꿔준후 저장
    print(val);
  }
}

function sliderChanged() {
  serial.write(slider.value()); // p5.js => Arduino
}

function draw() {
  background(val, val, 0); // 조도센서의 값으로 배경색 변경
  textSize(32);
  text('🌞', 10, 40);
  text('🌛', 260, 40);
}
