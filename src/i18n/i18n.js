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
          expTitleDigital: "Junior Web Developer / Junior QA Engineer",
          expDescDigital:
            "Started as a Junior Developer and Junior QA at Digital Garage Arad, where I learned HTML5, CSS, and JavaScript....",
          certificates: "Certificates",
          scrum: "SCRUM: THE BASICS",
          scrumLk: "Scrum Basics Linkedin Certificate",
          agileLkTitle: "Agile Product Owner Role:Foundations",
          agileLk: "Agile LinkedIn Certificate",
          agileMeth: "ETC Training Center Agile Methodologies",
          agileMethDesc:
            "Certified in Agile Methodologies after finishing the training at ETC Timisoara under trainer Daniel Bako",
          itSchoolTitle: "IT School PHP&MYSQL Course",
          itSchoolDesc: "PHP and MySql at IT SCHOOL TIMISOARA",
          cambridge: "Cambridge FCE",
          cambridgeDesc:
            "Took my Cambridge FCE diploma in high school. I was awarded level B at the FCE exam",
          education: "Education",
          bachelorDegree: "Bachelor's degree - University Aurel Vlaicu",
          computerScience: "Computer Science",
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
          changeColors: "Change Colors",
          webComponentsPortofolio: "React Web Components Portofolio",
          searchFor: "Search for product",
          inputSearch: "Search",
          inputSearchDot: "Search...",
          singleProduct: "Single Product",
          themeSettings: "Theme Settings",
          color: "Color",
          shoppingCart: "Shopping Cart",
          emptyCart: "You have an empty cart",
          roundedNavigation: "Rounded navigation bar",
          sideMenu: "Side Navigation",
          cookiesConsent: "Cookies Consent",
          cookiesPolicy: "Cookies Policy",
          cookiesThisWebsite:
            "This website use cookies to ensure you get the best experience on our website.",
          understand: "I understand",
          next: "Next",
          previous: "Previous",
          dashboard: "Dashboard",
          revenue: "Revenue",
          notifications: "Notifications",
          analytics: "Analytics",
          likes: "Likes",
          wallets: "Wallets",
          logout: "Logout",
          mode: "Mode",
          dark: "Dark Modus",
          light: "Light Modus",
          emptyCart: "You have an empty cart",
          subTotal: "Sub Total",
          shipping: "Shipping",
          total: "Total",
          bundleDiscount: "Bundle Discount",
          bundleDiscountDesc:
            "Get each landing page for just $30 when you commit to 10 or more. This is an incredible opportunity to save while scaling up your digital presence.",
          directImplementation: "Direct Implementation:",
          directImplementationDesc:
            "You provide the designs, and I convert them into fully functional, responsive landing pages. Just hand over your design files, and I will take care of the coding.",
          optimizedForAllDevices: "Optimized for All Devices",
          optimizedForAllDevicesDesc:
            "Every landing page will be responsive, ensuring optimal performance on desktop, tablet, and mobile devices. Speed optimization is also included to enhance user experience and retention.",
          conversionFocused: "Conversion Focused",
          conversionFocusedDesc:
            "With your designs and my technical expertise, each page will be fine-tuned for user engagement and conversions. I ensure interactive elements are perfectly implemented for maximum impact.",
          seoFriendly: "SEO-Friendly",
          seoFriendlyDesc:
            "Your landing page will be developed with SEO best practices in mind, ensuring it’s ready to perform in search engines and attract organic traffic.",
          professionalCoding: "Professional Coding of Your Provided Designs",
          fullResponsiveness: "Full Responsiveness for All Device",
          quickLoadTimes: "Quick Load Times and Performance Optimization",
          basicSEOSetup: "Basic SEO Setup",
          crossBrowserCompatibility: "Cross-Browser Compatibility.",
          integrationWithMarketingTools:
            "Seamless Integration with Your Marketing Tools and Social Media ",
          integrationWithSystems:
            "Integration with Existing Systems and Social Media",
          developInPageBuilders: "Develop in page builders",
          designSubmission: "Design Submission",
          designSubmissionDesc:
            "Send over your designs in any popular format (PSD, Figma, etc.).",
          efficientDevelopment: "Efficient Development",
          efficientDevelopmentDesc:
            "I’ll systematically convert your designs into live, high-performing landing pages.",
          reviewProcess: "Review Process:",
          reviewProcessDesc:
            "We’ll go through each page together to ensure everything is up to your standards.",
          launch: "Launch",
          launchDesc: "Once fully approved, your landing pages will go live.",
          directImplementation: "Direct Implementation",
          directDescription:
            "Provide your own design, and I will transform it into a fully functional and responsive landing page. Just hand over the design files, and I'll handle the rest.",
          affordableRate: "Fixed Affordable Rate",
          affordableRateDesc:
            "For only $40 per landing page, you get a professionally coded page without hidden costs or surprise",
          responsiveFast: "Responsive and Fast",
          responsiveFastDesc:
            "I ensure your landing page is optimized for both desktop and mobile devices, providing a seamless experience for all users. Plus, speed optimization is a standard, so your page loads quickly.",
          devDesc:
            "From gathering your project's requirements to bringing it live, I handle everything. We'll start from sketch, move to design, and then development, ensuring your vision is realized every step of the way.",
          reviewTitle: "Review & Adjustments",
          reviewDesc:
            "Review the implemented page. I'll make any necessary adjustments to ensure it meets your expectations.",
          expertiseTitle: "Expertise",
          expertiseDesc:
            "With years of experience in front-end development, I specialize in creating beautiful and responsive websites that cater specifically to small businesses. Whether you're in retail, services, or any other industry, I can tailor a solution that fits your needs and budget.",
          affordaRate2: "Affordable Rate",
          affordRateDesc:
            "At just $40 per hour, you're investing in top-notch quality that won't break the bank. This package is designed to deliver maximum value for small businesses.",
          responsiveDesignTitle: "Responsive Design",
          responsiveDesignDesc:
            "With the majority of internet traffic coming from mobile devices, having a responsive design is crucial. I guarantee your site will look great and function perfectly on all devices and browsers.",
          customUI: "Custom UI/UX Design",
          mobileAndTablet: "Mobile and Tablet Optimization",
          perfromanceOptimizationTitle: "Performance Optimization.",
          consultationTitle: "Consultation",
          consultationDescription:
            "We start with a brief consultation to understand your vision and requirements.",
          projectManagementTitle: "Project Management",
          projectManagementDesc:
            "From gathering your project's requirements to bringing it live, I handle everything. We'll start from sketch, move to design, and then development, ensuring your vision is realized every step of the way.",
          getStartedTitle: "Ready to get started?",
          getStartedDesc:
            "Place your order now or send a message for any inquiries. Let’s build a website that not only looks great but also performs excellently and grows your business.",
            smallTitle: "Front End - Small Business Package - Starting 50$ per hour",
          smallBusinessIntro:
            "🚀 Boost Your Business with Professional Front-End Development! Welcome to the Front End - Small Business Package! Are you ready to take your business to the next level with a stunning, user-friendly website? Look no further!",
          whyChooseGig: "Why Choose This Gig?",
          expertise: "Expertise",
          expertiseText:
            "With years of experience in front-end development, I specialize in creating beautiful and responsive websites that cater specifically to small businesses. Whether you're in retail, services, or any other industry, I can tailor a solution that fits your needs and budget.",
          assurance: "Quality Assurance",
          assuranceText:
            "Specializing in both manual and automated testing, I swiftly identify and rectify flaws, ensuring each product stands up to the promises of quality",
          budgetFriendly: "Budget-Friendly",
          budgetText:
            "At an affordable rate of $50 per hour, I aim to support your business's growth without straining your finances.  Ideal for small businesses aiming for growth without high expenses.",
           responsive: "Responsive Design",
           responsiveDesc: "With the majority of internet traffic coming from mobile devices, having a responsive design is crucial. I will ensure your site will look great and function perfectly on all devices and browsers.",
           seo: "SEO-Friendly",
           seoDesc: 'Your landing page will be developed with SEO best practices in mind, ensuring it’s ready to perform in search engines and attract organic traffic.', 
           howWorks: "How it works?",
           whyGig: "Why choose this gig?",
           consultationDesc: "Our collaboration will begin with a consultation, where we take the time to learn about your vision,budget and expectations. This meeting will help me create a tailored plan suited for your project and explain the starting steps.",
           projectManagementDesc: "I will manage the project from inception to completion, focusing on optimal resource allocation and risk mitigation to deliver projects that meet all objectives and quality standards",
           ready: "Ready to get started?",
           readyDesc: "Place your order now or send a message for any inquiries. Let’s build a website that not only looks great but also performs excellently and grows your business.",
           bookFiver: "Book on Fiver",
           meeting: "Schedule a Metting",
           whatsIncluded: "What's included?",
           landingPagePackage: "🚀 Transform your design into a functional landing page! Have a design ready for your landing page? Let me bring it to life with high-quality front-end development that converts!",
           landingPageTitle: " Front End: Small Business Landing Page Package - 40$ per Landing Page",
           providedDesign: "Implementation of Your Provided Design",
           integration: "Integration with Existing System",
           develop: "Develop in page builders",
           bundleTitle: "Front End: Small Business Landing Page Package - 30$ per Landing Page (Minimun 10 pages)",
           bundleDescription: "🚀 Supercharge Your Business with a Bundle of Professionally Coded Landing Pages! Need multiple landing pages? Take advantage of this exclusive offer where you get each page at a reduced rate of $30, provided you need at least 10 pages. Perfect for campaigns, product launches, or a complete site overhaul!", 
           checkGigs: "Check out my gigs",
           diverseGigs: "Explore my diverse gigs and find the perfect match for your project needs.",
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
          feDevDesc:
            "In der Wirtschaft und im Ingenieurwesen umfasst die Entwicklung neuer Produkte den gesamten Prozess der Markteinführung eines neuen Produkts.",
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
          expTitleDigital: "Junior Front-End-Entwickler / Junior QA-Ingenieur",
          expDescDigital:
            "Produktleiter für die digitale neue Kartenanwendung in 7 Ländern. Partnerschaft mit GFK Market Research zur Durchführung internationaler Benutzerstudien zur Ermittlung der wichtigsten MVP-Funktionen sowie langfristiger Optimierungen",
          certificates: "Zertifikate",
          scrum: "SCRUM: THE BASICS",
          scrumLk: "Scrum Basics LinkedIn-Zertifikat",
          agileLkTitle: "Agile Product Owner Role:Foundations",
          agileLk: "Agile LinkedIn-Zertifikat",
          agileMeth: "ETC Training Center Agile Methodologies",
          agileMethDesc:
            "Zertifiziert in agilen Methoden nach Abschluss der Ausbildung am ETC Timisoara unter Trainer Daniel Bako",
          itSchoolTitle: "IT School PHP&MYSQL Course",
          itSchoolDesc: "PHP and MySql at IT SCHOOL TIMISOARA",
          cambridge: "Cambridge FCE",
          cambridgeDesc:
            "Habe mein Cambridge FCE-Diplom in der High School gemacht. Bei der FCE-Prüfung habe ich die Stufe B erhalten",
          education: "Ausbildung",
          bachelorDegree: "Bachelor-Abschluss - Universität Aurel Vlaicu",
          computerScience: "Informatik",
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
          changeColors: "Farben ändern",
          webComponentsPortofolio: "React Web Components Portofolio",
          searchFor: "Nach Produkt suchen",
          inputSearch: "Suchen",
          singleProduct: "Einzelnes Produkt",
          inputSearchDot: "Suchen...",
          themeSettings: "Themen Einstellungen",
          color: "Farbe",
          shoppingCart: "Einkaufswagen",
          emptyCart: "Ihr Warenkorb ist leer",
          roundedNavigation: "Abgerundete Navigationsleiste",
          sideMenu: "Seitennavigation",
          cookiesConsent: "Einwilligung zu Cookies",
          cookiesPolicy: "Cookie-Richtlinie",
          cookiesThisWebsite:
            "Diese Website verwendet Cookies, um sicherzustellen, dass Sie auf unserer Website das bestmögliche Erlebnis haben.",
          understand: "Ich verstehe",
          next: "Nächste",
          previous: "Vorherige",
          dashboard: "Armaturenbrett",
          revenue: "Einnahmen",
          notifications: "Benachrichtigungen",
          analytics: "Analytik",
          likes: "Likes",
          wallets: "Geldbörsen",
          logout: "Ausloggen",
          mode: "Thema",
          dark: "Dunkler Modus",
          light: "Licht Modus",
          emptyCart: "Ihr Warenkorb ist leer",
          subTotal: "Zwischensumme",
          shipping: "Versand",
          total: "Gesamt",
          bundleDiscount: "Bundle-Rabat",
          bundleDiscountDesc:
            "Erhalten Sie jede Landingpage für nur 30 $, wenn Sie sich für 10 oder mehr entscheiden. Dies ist eine unglaubliche Gelegenheit, Geld zu sparen und gleichzeitig Ihre digitale Präsenz zu vergrößern.",
          directImplementation: "Direkte Implementierung:",
          directImplementationDesc:
            "Sie liefern die Designs und ich konvertiere sie in voll funktionsfähige, responsive Landingpages. Geben Sie mir einfach Ihre Designdateien und ich kümmere mich um die Codierung.",
          optimizedForAllDevices: "Optimiert für alle Geräte",
          optimizedForAllDevicesDesc:
            "Jede Zielseite ist responsiv und gewährleistet so eine optimale Leistung auf Desktops, Tablets und Mobilgeräten. Geschwindigkeitsoptimierung ist ebenfalls enthalten, um die Benutzererfahrung und -bindung zu verbessern.",
          conversionFocused: "Konvertierungsorientiert",
          conversionFocusedDesc:
            "Mit Ihren Designs und meinem technischen Fachwissen wird jede Seite auf Benutzerinteraktion und Konvertierungen abgestimmt. Ich sorge dafür, dass interaktive Elemente perfekt umgesetzt werden, um eine maximale Wirkung zu erzielen.",
          seoFriendly: "SEO-freundlich",
          seoFriendlyDesc:
            "Ihre Zielseite wird unter Berücksichtigung von SEO-Best Practices entwickelt, um sicherzustellen, dass sie in Suchmaschinen funktioniert und organischen Traffic anzieht.",
          professionalCoding: "Professionelle Codierung Ihrer bereitgestellten Designs",
          fullResponsiveness: "Volle Reaktionsfähigkeit für alle Geräte",
          quickLoadTimes: "Schnelle Ladezeiten und Leistungsoptimierung",
          basicSEOSetup: "Grundlegendes SEO-Setup",
          crossBrowserCompatibility: "Cross-Browser-Kompatibilität.",
          integrationWithMarketingTools:
            "Nahtlose Integration mit Ihren Marketing-Tools und sozialen Medien ",
          integrationWithSystems:
            "Integration mit bestehenden Systemen und sozialen Medien",
          developInPageBuilders: "Entwickeln Sie in Seitenerstellern",
          designSubmission: "Design-Einreichung",
          designSubmissionDesc:
            "Senden Sie Ihre Designs in einem beliebigen gängigen Format (PSD, Figma usw.).",
          efficientDevelopment: "Efficient Development",
          efficientDevelopmentDesc:
            "Ich werde Ihre Designs systematisch in eine leistungsstarke, lebendige Landingpage umwandeln.",
          reviewProcess: "Überprüfungsprozess:",
          reviewProcessDesc:
            "Wir gehen jede Seite gemeinsam durch, um sicherzustellen, dass alles Ihren Standards entspricht.",
          launch: "Start",
          launchDesc: "Sobald Ihre Landingpages vollständig genehmigt sind, werden sie online geschaltet.",
          directImplementation: "Direkte Implementierung",
          directDescription:
            "Stellen Sie Ihr eigenes Design zur Verfügung und ich werde es in eine voll funktionsfähige und responsive Landingpage umwandeln. Geben Sie einfach die Designdateien ab, ich kümmere mich um den Rest.",
          affordableRate: "Fester, erschwinglicher Preis",
          affordableRateDesc:
            "Für nur 40 $ pro Landingpage erhalten Sie eine professionell codierte Seite ohne versteckte Kosten oder Überraschungen",
          responsiveFast: "Reaktionsschnell und schnel",
          responsiveFastDesc:
            "ch stelle sicher, dass Ihre Landingpage sowohl für Desktop- als auch für Mobilgeräte optimiert ist und allen Benutzern ein nahtloses Erlebnis bietet. Außerdem ist die Geschwindigkeitsoptimierung Standard, sodass Ihre Seite schnell geladen wird.",
          devDesc:
            "Von der Erfassung der Anforderungen Ihres Projekts bis hin zur Live-Übertragung kümmere ich mich um alles. Wir beginnen mit der Skizze, gehen zum Design und dann zur Entwicklung über und stellen sicher, dass Ihre Vision bei jedem Schritt verwirklicht wird.",
          reviewTitle: "Überprüfung und Anpassungen",
          reviewDesc:
            "Überprüfen Sie die implementierte Seite. Ich werde alle notwendigen Anpassungen vornehmen, um sicherzustellen, dass es Ihren Erwartungen entspricht.",
          expertiseTitle: "Sachverstand",
          expertiseDesc:
            "Mit jahrelanger Erfahrung in der Frontend-Entwicklung bin ich auf die Erstellung ansprechender und responsiver Websites spezialisiert, die sich speziell an kleine Unternehmen richten. Ganz gleich, ob Sie im Einzelhandel, im Dienstleistungssektor oder in einer anderen Branche tätig sind, ich kann eine Lösung maßschneidern, die Ihren Anforderungen und Ihrem Budget entspricht.",
          affordaRate2: "Erschwinglicher Preis",
          affordRateDesc:
            "Bei nur 50 US-Dollar pro Stunde investieren Sie in erstklassige Qualität, die Ihr Budget nicht sprengt. Dieses Paket ist darauf ausgelegt, kleinen Unternehmen den größtmöglichen Nutzen zu bieten.",
          responsiveDesignTitle: "Sich anpassendes Design",          
          responsiveDesignDesc:
            "Da der Großteil des Internetverkehrs über mobile Geräte erfolgt, ist ein responsives Design von entscheidender Bedeutung. Ich garantiere, dass Ihre Website auf allen Geräten und Browsern großartig aussieht und perfekt funktioniert.",
          customUI: "Benutzerdefiniertes UI/UX-Design",
          mobileAndTablet: "Optimierung für Mobilgeräte und Tablets",
          perfromanceOptimizationTitle: "Performance Optimization.",
          consultationTitle: "Leistungsoptimierung",
          consultationDescription:
            "Wir beginnen mit einer kurzen Beratung, um Ihre Vision und Anforderungen zu verstehen.",
          projectManagementTitle: "Projektmanagement",
          projectManagementDesc:
            "Von der Erfassung der Anforderungen Ihres Projekts bis hin zur Live-Übertragung kümmere ich mich um alles. Wir beginnen mit der Skizze, gehen zum Design und dann zur Entwicklung über und stellen sicher, dass Ihre Vision bei jedem Schritt verwirklicht wird.",
          getStartedTitle: "Bereit anzufangen?",
          getStartedDesc:
            "Geben Sie jetzt Ihre Bestellung auf oder senden Sie bei Fragen eine Nachricht. Lassen Sie uns eine Website erstellen, die nicht nur großartig aussieht, sondern auch eine hervorragende Leistung erbringt und Ihr Geschäft wachsen lässt.",
            smallTitle: "Frontend – Paket für kleine Unternehmen – ab 50 $ pro Stunde",
            smallBusinessIntro:
              "🚀 Steigern Sie Ihr Geschäft mit professioneller Front-End-Entwicklung! Willkommen beim Front End – Small Business Package! Sind Sie bereit, Ihr Unternehmen mit einer beeindruckenden, benutzerfreundlichen Website auf die nächste Stufe zu heben? Suchen Sie nicht weiter!",
            whyChooseGig: "Warum diesen Auftritt wählen?",
            expertise: "Sachverstand",
            expertiseText:
              "Mit jahrelanger Erfahrung in der Frontend-Entwicklung bin ich auf die Erstellung ansprechender und responsiver Websites spezialisiert, die sich speziell an kleine Unternehmen richten. Ganz gleich, ob Sie im Einzelhandel, im Dienstleistungssektor oder in einer anderen Branche tätig sind, ich kann eine Lösung maßschneidern, die Ihren Anforderungen und Ihrem Budget entspricht.",
            assurance: "Qualitätskontrolle",
            assuranceText:
              "Da ich sowohl auf manuelle als auch automatisierte Tests spezialisiert bin, identifiziere und behebe ich Fehler schnell und stelle sicher, dass jedes Produkt den Qualitätsversprechen gerecht wird",
            budgetFriendly: "Budgetfreundlich",
            budgetText:
              "Mit einem erschwinglichen Stundensatz von 50 US-Dollar möchte ich das Wachstum Ihres Unternehmens unterstützen, ohne Ihre Finanzen zu belasten. Ideal für kleine Unternehmen, die Wachstum ohne hohe Kosten anstreben..",
             responsive: "Sich anpassendes Design",
             responsiveDesc: "Da der Großteil des Internetverkehrs über mobile Geräte erfolgt, ist ein responsives Design von entscheidender Bedeutung. Ich sorge dafür, dass Ihre Website auf allen Geräten und Browsern großartig aussieht und perfekt funktioniert.",
             seo: "SEO-freundlich",
             seoDesc: 'Ihre Zielseite wird unter Berücksichtigung von SEO-Best Practices entwickelt, um sicherzustellen, dass sie in Suchmaschinen funktioniert und organischen Traffic anzieht.', 
             howWorks: "Wie es funktioniert",
             whyGig: "Warum diesen Auftritt wählen?",
             consultationDesc: "Unsere Zusammenarbeit beginnt mit einem Beratungsgespräch, bei dem wir uns die Zeit nehmen, Ihre Vision, Ihr Budget und Ihre Erwartungen kennenzulernen. Dieses Treffen wird mir helfen, einen maßgeschneiderten Plan für Ihr Projekt zu erstellen und die ersten Schritte zu erläutern.",
             projectManagementDesc: "Ich werde das Projekt von Anfang bis Ende leiten und mich dabei auf eine optimale Ressourcenzuweisung und Risikominderung konzentrieren, um Projekte zu liefern, die alle Ziele und Qualitätsstandards erfüllen",
             ready: "Bereit anzufangen?",
             readyDesc: "Geben Sie jetzt Ihre Bestellung auf oder senden Sie bei Fragen eine Nachricht. Lassen Sie uns eine Website erstellen, die nicht nur großartig aussieht, sondern auch eine hervorragende Leistung erbringt und Ihr Geschäft wachsen lässt.",
             bookFiver: "Buchen Sie auf Fiverr",
             meeting: "Vereinbaren Sie ein Treffen",
             whatsIncluded: "Was ist inbegriffen?",
             landingPagePackage: "🚀 Verwandeln Sie Ihr Design in eine funktionale Landingpage! Haben Sie ein Design für Ihre Landingpage parat? Lassen Sie mich es mit einer hochwertigen Frontend-Entwicklung zum Leben erwecken, die konvertiert!",
             landingPageTitle: "Frontend: Landingpage-Paket für kleine Unternehmen – 40 $ pro Landingpage",
             providedDesign: "Umsetzung Ihres bereitgestellten Designs",
             integration: "Integration mit bestehendem System",
             develop: "Entwickeln Sie in Seitenerstellern",
             bundleTitle: "Frontend: Landingpage-Paket für kleine Unternehmen – 30 $ pro Landing page (mindestens 10 Seiten)",
             bundleDescription: "🚀 Bringen Sie Ihr Geschäft mit einem Paket professionell codierter Landing Pages voran! Benötigen Sie mehrere Landingpages? Profitieren Sie von diesem exklusiven Angebot, bei dem Sie jede Seite zu einem reduzierten Preis von 30 $ erhalten, vorausgesetzt, Sie benötigen mindestens 10 Seiten. Perfekt für Kampagnen, Produkteinführungen oder eine komplette Website-Überarbeitung!", 
             checkGigs: "Schauen Sie sich meine Auftritte an!",
             diverseGigs: "Entdecken Sie meine vielfältigen Auftritte und finden Sie die perfekte Lösung für Ihre Projektanforderungen.",
        },
      },
    },
  });
