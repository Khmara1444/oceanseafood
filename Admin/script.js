function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "12345") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Невірний логін або пароль";
  }
}
