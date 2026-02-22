const SkillLollipop = ({ src, lan, reversed = false, }) => (
    <div className={`flex-center ${reversed ? 'flex-col-reverse' : 'flex-col'}`}>
        <div className="forward-box p-1 rounded-2xl cursor-pointer">
            <img src={src} alt={lan} className="size-12" />
        </div>
        <div className="w-px h-5 bg-jet"></div>
    </div>
)

export default SkillLollipop;