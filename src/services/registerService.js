import axios from "axios";

export const registerapi=(registerobj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",registerobj)
    //let response = axios.post("https://localhost:44323/api/User/Register",registerobj)
    console.log("Register in process")
    console.log(response)
    return response;
}