
// function abe() {
//     var a=document.getElementById('firtsName').value;
//     alert(a);
// }
function addcustomer() {
    let a=document.getElementById('firtsName').value;
    let b=document.getElementById('lastName').value;
    let c=document.getElementById('CMND').value;
    let d=document.getElementById('day').value;
    let e=document.getElementById('email').value;
    let f=document.getElementById('address').value;
    let customer=document.getElementById('customer').value;
    let disCount=document.getElementById('disCount').value;
    let number=document.getElementById('number').value;
    let fromDate=document.getElementById('fromDate').value;
    let toDate=document.getElementById('toDate').value;
    let service=document.getElementById('service').value;
    let room=document.getElementById('room').value;
   document.getElementById('result').innerHTML=a+"<br>"+b+"<br>"+c+"<br>"+d+"<br>"+e+"<br>"+f+"<br>"+customer+"<br>"+disCount+"<br>"+number+"<br>"+fromDate+"<br>"+toDate+"<br>"+service+"<br>"+room;
    // +"<br>"+customer+"<br>"+disCount+"<br>"+number+"<br>"+fromDate+"<br>"+toDate+"<br>"+fromDate+"<br>"+service+"<br>"+room
   return false;
}