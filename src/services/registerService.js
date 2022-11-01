import axios from "axios";

export const registerapi=(registerobj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",registerobj)
    console.log("Register in process")
    return response;
}