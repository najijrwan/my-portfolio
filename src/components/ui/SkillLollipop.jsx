const SkillLollipop = ({ src, lan, reversed = false, }) => (
    <div className={`flex-center ${reversed ? 'flex-col-reverse' : 'flex-col'}`}>
        <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
            <img src={src} alt={lan} className="size-8" />
        </div>
        <div className="w-px h-5 bg-jet"></div>
    </div>
)

export default SkillLollipop;