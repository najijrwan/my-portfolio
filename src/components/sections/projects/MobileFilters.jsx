import { CATEGORIES } from "@data";

const MobileFilters = ({
    dropdownOpen,
    setDropdownOpen,
    selectedCategory,
    setSelectedCategory,
}) => (

    <div className="relative mb-[25px] md:hidden">
        <DropdownBtn
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            selectedCategory={selectedCategory}
        />

        <DropdownList
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            setSelectedCategory={setSelectedCategory}
        />
    </div>
)

export default MobileFilters;

const DropdownBtn = ({ dropdownOpen, setDropdownOpen, selectedCategory, }) => (
    <button
        onClick={() => setDropdownOpen(prev => !prev)}
        className="
            w-full py-[12px] px-[16px]
            flex justify-between items-center
            text-light-gray text-[14px] font-[300]
            bg-eerie-2 border border-solid border-jet rounded-[14px]"
    >
        <span>{CATEGORIES.find(c => c.value === selectedCategory)?.label ?? "All"}</span>

        <ion-icon
            name="chevron-down"
            aria-label='chevron down'
            className={`
                visible! transform transition-transform duration-300
                ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
        />
    </button>
)

export const DropdownList = ({ setDropdownOpen, dropdownOpen, setSelectedCategory, }) => (
    <ul
        className={`
            absolute top-full z-20
            w-full p-[6px] mt-2
            bg-eerie-2 border border-solid border-jet rounded-[14px]
            dropdown-transition
            ${dropdownOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
    >
        {CATEGORIES.map(({ label, value }) => (
            <li key={value}>
                <button
                    className="
                        bg-eerie-2
                        w-full px-2.5 py-2
                        text-[15px] text-left text-light-gray font-[300] rounded-[8px]
                        hover:bg-jet"
                    onClick={() => {
                        setSelectedCategory(value);
                        setDropdownOpen(false);
                    }}
                >
                    {label}
                </button>
            </li>
        ))}
    </ul>
)