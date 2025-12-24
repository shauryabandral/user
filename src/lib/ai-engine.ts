
export interface MatchResult {
    score: number; // 0-100
    missingSkills: string[];
    matchedSkills: string[];
    readinessLabel: string;
    actionPlan: string[];
}

export function calculateEligibility(userSkills: string[], jobSkills: string[]): MatchResult {
    if (!jobSkills.length) return {
        score: 100,
        missingSkills: [],
        matchedSkills: [],
        readinessLabel: 'Ready to Apply',
        actionPlan: ['Apply immediately!']
    };

    const normalizedUserSkills = userSkills.map(s => s.toLowerCase().trim());
    const normalizedJobSkills = jobSkills.map(s => s.toLowerCase().trim());

    const matched = normalizedJobSkills.filter(skill => normalizedUserSkills.includes(skill));
    const missing = normalizedJobSkills.filter(skill => !normalizedUserSkills.includes(skill));

    const score = Math.round((matched.length / normalizedJobSkills.length) * 100);

    let readinessLabel = 'Not Ready';
    if (score >= 90) readinessLabel = 'Excellent Match';
    else if (score >= 70) readinessLabel = 'Good Match';
    else if (score >= 50) readinessLabel = 'Potential Match';

    // Generate simple "AI" action plan
    const actionPlan = missing.map(skill => `Learn ${skill} (Est. 5 hours)`);
    if (score < 100) {
        actionPlan.push('Update your portfolio with relevant projects.');
    }

    return {
        score,
        missingSkills: missing,
        matchedSkills: matched,
        readinessLabel,
        actionPlan: actionPlan.slice(0, 3) // Top 3 actions
    };
}
