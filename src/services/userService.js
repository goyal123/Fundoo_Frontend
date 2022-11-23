import axios from "axios";

export const loginapi=(loginobj) => {
    //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",loginobj)
    let response = axios.post("https://localhost:44323/api/User/Login",loginobj)
  
    console.log("login in process")
    console.log(response)
    //window.localStorage.setItem('token',response.data.data);
    return response;
}



