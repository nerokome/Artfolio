import { Star, Heart } from 'lucide-react'
import React from 'react'

type Artwork = {
  id: number
  title: string
  imageUrl: string
  views: number
  likes: number
  favorites: number
}

interface GalleryProps {
  artworks: Artwork[]
}

const Page = () => {
  const artworks: Artwork[] = [
    {
      id: 1,
      title: 'Vibrant Sunset Over Mountains',
      imageUrl: '/art.jpg',
      views: 245,
      likes: 42,
      favorites: 42,  
    },
    {
      id: 2,
      title: 'Serene Ocean Cliff at Dusk',

      imageUrl: '/fotos.jpg',
      views: 189,
      likes: 31,
      favorites: 31,
    },
    {
      id: 1,
      title: 'Vibrant Sunset Over Mountains',
      imageUrl: '/art.jpg',
      views: 245,
      likes: 42,
      favorites: 42,  
    },
   {
      id: 2,
      title: 'Serene Ocean Cliff at Dusk',
      imageUrl: '/fotos.jpg',
      views: 189,
      likes: 31,
      favorites: 31,
    },
  ]

  return (
    <div className='bg-neutral-700  min-h-screen '>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
      {artworks.map((art) => (
        <div
          key={art.id}
          className="bg-neutral-900 hover:shadow-xl hover:border-l-4 hover:border-cyan-400 
 rounded-xl overflow-hidden shadow-lg transition cursor-pointer"
        >
          <img
            src={art.imageUrl}
            alt={art.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4 space-y-2">
            <h3 className="text-white text-sm font-semibold truncate">
              {art.title}
            </h3>

            <p className="text-xs text-neutral-400">{art.views} Views</p>

            <div className="flex items-center gap-3 text-neutral-400 text-xs mt-1">
              <div className="flex items-center gap-1">
                <Heart size={14} />
                {art.likes}
              </div>

              <div className="flex items-center gap-1">
                <Star size={14} />
                {art.favorites}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Page
