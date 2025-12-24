
"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
    id: string;
    role: 'user' | 'ai';
    content: string;
}

export function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'ai', content: 'Hi Alex! I am your AI Career Coach. How can I help you improve your profile or find a job today?' }
    ])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input }
        setMessages(prev => [...prev, userMsg])
        setInput('')
        setLoading(true)

        // Simulate AI Delay and specific responses
        setTimeout(() => {
            let responseText = "That's a great question. Based on your profile, I recommend focusing on React testing libraries to increase your match score for the 'Junior React Developer' role."

            if (userMsg.content.toLowerCase().includes('resume')) {
                responseText = "I've analyzed your resume. Your 'Experience' section is strong, but you should quantify your achievements. For example, instead of 'Worked on UI', try 'Improved UI performance by 20%'."
            } else if (userMsg.content.toLowerCase().includes('salary')) {
                responseText = "For a Junior React Developer in Remote/Bangalore, the market rate is currently $30k - $45k USD per year. You are well positioned to ask for $35k."
            }

            setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'ai', content: responseText }])
            setLoading(false)
        }, 1500)
    }



    return (
        <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto glass-card rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Bot size={18} className="text-black" />
                </div>
                <div>
                    <h3 className="font-bold">Coach Orc</h3>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                        <motion.span
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-white"
                        /> Online
                    </p>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                {messages.map(msg => (
                    <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'ai' && (
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                                <Bot size={14} className="text-primary" />
                            </div>
                        )}

                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.role === 'user'
                            ? 'bg-white text-black rounded-br-none'
                            : 'bg-white/10 text-gray-200 rounded-bl-none'
                            }`}>
                            {msg.content}
                        </div>

                        {msg.role === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center mt-1">
                                <User size={14} className="text-gray-300" />
                            </div>
                        )}
                    </div>
                ))}
                {loading && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <Bot size={14} className="text-primary" />
                        </div>
                        <div className="bg-white/10 rounded-2xl px-4 py-3 rounded-bl-none">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
                <div className="flex gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask for career advice..."
                        className="bg-black/20 border-white/10 focus-visible:ring-primary"
                    />
                    <Button size="icon" onClick={handleSend} disabled={loading || !input.trim()}>
                        <Send size={18} />
                    </Button>
                </div>
            </div>
        </div>
    )
}
