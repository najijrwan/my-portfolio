

const Avatar = () => (
    <figure className="bg-gradient-onyx-2 rounded-[20px] relative sm:rounded-[30px]">
        <a
            href="https://my-portfolio-najijarwan.vercel.app//images/me.jpg"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="/images/me.jpeg"
                className="
                block size-20 sm:size-[120px] xl:size-[150px]
                border border-jet rounded-[20px] sm:rounded-[30px] object-cover object-top"
            />
        </a>
        <span
            className="
            size-3 bg-[#39ff14] rounded-full animate-pulse absolute bottom-0 right-0">
        </span>
    </figure>
)

export default Avatar;