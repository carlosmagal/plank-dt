/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import Header from "./components/Header";
import Chat from "./components/Chat";
import Input from "./components/Input";

import ChatApiServiceFactory from "./service";
import { ChatResponse } from "./service/types";

import "react-loading-skeleton/dist/skeleton.css";

const api = ChatApiServiceFactory.createChatApiService();

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatResponse[]>([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleSendMessage = async (text: string) => {
    try {
      setLoading(true);
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: text, refusal: "", role: "user" },
      ]);
      const response = await api.sendMessage(text);

      setMessages((prevMessages) => [...prevMessages, response]);
    } catch (error: any) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          content: error.response.data,
          refusal: "",
          role: "assistant",
          type: "error",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen" data-theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Chat messages={messages} loading={loading} theme={theme} />
      <Input onSendMessage={handleSendMessage} disableSubmit={loading} />
    </div>
  );
}

export default App;
