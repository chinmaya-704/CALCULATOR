const d=document.querySelector('.display');
function update(k){
   d.innerHTML+=k;
}
function clr(){
   d.innerHTML='';
}
function cal(){
   let x=d.innerHTML;
   x=eval(x);
   d.innerHTML=x;
}
document.body.addEventListener('keydown',(event)=>{
   if (event.key==='1')
      update('1');
   else if(event.key==='2')    
      update('2');
   else if(event.key==='3')    
      update('3');
   else if(event.key==='4')    
      update('4');
   else if(event.key==='5')    
      update('5');
   else if(event.key==='6')    
      update('6');
   else if(event.key==='7')    
      update('7');
   else if(event.key==='8')    
      update('8');
   else if(event.key==='9')    
      update('9');
   else if(event.key==='0')    
      update('0');
   else if(event.key==='.')    
      update('.');
   else if((event.key==='=') || (event.key==='Enter'))    
      cal();
   else if(event.key==='+')    
      update('+');
   else if(event.key==='-')    
      update('-');
   else if(event.key==='*')    
      update('*');
   else if(event.key==='/')    
      update('/');
   else if (event.key=='Backspace')
      clr();
})