
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlayCircle, DollarSign } from "lucide-react"
import { MotionPage, MotionList, MotionItem, MotionCardWrapper } from "@/components/ui/motion-primitives"

export default function LearnEarnPage() {
    return (
        <MotionPage className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Learn & Earn Hub</h1>
                <p className="text-muted-foreground">Up-skill with free courses or complete verified micro-tasks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Learning Section */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <PlayCircle className="text-white" /> Skill Tracks
                        </h2>
                        <Button variant="link">View All</Button>
                    </div>

                    <MotionList className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <MotionItem key={i}>
                                <MotionCardWrapper>
                                    <Card className="glass-card hover:bg-white/5 transition-colors cursor-pointer">
                                        <CardContent className="p-4 flex gap-4">
                                            <div className="w-24 h-24 rounded-lg bg-zinc-800 flex-shrink-0 flex items-center justify-center">
                                                <span className="text-2xl">⚛️</span>
                                            </div>
                                            <div className="flex-1 py-1">
                                                <h3 className="font-semibold mb-1">React.js Fundamentals</h3>
                                                <p className="text-sm text-muted-foreground mb-2">Master the basics of components and state.</p>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary" className="text-xs">40 Hours</Badge>
                                                    <Badge variant="outline" className="text-xs">+15% Eligibility</Badge>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </MotionCardWrapper>
                            </MotionItem>
                        ))}
                    </MotionList>
                </section>

                {/* Earning Section */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <DollarSign className="text-white" /> Micro-Earning
                        </h2>
                        <Button variant="link">View All</Button>
                    </div>

                    <MotionList className="space-y-4">
                        {[1, 2].map(i => (
                            <MotionItem key={i}>
                                <MotionCardWrapper>
                                    <Card className="glass-card border-l-4 border-l-white hover:bg-white/5 transition-colors cursor-pointer">
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold">UX Research Survey</h3>
                                                <Badge variant="verified">Verified</Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3">Complete a 15-min survey about your job search experience.</p>
                                            <div className="flex justify-between items-center">
                                                <span className="font-bold text-lg text-white">₹ 500</span>
                                                <Button size="sm" variant="outline">Start Task</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </MotionCardWrapper>
                            </MotionItem>
                        ))}
                    </MotionList>
                </section>
            </div>
        </MotionPage>
    )
}
