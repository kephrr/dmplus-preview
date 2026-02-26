import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook,
  Mail, 
  Phone, 
  MapPin,
  ArrowUpRight
} from "lucide-react";
import { subsidiaries } from "@/data/subsidiaries";
import logo from "@/assets/LOGOTYPE DM+ Group WHITE-21.png";
import patternWavyDark from '@/assets/big-wavy-pattern-dark.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative p-10 text-white overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${patternWavyDark})` }}
      />
      
      {/* Color overlay */}
      <div className="absolute inset-0 bg-slate-900 opacity-80" />
      
      {/* Main Footer */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Brand Column */}
          <div className="space-y-6 text-sm">
            <div className="flex items-center gap-3">
               <a href="/">
                    <img src={logo} alt="DM+ Group" className="h-10 w-auto" />
                </a>
            </div>
            <p className="text-white/70 leading-relaxed">
              L'Excellence Multi-Domaine. Un groupe innovant fédérant 8 entités 
              spécialisées pour des solutions complètes et intégrées.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/digital-mind-plus-group/?viewAsMember=true" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575339630057" },
                
              ].map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Nos Filiales */}
          <div>
            <h4 className="font-montserrat font-semibold text-white text-lg mb-6">
              Nos Entités
            </h4>
            <ul className="space-y-3 text-sm">
              {subsidiaries.map((sub) => (
                <li key={sub.id}>
                  <Link
                    to={`/maintenance`}
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {sub.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold text-white text-lg mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="mailto:services@dmplus-group.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  services@dmplus-group.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+221766638220"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +221 76 663 82 20
                </a>
              </li><li>
                <a
                  href="tel:+221+221338295806"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                 +221 33 829 58 06
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Medina Rue 37x24<br />
                  Dakar, Sénégal
                </span>
              </li>
            </ul>
          </div>
        
            {/* Google Maps Integration */}
          <div className="relative z-10 col-span-2">
            <div className="container min-w-xl">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1039.6442470533395!2d-17.450114548817172!3d14.68666234025674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1771949623785!5m2!1sfr!2ssn"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  
                  title="DM+ Group Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} DM+ Group. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/mentions-legales" className="text-white/60 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="text-white/60 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
        
    </footer>
  );
};

export default Footer;
