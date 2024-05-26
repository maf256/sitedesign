import { Javascript } from "@mui/icons-material";
import { Component } from "react";

export const Data = {
    skills: {
        subject: {en:'Skills', nr:'Ferdigheter'},
        en: [
            {
                title: "Web Developer",
                detail: "HTML, CSS, JavaScript, React, Styled-components, PostgreSQL, Node.js, Express.js, Webpack, C++, WordPress, cPanel."
            },
            {
                title: "Project management",
                detail: "Git, GitHub, Scrum, Trello"
            },
            {
                title: "Education approved in Norway",
                detail: "Master in Business strategic 2013- 2015 , Bachelor in Computer engineering 2011 - 2013 , Associate in Computer Science 2001 - 2004"                
            },
            {
                title: "Language",
                detail: "Norwegian B1, English A2, Persian mother tongue"
            },
            {
                title: "Personal",
                detail: "I am a hard-working developer with extensive experience in programming and IT support. Through the guidance of teams, I have achieved documentable results for increased knowledge and efficiency in various software and IT systems. I am easy to get in touch with and am an intuitive communicator who contributes to effective cross-cultural cooperation.",                
            }
        ],
        nr:[
            
            {
                title: "Webutvikler",
                detail: "HTML, CSS, JavaScript, React, Styled-components, PostgreSQL, Node.js, Express.js, Webpack, C++, WordPress, cPanel.",
            },
            {  
                title: "Prosjektledelse",
                detail: "Git, GitHub, Scrum, Trello",
            },
        
            {
                title: "Utdanning godkjent i Norge",
                detail: "Master in Business strategic 2013- 2015 , Bachelor in Computer engineering 2011 - 2013 , Associate in Computer Science 2001 - 2004",
    
            },
            {
                title: "Språk",
                detail: "Norwegian B1, English A2, Persian Morsmål",
            },
            {
    
                title: "Personlige",
                detail: "Jeg er en hardtarbeidende utvikler med lang erfaring fra programing og IT-støtte. Gjennom veiledning av team har jeg oppnådd dokumenterbare resultater for økt kunnskap og effektivitet i forskjellige software- og IT systemer. Jeg er lett å komme i kontakt med og er en intuitiv formidler som bidrar til effektivt tverrkulturelt samarbeid."        }    
        ] 
    },
    menu: {
        en: [
            {name: 'Home', href: '/'},
            {name: 'About', href: '/about'},
            // {name: 'Service', href: '/service'},
            // {name: 'Portfolio', href: '/Portfolio'},
            // {name: 'News', href: '/news'},
            {name: 'Contact', href: '/contact'},
            {name: 'Booking', href: '/booking'},
            // {name: 'Hire me', href: '/hire'},
            {name: 'Resume', href: 'https://drive.google.com/file/d/1AUXQs1DgOlSjh2PBzUaiYqGaeFiZHkDd/view'},
            {name: 'Education', href: 'https://drive.google.com/file/d/1ik8Ajr50lamXsje0qRqjnsmJIjM2e9Xd/view'},
            ],
        nr: [
            {name: 'Hjem', href: '/'},
            {name: 'Om meg', href: '/about'},
            // {name: 'Ferdigheter', href: '/service'},
            // {name: 'Portefølje', href: '/Portfolio'},
            // {name: 'Nyheter', href: '/news'},
            {name: 'Kontakt', href: '/contact'},
            {name: 'Bestilling', href: '/booking'},
            {name: 'CV-en', href: 'https://drive.google.com/file/d/1AUXQs1DgOlSjh2PBzUaiYqGaeFiZHkDd/view'},
            {name: 'Utdanning', href: 'https://drive.google.com/file/d/1ik8Ajr50lamXsje0qRqjnsmJIjM2e9Xd/view'},

            
        ]
    },
    home: {
        nr: {
                name: 'Majid Askarifarsangi',
                subject: 'Jeg er en software ingeniør og webutvikler.',
                text1: "Jeg tar gjerne en digitalt prat eller møtes over en kaffekopp.",
                text2: 'Jeg bygger ting for nettet.'
            },
        en: {
                name: 'Majid Askarifarsangi',
                subject: "I am a software engineer and web developer.",
                text1: "I like to have a digital chat or meet over a cup of coffee.",
                text2: 'I build things for the web.'
            }
    },
    about: {
        nr: {
            subject: 'Om meg',
            h1: 'Majid Askarifarsangi',
            h2: 'Webutvikler',
            txt1: 'Hei, Jeg er Majid og min store lidenskap for koding gjorde at jeg begynte å programmere da jeg gikk på videregående. Jeg har jobbet som webutvikler, IT-konsulent, innen hardware og software support også. Jeg har en Associate i computer science og bachelorgrad i computer engineering. Jeg har opparbeidet meg solid kunnskap innen moderne frontend- utvikling og litt backend utvikling og metoder.',
            txt2: 'Min primære tekniske kompetanse befinner meg 4 år innenfor JavaScript, HTML5/CSS3 og 3 år innenfor React og Styled component. jeg har litt erfaring om PostgreSQL, Node.js, Express.js og byggeverktøy som Webpack. Jeg har også erfaring med å sette opp nettsider med Wordpress og administrere AWS-server og Cpanel for flere kunder.',
            info: [
                {name:'Fødselsdag', data: '30.03.1983'},
                {name:'Alder', data: '40'},
                {name:'Adresse', data: '1338 Sandvika Norway'},
                {name:'E-post', data: 'majid@sitedesign.no'},
                {name:'Telefonnummer', data: '+47 40189111'},
                {name:'Nasjonalitet', data: 'Iran'},
                {name:'Studere', data: 'Azad University of Iran'},
                {name:'Grad', data: 'Master'},
                {name:'Interest', data: 'Playing Football'},
                {name:'Frilans', data: 'Tilgjengelig'},
            ],
            buttonName: 'Last ned CV',
            education: [
                {date: '2001 - 2004', name: 'Associate in Computer Science', uni: 'AZAD University of IRAN'},
                {date: '2011 - 2013', name: 'Bachelor in Computer engineering', uni: 'AZAD University of IRAN'},
                {date: '2013 - 2015', name: 'Master in Business strategic', uni: 'PNU University of IRAN'}            
            ],
            experience: [
                {date: '2021', name: 'Konsulenthus Oslo', uni: 'Fullstack webutvikling'},
                {date: '2022', name: 'TechPros Oslo', uni: 'Fullstack webutvikling'},
                {date: '2023', name: 'Osloweb Sandvika', uni: 'Fullstack webutvikling'}            
            ],

            educationTitlle: 'Utdanning',
            experienceTitlle: 'Erfaring',

            knowledge: {
                knowledge: 'Kunnskap',
                frontend: ['HTML','CSS','JavaScript', 'React','Next.js', 'Styled-components', 'React-query', 'Axios', 'Bootstrap', 'Material UI'],
                backend: ['Node.js', 'Express.js', 'SQL Server', 'PostgreSQL','Webpack']
            }
            
        },
        en: {
            subject: 'About me',
            h1: 'Majid Askarifarsangi',
            h2: 'Web Developer',
            txt1: `Hi, I'm Majid and my great passion for coding made me start programming when I was in high school. I have worked as a web developer, IT consultant, in hardware and software support as well. I have an Associate's degree in computer science and a bachelor's degree in computer engineering. I have gained solid knowledge in modern frontend development and some backend development and methods.`,
            txt2: 'My primary technical expertise is 4 years within JavaScript, HTML5/CSS3 and 3 years within React and Styled components. I have some experience with PostgreSQL, Node.js, Express.js and building tools such as Webpack. I also have experience setting up websites with Wordpress and managing AWS server and Cpanel for several clients.',
            info: [
                {name:'Birthday', data: '30.03.1983'},
                {name:'Age', data: '40'},
                {name:'Address', data: '1338 Sandvika Norway'},
                {name:'Email', data: 'majid@sitedesign.no'},
                {name:'Phone', data: '+47 40189111'},
                {name:'Nationality', data: 'Iran'},
                {name:'Study', data: 'Azad University of Iran'},
                {name:'Degree', data: 'Master'},
                {name:'Interest', data: 'Playing Football'},
                {name:'Freelance', data: 'Available'},
            ],
            buttonName: 'Download CV',

            education: [
                {date: '2001 - 2004', name: 'Associate in Computer Science', uni: 'AZAD University of IRAN'},
                {date: '2011 - 2013', name: 'Bachelor in Computer engineering', uni: 'AZAD University of IRAN'},
                {date: '2013 - 2015', name: 'Master in Business strategic', uni: 'PNU University of IRAN'}
            ],
            experience: [
                {date: '2021', name: 'Konsulenthus Oslo', uni: 'Fullstack Web development'},
                {date: '2022', name: 'TechPros Oslo', uni: 'Fullstack Web development'},
                {date: '2023', name: 'Osloweb Sandvika', uni: 'Fullstack Web development'}            
            ],

            educationTitlle: 'Education',
            experienceTitlle: 'Experience',
            knowledge: {
                knowledge: 'Knowledge',
                frontend: ['HTML','CSS','JavaScript', 'React.js','Next.js', 'Styled-components', 'React-query', 'Axios', 'Bootstrap', 'Material UI'],
                backend: ['Node.js', 'Express.js', 'SQL Server', 'PostgreSQL','Webpack']
            }
        }
    },
    contact : {
        nr: {
            subject: 'Kontakt',
            h1: 'Ta Kontakt',
            h2: 'La oss sende oss e-post',
            buttonName: 'Sende melding',
            name: 'Navnet ditt',
            email: 'Din epost',
            message: 'Din beskjed',
            sent: 'Din melding har blitt sendt.',
            err: 'Meldingen din ble ikke sendt'

        },
        en: {
            subject: 'Contact',
            h1: 'Get in Touch',
            h2: `Let's send us email`,
            buttonName: 'Send Message',
            name: 'Your name',
            email: 'Your email',
            message: 'Your message',
            sent: 'Your message has been sent.',
            err: 'Your message was not sent'
        },
    },
    booking : {
        nr: {
            subject: 'Bestilling',
            textlabel: 'bestill time nå',
            h1: 'Trenger du en nettside, nettbutikk, netløsning, konsulent eller webutvikler?',
            h2: 'Bestill et møte med meg.',
            h3: 'Første møte er gratis.',
            buttonName: 'Sende melding',
            name: 'Navnet ditt',
            email: 'Din epost',
            message: 'Din beskjed',
            sent: 'Din melding har blitt sendt.',
            err: 'Meldingen din ble ikke sendt'

        },
        en: {
            subject: 'Booking',
            textlabel: 'Book an appointmentnå',
            h1: 'Do you need a website, online store, web solution, consultant or web developer?',
            h2: `Book a meeting with me.`,
            h3: `The first meeting is free.`,
            buttonName: 'Send Message',
            name: 'Your name',
            email: 'Your email',
            message: 'Your message',
            sent: 'Your message has been sent.',
            err: 'Your message was not sent'
        },
    }
    
}

