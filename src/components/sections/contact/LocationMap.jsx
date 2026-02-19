const LocationMap = () => (
    <section
        className="
            relative
            w-full h-[250px] sm:h-[380px] mb-[30px] overflow-hidden 
            border border-jet rounded-[16px] sm:rounded-[18px]"
    >
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6641.003183453779!2d35.831684!3d33.67007400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1748365053044!5m2!1sen!2slb"
            width="600"
            height="450"
            loading="lazy"
            className="w-full h-full border-hidden grayscale-100 invert-100"
        >
        </iframe>
    </section>
)

export default LocationMap;