auto.waitFor()

function back_home() {
    while (!text('通讯录').exists()) {
        id('eh').click();
    }
}

function my_click(target) {
    text(target).waitFor();
    var tmp = text(target).findOne().bounds();
    click(tmp.centerX(), tmp.centerY());
}

function mark() {
    textContains("关注南昌疾控").waitFor();
    if (!text('今天已经完成打卡').exists()) {
        click("否", 5);
        click("打卡")
    }
}

app.launchApp('微信');

back_home();

// while (!click('通讯录'));
// while (!click('南昌大学'));
// while (!click('a学生疫情常态化管理'));
my_click('通讯录');
my_click('南昌大学');
// 这里不知道为什么my_click会出现bug跳到公众号去
while(!click('a学生疫情常态化管理'));

while (!text('用户无权访问').exists() && !text('每日健康打卡').exists());

if (text('用户无权访问').exists()) {
    // 如果无权访问，则要通过浏览器
    my_click('确定');
    my_click('每日健康打卡');
    my_click('确定');

    id('kl1').waitFor();
    var search = id('kl1').findOne().bounds();
    click(search.centerX(), search.centerY());

    my_click('在浏览器打开');

    mark();
} else {
    my_click('每日健康打卡');
    mark();
}

back_home();