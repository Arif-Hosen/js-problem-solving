const input= require('fs').readFileSync('./input.txt','utf-8');

const time=parseInt(input);

let hours=0;
let minute=0;
let seconds=0;

if(time<60){
    seconds= time;
}
else if(time>=60){
    minute=parseInt(time/60);
    seconds= time-(minute*60);
}
if(minute>=60){
    hours=parseInt(minute/60);
    minute=minute-(hours*60);
}
console.log(hours+':'+minute+':'+seconds);