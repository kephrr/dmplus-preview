import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { subsidiaries } from "@/data/subsidiaries";
import { cn } from "@/lib/utils";
import logo from "@/assets/LOGOTYPE DM+ Group WHITE-21.png";
import logo2 from "@/assets/LOGOTYPE [Récupéré]-02.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubsidiariesOpen, setIsSubsidiariesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2); // Remove '/#'
      scrollToSection(sectionId);
    }
  };

  const navItems = [
    { label: "Qui sommes-nous ?", href: "/#aboutus"},
    { label: "Nos Expertises", href: "/#expertises"},
    { label: "Nos valeurs", href: "/#ourvalues"},
    { label: "Nos entités", href: "/#entites", hasDropdown: true }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-5",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
              {isScrolled 
                ? <a href="/">
                    <img src={logo2} alt="DM+ Group" className="h-10 w-auto" />
                  </a>
                : <a href="/">
                    <img src={logo} alt="DM+ Group" className="h-10 w-auto" />
                  </a>
                }

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsSubsidiariesOpen(true)}
                    onMouseLeave={() => setIsSubsidiariesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                        isScrolled
                          ? "text-foreground hover:bg-muted"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isSubsidiariesOpen && "rotate-180"
                      )} />
                    </button>

                    <AnimatePresence>
                      {isSubsidiariesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-0 mt-2 w-80 ${isScrolled ? 'bg-white' : 'bg-white/5'} backdrop-blur-md 
                          rounded-xl shadow-2xl overflow-hidden transition-all duration-200`}
                        >
                          <div className="px-2 py-3">
                            {subsidiaries.map((sub) => {
                              const Icon = sub.icon;
                              return (
                                <Link
                                  key={sub.id}
                                  to={`/filiale/${sub.slug}`}
                                  className={`flex items-center gap-3 p-1 rounded-xl 
                                  hover:bg-white/5 transition-all duration-200 ${isScrolled ? 'text-black' : 'text-white'}`}
                                >
                                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                                    <Icon className="w-5 h-5 8" />
                                  </div>
                                  <div>
                                    <div className="font-medium transition-colors">
                                      {sub.shortName}
                                    </div>
                                    <div className="text-xs line-clamp-1">
                                      {sub.services[0]}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm",
                      isScrolled
                        ? "text-foreground hover:bg-muted"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={cn(
                "px-6 py-3 rounded-3xl transition-all duration-300",
                isScrolled
                  ? "bg-gradient-to-tr from-primary to-primary-light text-white"
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setIsSubsidiariesOpen(!isSubsidiariesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors"
                        >
                          {item.label}
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            isSubsidiariesOpen && "rotate-180"
                          )} />
                        </button>
                        <AnimatePresence>
                          {isSubsidiariesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {subsidiaries.map((sub) => {
                                const Icon = sub.icon;
                                return (
                                  <Link
                                    key={sub.id}
                                    to={`/filiale/${sub.slug}`}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                                  >
                                    <div className={cn(
                                      "w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br",
                                      sub.gradientClass
                                    )}>
                                      <Icon className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm font-medium">{sub.shortName}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          handleNavClick(item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block w-full px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors text-left"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground text-center font-semibold mt-4"
                >
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
