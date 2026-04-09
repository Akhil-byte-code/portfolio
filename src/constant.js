// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import redisLogo from './assets/tech_logo/Redis.png';
import dockerLogo from './assets/tech_logo/Docker.png';
import graphqlLogo from './assets/tech_logo/GraphhQL.png';
import awsLogo from './assets/tech_logo/AWS.png';
import nginxLogo from './assets/tech_logo/Nginx.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import recLogo from './assets/education_logo/gla_logo.png'; // (rename image later if needed)
import bsaLogo from './assets/education_logo/bsa_logo.jpg';
import vpsLogo from './assets/education_logo/vps_logo.jpeg';

// Project Section Logo's
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import movierecLogo from './assets/work_logo/movie_rec.png';

export const SkillsInfo = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", logo: htmlLogo, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { name: "CSS", logo: cssLogo, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "SASS", logo: sassLogo, url: "https://sass-lang.com/" },
            { name: "JavaScript", logo: javascriptLogo, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "React JS", logo: reactjsLogo, url: "https://react.dev/" },
            { name: "Angular", logo: angularLogo, url: "https://angular.dev/" },
            { name: "Redux", logo: reduxLogo, url: "https://redux.js.org/" },
            { name: "Next JS", logo: nextjsLogo, url: "https://nextjs.org/" },
            { name: "Tailwind CSS", logo: tailwindcssLogo, url: "https://tailwindcss.com/" },
            { name: "GSAP", logo: gsapLogo, url: "https://gsap.com/" },
            { name: "Material UI", logo: materialuiLogo, url: "https://mui.com/" },
            { name: "Bootstrap", logo: bootstrapLogo, url: "https://getbootstrap.com/" },
        ],
    },

    {
        title: "Backend",
        skills: [
            { name: "Springboot", logo: springbootLogo, url: "https://spring.io/projects/spring-boot" },
            { name: "Node JS", logo: nodejsLogo, url: "https://nodejs.org/" },
            { name: "Express JS", logo: expressjsLogo, url: "https://expressjs.com/" },
            { name: "MySQL", logo: mysqlLogo, url: "https://www.mysql.com/" },
            { name: "MongoDB", logo: mongodbLogo, url: "https://www.mongodb.com/" },
            { name: "Firebase", logo: firebaseLogo, url: "https://firebase.google.com/" },
            { name: "PostgreSQL", logo: postgreLogo, url: "https://www.postgresql.org/" },
            { name: "Redis", logo: redisLogo, url: "https://redis.io/" },
            { name: "Docker", logo: dockerLogo, url: "https://www.docker.com/" },
            { name: "GraphQL", logo: graphqlLogo, url: "https://graphql.org/" },
            { name: "AWS", logo: awsLogo, url: "https://aws.amazon.com/" },
            { name: "Nginx", logo: nginxLogo, url: "https://nginx.org/" },
        ],
    },

    {
        title: "Languages",
        skills: [
            { name: "C", logo: cLogo, url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
            { name: "C++", logo: cppLogo, url: "https://isocpp.org/" },
            { name: "Java", logo: javaLogo, url: "https://www.oracle.com/java/" },
            { name: "Python", logo: pythonLogo, url: "https://www.python.org/" },
            { name: "C-Sharp", logo: csharpLogo, url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
            { name: "JavaScript", logo: javascriptLogo, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "TypeScript", logo: typescriptLogo, url: "https://www.typescriptlang.org/" },
        ],
    },

    {
        title: "Tools",
        skills: [
            { name: "Git", logo: gitLogo, url: "https://git-scm.com/" },
            { name: "GitHub", logo: githubLogo, url: "https://github.com/" },
            { name: "VS Code", logo: vscodeLogo, url: "https://code.visualstudio.com/" },
            { name: "Postman", logo: postmanLogo, url: "https://www.postman.com/" },
            { name: "Compass", logo: mcLogo, url: "https://www.mongodb.com/products/tools/compass" },
            { name: "Vercel", logo: vercelLogo, url: "https://vercel.com/" },
            { name: "Netlify", logo: netlifyLogo, url: "https://www.netlify.com/" },
            { name: "Figma", logo: figmaLogo, url: "https://www.figma.com/" },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: webverseLogo,
        role: "Fullstack Developer",
        desc: "Built dynamic and scalable web applications using the MERN stack through self-driven projects, focusing on responsive UI design, RESTful API development, authentication, database integration, and performance optimization while maintaining clean and reusable code.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "TypeScript",
            "Node JS",
            "Tailwind CSS",
            "MongoDB",
            "Redux",
            "Next JS",
        ],
    },
    {
        id: 1,
        img: agcLogo,
        role: "Coder",
        desc: "Passionate about solving algorithmic challenges and continuously improving my problem-solving skills. My journey across LeetCode and GeeksforGeeks reflects consistency and a drive to master DSA concepts. With 400+ problems solved and active contest participation, I aim to apply these skills in real-world software engineering and analytics projects.",
        skills: [
            "Data Structures",
            "Algorithms",
            "Dynamic Programming",
            "Graph Theory",
            "Backtracking",
            "Union-Find",
            "C++",
            "Java",
            "Python",
            "SQL",
        ],
    },
    {
        id: 2,
        img: newtonschoolLogo,
        role: "AI/ML Enthusiast",
        desc: "Worked as an AI/ML learner, building machine learning models and analyzing datasets using Python, NumPy, Pandas, and Scikit-learn. Practiced data preprocessing, feature engineering, and model evaluation while working on real-world projects to improve prediction accuracy and insights.",
        skills: [
            "Python",
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Scikit-learn",
            "Machine Learning",
            "Data Analysis",
        ],
    },
];

export const education = [
    {
        id: 0,
        img: recLogo,
        school: "Rajkiya Engineering College, Azamgarh",
        date: "Sept 2023 - April 2027",
        grade: "Sem 1: 8.3 | Sem 2: 7.4 | Sem 3: 7.3 | Sem 4: 6.9 | Sem 5: 7.0 | Overall: 7.81 CGPA",
        desc: "Currently pursuing B.Tech in Information Technology from Rajkiya Engineering College, Azamgarh, with a strong foundation in programming, software development, DSA, DBMS, OOP, and Web Development, and continuously improving through projects and self-learning.",
        degree: "Bachelor of Technology (B.Tech) in Information Technology (IT)",
    },

    {
        id: 1,
        img: bsaLogo,
        date: "2023 - 2026",
        degree: "Competitive Exams & Achievements",
        desc: "Qualified multiple national-level exams across technical and defense domains, reflecting strong analytical skills, discipline, and continuous growth.",
        exams: [
            { seq: 1, title: "GATE CS – AIR 1765" },
            { seq: 2, title: "GATE DA – AIR 4134" },
            { seq: 3, title: "NDA 1 (2024) – Qualified" },
            { seq: 4, title: "Indian Coast Guard-02(2025) – Qualified" },
            { seq: 5, title: "DGAFMS Group C (2024) – Qualified" },
            { seq: 6, title: "UPSSSC PET(2025) – Qualified" },
            { seq: 7, title: "Delhi Police AWO/TPO (2025) – Qualified" },
        ],
    },

    {
        id: 2,
        img: vpsLogo,
        school: "Nav Bharat Public School, Lakhimpur Kheri",
        date: "Apr 2021 - March 2022",
        grade: "90%",
        desc: "Completed Class 12 education from Nav Bharat Public School, Lakhimpur Kheri, under the CBSE board, studying Physics, Chemistry, and Mathematics (PCM) with Physical Education as an additional subject.",
        degree: "CBSE (XII) - PCM with Physical Education",
    },

    {
        id: 3,
        img: vpsLogo,
        school: "Nav Bharat Public School, Lakhimpur Kheri",
        date: "Apr 2019 - March 2020",
        grade: "97%",
        desc: "Completed Class 10 education from Nav Bharat Public School, Lakhimpur Kheri, under the CBSE board, studying Science with Computer Application.",
        degree: "CBSE (X) - Science with Computer Application",
    },
];

export const projects = [
    {
        id: 7,
        title: "Image Search App",
        description:
            "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
        image: imagesearchLogo,
        tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
        // github: "https://github.com/codingmastr/Image-Search-App",
        webapp: "https://imagsearch.netlify.app/",
    },

    {
        id: 8,
        title: "Image Background Remover",
        description:
            "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
        image: removebgLogo,
        tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
        // github: "https://github.com/codingmastr/Image-Background-Remover",
        webapp: "https://removeyourbg.netlify.app/",
    },

    {
        id: 2,
        title: "Movie Recommendation App",
        description:
            "A React-based web application that provides movie recommendations based on genres, user preferences, and trending movies using API integration.",
        image: movierecLogo,
        tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
        // github: "https://github.com/codingmastr/Movie-Recommendation-App",
        webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
];