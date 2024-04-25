import illustration from "../assets/illustration-intro.png";

const Hero = () => {
  return (
    <div className="bg-primary bg-mobile bg-bottom bg-no-repeat px-9 pb-28 text-center md:bg-desktop md:pb-[10.375rem]">
      <div className="md:mx-auto md:max-w-[45.75rem]">
        <div className="mb-8 flex justify-center">
          <img
            src={illustration}
            alt="illustration"
            className="w-[80%] md:w-full"
          />
        </div>

        <div className="space-y-6 md:space-y-8">
          <h1 className="font-Raleway text-2xl font-bold md:text-[2.5rem] md:leading-normal">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="mb-9 md:px-16 md:text-xl">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="inline-block rounded-full bg-blue px-16 py-3 font-Raleway font-bold tracking-wider md:px-[5.475rem] md:py-4 md:text-base">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
