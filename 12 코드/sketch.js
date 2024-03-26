// 학습모델 공유링크를 복사해서 넣어줍니다
const modelURL = "https://teachablemachine.withgoogle.com/models/XQ7yefRQP/";
const serialPort = "COM5";

let classifier; // classifier 변수 선언
let serial; // serial 변수 선언
let video; // video 변수 선언
let flippedVideo; // flippedVideo 변수 선언
let label; // label 변수 선언
let actionNum; // actionNum 변수 선언

function preload() {
  //classifier 에 학습모델을 할당해 줍니다
  classifier = ml5.imageClassifier(modelURL + "model.json");
  serial = new p5.SerialPort();
}

function setup() {
  serial.open(serialPort);
  createCanvas(320, 260);
  // 비디오를 생성합니다
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  flippedVideo = ml5.flipImage(video);
  //분류시작
  classifyVideo();
}

function draw() {
  //화면에 비디오와 유추한 결과를 출력합니다
  background(0);
  image(flippedVideo, 0, 0);
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

//분류 함수
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();
}

// 분류후 콜백함수
function gotResult(error, results) {
  //에러일 경우 console에 출력
  if (error) {
    console.error(error);
    return;
  }
  //분류 결과를 label 변수에 할당
  label = String(results[0].label);

  //분류 결과를 통해 actionNum 할당
  switch (label) {
    case "apple":
      actionNum = 1;
      break;
    case "book":
      actionNum = 2;
      break;
    case "cup":
      actionNum = 3;
      break;
    case "X":
      actionNum = 4;
      break;
    default:
      break;
  }
  //아두이노로 전송
  serial.write(actionNum);
  //분류함수 호출
  classifyVideo();
}
