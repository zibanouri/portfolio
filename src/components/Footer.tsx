import { Linkedin, Mail, Github, Instagram } from 'lucide-react';

const Footer = () => {
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
        <footer className="py-12 px-4 border-t border-gray-500/30 bg-gradient-to-br from-gray-900 to-slate-800 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <div className="text-2xl font-bold text-gray-100 bg-clip-text mb-2">
                            Ziba Nouri
                        </div>
                        <p className="text-slate-300 text-sm dark:text-slate-600 dark:hover:text-slate-200">
                            Fulfilling a 20-year-old dream with programming
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
                                    className="text-slate-500 hover:text-slate-100 transition-all duration-300 transform transform-gpu hover:scale-110 p-2 rounded-lg hover:bg-black/5"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    <IconComponent size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/30 text-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Ziba Nouri. All Rights Reserved. Made
                        with love by{' '}
                        <a
                            href="https://github.com/zibanouri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-200 hover:underline transition-all duration-300"
                        >
                            Ziba
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
