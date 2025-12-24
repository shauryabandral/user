
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding LinkOrc database...')

    // 1. Create a Test User (Job Seeker)
    // Password will be plain for demo simplicity, in real app hash it.
    await prisma.user.upsert({
        where: { email: 'alex@linkorc.com' },
        update: {},
        create: {
            email: 'alex@linkorc.com',
            name: 'Alex Rivera',
            password: 'password123',
            role: 'user',
            profile: {
                create: {
                    skills: JSON.stringify(['JavaScript', 'React', 'HTML', 'CSS', 'Figma']), // 50% match for some
                    bio: 'Aspiring Frontend Developer with a passion for UI/UX.',
                    location: 'Bangalore, India',
                    education: JSON.stringify([{ degree: 'B.Tech', field: 'CS', year: '2024' }]),
                    strength: 65.0
                }
            }
        },
    })

    // 2. Create Opportunities
    const opportunities = [
        {
            title: 'Junior React Developer',
            type: 'Full-time',
            company: 'TechFlow Solutions',
            location: 'Remote',
            salary: '$30k - $40k / yr',
            description: 'Looking for a junior dev to build responsive interfaces.',
            skillsRequired: JSON.stringify(['React', 'TypeScript', 'Tailwind', 'Git']),
        },
        {
            title: 'UX/UI Design Intern',
            type: 'Internship',
            company: 'Creative Studio',
            location: 'Bangalore',
            salary: 'Paid ($500/mo)',
            description: 'Design beautiful landing pages.',
            skillsRequired: JSON.stringify(['Figma', 'Adobe XD', 'Sketch']),
        },
        {
            title: 'Content Moderator (Gig)',
            type: 'Part-time',
            company: 'SafeNet',
            location: 'Remote',
            salary: '$15/hr',
            description: 'Review user content for safety guidelines.',
            skillsRequired: JSON.stringify(['English', 'Attention to Detail']),
        },
        {
            title: 'Python Backend Fellow',
            type: 'Fellowship',
            company: 'AI Research Lab',
            location: 'Hybrid',
            salary: 'Grant Funded',
            description: 'Work on cutting-edge NLP models.',
            skillsRequired: JSON.stringify(['Python', 'PyTorch', 'FastAPI']),
        },
        {
            title: 'Frontend Apprenticeship',
            type: 'Apprenticeship',
            company: 'WebWiz Academy',
            location: 'Remote',
            salary: 'Stipend',
            description: 'Learn and earn while building real client sites.',
            skillsRequired: JSON.stringify(['HTML', 'CSS', 'JavaScript']),
        }
    ]

    for (const opp of opportunities) {
        await prisma.opportunity.create({
            data: opp
        })
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
