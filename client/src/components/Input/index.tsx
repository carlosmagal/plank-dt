/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";

interface Props {
  onSendMessage: (e: string) => Promise<void>;
  disableSubmit: boolean;
}

const Input = ({ onSendMessage, disableSubmit }: Props) => {
  const textbox = useRef<any>(null);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() && !disableSubmit) {
      onSendMessage(input);
      setInput("");
      textbox.current.style.height = "66px";
      document
        .getElementById("messages-end")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const adjustHeight = () => {
    textbox.current.style.height = "inherit";
    textbox.current.style.height = `${textbox.current.scrollHeight}px`;
  };

  return (
    <div className="flex items-center p-4 border-t">
      <textarea
        ref={textbox}
        placeholder=""
        // rows={5}
        className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none max-h-48"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          adjustHeight();
        }}
        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
      />
      <button
        onClick={handleSend}
        disabled={disableSubmit}
        className="ml-4 px-4 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-900 disabled:bg-gray-500"
      >
        Submit
      </button>
    </div>
  );
};

export default Input;
