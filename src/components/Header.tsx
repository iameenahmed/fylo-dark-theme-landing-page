import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-10 font-Raleway md:px-20 md:py-[4.75rem]">
      <div>
        <img src={logo} alt="logo" className="w-[60%] md:w-[100%]" />
      </div>
      <nav>
        <ul className="flex gap-4 text-xs md:gap-14 md:text-base">
          <li className="cursor-pointer hover:opacity-70">
            <a href="#">Features</a>
          </li>
          <li className="cursor-pointer hover:opacity-70">
            <a href="#">Team</a>
          </li>
          <li className="cursor-pointer hover:opacity-70">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
