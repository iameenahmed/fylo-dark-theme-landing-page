import Feature from "../components/Feature";
import features from "../data/features.json";

const Features = () => {
  return (
    <div className="mx-auto grid place-content-center px-7 md:grid-cols-2 md:grid-rows-2 md:gap-12 md:px-10 lg:max-w-[55rem] lg:gap-x-28 lg:gap-y-20 lg:px-0">
      {features.map(({ id, icon, title, description }) => {
        return (
          <Feature
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default Features;
