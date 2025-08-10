// src/app/api/gallery/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock data for now - replace with database when ready
    const mockGalleryItems = [
      {
        id: 1,
        title: "Abstract Digital Art",
        image: "/gallery/artwork1.jpg",
        category: "digital",
        description: "Created with Photoshop and Illustrator",
        featured: true,
        order: 1,
        createdAt: new Date()
      }
    ];

    return NextResponse.json(mockGalleryItems);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    );
  }
}