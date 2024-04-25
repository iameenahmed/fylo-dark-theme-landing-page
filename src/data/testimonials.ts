import satishImage from "/src/assets/profile-1.jpg";
import bruceImage from "/src/assets/profile-2.jpg";
import ivaImage from "/src/assets/profile-3.jpg";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Satish Patel",
    position: "Founder & CEO, Huddle",
    image: satishImage,
    testimonial:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    id: 2,
    name: "Bruce McKenzie",
    position: "Founder & CEO, Huddle",
    image: bruceImage,
    testimonial:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    id: 3,
    name: "Iva Boyd",
    position: "Founder & CEO, Huddle",
    image: ivaImage,
    testimonial:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
];

export default testimonials;
