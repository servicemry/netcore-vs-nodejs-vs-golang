var number=1000000000;
var startTime =new Date();
console.log("性能测试NodeJS：循环10亿次所用时间");
console.log("当前开始时间:"+startTime);
var count=0;
for(var i=1;i<=number;i++)
{
    if(i%2==0){
    count+=i;
    }
}
var stopTime=new Date();
console.log("当前结束时间:"+stopTime);
console.log("用时毫秒:"+(stopTime-startTime));