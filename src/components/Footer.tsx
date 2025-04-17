import { Download } from 'lucide-react';

const links = {
  useful: [
    { name: 'Home', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Mission, Vision and Values', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Job Openings', href: '#' },
    { name: 'Culture', href: '#' },
    { name: 'Our Companies', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Valsoft Referral Network', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
  recent: [
    {
      title: 'Valsoft Expands Healthcare Portfolio with the Acquisition of American Data',
      date: 'April 15, 2024',
      href: '#',
    },
    {
      title: 'Valsoft Financial Services Portfolio Strengthened with the Acquisition of Digital Currency Systems',
      date: 'February 20, 2024',
      href: '#',
    },
    {
      title: 'Valsoft Enters the Managed Care Space with the Acquisition of Chereline Health',
      date: 'February 19, 2024',
      href: '#',
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0C2E5B] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">ABOUT US</h3>
            <p className="text-white/80 mb-6">
              Based in Montreal, Canada, Valsoft's focus is to acquire and grow vertical software businesses
              that provide mission-critical solutions in their respective niche or market.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              <Download className="w-5 h-5 mr-2" />
              OUR E-BROCHURE
            </button>
            <div className="mt-8 space-y-2 text-white/80">
              <p>7405 Rte Transcanadienne Suite 100</p>
              <p>Montreal QC H4T 1Z2 Canada</p>
              <p>1-514-316-7647</p>
              <p>info@valsoftcorp.com</p>
            </div>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">USEFUL LINKS</h3>
            <ul className="space-y-3">
              {links.useful.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">RECENT POSTS</h3>
            <div className="space-y-6">
              {links.recent.map((post) => (
                <div key={post.title}>
                  <a
                    href={post.href}
                    className="text-white/80 hover:text-white transition-colors block mb-2"
                  >
                    {post.title}
                  </a>
                  <p className="text-sm text-white/60">{post.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="mt-16 flex justify-center">
          <img
            src="/edelweiss-logo.png"
            alt="Edelweiss"
            className="h-20 w-auto brightness-0 invert opacity-50 hover:opacity-75 transition-opacity duration-300"
          />
        </div>
      </div>
    </footer>
  );
}