export const portfolioData = {
    profile: {
        name: "Supriya Singh",
        role: "Aspiring Software & AI Developer",

        tagline:
            "Technology professional with hands-on experience in AI-driven applications, mobile safety systems, and full-stack development across healthcare, safety, and e-commerce domains.",

        bio: `I'm an aspiring technology professional with a passion for building software that solves real-world problems. My experience spans AI-driven applications, mobile safety systems, hospital management, and interactive learning platforms — all developed with a focus on practical impact and scalability.

I primarily work with Java, Python, and web technologies to create systems that are secure, maintainable, and user-centric. From designing smart panic-button features for women's safety to training machine learning models for brain tumor detection, I take pride in tackling meaningful challenges.

Currently pursuing my Bachelor's in Information Technology at Panipat Institute of Engineering & Technology, I continue to deepen my expertise in software engineering, AI/ML, and system design while contributing to projects that make a difference.

I embrace collaborative problem-solving, agile practices, and continuous learning as core principles in everything I build.`,

        avatar: "/supriya_profile.jpg",
    },

    socials: {
        github: "https://github.com/sup18github",
        linkedin: "https://www.linkedin.com/in/supriyasingh11",
    
        email: "mailto:singh1811supriya@gmail.com",
        website: "https://yourportfolio.com",
        resume: "/resume.pdf",
        medium: "https://medium.com/",
    },

    skills: [
        {
            category: "Programming Languages",
            items: ["Java", "Python", "C", "C++"],
        },
        {
            category: "Web Development",
            items: ["HTML", "CSS", "JavaScript", "React.js", "Firebase"],
        },
        {
            category: "AI & Machine Learning",
            items: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Random Forest", "SVM", "CNN"],
        },
        {
            category: "Database Management",
            items: ["MySQL"],
        },
        {
            category: "Software Engineering",
            items: ["Agile Development", "SDLC", "Spring Boot", "OOP", "API Integration", "Problem-Solving", "Debugging", "Team Leadership"],
        },
    ],

    experience: [
        {
            company: "Panipat Institute of Engineering & Technology",
            role: "Bachelor of Information Technology",
            period: "Aug 2023 — Jun 2026",
            description:
                "Building expertise in software engineering, AI/ML, and system design through a rigorous Information Technology curriculum with a focus on practical application development.",
            logo:
                "https://ui-avatars.com/api/?name=PIET&background=4f46e5&color=fff&rounded=true",
        },
        {
            company: "Gujrat Technological University",
            role: "Diploma in Information Technology",
            period: "Aug 2020 — Sep 2023",
            description:
                "Completed a comprehensive Diploma in Information Technology, building a strong technical foundation in programming, databases, and software development principles.",
            logo:
                "https://ui-avatars.com/api/?name=GTU&background=0ea5e9&color=fff&rounded=true",
        },
        {
            company: "Infoxoras",
            role: "AI Python Developer Intern",
            period: "Jul 2025 — Aug 2025",
            description:
                "Developed AI and machine learning models using Python, NumPy, Pandas, and Scikit-learn. Worked on data analysis, model training, and testing for real-world projects. Gained exposure to deep learning with TensorFlow/Keras and PyTorch.",
            logo:
                "https://ui-avatars.com/api/?name=Infoxoras&background=10b981&color=fff&rounded=true",
        },
        {
            company: "Xipra Technology",
            role: "Java Development Intern",
            period: "Jul 2024 — Aug 2024",
            description:
                "Developed and optimized Java-based applications using OOP concepts. Worked on debugging and API integration within an Agile development environment.",
            logo:
                "https://ui-avatars.com/api/?name=Xipra&background=f59e0b&color=fff&rounded=true",
        },
    ],

    projects: [
        {
            id: "women-safety-application",
            title: "Women Safety Application (WSafe)",
            description:
                "A mobile safety application focused on improving emergency response and personal security with panic alerts, evidence collection, fake call functionality, and smartwatch SOS activation.",
            tech: [
                "Java",
                "Android SDK",
                "Firebase",
                "GPS / Location Services",
                "Smartwatch API",
            ],
            link: "#",
            github: "#",
            image: "/project.png",
            role: "Lead Developer",
            timeline: "2024",
            team: "Solo",
            status: "Completed",
            overview: "WSafe is a mobile safety application designed to improve emergency response and personal security for women. The app addresses real-world safety concerns through practical technology solutions including panic button alerts, evidence collection, and seamless SOS activation through multiple interfaces.",
            features: [
                "**Panic Button Alerts**: Instant SOS trigger that notifies trusted contacts with location data.",
                "**Evidence Collection**: In-app video and audio recording to capture emergency situations.",
                "**Fake Call Functionality**: Simulated incoming calls to help users exit dangerous situations discreetly.",
                "**Smartwatch Voice-Triggered SOS**: Hands-free emergency activation through smartwatch integration.",
                "**Real-Time Location Sharing**: Live GPS tracking shared with trusted emergency contacts.",
                "**Emergency Notifications**: Instant alerts to pre-configured contacts and authorities."
            ],
            challenges: "Implementing reliable real-time location sharing while maintaining battery efficiency was a significant challenge. Integrating smartwatch voice triggers required careful handling of Bluetooth connectivity and background processing.",
            learnings: [
                "Deepened expertise in **Android SDK** and background service management.",
                "Learned to integrate **smartwatch APIs** for wearable-triggered events.",
                "Gained experience in **real-time location services** with minimal battery drain.",
                "Understood the importance of **UX design** in high-stress emergency scenarios."
            ],
            future: [
                "AI-powered threat detection using device sensors.",
                "Community alert system for local awareness.",
                "Integration with local law enforcement APIs."
            ]
        },
        {
            id: "oncomind-brain-cancer-prediction",
            title: "ONCOMIND – Brain Cancer Prediction",
            description:
                "An AI-based system for early detection and classification of brain tumors using MRI datasets and machine learning models including Random Forest, SVM, and CNN.",
            tech: [
                "Python",
                "Scikit-learn",
                "TensorFlow",
                "CNN",
                "Random Forest",
                "SVM",
                "NumPy",
                "Pandas",
                "OpenCV",
            ],
            link: "#",
            github: "#",
            image: "/project2.png",
            role: "AI/ML Developer",
            timeline: "2024",
            team: "Team Project",
            status: "Completed",
            overview: "ONCOMIND is an AI-based brain cancer prediction system designed to assist medical professionals in the early detection and classification of brain tumors. By leveraging MRI datasets and advanced machine learning models, the system provides fast, accurate tumor classification to support clinical decision-making.",
            features: [
                "**Multi-Model Classification**: Combines Random Forest, SVM, and CNN models for robust tumor detection.",
                "**MRI Dataset Processing**: Automated preprocessing pipeline for brain MRI scans.",
                "**Early Detection Focus**: Optimized to identify tumors at early stages for better prognosis.",
                "**Performance Analytics**: Detailed model accuracy, precision, and recall reporting.",
                "**Data Preprocessing Pipeline**: Handles normalization, augmentation, and feature extraction."
            ],
            challenges: "Achieving high prediction accuracy while managing class imbalance in the MRI dataset was the primary challenge. Optimizing CNN model training to prevent overfitting on limited medical imaging data required careful hyperparameter tuning and data augmentation strategies.",
            learnings: [
                "Applied **CNN architectures** for medical image classification.",
                "Mastered **data preprocessing** techniques for medical imaging datasets.",
                "Learned to compare and ensemble **multiple ML models** for improved accuracy.",
                "Gained understanding of **AI applications in healthcare** and ethical considerations."
            ],
            future: [
                "Deploy as a web-based diagnostic tool for hospitals.",
                "Integrate with DICOM medical imaging standards.",
                "Expand to detect other types of cancers."
            ]
        },
        {
            id: "hospital-management-system",
            title: "Hospital Management System",
            description:
                "A comprehensive system for managing patient records, appointments, and hospital inventory with role-based authentication, built with Java, MySQL, and Spring Boot.",
            tech: [
                "Java",
                "Spring Boot",
                "MySQL",
                "REST APIs",
                "Role-Based Auth",
            ],
            link: "#",
            github: "#",
            image: "/project.png",
            role: "Backend Developer",
            timeline: "2023",
            team: "Team Project",
            status: "Completed",
            overview: "A comprehensive Hospital Management System designed to digitize and streamline hospital operations. The system manages patient records, appointments, and hospital inventory through a secure, role-based access platform built with modern Java backend technologies.",
            features: [
                "**Patient Records Management**: Complete CRUD operations for patient data and medical history.",
                "**Appointment Scheduling**: Doctor-patient appointment booking and calendar management.",
                "**Hospital Inventory**: Real-time tracking of medical supplies and equipment.",
                "**Role-Based Authentication**: Secure access control for admins, doctors, and staff.",
                "**Spring Boot REST APIs**: Clean API design for frontend integration.",
            ],
            challenges: "Designing a scalable role-based access control system that could cleanly separate permissions for different hospital staff roles while keeping the codebase maintainable was the key challenge.",
            learnings: [
                "Mastered **Spring Boot** for enterprise-grade Java backend development.",
                "Implemented **role-based authentication** and authorization patterns.",
                "Deepened understanding of **relational database design** with MySQL.",
                "Gained experience in **healthcare domain** software requirements."
            ],
            future: [
                "Add a patient-facing portal for online appointment booking.",
                "Integrate with insurance claim processing APIs.",
                "Add analytics dashboard for hospital administrators."
            ]
        },
        {
            id: "kids-space-learning-platform",
            title: "Kids Space – Interactive Learning Platform",
            description:
                "An engaging platform for kids to learn and play in a safe environment, with parental controls, real-time data handling via Firebase, and interactive educational content.",
            tech: [
                "JavaScript",
                "React.js",
                "Firebase",
                "CSS",
                "Parental Controls API",
            ],
            link: "#",
            github: "#",
            image: "/countries-app.png",
            role: "Frontend Developer",
            timeline: "2023",
            team: "Team Project",
            status: "Completed",
            overview: "Kids Space is an interactive learning platform designed to provide children with a safe, engaging, and educational digital environment. The platform combines fun learning activities with robust parental controls to ensure a secure browsing experience.",
            features: [
                "**Interactive Learning Modules**: Educational games and activities tailored to different age groups.",
                "**Parental Control Features**: Parent dashboard for monitoring activity and setting content restrictions.",
                "**Real-Time Data Handling**: Firebase backend for live progress tracking and content updates.",
                "**Safe Browsing Environment**: Content filtering and kid-friendly interface design.",
            ],
            challenges: "Creating an engaging UX that is both intuitive for young children and flexible enough for parents to configure required extensive user research and iterative design.",
            learnings: [
                "Developed expertise in **React.js** for dynamic UI construction.",
                "Learned **Firebase** real-time database and authentication setup.",
                "Gained insights into **child-centered design** principles.",
                "Implemented effective **content filtering** mechanisms."
            ],
            future: [
                "Add AI-powered personalized learning paths.",
                "Expand content library with more curriculum topics.",
                "Build a mobile app version."
            ]
        },
    ],
};
