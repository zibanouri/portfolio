import { Linkedin, Mail, Github, Instagram } from 'lucide-react';
import { translations, type Language } from './lib/translate';

interface FooterProps {
    theme: string;
    lang: Language;
}

const Footer: React.FC<FooterProps> = ({ theme, lang }) => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {
            name: 'Email',
            href: 'mailto:zn.zibanouri@gmail.com',
            icon: Mail,
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/ziba_n.r',
            icon: Instagram,
        },
        {
            name: 'GitHub',
            href: 'https://github.com/zibanouri',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ziba-nouri/',
            icon: Linkedin,
        },
    ];

    return (
        <footer
            className={`py-12 px-4 border-t border-gray-500/30 bg-gradient-to-br from-${theme}-100 via-${theme}-50 dark:from-${theme}-800 dark:via-${theme}-900 dark:to-${theme}-800 backdrop-blur-sm`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <div
                            className={`text-2xl font-bold text-slate-800 dark:text-slate-200`}
                        >
                            Ziba Nouri
                        </div>
                        <p
                            className={`text-${theme}-600 dark:text-${theme}-400 text-sm`}
                        >
                            {translations[lang].footer.tagline}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-black/5"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    <IconComponent size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-500/30 text-center">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                        © {currentYear} Ziba Nouri.{' '}
                        {translations[lang].footer.rights}{' '}
                        <a
                            href="https://github.com/zibanouri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-800 hover:underline dark:text-slate-200 transition-all duration-300 font-medium"
                        >
                            ✨Ziba
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
