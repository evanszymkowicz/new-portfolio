import ProfileIntroSection from "../ProfileIntroSection";
import ProfileListItem from "../ProfileListItem";
import JobListItem from "../JobListItem";
import ProfileList from "../ProfileList";
import { ContentWrapper } from "../../style/shared";
import { SITE_CONFIG } from "../../utils/constants";
import { MainWrapper, ListsSection, SkillsList } from "./style";

const introContent = (
  <p>
    <a
      href={SITE_CONFIG.social.github}
      target="_blank"
      rel="noopener noreferrer">
      See what I am building
    </a>{" "}
    or contact me to work together.
  </p>
);

const ProfileContent = ({ data, showSkills = true }) => {
  const { jobs, skills } = data;

  return (
    <ContentWrapper>
      <MainWrapper>
        <ProfileIntroSection content={introContent} />
        <ListsSection>
          {jobs.edges.length > 0 && (
            <ProfileList title="Experience">
              {jobs.edges.map(({ job }, i) => (
                <JobListItem key={i} {...job} />
              ))}
            </ProfileList>
          )}
          {showSkills && skills.edges.length > 0 && (
            <SkillsList title="Technology">
              {skills.edges.map(({ skill }, i) => (
                <ProfileListItem key={i} {...skill} />
              ))}
            </SkillsList>
          )}
        </ListsSection>
      </MainWrapper>
    </ContentWrapper>
  );
};

ProfileContent.displayName = "ProfileContent";

export default ProfileContent;
