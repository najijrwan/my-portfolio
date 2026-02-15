import { PageTitle } from '@ui';
import { AboutMe, SectionTitle, Roles, Skills } from '@about';

const About = () => (
    <>
        <PageTitle title='About' />

        <AboutMe />

        <SectionTitle title="What I'm doing" />

        <Roles />

        <SectionTitle title="Skills" />

        <Skills />
    </>
)

export default About;