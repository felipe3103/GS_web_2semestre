import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white flex justify-center space-x-4">
      <FaFacebook />
      <FaInstagram />
      <FaLinkedin />
      <a href="mailto:contato@energialimpa.com">Email</a>
    </footer>
  );
}

export default Footer;