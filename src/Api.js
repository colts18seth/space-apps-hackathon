import axios from 'axios';

class Api {
    static async getAllResources() {
        let res = await axios('https://space-app-api.herokuapp.com/api/resources');
        return res;
    }

    static async addResource(data) {
        await axios.post('https://space-app-api.herokuapp.com/api/resources', data);
        return
    }
}

export default Api;