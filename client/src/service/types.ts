export interface IChatService {
  sendMessage(url: string): Promise<ChatResponse>;
}

export interface ChatResponse {
  role: string;
  content: string;
  refusal: string;
  type?: string;
}
