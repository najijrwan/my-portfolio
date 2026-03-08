import { SOCIAL_LINKS } from "@data";

const socialLinksItems = [
    {
        link: SOCIAL_LINKS.linkedin,
        Icon: <ion-icon name='logo-linkedin' className="size-5" aria-label="linkedin" />
    },
    {
        link: SOCIAL_LINKS.github,
        Icon: <ion-icon name="logo-github" className="size-5.5" aria-label="github" />
    },
    {
        link: SOCIAL_LINKS.leetcode,
        Icon: <ion-icon src="/images/leetcode.svg" className="size-5" aria-label="leetcode" />
    },
];

const SocialLinks = () => (
    <div
        className="
            pb-[4px] pl-[7px]
            flex items-center justify-start xl:justify-center gap-4"
    >
        {socialLinksItems.map(({ link, Icon, }, i) => (
            <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-light-gray"
            >
                {Icon}
            </a>
        ))}

    </div>
);

export default SocialLinks;