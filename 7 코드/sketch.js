// html요소를 가져와 변수에 담습니다
const redSlide = document.getElementById("red-slide");
const greenSlide = document.getElementById("green-slide");
const blueSlide = document.getElementById("blue-slide");

// 슬라이드 값을 아두이노로 전송
const sendEventValue = (e) => {
  // 웹화면에 값 출력
  switch(e.target.name) {
    case "R":
      document.getElementById("red-slide-value").innerHTML = "RED : "+e.target.value;
      break;
    case "G":
      document.getElementById("green-slide-value").innerHTML = "GREEN : "+e.target.value;
      break;
    case "B":
      document.getElementById("blue-slide-value").innerHTML = "BLUE : "+e.target.value;
      break;
    default:
      break;
  }
  //웹화면에 색 출력
  document.getElementById("slide-wrapper").style.borderBottom = "50px solid rgb("+redSlide.value+","+greenSlide.value+","+blueSlide.value+")";
  //아두이노로 값 전송
  serial.write(e.target.name+e.target.value);
}

//슬라이드에 실행할 함수 연결
redSlide.addEventListener("change", sendEventValue);
greenSlide.addEventListener("change", sendEventValue);
blueSlide.addEventListener("change", sendEventValue);

function setup() {
  serial = new p5.SerialPort(); 
  serial.list();
  serial.open('COM5'); 
}
