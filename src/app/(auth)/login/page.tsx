
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[-20%] right-[20%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl opacity-30" />

            <Card className="w-full max-w-md glass-card border-white/10">
                <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                        <span className="font-bold text-white text-xl">L</span>
                    </div>
                    <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                    <p className="text-muted-foreground text-sm">Sign in to access your verified opportunities.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Input placeholder="name@example.com" type="email" className="bg-black/20 border-white/10" />
                    </div>
                    <div className="space-y-2">
                        <Input placeholder="Password" type="password" className="bg-black/20 border-white/10" />
                    </div>
                    <Button className="w-full" variant="gradient">Sign In</Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10">
                            Google
                        </Button>
                        <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10">
                            <Github size={16} className="mr-2" /> GitHub
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <p className="text-sm text-muted-foreground">
                        Don&apos;t have an account? <Link href="/signup" className="text-primary hover:underline">Sign up</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
