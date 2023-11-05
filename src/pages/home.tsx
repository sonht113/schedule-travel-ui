import { FaPlane } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-slate-500 w-full h-screen">
      <div className="bg-red-500 w-full h-[100px] relative flex items-center justify-between">
        <div className="w-[50px] h-[50px] rounded-full absolute flex items-center justify-center left-1/2 -translate-x-1/2 top-0 bg-red-500">
          <FaPlane className="rotate-45 text-2xl fill-white" />
        </div>
        <div className="w-1/2 h-full bg-green-400 border-r-4 border-red-500"></div>
        <div className="w-1/2 h-full bg-green-300 border-l-4 border-red-500"></div>
      </div>
      <div className="bg-red-500 w-full h-[150px] relative flex items-center justify-between">
        <div className="w-[50px] h-[50px] rounded-full absolute left-1/2 -translate-x-1/2 top-0 bg-red-500"></div>
        <div className="w-1/2 h-full bg-green-400 border-r-4 border-red-500"></div>
        <div className="w-1/2 h-full bg-green-300 border-l-4 border-red-500"></div>
      </div>
    </div>
  );
};

export default Home;
