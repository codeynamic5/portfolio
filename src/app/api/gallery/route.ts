// src/app/api/gallery/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let whereClause = {};
    if (category && category !== 'all') {
      whereClause = { category };
    }

    const galleryItems = await PrismaClient.galleryItem.findMany({
      where: whereClause,
      orderBy: [
        { featured: 'desc' },
        { order: 'asc' },
        { createdAt: 'desc' }
      ]
    });

    return NextResponse.json(galleryItems);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    );
  }
}