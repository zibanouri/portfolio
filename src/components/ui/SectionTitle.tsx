import React from 'react';

interface SectionTitleProps {
    text: string;
    theme: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16">
                <h2 className="text-4xl text-left pb-2 md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent dark:text-slate-600 dark:hover:text-slate-200">
                    {text}
                </h2>
            </div>
        </div>
    )
}

export default SectionTitle;