import locationIcon from "../assets/icon-location.svg";
import phoneIcon from "../assets/icon-phone.svg";
import emailIcon from "../assets/icon-email.svg";

const CompanyDetails = () => {
  return (
    <div className="mb-20 grid items-start gap-y-4 md:basis-2/4 md:grid-cols-3 md:grid-rows-2 md:gap-y-0">
      <div className="flex items-start gap-4 md:col-span-2 md:row-span-2">
        <img src={locationIcon} alt="location icon" className="mt-1.5" />
        <p className="md:pr-20">
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
  );
};
export default CompanyDetails;
