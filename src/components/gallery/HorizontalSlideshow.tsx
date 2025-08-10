// components/gallery/HorizontalSlideshow.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Abstract Digital Art",
    image: "/gallery/artwork1.jpg",
    category: "digital",
    description: "Created with Photoshop and Illustrator"
  },
  {
    id: 2,
    title: "UI/UX Design Concept",
    image: "/gallery/design1.jpg",
    category: "design",
    description: "Mobile app interface design"
  },
  {
    id: 3,
    title: "Brand Identity",
    image: "/gallery/brand1.jpg",
    category: "branding",
    description: "Complete brand identity package"
  }
];

export default function HorizontalSlideshow() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Design Gallery</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A curated collection of my design work, digital art, and creative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple modal placeholder */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-lg p-6">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-black text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedImage.title}</h2>
            <p className="text-gray-600">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </>
  );
}