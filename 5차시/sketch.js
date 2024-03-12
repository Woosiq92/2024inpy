const sevenColorOnOff = document.getElementById("7-on-off");
const twoColorOnOff = document.getElementById("2-on-off");
const twoColorRed = document.getElementById("2-red");
const twoColorGreen = document.getElementById("2-green");

const sendEventValue =  (e) => {
  console.log(+e.target.value);
  serial.write(+e.target.value);
}

sevenColorOnOff.addEventListener("change",  (e) => {
  console.log(e.target.checked? 1:2)
  serial.write(e.target.checked? 1:2);

});
twoColorOnOff.addEventListener("change", (e) => {
  serial.write(e.target.checked? 3:4);
});
twoColorRed.addEventListener("change",sendEventValue);
twoColorGreen.addEventListener("change", sendEventValue);

function setup() {
  serial = new p5.SerialPort(); 
  serial.list();
  serial.open('COM5'); 
}