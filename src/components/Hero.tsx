import illustration from "../assets/illustration-intro.png";

const Hero = () => {
  return (
    <div className="bg-primary bg-mobile bg-bottom bg-no-repeat px-9 pb-28 text-center md:bg-desktop md:pb-[11rem]">
      <div className="md:mx-auto md:max-w-[45.75rem]">
        <div className="my-12 flex justify-center md:mt-[4.25rem]">
          <img
            src={illustration}
            alt="illustration"
            className="w-[80%] md:w-full"
          />
        </div>

        <div className="space-y-6 md:space-y-7">
          <h1 className="font-Raleway text-2xl font-bold md:text-4xl md:leading-snug">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="mb-10 md:px-24 md:text-lg">
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
