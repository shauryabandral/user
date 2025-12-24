
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ShieldCheck, Zap, Globe } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-background to-background overflow-hidden relative">

      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl opacity-50 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl opacity-30" />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 glass border-b-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-xl">L</span>
            </div>
            <span className="font-bold text-xl tracking-tight">LinkOrc</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="gradient">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="z-10 text-center px-4 max-w-4xl pt-20">
        <Badge variant="verified" className="mb-6 px-4 py-1 text-sm bg-green-900/20 border-green-500/30">
          <ShieldCheck className="w-4 h-4 mr-2" />
          Verified Opportunities Only
        </Badge>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Launch Your Career <br /> Without The Noise.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          The intelligent career operating system. Verified jobs, huge upskilling, and a dignity-first matching engine. No ghosting. No scams.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/feed">
            <Button size="lg" variant="gradient" className="w-full sm:w-auto text-lg h-14">
              Explore Opportunities
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button size="lg" variant="glass" className="w-full sm:w-auto text-lg h-14">
              How it works
            </Button>
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left">
          <div className="glass-card p-6 rounded-2xl">
            <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Verified Only</h3>
            <p className="text-sm text-gray-400">Every opportunity is manually verified. Zero scams, strict safety protocols.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <Zap className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">AI Matching</h3>
            <p className="text-sm text-gray-400">See your eligibility score instantly. Know exactly what skills you&apos;re missing.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <Globe className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Global Reach</h3>
            <p className="text-sm text-gray-400">Remote internships, gigs, and full-time roles from around the world.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
