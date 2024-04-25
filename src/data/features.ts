import accessIcon from "/src/assets/icon-access-anywhere.svg";
import securityIcon from "/src/assets/icon-security.svg";
import collaborationIcon from "/src/assets/icon-collaboration.svg";
import anyFileIcon from "/src/assets/icon-any-file.svg";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: accessIcon,
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    id: 2,
    icon: securityIcon,
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    id: 3,
    icon: collaborationIcon,
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    id: 4,
    icon: anyFileIcon,
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

export default features;
