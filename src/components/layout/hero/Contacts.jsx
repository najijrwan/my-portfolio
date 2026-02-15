import { CONTACTS } from '@data';

const CONTACTS_ITEMS = [
    { label: 'EMAIL', value: CONTACTS.email, href: `mailto:${CONTACTS.email}`, icon: 'mail-outline'},
    { label: 'PHONE', value: CONTACTS.phone, href: `tel:${CONTACTS.phone}`, icon: 'call-outline' },
    { label: 'LOCATON', value: CONTACTS.location, href: '/contact', icon: 'location-outline'},
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
                        bg-gradient-onyx rounded-[8px] sm:rounded-[12px] shadow-1
                        before:content-[""] before:absolute before:block before:inset-px before:bg-eerie-1
                        before:rounded-[inherit] before:-z-10'
                >
                    <ion-icon
                        name={contact.icon}
                        className='size-4 sm:size-4.5 text-highlight [--ionicon-stroke-width:2.5rem]'></ion-icon>
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