function googleDemo(){
  localStorage.setItem("pycode_user","Google User");
  const box=document.getElementById("account-message");
  if(box){box.textContent="✓ Вы вошли через Google (демо-режим).";}
  else alert("Вы вошли через Google (демо-режим).");
}
function loginDemo(){
  const email=document.getElementById("email");
  const msg=document.getElementById("account-message");
  if(!email || !email.value){msg.textContent="Введите email.";return;}
  localStorage.setItem("pycode_user",email.value);
  msg.textContent="✓ Вход выполнен (демо-режим).";
}
function showFree(){
  const el=document.getElementById("freeLesson");
  if(el){el.classList.add("show");el.scrollIntoView({behavior:"smooth"});}
}
function payDemo(){
  const name=document.getElementById("payerName");
  const email=document.getElementById("payerEmail");
  const msg=document.getElementById("payment-message");
  if(!name.value.trim() || !email.value.trim()){
    msg.textContent="Заполните имя и email.";
    return;
  }
  localStorage.setItem("pycode_paid","true");
  msg.textContent="✓ Оплата успешно проведена (демо).";
  const area=document.getElementById("downloadArea");
  if(area){area.classList.add("show");setTimeout(()=>area.scrollIntoView({behavior:"smooth"}),300);}
}
window.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("pycode_paid")==="true"){
    const area=document.getElementById("downloadArea");
    if(area) area.classList.add("show");
  }
});
