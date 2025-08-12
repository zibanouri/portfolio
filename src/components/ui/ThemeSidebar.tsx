import { SunMoon, Moon, Palette } from 'lucide-react';

const ThemeSidebar = () => {
    return (
        <div className="fixed top-1/2 -translate-y-1/2 z-40 transition-all duration-300 right-0"
            style={{ transform: 'translateY(-50%)' }}
        >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-400/30 p-4 md:p-6 w-80 max-h-[90vh] overflow-y-auto">
                <div className="flex text-center justify-between">
                    <span className="text-sm font-medium text-slate-800 ">
                        Theme Mode 
                    </span>
                    <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-300">
                        <Moon className="w-4 h-4 text-slate-700" />
                    </button>
                </div>
                 <div>
                    <h3 className="text-sm font-medium mb-3 flex items-center text-slate-700">
                        <Palette className="w-4 h-4 mr-2" />
                        Color Themes
                    </h3>
                </div>

            </div>

        </div>
    )

}


export default ThemeSidebar;