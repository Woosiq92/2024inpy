function setup() {
  serial = new p5.SerialPort();
  serial.open("COM5");
}

// 확인 눌렀을 때 실행할 콜백함수
function onSubmit() {
  const formData = new FormData(document.querySelector("form"));
  const formArray = Array.from(formData.values());
  serial.write(`${formArray[0]},${formArray[1]}`);
}
