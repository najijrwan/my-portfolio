import SectionContainer from './SectionContainer';
import { TECHS_BY_TECH } from '@data';
import { TechTooltip } from '@ui';

const SkillsList = ({ title, filterFn }) => (
  <SectionContainer title={title} className="lg:gap-0!">
    <ul
      className="
        p-[25px] pt-0 lg:p-[45px] mx-[-15px] sm:mx-[-30px]
        overflow-x-auto
        flex-start-start gap-[15px] sm:gap-[50px]
        has-scrollbar scroll-smooth overscroll-x-contain snap-both scroll-px-6 sm:scroll-px-[45px]"
    >
      {Object.values(TECHS_BY_TECH)
        .filter(filterFn)
        .map((item) => (
          <li
            key={item.tech ?? item.tool}
            className="
              relative group
              min-w-[50%]
              bg-white/10 snap-start rounded-4xl
              clients-item
            "
          >
            <img src={item.imgSrc} alt={item.name} />
            <TechTooltip tech={item.name} />
          </li>
        ))}
    </ul>
  </SectionContainer>
);

export const Skills = () => (
  <SkillsList
    title="Skills"
    filterFn={(tech) => !tech.tool && !['python', 'nodejs'].includes(tech.tech)}
  />
);

export const Tools = () => (
  <SkillsList
    title="Tools"
    filterFn={(tech) => !!tech.tool}
  />
);
