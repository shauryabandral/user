
import Link from "next/link"
import { LayoutDashboard, Briefcase, UserCircle, BookOpen, Settings, LogOut, Bell } from "lucide-react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-background overflow-hidden font-sans">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 border-r border-border/40 bg-card/30 backdrop-blur-xl">
                <div className="p-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-white text-xl">L</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight">LinkOrc</span>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <NavLink href="/feed" icon={LayoutDashboard}>Opportunity Feed</NavLink>
                    <NavLink href="/applications" icon={Briefcase}>My Applications</NavLink>
                    <NavLink href="/learn" icon={BookOpen}>Learn & Earn</NavLink>
                    <NavLink href="/profile" icon={UserCircle}>My Profile</NavLink>
                    <NavLink href="/settings" icon={Settings}>Settings</NavLink>
                </nav>

                <div className="p-4 border-t border-border/40">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                            AR
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium truncate">Alex Rivera</p>
                            <p className="text-xs text-muted-foreground truncate">alex@linkorc.com</p>
                        </div>
                        <button className="text-muted-foreground hover:text-white">
                            <LogOut size={16} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {/* Mobile Header / Top Bar */}
                <header className="h-16 border-b border-border/40 flex items-center justify-between px-6 bg-background/50 backdrop-blur-md z-10">
                    <div className="md:hidden font-bold">LinkOrc</div>
                    <div className="ml-auto flex items-center gap-4">
                        <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
                            <Bell size={20} className="text-muted-foreground" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                    {children}
                </div>
            </main>
        </div>
    )
}

function NavLink({ href, icon: Icon, children }: { href: string, icon: React.ElementType, children: React.ReactNode }) {
    return (
        <Link href={href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-all">
            <Icon size={18} />
            {children}
        </Link>
    )
}
