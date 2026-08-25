import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const SUGGESTED_QUESTIONS = [
  "What are Vaishali's top skills?",
  "Tell me about her experience",
  "What projects has she built?",
  "Is she open to opportunities?",
];

const CHAT_API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/chat`
  : "http://localhost:8080/api/chat";

const TypingIndicator = () => (
  <div className="flex gap-1 items-center px-4 py-3 bg-[#1d1836] rounded-2xl rounded-tl-none w-fit">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 bg-[#915EFF] rounded-full animate-bounce"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Vaishali's AI assistant 👋 Ask me anything about her skills, experience, or projects.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async (text, isSuggested = false) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;

    setInput("");
    setHasError(false);
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);

    // Suggested questions: AI is temporarily unavailable — show coming soon
    if (isSuggested) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "🚧 This feature is currently under construction. I'll be fully operational soon! In the meantime, feel free to use the contact form to reach Vaishali directly.",
          },
        ]);
      }, 600);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          history: messages.slice(-6),
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setHasError(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "🚧 The AI assistant is currently under construction. Please check back soon or use the contact form to get in touch with Vaishali!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const showSuggestions = messages.length <= 1;

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-[#915EFF]/30"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="bg-[#915EFF] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <FaRobot className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Vaishali's Assistant</p>
                  <p className="text-white/70 text-[11px]">Ask me anything</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-[#0d0d1a]" style={{ minHeight: "300px", maxHeight: "360px" }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#915EFF] text-white rounded-tr-none"
                        : "bg-[#1d1836] text-[#aaa6c3] rounded-tl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <TypingIndicator />
                </div>
              )}

              {/* Suggested questions */}
              {showSuggestions && !loading && (
                <div className="flex flex-col gap-2 mt-2">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q, true)}
                      className="text-left text-[12px] text-[#915EFF] border border-[#915EFF]/30 rounded-xl px-3 py-2 hover:bg-[#915EFF]/10 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="bg-[#1d1836] border-t border-[#915EFF]/20 px-3 py-3 flex gap-2 items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask something..."
                rows={1}
                className="flex-1 bg-[#0d0d1a] text-white text-sm rounded-xl px-3 py-2 resize-none outline-none border border-[#915EFF]/20 focus:border-[#915EFF]/60 transition-colors placeholder-[#555] max-h-24"
                style={{ lineHeight: "1.5" }}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                className="w-9 h-9 rounded-xl bg-[#915EFF] flex items-center justify-center hover:bg-[#7a4fdd] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-white text-xs" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bubble */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#915EFF] flex items-center justify-center shadow-lg hover:bg-[#7a4fdd] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <FaTimes className="text-white text-xl" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <FaRobot className="text-white text-xl" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute w-full h-full rounded-full bg-[#915EFF] animate-ping opacity-30" />
        )}
      </motion.button>
    </>
  );
};

export default ChatBot;
