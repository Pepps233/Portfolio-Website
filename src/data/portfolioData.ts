export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Employee Management System",
    summary: "Employee Management System built with a RESTful API using Spring Boot, JPA/Hibernate, and a PostgreSQL database to manage employee entities containing first name, last name, and email. Supports creating, reading, updating, and deleting (CRUD) employee records, as well as searching employees.",
    images: [
      "https://i.imgur.com/J55uqjf.png",
      "https://i.imgur.com/CYDFXbt.png",
      "https://i.imgur.com/l1KyzQV.png"
    ],
    tags: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "Docker", "Maven"],
    details: {
      challenge:"Managing employee records manually or in spreadsheets is error-prone, lacks consistency, and does not scale well for organizations. Additionally, integrating persistence with relational databases while maintaining clean architecture can be difficult for backend applications.",
      solution:"The Employee Management System provides a RESTful API built with Spring Boot and PostgreSQL, containerized with Docker. It implements a clean layered architecture (Controller → Service → Repository), uses DTOs for separation of concerns, and leverages JPA/Hibernate for database persistence. This ensures structured, reliable, and scalable management of employee data.",
      impact: [
        "Improves data accuracy and consistency across employee records",
        "Reduces manual overhead by automating CRUD operations",
        "Demonstrates modern backend development practices with Dockerized PostgreSQL",
        "Provides a scalable foundation that can be extended with authentication, search, and cloud deployment"
      ]
    }
  },
  {
    id: 2,
    title: "Find A Study Buddy",
    summary: "in development",
    images: [
    ],
    tags: ["JavaScript", "CSS", "Java", "SpringBoot", "AWS3", "SQL", "MongoDB"],
    details: {
      challenge:"",
      solution:"",
      impact: [
        "",
      ]
    }
  }, 
  {
    id: 3,
    title: "Barcode-scanning Attendance Tracker",
    summary: "A lightweight Python program built using OpenCV, pandas, and openpyxl to decode student ID barcodes and record attendance details in Excel.",
    images: [
    ],
    tags: ["Python", "OpenCV", "pandas", "Excel"],
    details: {
      challenge: "Our high school’s robotics team had about 35–40 members, and checking them in with the traditional sign-up sheet was too slow, cutting into regular meeting times. A faster method of recording attendance was needed.",
      solution: "A program was written to automatically decode student IDs when a student shows their ID to the camera or enters their student number into the system. The program then automatically formats the date, time, and meeting in Excel, generating weekly and seasonal total hours for each member.",
      impact: [
        "Used by a 40-member robotics club to streamline attendance tracking and accurately determine active member",
        "Increased meeting productivity and overall time management through decreasing amount of time required for members to check-in"
      ]
    }
  },
  {
    id: 4,
    title: "Real-time American Sign Language (ASL) Alphabet Translator",
    summary: "A camera-based ASL alphabet translator that uses a camera to read input and decode hand signs, built with TensorFlow, MediaPipe, and a custom pipeline trained on Google’s Teachable Machine with 5,500+ self-created features and labels",
    images: [
    ],
    tags: ["Python", "TensorFlow", "MediaPipe", "OpenCV"],
    details: {
      challenge: "As technology advances, many people with speech difficulties still face challenges in communicating effectively. There is a need for tools that not only help others understand them but also allow individuals to express themselves through hand signs.",
      solution: "The program detects ASL alphabets, translates them into English letters, and audibly informs the user of what they’ve signed. Words and sentences can then be spoken aloud using Python’s text-to-speech library, with support for additional hand signs.",
      impact: [
        "Not yet utilized",
      ]
    }
  }
];
