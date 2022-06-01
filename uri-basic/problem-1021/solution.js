const input=require('fs').readFileSync('./input.txt','utf-8');
const lines=input.split('.');

let integer=parseInt(lines.shift())
let float=(lines.shift()/100)
100, 50, 20, 10, 5, 2  /// 1, 0.50, 0.25, 0.10, 0.05
let hundred=0;
let fifty=0;
let twenty=0;
let ten=0;
let five=0;
let two=0;
let one=0;
let pointFive=0;
let pointTwoFive=0;
let pointOneZero=0;
let pointZeroFive=0;
let pointZeroOne=0;

if(integer>=100){
hundred=parseInt(integer/100);
integer=integer-(hundred*100);

}
if(integer>=50){
fifty=parseInt(integer/50);
integer=integer-(fifty*50);

}
if(integer>=20){
twenty=parseInt(integer/20);
integer=integer-(twenty*20);

}
if(integer>=10){
ten=parseInt(integer/10);
integer=integer-(ten*10);

}

if(integer>=5){
five=parseInt(integer/5);
integer=integer-(five*5);

}
if(integer>=2){
two=parseInt(integer/2);
integer=integer-(two*2);

}
if(integer>=1){
one=parseInt(integer/1);
integer=integer-(one*1);

}
if(float>=0.50){
pointFive=parseInt(float/0.50);
float=float-(pointFive*0.50);

}
if(float>=0.25){
pointTwoFive=parseInt(float/0.25);
float=float-(pointTwoFive*0.25);

}
if(float>=0.10){
pointOneZero=parseInt(float/0.10);
float=float-(pointOneZero*0.10);

}
if(float>=0.05){
pointZeroFive=parseInt(float/0.05);
float=float-(pointZeroFive*0.05);

}
if(float>=0.01){
pointZeroOne=parseInt(float/0.01);

}
	
console.log('NOTAS:');
console.log(hundred + ' nota(s) de R$ 100.00 \n'+fifty+' nota(s) de R$ 50.00 \n'+twenty+' nota(s) de R$ 20.00 \n'+ten+' nota(s) de R$ 10.00 \n'+five+' nota(s) de R$ 5.00 \n'+two+' nota(s) de R$ 2.00 \n');

console.log('MOEDAS: \n');
console.log(one+' moeda(s) de R$ 1.00');
console.log(pointFive+' moeda(s) de R$ 0.50');
console.log(pointTwoFive+' moeda(s) de R$ 0.25');
console.log(pointOneZero+' moeda(s) de R$ 0.10');
console.log(pointZeroFive+' moeda(s) de R$ 0.05');
console.log(pointZeroOne+' moeda(s) de R$ 0.01');
