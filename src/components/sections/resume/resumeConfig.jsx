import { SUMMARY, SKILLS, PROJECTS, EDUCATIONS, HONORS, LANGUAGES, INTERESTS, } from '@data'

export const resumeSections = [
  {
    heading: "professional summary",
    content: [
      SUMMARY.map((para, i) => (
        <p key={i} className='mb-2'>{para}</p>
      ))
    ],
  },
  {
    heading: "technical skills",
    content: SKILLS.map((item) => (
      <>
        <header className="mb-2 text-white">
          {item.label}
        </header>
        <ul key={item.label}>
          {item.skills.map((skill) => (
            <li
              key={skill}
              className="
              relative
              pl-[1em] ml-5
              before:content-[''] before:absolute before:left-0 before:top-[9px]
              before:size-[5px]
              before:bg-[#ffd700] before:rounded-full"
            >
              {skill}
            </li>
          ))}
        </ul>
      </>
    )),
  },
  {
    heading: "PROJECTS",
    content: PROJECTS.map((item) => (
      <>
        <header className="mb-2 text-white">
          <h1><i>{item.title}</i> &nbsp; • &nbsp; {item.subTitle}</h1>
          <h2>stack: <i>{item.stack}</i></h2>
        </header>
        <ul key={item.title}>
          {item.details?.map((skill) => (
            <li
              key={skill}
              className="
              relative
              pl-[1em] ml-5
              before:content-[''] before:absolute before:left-0 before:top-[9px]
              before:size-[5px]
              before:bg-[#ffd700] before:rounded-full"
            >
              {skill}
            </li>
          ))}
        </ul>
      </>
    )),
  },
  {
    heading: "Education",
    content: EDUCATIONS.map((edu) => (
      <>
        <header className="mb-2 text-white">
          {edu.degree}
        </header>
        <p className="text-light-gray italic">
          <span className="text-vegas-gold"> - </span>{edu.uni} &nbsp; • &nbsp; {edu.uniLocation}
        </p>
        <p><span className="text-vegas-gold"> - </span>GPA: {edu.gpa}</p>
        <p><span className="text-vegas-gold"> - </span>{edu.date}</p>
      </>
    )),
  },
  {
    heading: "Honors & Certificates",
    content: HONORS.map((honor) => (
      <>
        <header className="mb-2 text-white">
          {honor.title}
        </header>

        <div className='flex gap-1 items-center'>
          <button className='flex items-start'>
            <ion-icon
              name='document-text-outline'
              className='size-4.5 text-yellow-crayola hover:text-yellow-crayola/50'
            />
          </button>
          <p className='text-light-gray'>{honor.issuer} &nbsp; • &nbsp; {honor.date}</p>
        </div></>
    )),
  },
  {
    heading: "Languages",
    content: (LANGUAGES.map((lan) => (
      <>
        {lan.lan}<span> ({lan.prof})</span>
      </>
    ))
    )
  },
  {
    heading: "INTERESTS",
    content: INTERESTS.map((interest) => (
      <>
        {interest}
      </>
    ))
  },
];