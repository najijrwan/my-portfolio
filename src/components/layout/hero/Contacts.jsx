import { CONTACTS } from '@data';
import { IconBox } from '@ui';

const CONTACTS_ITEMS = [
    { label: 'EMAIL', value: CONTACTS.email, href: `mailto:${CONTACTS.email}`, icon: 'mail-outline' },
    { label: 'PHONE', value: CONTACTS.phone, href: `tel:${CONTACTS.phone}`, icon: 'call-outline' },
    { label: 'LOCATION', value: CONTACTS.location, href: '/contact', icon: 'location-outline' },
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
                <IconBox iconName={contact.icon} />

                <div className="contact-info xl:max-w-fit">
                    <p className="text-light-gray-70 text-[11px] lg:text-[12px] mb-0.5 tracking-widest">
                        {contact.label}
                    </p>
                    <a
                        href={contact.href}
                        className="
                            block 
                            text-[13px] xl:text-[14px] text-main font-[300] xl:font-[300] truncate"
                    >
                        {contact.value}
                    </a>
                </div>
            </li>
        ))}
    </ul>
)

export default Contacts;