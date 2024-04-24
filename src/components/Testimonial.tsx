interface TestimonialProps {
  name: string;
  position: string;
  image: string;
  testimonial: string;
}

const Testimonial = ({
  name,
  position,
  image,
  testimonial,
}: TestimonialProps) => {
  return (
    <div className="rounded-lg bg-testimonials p-6">
      <blockquote>
        <p className="text-xs leading-relaxed md:text-[15px]">{testimonial}</p>
        <footer className="mt-4 flex items-center gap-4">
          <img
            src={image}
            alt={`Photo of ${name}`}
            className="h-8 w-8 rounded-full"
          />
          <div className="tracking-wider">
            <cite className="block text-xs font-bold not-italic">{name}</cite>
            <span className="text-[0.625rem] text-gray-100">{position}</span>
          </div>
        </footer>
      </blockquote>
    </div>
  );
};
export default Testimonial;
