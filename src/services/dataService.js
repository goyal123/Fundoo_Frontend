import axios from 'axios'

const headerconfig = {
    headers : {
        Authorization : localStorage.getItem('token')
    }
}

export const addnoteapi=(noteobj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",noteobj,headerconfig)
    console.log("login in process")
    return response;
}

export const getNoteListApi = () => {
    let response = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerconfig)
    return response;
}