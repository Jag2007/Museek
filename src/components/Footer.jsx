import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 px-6 md:px-20 py-14 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-pink-500 rounded-full p-2">
              <span className="text-white text-xl font-bold">♥</span>
            </div>
            <h2 className="text-white font-bold text-2xl">Museek</h2>
          </div>
          <p className="mb-6 leading-relaxed">
            Discover music tailored to your taste. Your personal soundtrack for
            every moment.
          </p>
          <div className="flex gap-4 text-white text-lg">
            <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />
            <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
            <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-lg">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
            <li className="hover:text-white cursor-pointer">Partnerships</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-lg">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">
              Community Guidelines
            </li>
            <li className="hover:text-white cursor-pointer">Developer API</li>
            <li className="hover:text-white cursor-pointer">Mobile App</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 text-lg">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer">
              Copyright Policy
            </li>
            <li className="hover:text-white cursor-pointer">Cookies</li>
          </ul>
        </div>
      </div>
      <hr className="my-10 border-gray-700" />
      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p>© 2025 MeloMix. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
