import illustration from "/src/assets/illustration-stay-productive.png";
import arrow from "/src/assets/icon-arrow.svg";

const StayProductive = () => {
  return (
    <div className="my-20 grid items-center gap-12 p-7 md:my-[8.5rem] md:gap-14 md:px-[6.5rem] lg:grid-cols-2">
      <div>
        <img
          src={illustration}
          alt="illustration"
          className="mx-auto w-[70%] lg:w-[100%]"
        />
      </div>
      <div className="space-y-4 md:space-y-6">
        <h2 className="font-Raleway text-lg font-bold md:text-3xl md:leading-snug lg:text-[2.5rem]">
          <span className="lg:block">Stay productive,</span> wherever you are
        </h2>
        <p className="flex flex-col gap-y-6 md:text-base">
          <span>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </span>
          <span>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </span>
        </p>
        <div className="inline-flex cursor-pointer items-center gap-x-1 border-b border-teal-500 pb-1 text-cyan hover:opacity-70">
          <a href="#">See how Fylo works</a>
          <img src={arrow} alt="arrow icon" />
        </div>
      </div>
    </div>
  );
};
export default StayProductive;
