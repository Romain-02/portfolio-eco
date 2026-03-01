import {HomeSection} from "../components/sections/HomeSection";
import {FormationSection} from "../components/sections/FormationSection";
import {ExperienceSection} from "../components/sections/ExperienceSection";
import {SkillSection} from "../components/sections/SkillSection";
import {ProjectSection} from "../components/sections/ProjectSection";
import {CVSection} from "../components/sections/CVSection";
import {AboutSection} from "../components/sections/AboutSection";

export default function Page() {
  return (
      <div className={"main-content"}>
          <HomeSection/>
          <FormationSection/>
          <ExperienceSection/>
          <SkillSection/>
          <ProjectSection/>
          <AboutSection/>
          <CVSection/>
    </div>
    );
}
