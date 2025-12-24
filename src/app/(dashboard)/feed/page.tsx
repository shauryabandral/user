import { prisma } from "@/lib/db"
import { calculateEligibility } from "@/lib/ai-engine"
import { OpportunityCard } from "@/components/features/OpportunityCard"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MotionPage, MotionList, MotionItem } from "@/components/ui/motion-primitives"

export default async function FeedPage() {
    // 1. Authenticate User (Mocked for Prototype)
    const user = await prisma.user.findUnique({
        where: { email: "alex@linkorc.com" },
        include: { profile: true }
    })

    // Fallback if seed not run
    if (!user || !user.profile) {
        return <div className="p-10">Please run seed script: npx prisma db seed</div>
    }

    // 2. Fetch Opportunities
    const opportunities = await prisma.opportunity.findMany({
        orderBy: { postedAt: 'desc' }
    })

    // 3. AI Matching Logic
    const userSkills: string[] = JSON.parse(user.profile.skills || "[]")

    const matchedOpportunities = opportunities.map((opp) => {
        const jobSkills: string[] = JSON.parse(opp.skillsRequired || "[]")
        const matchResult = calculateEligibility(userSkills, jobSkills)
        return { ...opp, matchResult }
    })

    // Sort by match score (Personalized Ranking)
    // @ts-ignore
    matchedOpportunities.sort((a, b) => b.matchResult.score - a.matchResult.score)



    return (
        <MotionPage className="space-y-8 pb-20">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-end">
                {/* ... (keep existing header content) */}
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Opportunity Feed</h1>
                    <p className="text-muted-foreground">
                        We found <span className="text-primary font-bold">{matchedOpportunities.length}</span> verified roles matching your profile.
                    </p>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search roles, skills, or companies..." className="pl-10 bg-card border-white/10" />
                    </div>
                    <Button variant="outline" size="icon" className="bg-card border-white/10">
                        <Filter size={18} />
                    </Button>
                </div>
            </div>

            {/* Grid */}
            <MotionList className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {matchedOpportunities.map((item) => (
                    <MotionItem key={item.id}>
                        <OpportunityCard
                            opportunity={item}
                            match={item.matchResult}
                        />
                    </MotionItem>
                ))}
            </MotionList>
        </MotionPage>
    )
}
