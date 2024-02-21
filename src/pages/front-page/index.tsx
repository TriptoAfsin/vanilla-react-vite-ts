import LinkButton from "@/components/Buttons/LinkButton";
import reactLogo from "../../assets/react.svg";
// import LinkButton from "../../components/Buttons/LinkButton";
import viteLogo from "/vite.svg";

function FrontPage() {
  return (
    <div className="flex flex-col justify-center items-center py-5 min-h-screen">
      <div className="flex flex-row justify-center items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-2xl my-5">
        React + TypeScript + Vite + Tailwind CSS + Redux Toolkit
      </h1>
      <LinkButton href="/about" title="About" />
    </div>
  );
}

export default FrontPage;
