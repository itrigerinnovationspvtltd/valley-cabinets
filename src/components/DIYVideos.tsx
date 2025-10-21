import Image from 'next/image';

const videos = [
  {
    title: 'Base Cabinet Assembly',
    description: 'Step-by-step guide to assembling your base cabinets',
    thumbnail: '/Web Images/ivory-shaker/ivory-4.jpg',
    duration: '10:30',
    views: '8.5K'
  },
  {
    title: 'Wall Cabinet Installation',
    description: 'Learn how to securely install wall cabinets',
    thumbnail: '/Web Images/chateau-blanc/chateau-4.jpg',
    duration: '12:45',
    views: '6.2K'
  },
  {
    title: 'Drawer Box Construction',
    description: 'Detailed instructions for building sturdy drawer boxes',
    thumbnail: '/Web Images/pebble-beach/K3-C-3.jpg',
    duration: '15:20',
    views: '12.1K'
  }
];

export default function DIYVideos() {
  return (
    <section id="samples" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#172128] mb-6">
            DIY Assembly Videos
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Learn how to assemble our cabinets with instructional videos. These videos cover everything from what tools you need to get started to each step of putting your cabinet together.
            Save money and gain satisfaction by doing it yourself
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={225}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent flex items-center justify-center">
                  <button className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white p-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-slate-500/25">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-slate-800/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {video.duration}
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                  {video.views} views
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#172128] mb-4">{video.title}</h3>
                <p className="text-slate-600 leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
