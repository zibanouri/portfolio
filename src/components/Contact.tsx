import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { translations, type Language } from './lib/translate';

interface ContactProps {
    theme: string;
    lang: Language;
}

const Contact: React.FC<ContactProps> = ({ theme, lang }) => {
    const socials = [
        {
            URL: 'mailto:zn.zibanouri@gmail.com',
            icon: Mail,
            title: 'Email',
            displayURL: 'zn.zibanouri@gmail.com',
        },
        {
            URL: 'https://github.com/zibanouri',
            icon: Github,
            title: 'GitHub',
            displayURL: 'github.com/zibanouri',
        },
        {
            URL: 'https://www.linkedin.com/in/ziba-nouri/',
            icon: Linkedin,
            title: 'LinkedIn',
            displayURL: 'linkedin.com/in/ziba-nouri',
        },
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section
            id={translations[lang].navbar.title[4]}
            className={`py-20 px-4 bg-gradient-to-br from-${theme}-100 via-${theme}-50 dark:from-${theme}-800 dark:via-${theme}-900 dark:to-${theme}-800`}
        >
            <div className="max-w-6xl mx-auto">
                <SectionTitle
                    text={translations[lang].hero.touch}
                    theme={theme}
                />

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3
                            className={`text-2xl font-semibold mb-8 text-${theme}-700 dark:text-${theme}-400`}
                        >
                            {translations[lang].hero.lets}
                        </h3>
                        <div className="space-y-6">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.title}
                                        href={social.URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center p-4 rounded-lg border border-${theme}-400/20 hover:border-${theme}-400/80 transition-all duration-300 group bg-white/10 dark:bg-slate-800/40 backdrop-blur-sm`}
                                    >
                                        <Icon className="w-6 h-6 text-slate-600 dark:text-slate-300 mr-4 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <div className="font-medium text-slate-700 dark:text-slate-200">
                                                {social.title}
                                            </div>
                                            <div
                                                className={`text-sm text-slate-600 dark:text-slate-400`}
                                            >
                                                {social.displayURL}
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-3">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300"
                                >
                                    {translations[lang].hero.lets}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your name"
                                    className={`w-full p-2 border border-slate-600 rounded-lg 
                                      focus:ring-2 focus:ring-slate-50 focus:ring-offset-2 focus:border-transparent
                                      transition-all duration-300 resize-none
                                      dark:bg-slate-800/60 dark:text-slate-100`}
                                />
                            </div>

                            <div className="mt-3">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300"
                                >
                                    {translations[lang].form.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="your email@example.com"
                                    className={`w-full p-2 border border-slate-600 rounded-lg 
                                      focus:ring-2 focus:ring-slate-50 focus:ring-offset-2 focus:border-transparent
                                      transition-all duration-300 resize-none
                                      dark:bg-slate-800/60 dark:text-slate-100`}
                                />
                            </div>

                            <div className="mt-3">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300"
                                >
                                    {translations[lang].form.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={8}
                                    placeholder="Tell Me About Your Project..."
                                    className={`w-full p-2 border border-slate-600 rounded-lg 
                                      focus:ring-2 focus:ring-slate-50 focus:ring-offset-2 focus:border-transparent
                                      transition-all duration-300 resize-none
                                      dark:bg-slate-800/60 dark:text-slate-100`}
                                />
                            </div>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className={`w-full py-3 bg-gradient-to-r from-${theme}-500 to-${theme}-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${theme}-300`}
                                >
                                    {translations[lang].form.send}
                                </button>
                            </div>
                        </form>

                        {isSubmitted && (
                            <div
                                id="toast-success"
                                className="show-notification flex items-center w-full max-w-xs p-4 mb-4 text-slate-500 bg-white rounded-lg shadow-sm dark:text-slate-200 dark:bg-slate-800"
                                role="alert"
                            >
                                <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-emerald-500 bg-emerald-100 rounded-lg dark:bg-emerald-800 dark:text-emerald-200">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="sr-only">Check icon</span>
                                </div>
                                <div className="ms-3 text-sm font-normal">
                                    {translations[lang].form.success}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
