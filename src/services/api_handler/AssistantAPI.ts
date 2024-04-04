import axios from 'axios';

class AssistantAPI {
  static async sendQuestion(conversationId: string, userId: string, messageType: string, content: string, messageStatus: string) {
    const apiUrl = 'https://api.trolyphapluat.ai/message';

    const requestData = {
      conversation_id: conversationId,
      user_id: userId,
      loaiTinNhan: messageType,
      noiDung: content,
      trangThaiTinNhan: messageStatus
    };

    try {
      const response = await axios.post(apiUrl, requestData);
      return response.data;
    } catch (error) {
      console.error('Send question error:', error);
      throw error;
    }
  }
}

export default AssistantAPI;