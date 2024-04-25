const PageLinks = () => {
  const companyInfoLinks = ["About Us", "Jobs", "Press", "Blog"];
  const customerServiceLinks = ["Contact Us", "Terms", "Privacy"];
  return (
    <>
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
    </>
  );
};
export default PageLinks;
