interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeaturesProps) => {
  return (
    <div className="flex flex-col justify-center gap-8 text-center">
      <div className="mx-auto">
        <img src={icon} alt="" />
      </div>
      <div>
        <h2 className="mb-2 font-Raleway text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Feature;
