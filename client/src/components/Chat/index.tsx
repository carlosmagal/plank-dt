import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import Introduction from "../Introduction";

import { ChatResponse } from "../../service/types";

import ErrorIcon from "../../assets/icons/error.svg";

interface Props {
  messages: ChatResponse[];
  loading: boolean;
  theme: string;
}

const Chat = ({ messages, loading, theme }: Props) => {
  const latestMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
      <Introduction />
      {messages.map((message, i) => (
        <div
          key={i}
          ref={i === messages.length - 1 ? latestMessageRef : null}
          className={`p-3 rounded-lg whitespace-pre-wrap chat-box ${
            message.role === "assistant"
              ? "message-bot self-start max-w-2xl"
              : "message-user self-end max-w-4xl"
          }`}
        >
          {message.role === "assistant" ? (
            <div
              className={`flex gap-1  ${
                message?.type === "error" && "text-red-500"
              } `}
            >
              {message?.type === "error" && (
                <img src={ErrorIcon} alt="" className="fill-yellow-500" />
              )}
              <ReactMarkdown
                className="flex flex-col w-full"
                components={{
                  code({ className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");

                    if (!match) {
                      return (
                        <code
                          {...props}
                          className="bg-gray-100 text-red-500 px-1 rounded break-words"
                        >
                          {children}
                        </code>
                      );
                    }

                    return (
                      <SyntaxHighlighter
                        style={coldarkDark}
                        language={match[1]}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    );
                  },
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          ) : (
            message.content
          )}
        </div>
      ))}

      {loading && (
        <div className="max-w-2xl">
          <Skeleton
            count={2}
            height={20}
            baseColor={theme === "light" ? "#e0e0e0" : "#333"}
            highlightColor={theme === "light" ? "#f0f0f0" : "#444"}
          />
        </div>
      )}

      <div id="messages-end" />
    </div>
  );
};

export default Chat;
