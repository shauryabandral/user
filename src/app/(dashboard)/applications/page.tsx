import { prisma } from "@/lib/db"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { formatDistance } from "date-fns"
import { MotionPage, MotionList, MotionItem, MotionCardWrapper } from "@/components/ui/motion-primitives"

export default async function ApplicationsPage() {
    const user = await prisma.user.findUnique({
        where: { email: "alex@linkorc.com" },
        include: {
            applications: {
                include: { opportunity: true }
            }
        }
    })

    // Fallback for UI if DB empty
    const applications = user?.applications || []



    return (
        <MotionPage className="space-y-6">
            <h1 className="text-3xl font-bold">My Applications</h1>

            {applications.length === 0 ? (
                <div className="text-center py-20 text-muted-foreground">
                    <p>No applications yet. Start exploring!</p>
                </div>
            ) : (
                <MotionList className="grid gap-4">
                    {applications.map((app: any) => (
                        <MotionItem key={app.id}>
                            <MotionCardWrapper>
                                <Card className="glass-card flex flex-row items-center justify-between p-6">
                                    <div>
                                        <h3 className="font-bold text-lg">{app.opportunity.title}</h3>
                                        <p className="text-muted-foreground">{app.opportunity.company}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Badge variant={app.status === 'Applied' ? 'secondary' : 'default'}>
                                            {app.status}
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">
                                            {formatDistance(new Date(app.createdAt), new Date(), { addSuffix: true })}
                                        </span>
                                    </div>
                                </Card>
                            </MotionCardWrapper>
                        </MotionItem>
                    ))}
                </MotionList>
            )}
        </MotionPage>
    )
}
