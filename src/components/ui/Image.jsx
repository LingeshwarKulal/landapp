import { useState } from 'react'

const imageMap = {
  // Hero images
  'hero-main': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
  'hero-land': 'https://images.unsplash.com/photo-1581922814484-0b48460b7010?auto=format&fit=crop&q=80&w=2000',
  'hero-infrastructure': 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2000',
  'hero-industries': 'https://images.unsplash.com/photo-1565939574797-ef63be555f91?auto=format&fit=crop&q=80&w=2000',
  
  // Feature images
  'feature-infrastructure': 'https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&q=80&w=1500',
  'feature-logistics': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1500',
  'feature-manufacturing': 'https://images.unsplash.com/photo-1565939574797-ef63be555f91?auto=format&fit=crop&q=80&w=1500',
  
  // Gallery images
  'gallery-aerial1': 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1500',
  'gallery-aerial2': 'https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&q=80&w=1500',
  'gallery-infrastructure1': 'https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&q=80&w=1500',
  'gallery-infrastructure2': 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=1500',
  'gallery-facilities1': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1500',
  'gallery-facilities2': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1500',
  
  // About page images
  'about-team': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1500',
  'about-facility': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1500',
  
  // Location images
  'location-map': 'https://images.unsplash.com/photo-1553290322-e4e8f12eb11e?auto=format&fit=crop&q=80&w=1500',
  'location-aerial': 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&q=80&w=1500',
  'industrial-corridor': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
  'logistics-hub': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1500',
  'social-infrastructure': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1500',
  
  // Infrastructure images
  'power-substation': 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1500',
  'water-system': 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=1500',
  'security-system': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1500',
  
  // Sustainability images
  'sustainable-design': 'https://images.unsplash.com/photo-1509391618207-32f1fa11a939?auto=format&fit=crop&q=80&w=1500',
  'water-management': 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=1500',
  'renewable-energy': 'https://images.unsplash.com/photo-1509390874189-d4cc0991dd3d?auto=format&fit=crop&q=80&w=1500',
  
  // Industries images
  'ecommerce-center': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1500',
  'auto-manufacturing': 'https://images.unsplash.com/photo-1565939574797-ef63be555f91?auto=format&fit=crop&q=80&w=1500',
  
  // Lease models images
  'capital-efficiency': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1500',
  'operational-flexibility': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1500',
  
  // Virtual tour images
  'tour-entrance': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1500',
  'tour-roads': 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=1500',
  'tour-utilities': 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=1500',
  
  // Team images
  'team-ceo': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1500',
  'team-coo': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1500',
  'team-cto': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1500',
  
  // Certification images
  'certifications-ec': 'https://images.unsplash.com/photo-1509391618207-32f1fa11a939?auto=format&fit=crop&q=80&w=1500',
  'certifications-midc': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1500',
  
  // Video thumbnails
  'video-aerial': 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&q=80&w=1500',
}

const videoMap = {
  'aerial-drone': 'https://player.vimeo.com/external/482371114.sd.mp4?s=dd321c4420fc754e22e94c7c3f05d547ac4567c4&profile_id=164&oauth2_token_id=57447761',
  'facility-tour': 'https://player.vimeo.com/external/371839234.sd.mp4?s=6298c55ada8ef3b6f4c5a63f357e31e72b7d147b&profile_id=164&oauth2_token_id=57447761',
}

export function Image({ src, alt, className = '', ...props }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const imageSrc = imageMap[src] || src

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
        {...props}
      />
      
      {isLoading && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-400">Image not found</span>
        </div>
      )}
    </div>
  )
}

export function Video({ src, poster, title, className = '', ...props }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const videoSrc = videoMap[src] || src
  const posterSrc = imageMap[poster] || poster

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        poster={posterSrc}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoadedData={() => setIsLoading(false)}
        onError={() => setError(true)}
        controls
        {...props}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {isLoading && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-400">Video not found</span>
        </div>
      )}
    </div>
  )
} 