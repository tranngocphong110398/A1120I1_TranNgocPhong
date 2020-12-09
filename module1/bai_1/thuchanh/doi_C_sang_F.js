let inputc;
let inputf;
inputc=prompt("Nhaap do C ");
c=parseInt(inputc);
let doii=c*1.8+32;
document.write("Do F la "+doii)
document.write("<br>");
let inputly,inputhoa,inputsinh;
inputly=prompt("nhap diem ly ")
inputhoa=prompt("nhap diem hoa ")
inputsinh=prompt("nhap diem sinh ")
a=parseInt(inputly);
b=parseInt(inputhoa);
c=parseInt(inputsinh);
let tong=a+b+c;
let trungbinh=(a+b+c)/3;
document.write("diem tong la "+tong);
document.write("<br>");
document.write("diem trung binh  la "+trungbinh);
document.write("<br>");
document.write("<br>");
let inputbankinh;
const PI = 3.14159265359;
inputbankinh=prompt("nhap ban kinh ");
r=parseInt(inputbankinh);
let Chuvi=2*r*PI;
let dientich=PI*r*r;
document.write("chu vi hinh tron la "+Chuvi);
document.write("<br>");
document.write("dien tich hinh tron la "+dientich);