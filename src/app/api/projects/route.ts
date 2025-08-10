// src/app/api/projects/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock data for now - replace with database when ready
    const mockProjects = [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A modern portfolio built with Next.js",
        category: "web",
        featured: true,
        order: 1,
        createdAt: new Date()
      }
    ];

    return NextResponse.json(mockProjects);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}