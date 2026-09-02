import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRadixui,
  SiShadcnui,
  SiRedux,
  SiReactquery,
  SiTurborepo,
  SiPnpm,
  SiVite,
  SiCypress,
  SiFigma,
  SiHtml5,
  SiCss,
  SiGit,
} from "react-icons/si";
import { skills } from "../data/resume";

// The carousel showcases the stack visually; the grouped list below it
// carries the full detail, including the items that have no icon.
const TECH = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Radix UI", Icon: SiRadixui },
  { name: "shadcn/ui", Icon: SiShadcnui },
  { name: "TanStack Query", Icon: SiReactquery },
  { name: "Redux Toolkit", Icon: SiRedux },
  { name: "Turborepo", Icon: SiTurborepo },
  { name: "pnpm", Icon: SiPnpm },
  { name: "Vite", Icon: SiVite },
  { name: "Cypress", Icon: SiCypress },
  { name: "Figma", Icon: SiFigma },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "Git", Icon: SiGit },
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                The stack I reach for day to day — typed React, component
                architecture, and the tooling that holds a monorepo together.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2200}
                transitionDuration={600}
                keyBoardControl={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {TECH.map(({ name, Icon }) => (
                  <div className="item" key={name}>
                    <Icon className="skill-item__icon" aria-hidden="true" />
                    <h5>{name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="skill-groups">
          {skills.map((group) => (
            <div className="skill-card" key={group.group}>
              <h3 className="skill-card__title">{group.group}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
