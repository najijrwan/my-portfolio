import SectionContainer from './SectionContainer';
import { ROLES } from '@data';

const Roles = () => (
    <SectionContainer title="What I'm doing">
        <div
            className="
                grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-[20px] lg:gap-x-[25px]"
        >
            {ROLES.map((role, i) => (
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
                        <ion-icon
                            src={role.icon}
                            alt={role.label}
                            className='block size-12 m-auto'
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