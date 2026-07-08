export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "React", level: 4 },
      { name: "Next.js", level: 3 },
    ],
  },
  {
    title: "Craft",
    skills: [
      { name: "Responsive Design", level: 5 },
      { name: "SEO Fundamentals", level: 4 },
      { name: "Performance Tuning", level: 4 },
    ],
  },
  {
    title: "Data & Backend",
    skills: [
      { name: "MongoDB", level: 3 },
      { name: "REST APIs", level: 3 },
    ],
  },
];

export const learningNow = ["TypeScript", "Three.js", "Advanced MongoDB"];