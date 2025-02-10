function showSignin() {
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("signin-container").style.display = "block";
    document.getElementById("forgot-password-container").style.display =
      "none";
  }
  function showSignup() {
    document.getElementById("signin-container").style.display = "none";
    document.getElementById("signup-container").style.display = "block";
    document.getElementById("forgot-password-container").style.display =
      "none";
  }
  function showForgotPassword() {
    document.getElementById("signin-container").style.display = "none";
    document.getElementById("forgot-password-container").style.display =
      "block";
  }