import Axios from "axios"
const instance = Axios.create({
    baseURL: 'http://localhost:5001/clone-20dfb/us-central1/api'
});
export default instance;