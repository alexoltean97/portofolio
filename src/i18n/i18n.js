import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          Iam: "Proficient web developer for your projects.",
          contactBtn: "Contact me",
          portofolioBtn: "Portofolio",
          aboutMe: "About me",
          aboutText:
            "I’m a digital product leader with over 8 years of experience, driven by real world challenges, working in a fast-paced, digitally-oriented environment related to consumer services. Operating in an environment driven by KPIs where I have the accountability to determine the best course of action to meet goals.",
          linkedinBtn: "Linkedin Profile",
          mySkills: "My skills",
          feDev: "FRONT-END DEVELOPMENT",
          feDevDesc:
            "My proficiency in Front-End Development is rooted in a deep understanding and skilled application of core web technologies like HTML, CSS, and JavaScript. I am also adept in utilizing modern frameworks such as React and Vue, which enables me to create interactive and visually compelling web applications.",
          qualityAssurance: "Quality Assurance",
          qualityDescription:
            "My expertise in Quality Assurance centers on delivering impeccable product performance and reliability. Specializing in both manual and automated testing techniques, I focus on detecting and rectifying flaws swiftly.",
          productManagement: "PRODUCT MANAGEMENT",
          productDesc:
            "As a freelancer, I had to learn how to adapt to my client needs, a skill that has been invaluable in my journey into Product Management. This role has honed my ability to understand and translate client requirements into viable products.",
          agileWorkflow: "CMS & Page Builders",
          agileDesc:
            "In business and engineering, new product development covers the complete process of bringing a new product to market.",
          workExperience: "Work Experience",
          expTitlePlenty: "FRONT-END ENGINEER",
          expDatePlenty: "Plenty Markets / Feb 20 - Present",
          expDescPlenty:
            "Started at Plenty Markets in 20 february 2020 as a Front-End developer. Since then I worked in multiple teams on various projects. Project team..",
          readMore: "Download Resume",
          expTitleUpwork: "FREELANCER",
          expDateUpwork: "Upwork / Dec 2019 - Feb 2021",
          expDescUpwork:
            "Worked as a freelancer, focusing on web developmnet. Helped multiple clients and companies (Philotimo Media, Stoica.co) to achieve their goals...",
          expTitle123: "FRONT-END ENGINEER",
          expDate123: "123FormBuilder / Aug 2018 - Dec 2019",
          expDesc123:
            "Started working at 123 in August 2018. In the first 7 months I worked on theWebsite team where I had the following responsibilities...",
          expTitleBm: "FRONT-END ENGINEER",
          expDateBm: "BlueMatrix / Apr 2018 - Aug 2018",
          expDescBm:
            "Moved out of Arad in February 2018 and started working at BlueMatrix in February as a Template Developer. The first weeks...",
          expTitleDigital:
            "Junior Web Developer / Junior QA Engineer",
          expDescDigital:
            "Started as a Junior Developer and Junior QA at Digital Garage Arad, where I learned HTML5, CSS, and JavaScript....",
          certificates: "Certificates",
          scrum: "SCRUM: THE BASICS",
          scrumLk: "Scrum Basics Linkedin Certificate",
          education: "Education",
          portfolioNavBar: "Simple navigation bar",
          cards: "Cards",
          scaleEffect: "Scale Effect",
          shadowEffect: "Shadow Effect",
          colorEffect: "Color Effect",
          homeComponentLi: "Home",
          about: "About",
          contact: "Contact",
          cookies: "Cookies",
          pagination: "Pagination",
          singleProduct: "Single Product",
          plainTshirt: "Plain T-shirt",
          colorHover: "Color",
          selectSize: "Plain T-shirt",
          addTo: "Add to cart",
          testimonialBoxes: "Testimonial Boxes",
          changeColors: "Change Colors"      
        },
      },

      de: {
        translation: {
          Iam: "Kompetenter Webentwickler für Ihre Projekte.",
          contactBtn: "Kontakt mich",
          portofolioBtn: "meine Arbeit",
          aboutMe: "Über mich",
          aboutText:
            "Ich bin ein Leiter digitaler Produkte mit über 8 Jahren Erfahrung, angetrieben von realen Herausforderungen und arbeite in einem schnelllebigen, digital orientierten Umfeld im Zusammenhang mit Verbraucherdienstleistungen. Ich arbeite in einem von KPIs gesteuerten Umfeld, in dem ich die Verantwortung habe, die beste Vorgehensweise zur Erreichung der Ziele festzulegen.",
            linkedinBtn: "LinkedIn Profil",
          mySkills: "Meine Fähigkeiten",
          feDev: "FRONT-END-ENTWICKLUNG",
          feDevDesc: "In der Wirtschaft und im Ingenieurwesen umfasst die Entwicklung neuer Produkte den gesamten Prozess der Markteinführung eines neuen Produkts.",
          qualityAssurance: "Qualitätskontrolle",
          qualityDescription:
            "In der Wirtschaft und im Ingenieurwesen umfasst die Entwicklung neuer Produkte den gesamten Prozess der Markteinführung eines neuen Produkts.",
          productManagement: "PRODUKT MANAGEMENT",
          productDesc:
            "In der Wirtschaft und im Ingenieurwesen umfasst die Entwicklung neuer Produkte den gesamten Prozess der Markteinführung eines neuen Produkts.",
          agileWorkflow: "AGILE WORKFLOW-SICHERUNG",
          agileDesc:
            "In der Wirtschaft und im Ingenieurwesen umfasst die Entwicklung neuer Produkte den gesamten Prozess der Markteinführung eines neuen Produkts.",
          workExperience: "Arbeitserfahrung",
          expTitlePlenty: "FRONT-END-INGENIEUR",
          expDatePlenty: "Plenty Markets / 20. Februar – Heute",
          expDescPlenty:
            "Produktleiter für die digitale neue Kartenanwendung in 7 Ländern. Partnerschaft mit GFK Market Research zur Durchführung internationaler Benutzerstudien zur Ermittlung der wichtigsten MVP-Funktionen sowie langfristiger Optimierungen ...",
          readMore: "mehr lesen",
          expTitleUpwork: "FREIBERUFLERIN",
          expDateUpwork: "Upwork / Dec 2019 - Feb 2021",
          expDescUpwork:
            "Produktleiter für die digitale neue Kartenanwendung in 7 Ländern. Partnerschaft mit GFK Market Research zur Durchführung internationaler Benutzerstudien zur Ermittlung der wichtigsten MVP-Funktionen sowie langfristiger Optimierungen...",
          expTitle123: "FRONT-END-INGENIEUR",
          expDate123: "123FormBuilder / Aug 2018 - Dec 2019",
          expDesc123:
            "Produktleiter für die digitale neue Kartenanwendung in 7 Ländern. Partnerschaft mit GFK Market Research zur Durchführung internationaler Benutzerstudien zur Ermittlung der wichtigsten MVP-Funktionen sowie langfristiger Optimierungen...",
          expTitleBm: "FRONT-END ENGINEER",
          expDateBm: "BlueMatrix / Apr 2018 - Aug 2018",
          expDescBm:
            "Produktleiter für die digitale neue Kartenanwendung in 7 Ländern. Partnerschaft mit GFK Market Research zur Durchführung internationaler Benutzerstudien zur Ermittlung der wichtigsten MVP-Funktionen sowie langfristiger Optimierungen...",
          expTitleDigital: "FRONT-END-INGENIEUR, QA-Ingenieur",
          expTitleDigital:
            "Junior Front-End-Entwickler / Junior QA-Ingenieur",
          expDescDigital:
            "Produktleiter für die digitale neue Kartenanwendung in 7 Ländern. Partnerschaft mit GFK Market Research zur Durchführung internationaler Benutzerstudien zur Ermittlung der wichtigsten MVP-Funktionen sowie langfristiger Optimierungen",
          certificates: "Zertifikate",
          scrum: "SCRUM: THE BASICS",
          scrumLk: "Scrum Basics LinkedIn-Zertifikat",
          education: "Ausbildung",
          portfolioNavBar: "Einfache Navigationsleiste",
          cards: "Karten",
          scaleEffect: "Skaleneffekt",
          shadowEffect: "Schatteneffekt",
          colorEffect: "Farbeffekt",
          homeComponentLi: "Heim",
          about: "Um",
          contact: "Kontakt",
          cookies: "Kekse",
          pagination: "Seitennummerierung",
          singleProduct: "Einzelnes Produkt",
          plainTshirt: "Einfaches T-Shirt",
          colorHover: "Farbe",
          selectSize: "Einfaches T-Shirt",
          addTo: "In den Warenkorb legen",
          testimonialBoxes: "Testimonial-Boxen",
          changeColors: "Farben ändern" 
        },
      },
    },
  });
