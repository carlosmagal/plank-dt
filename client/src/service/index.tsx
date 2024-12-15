import ChatApiService from "./service";
import { IChatService } from "./types";

class ChatApiServiceFactory {
  private static BASE_URL = import.meta.env.VITE_API_URL;

  static createChatApiService(): IChatService {
    return new ChatApiService(this.BASE_URL);
  }
}

export default ChatApiServiceFactory;
