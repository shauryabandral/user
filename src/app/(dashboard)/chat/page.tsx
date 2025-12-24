
import { ChatInterface } from "@/components/features/ChatInterface"

export default function ChatPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">AI Career Coach</h1>
                <p className="text-muted-foreground">Get instant feedback on your resume, skills, and career path.</p>
            </div>
            <ChatInterface />
        </div>
    )
}
