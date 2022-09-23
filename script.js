const input_ids = [
  "name",
  "birth_date",
  "email",
  "password",
  "genre",
  "phone",
  "cellphone",
  "smoker",
  "town",
];

window.onload = function () {
  const element = document.querySelector("form");

  element.addEventListener("submit", (event) => {
    event.preventDefault();
    

    fetch('http:localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getFormValues()),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormValues(data);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
};

const setFormValues = (data) => {
  console.log('SetFormValues', data);
  for (let input_id of input_ids) {
    document.getElementById(`persisted_${input_id}`).value =
      data[input_id];
  }
};

const cleanFormValues = () => {
  for (let input_id of input_ids) {
    document.getElementById(input_id).value = "";
  }
};

const cleanPersistedValues = () => {
  for (let input_id of input_ids) {
    document.getElementById(`persisted_${input_id}`).value = "";
  }
  cleanFormValues();
};

const getFormValues = () => {
  let formValues = {}; 

  for (let input_id of input_ids) {
    formValues[input_id] = document.getElementById(input_id).value;
  }

  return formValues;
};
