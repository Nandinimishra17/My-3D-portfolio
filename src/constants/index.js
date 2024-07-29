import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguidee,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Startup Enthusiast",
    icon: backend,
  },
  {
    title: "Machine Learning Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: redux,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
//redux - python
//docker - java
//typescript - c

const experiences = [
  {
    title: "Event Manager",
    company_name: "Startup Grind Bhubaneswar",
    icon: starbucks,
    iconBg: "#ffffff",
    date: "Feb 2023 - Present",
    points: [
      "Leading the event management wing of the (not-for-profit) SG Bhubaneswar, the motto being- building a conducive ecosystem to promote the innovationcapacity of startups, enabling them to create new technology-based products.",
      "Overseeing a team of 40+ volunteers from all across the globe in event organization, design, consultancy, and strategic partnerships with various investors, sponsors, tech-based startups, entrepreneurs.",
      "Organized over 20 entrepreneurial events so as to inspire entrepreneurs and guide them in their startup journey.",
      "Overseeing startup consultancy for 20 + early stage startups, to help convert their ideas into a product.",
      "Hosting reknowned guest speakers and leaders such Aaquib wani, Ria Mirchandani, Sheba Roy, Shefali Vijaywargiya, David Wittenberg and many more."
    ],
  },
  {
    title: "Chapter Director",
    company_name: "Startup Grind KIIT",
    icon: tesla,
    iconBg: "#28282B",
    date: "March 2024 - Present",
    points: [
     "Opening up and hosting Startup Grind's KIIT chapter at my college to aid student entrepreneurs with required resources, guidance, networkings, events etc.  ",
     "Organizing On-campus workshops, pitch battle events, expert panel discussions to foster the young entrepreneurial minds, turning their ideas into profitable relaities.",
    ],
  },
  {
    title: "Marketing Strategist Intern",
    company_name: "Lernx",
    icon: meta,
    iconBg: "#28282B",
    date: "Jan 2023 - April 2023",
    points: [
    "Exploring different marketing strategies to find product market fit",
   " Managing different marketing channels to promote courses and ensure better conversion rates.",
    ],
  },
  {
    title: "Research & Development",
    company_name: "Teamos",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Nov 2022",
    points: [
      "Carrying out product development, to build the Teamos website from scratch",
      "Helped start Teamos Student Clubs in 6 Indian States, an initiative which helps foster and encourage entrepreneurship and skill development in school students from a very young age",
      "Responsible for carrying out Product surveys and analysis, so as to improve user experience",
      "Carrying out market research to mold the product according to the target market",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Her love for building websites & coming up with creative solutions is what made us get her on board for TEAMOS' web dev dept. Keep up the good work.",
    name: "Aayush Vats",
    designation: "Founder",
    company: "Teamos",
    image: "https://media.licdn.com/dms/image/D5603AQFliYv7EXMjag/profile-displayphoto-shrink_800_800/0/1661422348460?e=1727913600&v=beta&t=NP5Qke4FEJqdf-3vjRx-_Uk2DiwWwywCX4HGcuiHtuY",
  },
  {
    testimonial:
      "A very great leader and enthusiastic junior. It was great to have her in our web dev and tech research team. Absolutely proved herself!",
    name: "Aashish Singh",
    designation: "CTO",
    company: "Teamos",
    image: "https://media.licdn.com/dms/image/D5603AQETBm7njUllvw/profile-displayphoto-shrink_800_800/0/1718625919265?e=1727913600&v=beta&t=LGBwj5DcM5zhHAuKU0ogCkrOko_SR3fzvD2alFSojQw",
  },
  {
    testimonial:
      "Love how Nandini has her passion for tech especially when it comes to her problem solving skills! She has true potential to start her own brand.",
    name: "Prachi Arunima",
    designation: "Co-Director",
    company: "Startup Grind Bhubaneswar",
    image: "https://media.licdn.com/dms/image/D5603AQE9PBpjN882ow/profile-displayphoto-shrink_800_800/0/1713045980723?e=1727913600&v=beta&t=oZCITJ4pAE5nJjzCl-6Pd3-DiYiElH4iw6e9o_wnErY",
  },
];

const projects = [
  {
    name: "3D Solar System Web-application using React Three Fiber",
    description:
      "Using native Three.js integration and utilizing NASA's 3D models for objects like the International Space Station, Saturn, Uranus, and Neptune, I created planet structures using sphere Geometry for most planets and imported 3D models for planets like Saturn. Applying detailed textures and displacement maps for realistic planet surfaces, like Earth's night maps.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "A Novel Fitness Tracker Model",
    description:
      "Modern fitness trackers excel at monitoring metrics like distance & heart rate but struggle with accurately counting barbell exercise repetitions. This project develops a ML model to track barbell exercises such as Bench Press, Squats, Overhead Presses, Deadlifts, and Rows. By using advanced data processing & predictive modeling, it enhances exercise classification & repetition counting accuracy, advancing personalized fitness tracking and empowering users with precise exercise data.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "VS Code",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Nandinimishra17",
  },
  {
    name: "Online Virtual Closet- Fasion Recommendation System",
    description:
      "Input your picture wearing the clothes you wish to get similar suggestions for and get amazing styling recommendation via this under-progress Fashion Recommendation System, that performs Machine Learning models to suggest the most likeable outfits as per the user's taste. Tested Convolutional Neural Networkutilizing learnings from ResNet50.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
    ],
    image: tripguidee,
    source_code_link: "https://github.com/",
  },
 
];

export { services, technologies, experiences, testimonials, projects };