// src/app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');

    let whereClause = {};
    
    if (category && category !== 'all') {
      whereClause = { ...whereClause, category };
    }
    
    if (featured === 'true') {
      whereClause = { ...whereClause, featured: true };
    }

    const projects = await PrismaClient.project.findMany({
      where: whereClause,
      orderBy: [
        { featured: 'desc' },
        { order: 'asc' },
        { createdAt: 'desc' }
      ]
    });

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}