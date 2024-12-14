/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from "react";
import Introduction from "../Introduction";

interface Props {
  messages: any[];
  loading: boolean;
}

const Chat = ({ messages, loading }: Props) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loading) {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [loading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
      <Introduction />
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-3 rounded-lg max-w-5xl whitespace-pre-wrap ${
            message.sender === "bot"
              ? "message-bot self-start"
              : "message-user self-end"
          }`}
        >
          {message.text}
        </div>
      ))}

      {loading && (
        <div className="self-start">
          <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      <div ref={messagesEndRef} id="messages-end" />
    </div>
  );
};

export default Chat;
