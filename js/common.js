(function() {
  const token = localStorage.getItem('token')

  const dropupLogin = document.getElementById('dropup-content_l');
  const userAvatar = document.getElementById('user-avatar');

  if (token) {
    dropupLogin.style.display = "none";
    userAvatar.style.display = "block";
  } else {
    dropupLogin.style.display = "block";
    userAvatar.style.display = "none";
  }
})()