import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <>
      <ul className="flex justify-center gap-4 lg:justify-end">
        <li className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white">
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
          >
            <FaTwitter />
          </a>
        </li>
        <li className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </>
  );
};
export default SocialLinks;
