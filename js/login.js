import {

loginUser,
registerUser

}

from "./auth.js";

document
.getElementById("login")
.onclick = async()=>{

await loginUser(

email.value,

password.value

);

location.href="index.html";

};

document
.getElementById("register")
.onclick = async()=>{


await registerUser(

email.value,

password.value

);

alert(

"Check email confirmation"

);
};
