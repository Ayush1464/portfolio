import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear} Ayush Mahapatra.</span>
            <span className="hidden md:inline">Made with</span>

            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />

            <span className="hidden md:inline">
              and lots of coffee
            </span>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </div>

        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Designed & Built by Ayush Mahapatra
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </footer>
  );
}