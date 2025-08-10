// components/gallery/HorizontalSlideshow.tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import GalleryModal from './GalleryModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const galleryData = [
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
  // Add more artwork
];

export default function HorizontalSlideshow() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Design Gallery</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A curated collection of my design work, digital art, and creative projects. 
              Click on any image to view in full size.
            </p>
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="gallery-swiper"
          >
            {galleryData.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Gallery Modal for full-size view */}
      {selectedImage && (
        <GalleryModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}