import axios from 'axios';

const url = "http://localhost:8081/api/classe/";

class ClasseService{
    static getClasse(grp) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}${grp}`);
                const data = res.data;
                resolve(
                    data.map(classe =>({
                        ...classe
                    }))
                    
                );
            }
            catch(err){
                reject(err);

            }
        })
    }
}
export default ClasseService;