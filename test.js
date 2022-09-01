const input_ids = [ 'name', 'birth_date', 'email', 'password','genre','phone','cellphone','smoker','town']

window.onload=function(){
  const element = document.querySelector('form');

  element.addEventListener('submit', event => {
    event.preventDefault();
    setFormValues();
  });
}

const setFormValues = () => { 
  for(let input_id of input_ids){
    document.getElementById(`persisted_${input_id}`).value = document.getElementById(input_id).value;
  }
}

const cleanFormValues = () => {
  for(let input_id of input_ids){
    document.getElementById(input_id).value = '';
  }
}

const cleanPersistedValues = () => {
  for(let input_id of input_ids){
    document.getElementById(`persisted_${input_id}`).value = '';
  }
  cleanFormValues();
}