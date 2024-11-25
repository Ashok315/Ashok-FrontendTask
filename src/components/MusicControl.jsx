import React, {useState} from 'react'

const MusicControl = () => {
   
  const [currentTime, setCurrentTime] = useState(150); // Default current time (in seconds)
  const [duration, setDuration] = useState(300); // Total duration of the song (in seconds)
  const [volume, setVolume] = useState(50); // Default volume (0 to 100)

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className='hidden  lg:flex flex-col lg:flex-row items-center justify-center gap-7'>
        <div className='flex items-center justify-center gap-2'>
             <div className='rounded-md'><img src="/albumpic.png" alt="" /></div>
             <div>
                <p className='font-semibold'>Kesariya</p>
                <p className='text-xs'>Pritam</p>
             </div>
        </div>

        <div className='flex gap-5 items-center justify-center'>
            <button><img src="/public/shuffleIcon.svg" alt="" /></button>
            <button><img src="/public/prePlayIcon.svg" alt="" /></button>
            <button><img src="/public/pauseIcon.svg" alt="" /></button>
            <button><img src="/public/nextPlayIcon.svg" alt="" /></button>
            <button><img src="/public/repeatIcon.svg" alt="" /></button>
        </div>

         {/* Progress Bar */}
        <div className="justify-center">
            
            <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={(e) => setCurrentTime(parseInt(e.target.value, 10))}
                className="lg:w-[35vw] lg:max-w-[60vw] xl:w-[45vw] xl:max-w-[80vw] h-1 mt-1 rounded-lg appearance-none bg-gray-300 cursor-pointer"
            />

            <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
            </div>
        </div>

        <div className='flex gap-5 items-center justify-center'>
            <button><img src="/public/listingIcon.svg" alt="" /></button>
            <button><img src="/public/currentListIcon.svg" alt="" /></button>
            <button><img src="/public/devicesIcon.svg" alt="" /></button>

            <button className='ml-4'><img src="/public/speakerIcon.svg" alt="" /></button>
        
            {/* volume control */}
            <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value, 10))}
                className="lg:w-[10vw] h-1 rounded-lg appearance-none bg-gray-300 cursor-pointer"
            />

        </div>

    </div>
    
  )
}

export default MusicControl;