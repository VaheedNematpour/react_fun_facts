import { IoLogoReact } from "react-icons/io5";

interface Props {
  dark: boolean;
  facts: string[];
}

const Main = ({ dark, facts }: Props) => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1
        className={`text-5xl font-black ${
          dark ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Fun facts about React
      </h1>

      <div className="flex space-x-4">
        <ul className="list-disc marker:text-sky-400 px-10 py-8 flex flex-col space-y-4 max-w-lg">
          {facts.map((f) => (
            <li
              key={f}
              className={`text-xl font-semibold ${
                dark ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {f}
            </li>
          ))}
        </ul>
        <div className={`text-zinc-500`}>
          <IoLogoReact size={260} />
        </div>
      </div>
    </div>
  );
};

export default Main;
