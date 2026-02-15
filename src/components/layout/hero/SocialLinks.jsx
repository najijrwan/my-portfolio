import { SOCIAL_LINKS } from "@data";

const SOCIAL_LINKS_ITEMS = [
    { link: SOCIAL_LINKS.linkedin, Icon: 'logo-linkedin', alt: 'LinkedIn' },
    { link: SOCIAL_LINKS.github, Icon: 'logo-github', alt: 'GitHub', },
    { link: SOCIAL_LINKS.instagram, Icon: 'logo-instagram', alt: 'Instagram' },
];

const SocialLinks = () => (
    <div
        className="
            pb-[4px] pl-[7px]
            flex items-center justify-start xl:justify-center gap-4"
    >
        {SOCIAL_LINKS_ITEMS.map(({ link, Icon, alt }, i) => (
            <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
            >
                <ion-icon
                    name={Icon}
                    aria-label={alt}
                    className={`
                        text-light-gray hover:invert-50
                        ${Icon === 'logo-github' ? 'size-4.5' : 'size-4'}`}
                >
                </ion-icon>
            </a>
        ))}

    </div>
);

export default SocialLinks;