// Project types
export interface ProjectImage {
  src: string;
  sources: {
    media: string;
    srcset: string;
  }[];
}

export interface Project {
  title: string;
  category: string;
  year: string;
  url: string;
  featured: boolean;
  image: ProjectImage;
}

export interface ProjectEdge {
  project: Project;
}

export interface ProjectsData {
  projects: {
    edges: ProjectEdge[];
  };
}

// Job types
export interface Job {
  company: string;
  position: string;
  year: string;
}

export interface JobEdge {
  job: Job;
}

// Skill types
export interface Skill {
  name: string;
  url: string;
}

export interface SkillEdge {
  skill: Skill;
}

export interface ProfileData {
  jobs: {
    edges: JobEdge[];
  };
  skills: {
    edges: SkillEdge[];
  };
}

// Page props
export interface PageProps {
  location: Location;
}

export interface ProfilePageProps extends PageProps {
  data: ProfileData;
}

export interface ProjectsPageProps extends PageProps {
  data: ProjectsData;
}
