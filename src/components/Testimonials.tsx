import Testimonial from "../components/Testimonial";
import testimonial from "../data/testimonials.json";

const Testimonials = () => {
  return (
    <div className="mx-auto grid max-w-[22rem] gap-x-10 gap-y-8 bg-quote bg-no-repeat px-2 pt-8 md:mb-20 md:pt-8 lg:max-w-[73.75rem] lg:grid-cols-3">
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
