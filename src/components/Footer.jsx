export default function Footer() {
  return (
    <footer className="w-full bg-green-800 text-gray-300">
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        
        {/* Organization Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Nigerian Diaspora Tennis Development Forum LCC
          </h2>
          <p className="text-sm leading-relaxed">
            Promoting and developing tennis across Nigeria by supporting
            players, organizing tournaments, and building the next generation
            of champions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Tournaments</a></li>
            <li><a href="#" className="hover:text-yellow-400">Players</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Programs</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Youth Development</a></li>
            <li><a href="#" className="hover:text-yellow-400">Coaching Programs</a></li>
            <li><a href="#" className="hover:text-yellow-400">National Tournaments</a></li>
            <li><a href="" className="hover:text-yellow-400">Sponsorship</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: juliussunday909@gmail.com</li>
            <li>Phone: +1 862-576-4553</li>
            <li>Texas, USA</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="https://web.facebook.com/julisky06" className="hover:text-yellow-400">Facebook</a>
            <a href="https://www.instagram.com/AdelekeTennisAcademy" className="hover:text-yellow-400">Instagram</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center text-sm py-4">
        © {new Date().getFullYear()} Lawn Tennis Association of Nigeria. All rights reserved.
      </div>

    </footer>
  );
}