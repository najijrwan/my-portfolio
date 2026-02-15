const roles = [
    // {
    //     href: '/projects?category=applications',
    //     icon: '/images/icon-app.svg',
    //     label: 'Mobile Apps',
    //     details: 'Professional & modern development of applications for Android and ios',
    // },
    {
        href: '/projects?category=websites',
        icon: '/images/icon-dev.svg',
        label: 'Web Development',
        details: 'High-quality websites at the professional level',
    },
]

const Roles = () => (
    <section className="mb-9">
        <div
            className="
                grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-[20px] lg:gap-x-[25px]"
        >
            {roles.map((role, i) => (
                <a
                    key={i}
                    href={role.href}
                    className='
                        relative z-10
                        h-full p-[20px] sm:p-[30px]
                        sm:flex-start-start sm:gap-[25px]
                        bg-gradient-onyx rounded-[14px] shadow-2
                        before:content-[""] before:absolute before:inset-[1px] before:-z-[1]
                        before:block
                        before:bg-gradient-jet before:rounded-[inherit]'
                >
                    <div className="mb-2.5">
                        <img
                            src={role.icon}
                            alt={role.label}
                            className='block size-10 m-auto'
                        />
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="font-bold text-base text-[18px] mb-2">
                            {role.label}
                        </h4>

                        <p className="m-0 text-gray-300 text-[15px]/5">
                            {role.details}
                        </p>
                    </div>
                </a>
            ))}
        </div>
    </section>
)

export default Roles;