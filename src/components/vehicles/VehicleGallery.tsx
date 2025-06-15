'use client';

import { useState } from 'react';
import Image from 'next/image';

interface VehicleGalleryProps {
  images: string[];
  name: string;
}

export default function VehicleGallery({ images, name }: VehicleGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Imagen principal */}
      <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden h-[400px]">
        <Image
          src={images[selectedImage]}
          alt={`${name} - Imagen principal`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden transition-opacity ${
                selectedImage === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={image}
                alt={`${name} - Imagen ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 