import { CATEGORIES } from "@data";

const DesktopFilters = ({ selectedCategory, setSelectedCategory }) => (
    <ul className="hidden md:flex gap-2 mb-7.5">
        {CATEGORIES.map(({ label, value }) => (
            <li key={value}>
                <button
                    className={`
                        px-4 py-2 rounded-full custom-transition-1
                        ${selectedCategory === value
                            ? "bg-yellow-crayola text-black"
                            : "bg-eerie-2 text-light-gray hover:text-light-gray-70"
                        }`}
                    onClick={() => setSelectedCategory(value)}
                >
                    {label}
                </button>
            </li>
        ))}
    </ul>
)

export default DesktopFilters;