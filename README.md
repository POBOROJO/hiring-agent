# AI Hiring Agent

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This system is a Next.js-based application designed to streamline candidate recruitment by automating resume parsing, semantic matching, and AI-driven evaluations. It combines resume extraction , vector-based search (RAG) , and Google Gemini API for intelligent candidate ranking and feedback.



## Project Structure

```
├── .env.local
├── app/
│   ├── page.tsx
│   └── api/
│       ├── submit/
│       │   └── route.ts
│       └── evaluate/
│           └── route.ts
├── lib/
│   ├── gemini.ts
│   ├── parser.ts
│   └── pinecone.ts
└── scripts/
    └── init.ts
```
## Getting Started

1. Install dependencies
```bash
npm install
```
2. Start the development server
```bash
npm run dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

To run this project, you need to create a `.env.local` file and add the following environment variables:

```bash
GEMINI_API_KEY=your_google_api_key
PINECONE_API_KEY=your_pinecone_key
PINECONE_INDEX_NAME=candidates
NEXT_PUBLIC_PINECONE_ENVIRONMENT=gcp-starter
```

## Features

- Candidate application form for submitting details and resumes.
- Basic resume parsing to extract skills, experience, and education.
- RAG-based candidate search and evaluation.
- AI-powered candidate ranking and feedback generation.

## Usage

## Usage

- **Candidate Application**: Candidates can submit their details and upload resumes through the application form.

- **Resume Parsing**: The application extracts relevant information from the resumes using pdf-parse.

- **Candidate Evaluation**: Candidate profiles are stored in Pinecone and evaluated using Google Gemini AI. The application generates scores and feedback based on job description relevance.

- **Search and Ranking**: Use the search function to retrieve the most relevant candidates for a job description.
