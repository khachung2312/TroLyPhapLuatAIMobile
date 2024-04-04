import axios from 'axios';

class ProcedureAPI {
  static async getProcedureData(maThuTuc: string) {
    const API_URL = `https://apis.trolyphapluat.ai/detail/${maThuTuc}`;
    try {
      const response = await axios.get(API_URL);
      if (response) {
        console.log("success: ");
        return response.data.result;
      } else {
        console.log("get data false!");
      }
    } catch (error) {
      console.log('Error fetching data: ', error);
      throw error;
    }
  }
}

export default ProcedureAPI;