import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 px-6 md:px-20 py-16 mt-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-20 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 rounded-full p-2">
              <span className="text-white font-bold text-xl">♥</span>
            </div>
            <h2 className="text-white font-bold text-2xl">Museek</h2>
          </div>
          <p className="text-sm">
            Music for every mood. Your personal vibe station.
          </p>
          <div className="flex gap-5 text-white text-lg">
            <FaInstagram className="cursor-pointer hover:text-pink-400" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>

        <FooterColumn
          title="Company"
          links={["About Us", "Careers", "Press", "Partnerships"]}
        />
        <FooterColumn
          title="Resources"
          links={[
            "Help Center",
            "Community Guidelines",
            "Developer API",
            "Mobile App",
          ]}
        />
        <FooterColumn
          title="Legal"
          links={["Privacy Policy", "Terms of Service", "Copyright", "Cookies"]}
        />
      </div>

      <hr className="mb-10 border-gray-700" />

      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p>© 2025 Museek. All rights reserved.</p>
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

function FooterColumn({ title, links }) {
  return (
    <div className="space-y-3">
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
