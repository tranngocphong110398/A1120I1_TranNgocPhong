//bai1
let browers=prompt('Nhap pla pla');
switch (browers) {
    case 'Edge':
        alert('You ve got the Edge');
        break;
    case 'chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!');
}
//bai2
let a=prompt('a?','');
switch (a) {
    case 0:
        alert('0');
        break;
    case 1:
        alert('1');
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}
//Bai3
let b=parseInt(prompt('nhập số : '));
if (b>0)
    alert(1);
if (b<0){
    alert(-1);
}else
{
    alert(0);
}
switch (b) {
    case b>0:
        alert(1);
        break;
    case b<0:
        alert(-1);
        break;
    default:
        alert(0);

}