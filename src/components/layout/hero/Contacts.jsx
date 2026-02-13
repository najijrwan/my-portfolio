import { CONTACTS } from '@data';

const CONTACTS_ITEMS = [
    { label: 'EMAIL', value: CONTACTS.email, href: `mailto:${CONTACTS.email}`, },
    { label: 'PHONE', value: CONTACTS.phone, href: `tel:${CONTACTS.phone}`, },
    { label: 'LOCATON', value: CONTACTS.location, href: '/contact', },
]

const Contacts = () => (
    <ul
        className="
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1! gap-4 sm:gap-[20px]
        md:gap-y-[30px] md:gap-x-[15px]"
    >
        {CONTACTS_ITEMS.map((contact, i) => (
            <li
                key={i}
                className='min-w-full flex items-center gap-4'
            >
                <div
                    className='
                    relative z-[10]
                    size-[30px] sm:size-[48px]
                    flex-center
                    text-[16px] sm:text-[18px] text-highlight
                    bg-gradient-onyx rounded-[8px] sm:rounded-[12px] shadow-1
                    before:content-[""] before:absolute before:block before:inset-px before:bg-eerie-1 before:rounded-[inherit]
                    before:-z-10'
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-mail-icon lucide-mail"
                    >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                </div>

                <div className="contact-info xl:max-w-fit">
                    <p className="text-light-gray-70 text-[11px] lg:text-[12px] mb-0.5 tracking-widest">
                        {contact.label}
                    </p>
                    <a
                        href={contact.href}
                        className="
                        block 
                        text-[13px] xl:text-[14px] text-base font-[300] xl:font-[300] truncate"
                    >
                        {contact.value}
                    </a>
                </div>
            </li>
        ))}
    </ul>
)

export default Contacts;