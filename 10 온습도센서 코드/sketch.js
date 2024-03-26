let serial;
const temperatureEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");

function setup() {
  createCanvas(500, 500); 
  
  serial = new p5.SerialPort(); 
  serial.list();
  serial.open('COM5'); 
  serial.on('data', gotData);  // 시리얼로 데이터를 받았을 때 콜백
}

function gotData() {
  var inString = serial.readLine(); // 시리얼 통신 data를 읽어옵니다
  if (inString.length > 0) { //읽어온 값이 있다면
    [temperature,humidity] = inString.split("/") //데이터 값 저장
    
    // 온도 data출력 및 색표시를 위한 class 지정
    const temperatureClass = temperature > 28 ? "hot" : temperature < 10? "cold":""
    temperatureEl.classList = temperatureClass;
    temperatureEl.innerText = temperature;
        
    // 습도 data출력 및 색표시를 위한 class 지정
    const humidityClass = humidity > 90 ? "humid" : humidity < 30? "dry": ""
    humidityEl.classList = humidityClass;
    humidityEl.innerText = humidity;
  }
}
