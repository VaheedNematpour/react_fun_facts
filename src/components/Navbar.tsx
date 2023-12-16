import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";

interface Props {
  dark: boolean;
  onDark: () => void;
}

const Navbar = ({ dark, onDark }: Props) => {
  return (
    <div className="max-w-5xl mx-auto mb-8">
      <nav className="flex items-center justify-between">
        <h1
          className={`text-3xl font-bold text-sky-400 flex items-center space-x-1`}
        >
          <IoLogoReact />
          <span>ReactFacts</span>
        </h1>

        <button
          className={`text-3xl ${dark ? "text-gray-100" : "text-gray-900"}`}
          onClick={onDark}
        >
          {dark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
