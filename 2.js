
let val; // 읽어온 데이터를 넣을 변수 선언
function setup() {
createCanvas (300, 300);
// 캔버스 생성
const serial = new p5.SerialPort();
//시리얼포트 serial 객체(시리얼 통신에 관련된 변수나 함수의 조합)을 선언한다.
serial.on("data", serialEvent);
//시리얼 포트로부터 값을 가져오기 위해 실행할 함수를 정의
serial.open('COM4');
// 아두이노와 시리얼 연결을 연다(아두이노 시리얼 포트이름을 넣어주어야 합니다)
//시리얼 데이터를 읽어오기 위한 함수
function serialEvent(){
var inString = serial.readLine(); // 시리얼 통신 data를 읽어옵니다.
if (inString.length > 0) { // 읽어온 값이 있다면
val = Number(inString); //val 변수에 할당해줍니다.
}
}
}
function draw() { //draw 함수정의
background('beige'); //바탕색 설정
textSize(32); // 텍스트크기 설정
text(val, 10, 30); // 화면에 val 변수값을 노출(10,30 좌표에) 
fill(0); // 글씨색 설정 (0일경우 검정색)
}
