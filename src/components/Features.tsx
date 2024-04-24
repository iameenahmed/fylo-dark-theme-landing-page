import Feature from "../components/Feature";
import features from "../data/features.json";

const Features = () => {
  return (
    <div className="mx-auto grid place-content-center gap-x-28 gap-y-20 px-7 md:max-w-[55rem] md:grid-cols-2 md:grid-rows-2 md:px-0">
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
