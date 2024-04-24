import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 pt-8 font-Raleway md:px-20 md:pt-16">
      <div className="">
        <img src={logo} alt="logo" className="w-[60%]" />
      </div>
      <nav>
        <ul className="flex gap-4 text-xs md:gap-14 md:text-base">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
