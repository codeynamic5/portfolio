// components/gallery/GalleryModal.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useEffect, useCallback } from 'react';

interface GalleryModalProps {
  image: {
    id: number;
    title: string;
    image: string;
    description: string;
    category: string;
  };
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  showNavigation?: boolean;
}

export default function GalleryModal({ 
  image, 
  onClose, 
  onPrevious, 
  onNext, 
  showNavigation = false 
}: GalleryModalProps) {
  
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && onPrevious) onPrevious();
    if (e.key === 'ArrowRight' && onNext) onNext();
  }, [onClose, onPrevious, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyPress]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-5xl max-h-[90vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          {showNavigation && onPrevious && (
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {showNavigation && onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Image Container */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="relative h-[70vh] w-full">
              <Image
                src={image.image}
                alt={image.title}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
            
            {/* Image Info */}
            <div className="p-6 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{image.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                </div>
                
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = image.image;
                    link.download = `${image.title}.jpg`;
                    link.click();
                  }}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}