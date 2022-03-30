

const sing_up_form = document.getElementById('sing_up_form');

const msg         = document.querySelector('.msg');

const button      = document.querySelector('#test');

// console.log(button);

button.onclick    = () => {

 setTimeout(function (){
    msg.innerHTML =`<p class="alert alert-danger">callBack Function<button class="close" data-dismiss="alert">&times;</button></p>`;
 },2000);

};





sing_up_form.onsubmit = (e) => {

   e.preventDefault();

   let name  = sing_up_form.querySelector('input[placeholder="Name"]');
   let email = sing_up_form.querySelector('input[placeholder= "Email"]');
   let select = sing_up_form.querySelector('select');

   let gender = sing_up_form.querySelector('input[type="radio"]:checked');
   let skill  = sing_up_form.querySelectorAll('input[type="checkbox"]:checked')

for (let i = 0; i < skill.length; i++) {
   console.log(skill[i].value);
    
}


   if (name.value == '' || email.value == '' || select == '' || gender.value == '' || skill.value == '') {
       msg.innerHTML=validate('All Fields are required','danger');
   }else{
       msg.innerHTML=validate('Data Stable', 'success');
   }

   name.value   = '';
   email.value  = '';
   select.value = '';

   setTimeout(function () {
      msg.innerHTML ='';
   },2500);

};