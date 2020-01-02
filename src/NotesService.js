import axios from 'axios';

const url = "http://localhost:8082/api/notes/1";

class NotesService{
    
static updateNotes(req)
    
    {
        return axios.put(url,req);
    }

}
export default NotesService;