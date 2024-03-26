// 학습모델 공유링크를 복사해서 넣어줍니다
const URL = "https://teachablemachine.withgoogle.com/models/ZIWMwaR0e/";
const serialPort = "COM5";
let serial;
let resultLabel;
let actionNum;

function setup() {
  serial = new p5.SerialPort();
  serial.open(serialPort);
  init();
}

//학습모델객제 생성함수
async function createModel() {
  const checkpointURL = URL + "model.json"; // 모델 요소
  const metadataURL = URL + "metadata.json"; // 모델 데이터

  const recognizer = speechCommands.create(
    "BROWSER_FFT", // 학습에 필요한 변환로직 유형
    undefined, // 음성명령 어휘기능 사용안함
    checkpointURL,
    metadataURL
  );

  // 모델 및 메타데이터가 HTTPS 요청을 통해 로드되는지 확인
  await recognizer.ensureModelLoaded();

  return recognizer;
}

async function init() {
  const recognizer = await createModel();
  const classLabels = recognizer.wordLabels(); // 모델 클래스 레이블 할당
  const labelContainer = document.getElementById("label-container");

  // 음성추론 함수, 추론결과를 인자로 받는 콜백함수 실행
  recognizer.listen((result) => {
    // 가장 값이 큰 클래스의 레이블 할당
    resultLabel =
      classLabels[result.scores.indexOf(Math.max(...result.scores))];
    // labelComtainer 요소에 추론한 레이블을 넣어줌
    labelContainer.innerHTML = resultLabel;
    // 각 레이블에 따라 actionNum을 아두이노로 전송
    switch (resultLabel) {
      case "박수":
        actionNum = 0;
        break;
      case "쉐이커":
        actionNum = 1;
        break;
      case "피아노":
        actionNum = 2;
        break;
      default:
        actionNum = 3;
        break;
    }
    serial.write(actionNum);
  });
}
