using System;
namespace netcore
{
    class Program
    {
        static void Main(string[] args)
        {
            var number=500000000;
            var startTime =DateTime.Now;
            System.Console.WriteLine("性能测试：循环5亿次所用时间");
            System.Console.WriteLine("当前开始时间:"+startTime);
            var count=0;
            for(int i=1;i<=number;i++)
            {
                if(i%2==0){
                    count+=i;
                }
            }
            System.Console.WriteLine("偶数和"+count);
           var stopTime=DateTime.Now;
           System.Console.WriteLine("当前结束时间:"+stopTime);
           System.Console.WriteLine(stopTime-startTime);
        }
    }
}
