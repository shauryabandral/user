
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button" // Ensure this path is correct
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card" // Ensure this path is correct
import { MatchResult } from "@/lib/ai-engine"
import { Briefcase, MapPin, DollarSign } from "lucide-react"
import { Opportunity } from "@/types"

interface OpportunityCardProps {
    opportunity: Opportunity;
    match: MatchResult;
}

import { MotionCardWrapper, MotionButtonWrapper, AnimatedCounter } from "@/components/ui/motion-primitives"

// ... imports

export function OpportunityCard({ opportunity, match }: OpportunityCardProps) {
    const scoreColor = match.score >= 90 ? "text-green-400" : match.score >= 70 ? "text-yellow-400" : "text-red-400";
    const ringColor = match.score >= 90 ? "border-green-500/50" : match.score >= 70 ? "border-yellow-500/50" : "border-red-500/50";

    return (
        <MotionCardWrapper className="h-full">
            <Card className="glass-card border-none hover:bg-white/5 transition-all group overflow-hidden relative h-full flex flex-col">
                <div className={`absolute top-0 right-0 p-4 z-10`}>
                    <div className={`flex flex-col items-center justify-center w-16 h-16 rounded-full border-4 ${ringColor} bg-background/50 backdrop-blur-md`}>
                        <span className={`text-lg font-bold ${scoreColor}`}><AnimatedCounter value={match.score} />%</span>
                        <span className="text-[10px] text-muted-foreground uppercase">Match</span>
                    </div>
                </div>

                <CardHeader>
                    {/* ... (keep existing header) */}
                    <div className="flex justify-between items-start pr-16">
                        <div>
                            <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">{opportunity.title}</CardTitle>
                            <p className="text-muted-foreground font-medium">{opportunity.company}</p>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4 flex-1">
                    {/* ... (keep existing info chips) */}
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                            <Briefcase size={14} /> {opportunity.type}
                        </div>
                        <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                            <MapPin size={14} /> {opportunity.location}
                        </div>
                        <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                            <DollarSign size={14} /> {opportunity.salary}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Skill Match Analysis</span>
                            <span className={scoreColor}>{match.readinessLabel}</span>
                        </div>

                        {/* Missing Skills Warning */}
                        {match.missingSkills.length > 0 && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-xs">
                                <p className="text-red-300 font-semibold mb-1">Missing Skills to Unlock:</p>
                                <div className="flex flex-wrap gap-1">
                                    {match.missingSkills.map(skill => (
                                        <Badge key={skill} variant="destructive" className="h-5 px-1.5 text-[10px] bg-red-500/20 text-red-300 border-none">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* AI Suggestion */}
                        {match.actionPlan.length > 0 && (
                            <div className="text-xs text-muted-foreground mt-2">
                                <span className="font-semibold text-primary">💡 AI Tip: </span>
                                {match.actionPlan[0]}
                            </div>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="gap-2">
                    <MotionButtonWrapper className="w-full">
                        <Button className="w-full h-11" variant={match.score > 80 ? "gradient" : "secondary"}>
                            {match.score > 80 ? "Apply Now" : "View Details"}
                        </Button>
                    </MotionButtonWrapper>
                    <MotionButtonWrapper>
                        <Button size="icon" variant="glass" className="h-11 w-11">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark"><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
                        </Button>
                    </MotionButtonWrapper>
                </CardFooter>
            </Card>
        </MotionCardWrapper>
    )
}
