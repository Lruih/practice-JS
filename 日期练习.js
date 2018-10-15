
// alert(d.toDateString());//Mon Oct 15 2018
/*alert(d.toLocaleDateString());//2018/10/15*/
// alert(d.toTimeString());//显示时分秒区
// d.setDate(8);//几号被更改为8.
/*获取一周中的某一天，从0开始的，星期0代表周日，只能获取不能设置/
getDay();
获取月份时，也是从0开始。
set/getMonth()*/
// d.setMonth(4);//得到的是5月

/* 参照物都是1970年
 d.set/getTime() 设置/获取当前日期距离1070年的毫秒数*/
// alert(d.getTime());//输出的从现在到1970年的毫秒

/*Date.parse("2015-08-24")
返回这个日期，距离1970年的毫秒数*/
var time = Date.parse("2018-10-15");
var d = new Date(time);
alert(d);