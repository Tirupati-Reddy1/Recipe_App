import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

let signupform = document.getElementById("signup");
let signinform = document.getElementById("signin");
let forgot = document.getElementById("forgot");
let alrd = document.getElementById("alrd");
let dhac = document.getElementById("dhac");
let guestmode=document.getElementById("btn_guest")

dhac.addEventListener("click", () => {
  signinform.style.display = "none";
  dhac.style.display = "none";
  signupform.style.display = "inline-block";
  alrd.style.display = "inline-block";
});
alrd.addEventListener("click", () => {
  signupform.style.display = "none";
  alrd.style.display = "none";
  signinform.style.display = "inline-block";
  dhac.style.display = "inline-block";
});

guestmode.addEventListener("click",()=>{
    location.assign("home.html");
})

signinform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let email = e.target[0].value;
  let password = e.target[1].value;
  signInWithEmailAndPassword(auth, email, password).then((x)=>{
    if(x.user){
        alert("Signed In Succesfully");
        location.assign("home.html")
    }
  }).catch((e)=>{console.log(e),alert("You Dont Have Account Please Register")})

})
signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((x) => {
      if (x.user) {
        alert("Successfully Registered");
        signupform.style.display = "none";
        alrd.style.display = "none";
        signinform.style.display = "inline-block";
        dhac.style.display = "inline-block";
      }
    })
    .catch((e) => {
      console.log(e), alert("Something Went Wrong");
    });
});




