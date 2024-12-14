/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import Header from "./components/Header";
import Chat from "./components/Chat";
import Input from "./components/Input";

function App() {
  const [theme, setTheme] = useState("light");
  const [loading] = useState(false);
  const [messages, setMessages] = useState<any>([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleSendMessage = async (text: string) => {
    console.log(text);
    setMessages((prevMessages: any) => [...prevMessages]);

    setTimeout(() => {
      document
        .getElementById("messages-end")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className={`flex flex-col h-screen`} data-theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Chat messages={messages} loading={loading} />
      <Input onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
