import axios from 'axios';
class SearchAPI {

  static async searchThuTuc(query: any, page: number) {
    const urlAPI = 'https://apis.trolyphapluat.ai/search-nlp';
    const requestBody = {
      query: query,
      limit: 20,
      page: page
    };

    try {
      const response = await axios.post(urlAPI, requestBody);
      
      return response.data;
    } catch (error) {
      console.error('API searchThuTuc error:', error);
      throw error;
    }
  }
}

export default SearchAPI;