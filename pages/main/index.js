document.getElementById('submit-button').addEventListener('click', authHandler);

function authHandler(event) {

  const loginBtn = document.getElementById('login-button');
  const passwordBtn = document.getElementById('password-button');

  const login = loginBtn.value;
  const password = passwordBtn.value;

  if (login === "" || password === "") {
    alert("ligon or password are empty!!!");
    return
  }


  try {
    const result = authorize(login, password);

    if (result.authorized) { // different behaviours
      localStorage.setItem('token', result.token);

      const dropupLogin = document.getElementById('dropup-content_l');
      dropupLogin.style.display = "none";

      const userAvatar = document.getElementById('user-avatar');
      userAvatar.style.display = "block";
    } else {
      // showModalWindow("you are not auth")
    }
  } catch (e) {
    console.log(e.message);
  }
}

function authorize(login, password) {
  // call API
  // {
  //   ...
  // }


  // prepared a received data


  // return
  return {
    authorized: true,
    token: "token",
  };
}