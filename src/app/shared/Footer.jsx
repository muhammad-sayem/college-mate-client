import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "@/assets/logo2.png"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-sky-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">

        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-semibold text-white">CollegeMate</span>
        </div>

        <div className="flex space-x-4 mb-4 md:mb-0 text-white text-lg">
          <a href="https://www.facebook.com/shahrulislam.sayem/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={25} />
          </a>
          <a href="https://github.com/muhammad-sayem/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} />
          </a>
          <a href="https://www.linkedin.com/in/md-shahrul-islam-sayem/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={25} />
          </a>
          <a href="https://x.com/IslamShahr98540" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={25} />
          </a>
        </div>


        <p className="text-sm text-white">&copy; {new Date().getFullYear()} College Mate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
