import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ChatResponse, IChatService } from "./types";

class ChatApiService implements IChatService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async sendMessage(prompt: string) {
    const response: AxiosResponse<ChatResponse> = await this.axiosInstance.post(
      "/chat",
      { prompt }
    );
    return response.data;
  }
}

export default ChatApiService;
