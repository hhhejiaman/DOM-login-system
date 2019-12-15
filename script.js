function login() {
  var loginName = document.getElementById("loginaccount");
  var loginPassword = document.getElementById("password");
  if (loginName.value == "123" && loginPassword.value == "123") {
    alert("成功登录");
  } else {
    password.value = "";
  }

}