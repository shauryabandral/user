
# LinkOrc - The Intelligent Career OS

LinkOrc is a production-grade career platform for the modern job seeker. It features AI-driven eligibility matching, verified opportunities only, and a dignity-first user experience.

## Getting Started

### Prerequisites
- Node.js 18+
- SQLite (built-in via Prisma)

### Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Database Setup**
    Initialize the SQLite database and generate the Prisma Client.
    ```bash
    npx prisma db push
    ```

3.  **Seed Data**
    Populate the database with the "Alex" user profile and verified jobs.
    ```bash
    npx tsx prisma/seed.ts
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

5.  **Access the App**
    Open [http://localhost:3000](http://localhost:3000).

## Features Implemented

-   **User Authenticated Flow**: Mocked as "Alex Rivera" for instant access.
-   **Opportunity Feed**: Real-time filtering and sorting.
-   **AI Engine**: Calculates % eligibility and generates up-skilling plans.
-   **Profile System**: Strength score visualization.
-   **Career Coach**: "Coach Orc" chat interface.
-   **Safe Micro-Earning**: Intro to verified tasks.

## Security Note
This prototype uses a local SQLite file. For production deployment, switch the Prisma provider to PostgreSQL (e.g. Supabase) and enable standard Authentication middleware.
