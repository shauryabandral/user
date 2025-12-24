import { prisma } from "@/lib/db"
import { Badge } from "@/components/ui/badge"
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, GraduationCap, Award } from "lucide-react"
import { Education } from "@/types"
import { MotionPage, AnimatedProgressBar, MotionList, MotionItem, AnimatedCounter } from "@/components/ui/motion-primitives"

export default async function ProfilePage() {
    const user = await prisma.user.findUnique({
        where: { email: "alex@linkorc.com" },
        include: { profile: true, applications: true }
    })

    if (!user || !user.profile) return <div>User not found</div>

    const skills: string[] = JSON.parse(user.profile.skills || "[]")
    const education: Education[] = JSON.parse(user.profile.education || "[]")
    const strength = user.profile.strength || 0

    return (
        <MotionPage className="max-w-4xl mx-auto space-y-6">

            {/* Profile Header Card */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-purple-800 to-indigo-800 opacity-50" />

                <div className="relative flex flex-col md:flex-row gap-6 mt-12 items-end">
                    <div className="w-32 h-32 rounded-3xl bg-zinc-900 border-4 border-zinc-900 flex items-center justify-center shadow-2xl relative z-10">
                        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">AR</span>
                    </div>

                    <div className="flex-1 mb-2">
                        <h1 className="text-3xl font-bold">{user.name}</h1>
                        <div className="flex items-center gap-4 text-muted-foreground mt-2">
                            <span className="flex items-center gap-1"><MapPin size={16} /> {user.profile.location}</span>
                            <span className="flex items-center gap-1"><Mail size={16} /> {user.email}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground">Profile Strength</span>
                            <span className="text-xl font-bold text-green-400"><AnimatedCounter value={strength} />%</span>
                        </div>
                        <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                            <AnimatedProgressBar value={strength} />
                        </div>
                        <Button size="sm" variant="outline" className="mt-2">Edit Profile</Button>
                    </div>
                </div>
            </div>

            <MotionList className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Skills */}
                <MotionItem className="glass-card col-span-2">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Award className="text-purple-400" /> Verified Skills
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                <Badge key={skill} variant="skill" className="px-3 py-1 text-sm">
                                    {skill}
                                </Badge>
                            ))}
                            <Badge variant="outline" className="px-3 py-1 text-sm border-dashed border-white/20 text-muted-foreground hover:text-white cursor-pointer">
                                + Add Skill
                            </Badge>
                        </div>
                    </CardContent>
                </MotionItem>

                {/* Stats */}
                <MotionItem className="glass-card">
                    <CardHeader>
                        <CardTitle className="text-lg">Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Applications</span>
                            <span className="font-bold"><AnimatedCounter value={user.applications.length} /></span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Views</span>
                            <span className="font-bold"><AnimatedCounter value={124} /></span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Response Rate</span>
                            <span className="font-bold text-green-400"><AnimatedCounter value={12} />%</span>
                        </div>
                    </CardContent>
                </MotionItem>

                {/* Education */}
                <MotionItem className="glass-card col-span-3">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <GraduationCap className="text-blue-400" /> Education
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {education.map((edu, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-white/5 last:border-0 pb-4 last:pb-0 mb-4 last:mb-0">
                                <div>
                                    <p className="font-semibold">{edu.degree} in {edu.field}</p>
                                    <p className="text-sm text-muted-foreground">University of Technology • {edu.year}</p>
                                </div>
                                <Badge variant="secondary">Verified</Badge>
                            </div>
                        ))}
                    </CardContent>
                </MotionItem>

            </MotionList>
        </MotionPage>
    )
}
