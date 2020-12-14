//Bai 1
let a=parseInt(prompt('Nhap a : '));
let b=parseInt(prompt('Nhap b : '));
if ((a+b)<4) {
    alert('Below');
}else{
    alert('Over');
}
//bai2
let c=parseInt(prompt('Nhap c : '));
let d=parseInt(prompt('Nhap d : '));
let e;
e=(c+d)<4 ? 'Bellow' : 'over';

//Bai3
let login=prompt('nhap vo cho tao : ');
if (login == 'Employee') {
   alert('Hello');
} else if (login == 'Director') {
    alert ('Greetings');
} else if (login == '') {
    alert('No login');
} else {
    alert('');
}
let message=(login == 'Employee')?'hello' :(login=='Director')? 'Greetings':(login=='') ? 'no login' :'';
