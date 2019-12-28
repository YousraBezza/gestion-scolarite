import axios from 'axios';

const url = "http://localhost:8080/courss/";

class CoursServ{
    static getClasse() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}`);
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
export default CoursServ;