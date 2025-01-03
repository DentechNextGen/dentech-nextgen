import Image from 'next/image'
import { useState } from 'react'

interface GalleryProps {
  images: string[]
  alt: string
  className?: string
}

export default function Gallery({ images, alt, className = '' }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className={`mx-auto max-w-5xl ${className}`}>
      {/* Main Image */}
      <div className="relative rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
        <Image
          src={`/images/${selectedImage || images[0]}`}
          alt={alt}
          width={1200}
          height={800}
          className="w-full rounded-lg"
          priority
        />
      </div>
      
      {/* Thumbnails */}
      <div className="mt-4 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
              selectedImage === image ? 'border-primary-500 ring-2 ring-primary-500' : 'border-white/10 hover:border-primary-400'
            }`}
          >
            <Image
              src={`/images/${image}`}
              alt={`${alt} Screenshot ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
} 