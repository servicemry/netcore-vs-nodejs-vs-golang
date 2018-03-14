package main
import (
    "fmt"
    "time"
)

func main() {
    var number int64
    number = 1000000000
	var count int64
	var i int64
	fmt.Println("性能测试：循环10亿次所用时间")
	var startTime=time.Now().UnixNano()/1e6
    fmt.Println("当前开始时间:",startTime)
    for i = 1; i <= number; i++ {
        if i%2 == 0 {
            count += count
        }
	}
	var stopTime=time.Now().UnixNano()/1e6
	fmt.Println("当前结束时间:",stopTime)
	fmt.Println("用时毫秒:",(stopTime-startTime))
}