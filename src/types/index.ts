
export interface Opportunity {
    id: string;
    title: string;
    type: string;
    company: string;
    location: string;
    salary: string | null;
    description: string;
    skillsRequired: string;
    deadline: Date | null;
    postedAt: Date;
}

export interface Education {
    degree: string;
    field: string;
    year: string;
}
