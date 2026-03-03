import { CATEGORIES } from "@data";

const DesktopFilters = ({ selectedCategory, setSelectedCategory }) => (
    <ul
        role="listbox"
        className="hidden md:flex gap-2 mb-7.5">
        {CATEGORIES.map((cat) => (
            <li key={cat.id}>
                <button
                    role="option"
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`
                        px-4 py-2 rounded-full custom-transition-1
                        ${selectedCategory === cat.value
                            ? "bg-yellow-crayola text-black"
                            : "bg-eerie-2 text-light-gray hover:text-light-gray-70"
                        }
                    `}
                >
                    {cat.label}
                </button>
            </li>
        ))}
    </ul>
)

export default DesktopFilters;