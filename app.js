
var user = prompt('Whats your name ??')
alert('Hello Eng ' + user)
var mc = prompt('Before you join you must answer on this question correctly , what is name the microcontroller in arduino??')
while (mc !== 'atmega' ){
mc = prompt ('sorry ,try agin !!')}

var ard = prompt('choose arduino version(Uno,Mega,Nano) you want to buy ??')
var num = prompt('How many do you want to buy')
var image = ''
while (ard !== 'uno' && ard !== 'mega' && ard !== 'nano'){
  ard = prompt ('try agin !!')}
for ( var x=0 ; x < num ; x++  ){
if(ard === 'uno'){
  image = image +'<img src="https://www.4atoms.com/wp-content/uploads/2018/05/arduino-uno-r3-1-1.jpg" alt="">'
}else if(ard === 'mega'){
  image = image +'<img src="https://static6.arrow.com/aropdfconversion/arrowimages/7bdcdb25b426537d18719c32876250cd081366b0/a000067.jpg" alt="">'
} else if (ard === 'nano') {
image = image +'<img src="https://www.elektor.com/media/catalog/product/cache/23126780d17198beb71f0dbe2a3ae59a/a/r/arduinonanofront_3_sm_1.jpg" alt="">'
}
}
document.write(image + 'you want to by x' + num + ard)
/*var
 pin = prompt('choose arduino version(Uno,Mega,Nano) which want to know how it have degital I/O pins ??')
=======
alert('Hello ' + user)

var ard = prompt('choose arduino version(Uno,Mega,Nano) ??')

if(ard === 'uno'){
  document.write('<img src="https://www.4atoms.com/wp-content/uploads/2018/05/arduino-uno-r3-1-1.jpg" alt="">')
}else if(ard === 'mega'){
  document.write('<img src="https://static6.arrow.com/aropdfconversion/arrowimages/7bdcdb25b426537d18719c32876250cd081366b0/a000067.jpg" alt="">')
}else if (ard === 'nano') {
document.write('<img src="https://www.elektor.com/media/catalog/product/cache/23126780d17198beb71f0dbe2a3ae59a/a/r/arduinonanofront_3_sm_1.jpg" alt="">')
  }
  else {
    alert('okay you should only pick uno,mega,nano')
  }
  var pin = prompt('choose arduino version(Uno,Mega,Nano) which want to know how it have degital I/O pins ??')

>>>>>>> 79df8400d7f47a390e26fc3a5a574dab19cc5af4
if(pin === 'uno'){
  document.write('uno has 14 degital I/O pin ')
}else if(pin === 'mega'){
  document.write('mega has 54 degital I/O pin')
}else if (pin === 'nano') {
document.write('nano has 14 degital I/O pin but have small size')
  }
  else {
    alert('okay you should only pick uno,mega,nano')
  }
<<<<<<< HEAD
*/


