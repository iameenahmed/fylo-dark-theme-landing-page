import logo from "../assets/logo.svg";
import SocialLinks from "./SocialLinks";
import PageLinks from "./PageLinks";
import CompanyDetails from "./CompanyDetails";

const Footer = () => {
  return (
    <footer className="bg-footer px-7 pb-12 pt-[12.5rem] md:pb-20 md:pl-[7.5rem] md:pr-14">
      <div className="mb-8">
        <img src={logo} alt="logo" />
      </div>
      <div className="lg:flex lg:gap-0">
        <CompanyDetails />
        <div className="flex flex-col gap-y-12 md:basis-1/4 md:flex-row md:gap-28 lg:justify-end lg:gap-24">
          <PageLinks />
        </div>
        <div className="mt-8 md:row-span-2 lg:mt-0 lg:basis-1/4">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
