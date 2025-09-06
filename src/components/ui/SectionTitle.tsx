import React from 'react';

interface SectionTitleProps {
    text: string;
    theme: string;
    
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, theme }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16">
                <h2 className={`text-4xl text-left pb-2 md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent dark:text-${theme}-300`}>
                    {text}
                </h2>
            </div>
        </div>
    )
}

export default SectionTitle;