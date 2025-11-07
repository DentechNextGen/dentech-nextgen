"use client"

interface YouTubeVideoProps {
  videoId: string
  className?: string
}

export default function YouTubeVideo({ videoId, className = "" }: YouTubeVideoProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full h-0 pb-[56.25%]">
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl ring-1 ring-white/20 bg-black/50 cursor-pointer group"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            const clickedElement = e.currentTarget;
            const iframe = document.createElement('iframe');
            iframe.src = embedUrl;
            iframe.className = "absolute top-0 left-0 w-full h-full rounded-xl";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            
            if (clickedElement.parentNode) {
              clickedElement.parentNode.replaceChild(iframe, clickedElement);
            }
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <img
            src={thumbnailUrl}
            alt="Video thumbnail" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

