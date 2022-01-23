const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const user = {
      userEmail: email.value,
      userPassword: password.value,
    };

    console.log(user);
  }

  if (email.value !== "" && password.value !== "") {
    event.currentTarget.reset();
  }
}
