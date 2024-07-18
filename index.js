// pages/index.js
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">Explore Your True Design</h1>
        <Image src="/explore.jpg" alt="Explore" width={600} height={400} className="mx-auto" />
      </div>
      <div className="text-center py-20">
        <h2 className="text-4xl font-bold mb-6">Premium Casual Wear</h2>
        <Image src="/premium.jpg" alt="Premium" width={600} height={400} className="mx-auto" />
      </div>
    </div>
  )
}
