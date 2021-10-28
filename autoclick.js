function submitform() {
  document.getElementById("sso_login_form_account").value = (Math.random() + 1)
    .toString(36)
    .substring(7);
  document.getElementById("sso_login_form_password").value = (Math.random() + 1)
    .toString(36)
    .substring(7);
  // document.getElementById("login-form").submit();
  document.getElementById("confirm-btn").click();
}
var auto_refresh = setInterval(function () {
  submitform();
}, 100);

//final script
var auto_refresh = setInterval(function () {
  document.getElementById("sso_login_form_account").value = (Math.random() + 1)
    .toString(36)
    .substring(2);
  document.getElementById("sso_login_form_password").value = (Math.random() + 1)
    .toString(36)
    .substring(2);
  // document.getElementById("login-form").submit();
  document.getElementById("confirm-btn").click();
}, 5);

console.log(makeid(10));
