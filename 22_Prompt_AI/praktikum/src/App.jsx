import React, { useState, useEffect } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
console.log("API Key:", apiKey);

const genAI = new GoogleGenerativeAI(apiKey || "");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 1000,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export default function Chatbot() {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [aiResponse, setAIResponse] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState("");

  // Define quick prompts
  const quickPrompts = [
    "saya merasa cemas?",
    "Bagaimana cara mengatasi stres?",
    "Apa yang harus dilakukan ketika merasa cemas?",
  ];

  const handleSubmit = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue("");
    setHistory((prev) => [...prev, { user: userMessage }]);
    setDisplayedResponse("");
    setIsTyping(true);
    setAIResponse("");

    try {
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      const prompt = `Berikan respon terkait topik mental health. kamu tidak bisa menjawab pertanyaan yang bukan seputar mental health. Jangan menjawab di luar topik ini. Input pengguna: ${userMessage}`;
      const result = await chatSession.sendMessage(prompt);
      const responseText = await result.response.text();

      setAIResponse(responseText);
    } catch (error) {
      console.error("Error:", error);
      setHistory((prev) => [
        ...prev,
        { user: userMessage, ai: "Terjadi kesalahan saat menghubungi AI." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (aiResponse && isTyping) {
      let index = 0;
      setDisplayedResponse("");
      const intervalId = setInterval(() => {
        if (index < aiResponse.length) {
          setDisplayedResponse((prev) => prev + aiResponse[index]);
          index++;
        } else {
          clearInterval(intervalId);
          setHistory((prev) => [
            ...prev.slice(0, -1),
            { user: prev[prev.length - 1]?.user, ai: aiResponse },
          ]);
          setAIResponse("");
          setIsTyping(false);
        }
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [aiResponse, isTyping]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleStopTyping = () => {
    setIsTyping(false);
    setDisplayedResponse(aiResponse);
    setHistory((prev) => {
      const newHistory = [...prev];
      if (newHistory.length > 0) {
        newHistory[newHistory.length - 1] = {
          user: newHistory[newHistory.length - 1].user,
          ai: displayedResponse,
        };
      }
      return newHistory;
    });
  };

  // Function to handle quick prompt button click
  const handleQuickPromptClick = (prompt) => {
    setInputValue(prompt);
  };

  return (
    <div className="flex flex-col h-screen bg-[#B25B8E] text-white font-sans">
      <div className="text-center w-full mb-6 p-4">
        <h1 className="text-4xl font-bold text-left mb-2">Calm.ai</h1>
      </div>

      <div className="flex flex-col w-full flex-grow overflow-y-auto mb-4 px-4">
        {history.map((item, index) => (
          <div key={index} className="flex flex-col mb-2">
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs shadow-md">
                <strong>User:</strong> {item.user}
              </div>
            </div>
            {item.ai ? (
              <div className="flex justify-start">
                <div className="bg-white text-black rounded-lg px-4 py-2 max-w-xs shadow-md">
                  <strong>Calm.ai:</strong> {item.ai}
                </div>
              </div>
            ) : isTyping && displayedResponse ? (
              <div className="flex justify-start">
                <div className="bg-white text-black rounded-lg px-4 py-2 max-w-xs shadow-md">
                  <strong>Calm.ai:</strong> {displayedResponse}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>



      <div className="flex justify-center px-4 py-4 bg-[#B25B8E]">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Bagaimana saya bisa membantu Anda hari ini? ❤️"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-white text-black rounded-l-full px-6 py-3 shadow-md w-full"
          />
          <button
            onClick={isTyping ? handleStopTyping : handleSubmit}
            className="bg-gray-200 text-black rounded-r-full px-6 py-3 shadow-md"
          >
            {isTyping ? "Stop" : "Submit"}
          </button>
        </div>
      </div>

            {/* Quick Prompts Section */}
            <div className="flex justify-center px-4 mb-4">
        {quickPrompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => handleQuickPromptClick(prompt)}
            className="bg-white text-black rounded-full px-4 py-2 m-1 shadow-md"
          >
            {prompt}
          </button>
        ))}
      </div>
      
    </div>
  );
}
