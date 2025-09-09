export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Computer Science & Minor in Biological Sciences",
    company: "Undergraduate @ Purdue University, West Lafayette",
    dates: "Graduation: June, 2029",
    description: [
      "Relevant Coursework: Programming in C, Object-Oriented Programming in Java, Programming in Python, Structured Programming in C++"
    ]
  },
  {
    title: "School Chapter President",
    company: "National Honor Society; California Crosspoint High School",
    dates: "2024 November - 2025 June",
    description: [
      "Collaborated with non-profit organizations such as the Pacific Beach Coalition to coordinate community clean-up events across the city of Hayward",
      "Led a student council team of three seniors to organize school-wide leadership events, including a speech by the Mayor of Hayward, raising awareness of societal issues and developing students’ leadership skills"
    ]
  },
  {
    title: "Software Lead and Team Captain",
    company: "FIRST Robotcs; California Crosspoint High School",
    dates: "2024 - 2025 June",
    description: [
      "Documented programming concepts (encapsulation, abstraction, polymorphism) and Kotlin fundamentals for new team members",
      "Designed robotics and software lesson plans for a 3-month training, equivalent to a first-semester university course",
      "Coordinated workflow with ~6 programmers using Git and task management to align with the mechanical subteam",
      "Designed vision-based robot localization running at 50Hz with a noise-reducing filter for AprilTag detection",
      "Programmed robot autonomous sequences and path planning with 85% accuracy, winning the East Bay Regional against 52 teams",
    ]
  },
  {
    title: "Math/Mandarin/Programming Teaching Assistant",
    company: "The Salvation Army; Oakland, California",
    dates: "2023 January - March",
    description: [
      "Assisted teacher by explaining Mandarin, Math, and Python concepts to ~8 students of various ages",
      "Organized and shared lesson plans with 6 teachers and teaching assistants",
      "Liaised between the organization director and ~50 student families regarding school events and classwork"
    ]
  }
];