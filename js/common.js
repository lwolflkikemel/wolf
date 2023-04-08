(function() {
  const token = localStorage.getItem('token')

  if (token) {
    const dropupLogin = document.getElementById('dropup-content_l');
    dropupLogin.style.display = "none";

    const userAvatar = document.getElementById('user-avatar');
    userAvatar.style.display = "block";
  } else {
    const dropupLogin = document.getElementById('dropup-content_l');
    dropupLogin.style.display = "block";

    const userAvatar = document.getElementById('user-avatar');
    userAvatar.style.display = "none";
  }
})()