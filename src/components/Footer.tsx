import logo from "../assets/logo.svg";
import locationIcon from "../assets/icon-location.svg";
import phoneIcon from "../assets/icon-phone.svg";
import emailIcon from "../assets/icon-email.svg";

const Footer = () => {
  const companyInfoLinks = ["About Us", "Jobs", "Press", "Blog"];
  const customerServiceLinks = ["Contact Us", "Terms", "Privacy"];

  return (
    <footer className="bg-footer px-7 pb-12 pt-[12.5rem] md:pb-20 md:pl-[7.5rem] md:pr-14">
      <div className="mb-8">
        <img src={logo} alt="logo" />
      </div>
      <div className="lg:flex lg:gap-8">
        <div className="mb-20 grid items-start gap-y-4 md:basis-2/4 md:grid-cols-3 md:grid-rows-2 md:gap-y-0">
          <div className="flex items-start gap-4 md:col-span-2 md:row-span-2">
            <img src={locationIcon} alt="location icon" className="mt-1.5" />
            <p className="md:pr-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img src={phoneIcon} alt="phone icon" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={emailIcon} alt="email icon" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-12 md:basis-1/4 md:flex-row md:gap-28 lg:justify-around lg:gap-0">
          <ul className="space-y-3 md:space-y-5">
            {companyInfoLinks.map((link, index) => {
              return (
                <li key={index} className="cursor-pointer hover:opacity-70">
                  <a href="">{link}</a>
                </li>
              );
            })}
          </ul>
          <ul className="space-y-3 md:space-y-5">
            {customerServiceLinks.map((link, index) => {
              return (
                <li key={index} className="cursor-pointer hover:opacity-70">
                  <a href="">{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-8 md:row-span-2 lg:mt-0 lg:basis-1/4">
          <ul className="flex justify-center gap-4 lg:justify-normal">
            <li className="h-12 w-12 rounded-full border border-white"></li>
            <li className="h-12 w-12 rounded-full border border-white"></li>
            <li className="h-12 w-12 rounded-full border border-white"></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
