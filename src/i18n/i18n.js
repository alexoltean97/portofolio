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
            "In business and engineering, new product development covers the complete process of bringing a new product to market.",
          qualityAssurance: "Quality Assurance",
          qualityDescription:
            "In business and engineering, new product development covers the complete process of bringing a new product to market.",
          productManagement: "PRODUCT MANAGEMENT",
          productDesc:
            "In business and engineering, new product development covers the complete process of bringing a new product to market.",
          agileWorkflow: "AGILE WORKFLOW ASSURANCE",
          agileDesc:
            "In business and engineering, new product development covers the complete process of bringing a new product to market.",
          workExperience: "Work Experience",
          expTitlePlenty: "FRONT-END ENGINEER",
          expDatePlenty: "Plenty Markets / Feb 20 - Present",
          expDescPlenty:
            "Product lead for the Digital New Card Application across 7 countries. Partnered with GFK Market Research to conduct international user studies to determine core MVP features, plus long-term optimizations... ",
          readMore: "Read More",
          expTitleUpwork: "FREELANCER",
          expDateUpwork: "Upwork / Dec 2019 - Feb 2021",
          expDescUpwork:
            "Product lead for the Digital New Card Application across 7 countries. Partnered with GFK Market Research to conduct international user studies to determine core MVP features, plus long-term optimizations..",
          expTitle123: "FRONT-END ENGINEER",
          expDate123: "123FormBuilder / Aug 2018 - Dec 2019",
          expDesc123:
            "Product lead for the Digital New Card Application across 7 countries. Partnered with GFK Market Research to conduct international user studies to determine core MVP features, plus long-term optimizations...",
          expTitleBm: "FRONT-END ENGINEER",
          expDateBm: "BlueMatrix / Apr 2018 - Aug 2018",
          expDescBm:
            "Product lead for the Digital New Card Application across 7 countries. Partnered with GFK Market Research to conduct international user studies to determine core MVP features, plus long-term optimizations...",
          expTitleDigital: "FRONT-END ENGINEER, QA Engineer",
          expTitleDigital:
            "Junior Web Developer / Junior QA Engineer",
          expDescDigital:
            "Product lead for the Digital New Card Application across 7 countries. Partnered with GFK Market Research to conduct international user studies to determine core MVP features, plus long-term optimizations...",
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
