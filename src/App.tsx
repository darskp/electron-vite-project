import SeekComponent from "./components/SeekComponent";
import VideoComponent from "./components/VideoComponent";
import video from './assets/facialExpressionVideo.mp4';
import { useEffect, useState } from "react";
import ApiService from "./services/jsonApi";

function App() {
  const [facialExpressionsdata, setFacialExpressionsData] = useState({});
  const [error, setError] = useState('');

  const seekTo = (seconds: number) => {
    console.log('Seeking to', seconds);
  };

  let fetchData = async () => {
    try {
      let jsonData = await ApiService.getData();
      const facialdata = jsonData?.data;
      setFacialExpressionsData(facialdata);
    } catch (error) {
      setError('Something went wrong!');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center space-y-4 justify-around">
      <h1 className="text-4xl font-extrabold text-red-700 mb-2 border-red-500 pb-2 text-center mt-2">
        Video Player with Seeking Functionality
      </h1>
      <VideoComponent videoSrc={video} />
      {error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <SeekComponent tags={facialExpressionsdata} onClick={seekTo} />
      )}
    </div>
  );
}

export default App;
