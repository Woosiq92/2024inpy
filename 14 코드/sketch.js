function setup() {
  serial = new p5.SerialPort();
  serial.open("COM5");
}

// 슬라이더 움직일때 실행할 이벤트함수
function onInput(sVal) {
  // 슬라이더 값을 보여줄 요소를 변수에 담음
  const obValueView = document.getElementById("slider_value_view");
  //슬라이더 값을 보여줄 요소에 슬라이더 값을 줌
  obValueView.innerHTML = sVal;
  //아두이노로 슬라이더 값 전송
  serial.write(+sVal);
}
