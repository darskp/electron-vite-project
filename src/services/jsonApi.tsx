import axios from 'axios';
let BASE_URL = `http://localhost:8000/facialExpressions`;


const ApiService = {
  getData: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
};

export default ApiService;