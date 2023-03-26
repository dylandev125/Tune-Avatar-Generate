import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="bg-[#009688] w-full py-[15px] sm:px-[100px] px-[20px] h-[80px] flex justify-between items-center">
      <p className="text-[#ffffff] text-3xl font-bold drop-shadow-[0px_16px_16px_rgba(0,0,0,0.9)] w-fit">
        Create your avatar!
      </p>

      <div className="flex gap-x-4 text-white text-lg font-semibold">
        <Link className={`transition-all hover:border-b-2 hover:border-[#FFFFFF] border-[#009688] ${location.pathname === '/tune' ? "border-b-2 border-white" : ""}`} to={"/tune"}>Tune</Link>
        <Link className={`transition-all hover:border-b-2 hover:border-[#FFFFFF] border-[#009688] ${location.pathname === '/prompt' ? "border-b-2 border-white" : ""}`} to={"/prompt"}>Prompt</Link>
      </div>
    </div>
  );
};

export default Header;
