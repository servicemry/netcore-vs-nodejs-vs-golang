var number=500000000;
var startTime =new Date();
console.log("性能测试NodeJS：循环5亿次所用时间");
console.log("当前开始时间:"+startTime);
var count=0;
for(var i=1;i<=number;i++)
{
    if(i%2==0){
    count+=i;
    }
}
console.log("偶数和"+count);
var stopTime=new Date();
console.log("当前结束时间:"+stopTime);
console.log(stopTime-startTime);