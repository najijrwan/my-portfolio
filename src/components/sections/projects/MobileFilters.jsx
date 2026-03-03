import { CATEGORIES } from "@data";

const MobileFilters = ({
    dropdownOpen,
    setDropdownOpen,
    selectedRole,
    setSelectedRole,
}) => (

    <div className="relative mb-[25px] md:hidden">
        <DropdownBtn
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            selectedRole={selectedRole}
        />

        <DropdownList
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            setSelectedRole={setSelectedRole}
        />
    </div>
)

export default MobileFilters;

const DropdownBtn = ({ dropdownOpen, setDropdownOpen, selectedRole, }) => (
    <button
        onClick={() => setDropdownOpen(prev => !prev)}
        className="
            w-full py-[12px] px-[16px]
            flex justify-between items-center
            text-light-gray text-[14px] font-[300]
            bg-eerie-2 border border-solid border-jet rounded-[14px]"
    >
        <span>{CATEGORIES.find(c => c.value === selectedRole)?.label || "All"}</span>

        <ion-icon
            name="chevron-down"
            aria-label='chevron down'
            className={`
                visible! transform transition-transform duration-300
                ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
        />
    </button>
)

export const DropdownList = ({ setDropdownOpen, dropdownOpen, setSelectedRole, }) => (
    <ul
        role="listbox"
        className={`
            absolute top-full z-20
            w-full p-[6px] mt-2
            bg-eerie-2 border border-solid border-jet rounded-[14px]
            dropdown-transition
            ${dropdownOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
    >
        {CATEGORIES.map((cat) => (
            <li key={cat.id}>
                <button
                    role="option"
                    className="
                        bg-eerie-2
                        w-full px-2.5 py-2
                        text-[15px] text-left text-light-gray font-[300] rounded-[8px]
                        hover:bg-jet"
                    onClick={() => {
                        setSelectedRole(cat.value);
                        setDropdownOpen(false);
                    }}
                >
                    {cat.label}
                </button>
            </li>
        ))}
    </ul>
)