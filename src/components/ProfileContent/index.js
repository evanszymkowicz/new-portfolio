import React from "react";
import ProfileIntroSection from "../ProfileIntroSection";
import ProfileListItem from "../ProfileListItem";
import JobListItem from "../JobListItem";
import ProfileList from "../ProfileList";
import { ContentWrapper } from "../../style/shared";
import { MainWrapper, ListsSection, SkillsList } from "./style";

const ProfileContent = ({ data }) => {
  const { jobs, skills } = data;

  return (
    <ContentWrapper>
      <MainWrapper>
        <ProfileIntroSection
          content={() => (
            <>
              <p>
                {" "}
                <a
                  href="https://github.com/evanszymkowicz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See what I am building{" "}
                </a>
                or contact me to work together.
              </p>
            </>
          )}
        />
        <ListsSection>
          {jobs.edges.length > 0 && (
            <ProfileList
              title="Experience"
              list={() =>
                jobs.edges.map(({ job }, i) => <JobListItem key={i} {...job} />)
              }
            />
          )}
          {skills.edges.length > 0 && (
            <SkillsList
              title="Technology"
              list={() =>
                skills.edges.map(({ skill }, i) => (
                  <ProfileListItem key={i} {...skill} />
                ))
              }
            />
          )}
        </ListsSection>
      </MainWrapper>
    </ContentWrapper>
  );
};

ProfileContent.displayName = "ProfileContent";

export default ProfileContent;
