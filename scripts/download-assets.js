import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const imageUrls = {
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
  
  // About page images
  'about-team': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1500',
  'about-facility': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1500',
  
  // Location images
  'location-map': 'https://images.unsplash.com/photo-1553290322-e4e8f12eb11e?auto=format&fit=crop&q=80&w=1500',
  'location-aerial': 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&q=80&w=1500',
  
  // Sustainability images
  'sustainability-solar': 'https://images.unsplash.com/photo-1509391618207-32f1fa11a939?auto=format&fit=crop&q=80&w=1500',
  'sustainability-green': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1500',
}

const videoUrls = {
  'aerial-drone': 'https://player.vimeo.com/external/482371114.sd.mp4?s=dd321c4420fc754e22e94c7c3f05d547ac4567c4&profile_id=164&oauth2_token_id=57447761',
  'facility-tour': 'https://player.vimeo.com/external/371839234.sd.mp4?s=6298c55ada8ef3b6f4c5a63f357e31e72b7d147b&profile_id=164&oauth2_token_id=57447761',
}

// Create directories if they don't exist
const directories = [
  'public/images/hero',
  'public/images/features',
  'public/images/gallery',
  'public/images/about',
  'public/images/location',
  'public/images/sustainability',
  'public/images/videos',
  'public/videos',
]

directories.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir)
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true })
  }
})

// Download function
function downloadFile(url, destination) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination)
    https.get(url, response => {
      response.pipe(file)
      file.on('finish', () => {
        file.close()
        resolve()
      })
    }).on('error', err => {
      fs.unlink(destination, () => {})
      reject(err)
    })
  })
}

// Download images
async function downloadAssets() {
  console.log('Downloading images...')
  for (const [name, url] of Object.entries(imageUrls)) {
    const category = name.split('-')[0]
    const filename = `${name}.jpg`
    const destination = path.join(__dirname, '..', 'public', 'images', category, filename)
    
    console.log(`Downloading ${name}...`)
    try {
      await downloadFile(url, destination)
      console.log(`Downloaded ${name}`)
    } catch (error) {
      console.error(`Error downloading ${name}:`, error)
    }
  }

  console.log('\nDownloading videos...')
  for (const [name, url] of Object.entries(videoUrls)) {
    const filename = `${name}.mp4`
    const destination = path.join(__dirname, '..', 'public', 'videos', filename)
    
    console.log(`Downloading ${name}...`)
    try {
      await downloadFile(url, destination)
      console.log(`Downloaded ${name}`)
    } catch (error) {
      console.error(`Error downloading ${name}:`, error)
    }
  }

  console.log('\nAll assets downloaded!')
}

downloadAssets() 