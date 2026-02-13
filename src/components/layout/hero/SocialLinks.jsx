import { SOCIAL_LINKS } from "@data";

const SOCIAL_LINKS_ITEMS = [
    { link: SOCIAL_LINKS.linkedin, icon: '/images/linkedin-brands.svg', alt: 'LinkedIn' },
    { link: SOCIAL_LINKS.github, icon: '/images/github-brands.svg', alt: 'GitHub' },
    { link: SOCIAL_LINKS.instagram, icon: '/images/instagram-brands.svg', alt: 'Instagram' },
];

const SocialLinks = () => (
    <div className="pb-[4px] pl-[7px] flex items-center justify-start xl:justify-center gap-4">
        {SOCIAL_LINKS_ITEMS.map((item, i) => (
            <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
            >
                <img
                    src={item.icon}
                    alt={item.alt}
                    className="size-4 hover:invert-50"
                />
            </a>
        ))}
    </div>
);

export default SocialLinks;