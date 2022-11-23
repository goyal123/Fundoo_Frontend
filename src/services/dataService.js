import axios from 'axios'

const headerconfig = {
    headers : {
        //Authorization : localStorage.getItem('token')
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
}

export const addnoteapi=(noteobj) => {
    console.log("headerconfig = ",headerconfig)
    //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",noteobj,headerconfig)
    let response = axios.post("https://localhost:44323/api/Notes/CreateNote",noteobj,headerconfig)
    console.log(response)
    return response;
}

export const getNoteListApi = () => {
    //let response = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerconfig)
    let response = axios.get("https://localhost:44323/api/Notes/GetNote",headerconfig)
    console.log(response)
    return response;
}

export const addcolorapi=(noteobj) => {
    let colorr=(noteobj.color).replace("#","%23")
    //console.log("colorr = ",colorr)
    //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",noteobj,headerconfig)
    //console.log("noteobj dataservice = ",noteobj)
    //console.log("noteobj dataservice color = ",noteobj.color)
    let response = axios.patch(`https://localhost:44323/api/Notes/UpdateColor?noteId=${noteobj.noteIdList}&color=${colorr}`,noteobj,headerconfig)
    console.log("updatecolor")
    return response;
}

export const archieveapi=(noteobj) => {
    console.log("noteobj in dataservice = ",noteobj)
 //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",noteobj,headerconfig)
 let response = axios.patch(`https://localhost:44323/api/Notes/IsArchieve?noteId=${noteobj}`,noteobj,headerconfig)
 console.log("calling archieve api")
 return response;
}


export const deletenoteapi=(noteobj) => {
    console.log("noteobj in dataservice = ",noteobj)
    let response = axios.patch(`https://localhost:44323/api/Notes/IsTrashed?noteId=${noteobj}`,noteobj,headerconfig)
    console.log("Delete in progress api")
    console.log(response)
    return response;
}


export const updatenoteapi=(noteobj) => {
    console.log("noteobj update = ",noteobj)
    //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",noteobj,headerconfig)
    let response = axios.put(`https://localhost:44323/api/Notes/UpdateNote?noteId=${noteobj.noteId}`,noteobj,headerconfig)
    console.log("updatein progress api")
    return response;
}
