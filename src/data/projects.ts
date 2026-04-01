export interface Project {
  slug: string;
  title: string;
  description: string;
  images: { src: string }[];
  technologies: string[];
  github?: string;
  liveLink?: string | null;
  status: "Completed" | "Ongoing";
  features: string[];
  goal?: string;
}

export const projects: Project[] = [
  {
    slug: "school-management-system",
    title: "School Management System",
    description:
      "A comprehensive school management system designed to streamline academic and administrative operations, including student records, attendance tracking, class management, and communication between teachers, students, and administrators.",

    images: [
      { src: "/images/projects/school/school.webp" },
      { src: "/images/projects/school/school2.webp" },
      { src: "/images/projects/school/school3.webp" },
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Redux Action",
    ],

    liveLink: "#",
    status: "Completed",

    features: [
      "Student information management (profiles, enrollment, and records)",
      "Teacher and staff management system",
      "Class scheduling and subject management",
      "Attendance tracking for students and teachers",
      "Admin dashboard for full system control and analytics",
      "Secure authentication with role-based access (Admin, Teacher, Student)",
      "Exam, results, and grading management",
      "Responsive UI for access across devices",
    ],

    goal: "To develop a centralized and scalable platform that simplifies school operations, improves communication, and enhances efficiency for administrators, teachers, and students.",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    description:
      "A full-stack hospital management system designed to efficiently manage patient records, appointments, billing, and hospital operations with a secure and user-friendly interface.",

    images: [
      { src: "/images/projects/hospital/Admin.png" },
      { src: "/images/projects/hospital/HeadNurse.png" },
      { src: "/images/projects/hospital/Pharamacy.png" },
      { src: "/images/projects/hospital/Reception.png" },
    ],

    technologies: [
      "React",
      "Next js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tanstack",
      "formik",
      "Tailwind CSS",
      "JWT",
    ],

    github: "#",
    status: "Completed",

    features: [
      "Patient registration and medical record management",
      "Doctor and staff management system",
      "Appointment scheduling with real-time availability",
      "Billing and invoice management",
      "Role-based authentication (Admin, Doctor, Receptionist)",
      "Dashboard with analytics and hospital insights",
      "Secure data handling and protected routes",
      "Responsive UI for multi-device accessibility",
    ],

    goal: "To build a centralized healthcare management platform that improves hospital efficiency, enhances patient care, and ensures secure handling of medical data.",
  },
  {
    slug: "restaurant-management-system",
    title: "Restaurant Management System",
    description:
      "A modern restaurant management system that streamlines order processing, table management, billing, and inventory tracking with an intuitive and responsive interface.",

    images: [
      { src: "/images/projects/resturent/resturent.webp" },
      { src: "/images/projects/resturent/resturent1.webp" },
      { src: "/images/projects/resturent/resturent3.webp" },
    ],

    technologies: [
      "React",
      "Next js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Formik",
      "Tailwind CSS",
      "JWT",
    ],

    github: "#",
    status: "Completed",

    features: [
      "Digital menu and order management system",
      "Table reservation and real-time table tracking",
      "Kitchen order management (KOT system)",
      "Billing and payment processing",
      "Inventory and stock management",
      "Role-based access (Admin, Staff, Cashier)",
      "Sales reports and analytics dashboard",
      "Mobile-friendly and responsive UI",
    ],

    goal: "To develop an efficient and scalable system that simplifies restaurant operations, enhances customer experience, and supports business growth.",
  },
  {
  slug: "lumbini-restaurant-website",
  title: "Lumbini Restaurant Website & Management System",

  description:
    "A modern and aesthetically designed restaurant website inspired by calm and nature-driven visuals, combined with a powerful management system. The platform highlights the restaurant’s ambiance, menu, events, and brand story while enabling efficient reservation handling, content management, and customer engagement.",

  images: [
    { src: "/images/projects/website/buddha1.png" },
    { src: "/images/projects/website/buddha2.png" },
    { src: "/images/projects/website/buddha3.png" },
    { src: "/images/projects/website/buddha4.png" },
  ],

  technologies: [
    "React",
    "Tailwind CSS",
    "Material UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "JWT"
  ],

  github: "#",
  status: "Completed",

  features: [
    "Elegant landing page with nature-inspired and calming UI design",
    "Hero section with storytelling content and smooth user experience",
    "About section presenting restaurant story and philosophy",
    "Dynamic menu system with categorized food items and pricing",
    "Online table reservation and booking system",
    "Events and special offers management",
    "Gallery section showcasing food, ambiance, and experiences",
    "News & blog section for updates and engagement",
    "Admin dashboard for managing content, menu, and reservations",
    "Secure authentication with role-based access",
    "Responsive design optimized for all devices",
    "Smooth animations and modern UI/UX design"
  ],

  goal:
    "To build a visually engaging and user-friendly restaurant platform that reflects the brand’s calm and premium dining experience while providing efficient tools for managing operations, customer interactions, and business growth."
}
];
