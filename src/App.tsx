import SeekComponent from "./components/SeekComponent"
import VideoComponent from "./components/VideoComponent"
import video from './assets/facialExpressionVideo.mp4'

function App() {
  
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <VideoComponent videoSrc="video" />
      <SeekComponent />
    </div>
  )
}

export default App

// const seekTo = (seconds: number) => {
//   // Your logic to seek the video to the specified seconds
//   console.log('Seeking to', seconds);
// };

// return (
//   <div>
//     <VideoComponent videoSrc="C:\Users\Admin\Desktop\New folder\my-video-player\src\Video from Vinay Patgar" />
//     <SeekComponent tags={Object.keys(videoInfo)} onClick={seekTo} />
//   </div>
// );
