import Testimonial from "../components/Testimonial";
import testimonial from "../data/testimonials.json";

const Testimonials = () => {
  return (
    <div className="mx-8 grid gap-x-10 gap-y-8 bg-quote bg-no-repeat pt-8 md:mx-auto md:mb-24 md:max-w-[73.75rem] md:grid-cols-3 md:px-2 md:pt-8">
      {testimonial.map(({ id, name, position, image, testimonial }) => {
        return (
          <Testimonial
            key={id}
            name={name}
            position={position}
            image={image}
            testimonial={testimonial}
          />
        );
      })}
    </div>
  );
};
export default Testimonials;
