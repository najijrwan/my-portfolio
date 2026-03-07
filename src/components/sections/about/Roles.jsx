import SectionContainer from './SectionContainer';

// consider moving roles to data
const roles = [
    // {
    //     href: '/projects?category=application',
    //     icon: '/images/icon-app.svg',
    //     label: 'mobile apps',
    //     details: 'Professional & modern development of applications for Android and ios',
    // },
    {
        href: '/projects?role=front-end',
        icon: '/images/icon-dev.svg',
        label: 'Web Development',
        details: 'High-quality websites at the professional level',
    },
]

const Roles = () => (
    <SectionContainer title="What I'm doing">
        <div
            className="
                grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-[20px] lg:gap-x-[25px]"
        >
            {roles.map((role, i) => (
                <a
                    key={i}
                    href={role.href}
                    className={`
                        h-full p-[20px] sm:p-[30px]
                        sm:flex-start-start sm:gap-[25px]
                        rounded-2xl
                        forward-box
                    `}
                >
                    <div className="mb-2.5">
                        <img
                            src={role.icon}
                            alt={role.label}
                            className='block size-10 m-auto'
                        />
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="font-bold text-main text-[18px] mb-2 capitalize">
                            {role.label}
                        </h4>

                        <p className="m-0 text-gray-300 text-[15px]/5">
                            {role.details}
                        </p>
                    </div>
                </a>
            ))}
        </div>
    </SectionContainer>
)

export default Roles;