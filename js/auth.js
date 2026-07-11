/* ===========================================
   KIVUSTREAM PRO
   AUTH SYSTEM
=========================================== */

import { supabase }

from "./api/supabase.js";

/* ===========================================
   REGISTER
=========================================== */


export async function registerUser(

email,

password

){

const {

data,

error

}= await supabase.auth.signUp({

email,

password

});

if(error){


console.error(

"Register Error:",

error.message

);


return null;
}

return data;
}

/* ===========================================
   LOGIN
=========================================== */


export async function loginUser(

email,

password

){



const {

data,

error

}= await supabase.auth.signInWithPassword({


email,


password


});

if(error){


console.error(

"Login Error:",

error.message

);

return null;

}

return data;

}

/* ===========================================
   LOGOUT
=========================================== */

export async function logoutUser(){

const {

error

}= await supabase.auth.signOut();

if(error){

console.error(

"Logout Error:",

error.message

);
return false;
}

return true;
}
/* ===========================================
   CURRENT USER
=========================================== */


export async function getCurrentUser(){

const {

data

}= await supabase.auth.getUser();

return data.user || null;

}
/* ===========================================
   AUTH LISTENER
=========================================== */

export function watchAuthChanges(

callback

){

supabase.auth.onAuthStateChange(

(event,session)=>{

callback(

event,

session

);
});
}
