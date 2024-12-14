import LightModeIcon from "../../assets/icons/lightMode.svg";
import DarkModeIcon from "../../assets/icons/darkMode.svg";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ toggleTheme, theme }: Props) => {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-900 text-white shadow">
      <h1 className="text-xl font-bold">
        Code Snippet Refactoring & Explanation Tool
      </h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <img src={DarkModeIcon} alt="" />
        ) : (
          <img src={LightModeIcon} alt="" />
        )}
      </button>
    </div>
  );
};

export default Header;
