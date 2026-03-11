import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "History", path: "/history" },
    { name: "Hall of Fame", path: "/hall-of-fame" },
    { name: "Tournaments", path: "/tournaments" },
    { name: "Contact", path: "/contact" },
  ];

  // Animation variants for mobile links
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 300 },
    }),
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-lg font-bold text-green-700">Nigeria Tennis</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md transition-colors hover:bg-green-100 ${
                    isActive ? "underline underline-offset-4 decoration-2" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink to="/contact">
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
                Sponsor Now
              </button>
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 font-medium">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md transition-colors hover:bg-green-100 ${
                        isActive ? "underline underline-offset-4 decoration-2" : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                custom={navLinks.length}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <NavLink to="/contact">
                  <button className="bg-green-700 text-white py-2 rounded-lg w-full hover:bg-green-800 transition">
                    Sponsor Nigerian Tennis
                  </button>
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}