const Educations = ({ edu }) => (
    <>
        <header className="mb-2 text-white">
            {edu.degree}
        </header>
        <div className='ml-2.5'>
            <p className="text-light-gray italic capitalize">
                <span className="text-vegas-gold"> - </span>{edu.uni} &nbsp; • &nbsp; {edu.uniLocation}
            </p>
            <p>
                <span className="text-vegas-gold"> - </span>GPA: {edu.gpa}
            </p>
            <p>
                <span className="text-vegas-gold"> - </span>{edu.duration}
            </p>
        </div>
    </>
);

export default Educations;