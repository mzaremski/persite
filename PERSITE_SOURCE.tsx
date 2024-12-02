import React from "react";
import { TwitterLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import type { PersiteSource } from "./persite_source_type";

/*
  README:
  - Fill persiteSource with your own content
  - Additionally, you need only to change:
     - public/avatar.jpg picture to your own
     - public/icon.png
  - There is no need to change anything else!
  - Give some love here: https://x.com/marcinzaremski
*/

const persiteSource: PersiteSource = {
  name: 'John Doe',
  slogan: 'Software Engineer & Creator',
  mainPageTitle: "John Doe | Software Engineer & Creator",
  mainPageDescription: "Full-stack developer, entrepreneur, and tech enthusiast.",
  theme: {
    projectSectionFirst: false,
    shouldShowBlogSection: false,
    blogInsideMainCard: false,
    background: 'FlyingOrbes',
    radixConfig: {
      appearance: 'dark',
      accentColor: 'indigo',
      grayColor: 'slate',
      radius: 'full',
      scaling: '110%',
    }
  },
  seo: {
    author: 'John Doe',
    twitterUsername: 'johndoe',
    locale: 'en_US',
  },
  headerSection: {
    personalDescription: 'A full-stack developer with experience in both startup and enterprise environments. Passionate about building scalable solutions and creating innovative products.',
    personalSlogan: 'Building the future, one line of code at a time!',
    typeAnimationSequence: [
      "\ developer",
      "n innovator",
      "\ creator",
      "n entrepreneur",
      "\ builder",
      "\ coder",
    ]
  },
  accordionSection: {
    title: 'Work with me as',
    items: [
      {title: 'A freelancer', content: FreelancerAccordionContent},
      {title: 'A contractor', content: ContractorAccordionContent},
      {title: 'A full time hire', content: FullTimeHireAccordionContent},
      {title: 'A co-founder', content: IndieHackerAccordionContent},
    ]
  },
  projectsSection: {
    title: 'Projects',
    items: [
      {
        title: 'ProjectAlpha',
        status: 'in_progress',
        badge: 'Q2 2024',
        badgeColor: 'gray',
        link: 'https://projectalphaplaceholder.com',
      },
      {
        title: 'BetaApp',
        status: 'in_progress',
        badgeColor: 'gray',
        badge: 'Q1 2024',
        link: '/placeholderbetaapp',
      },
      {
        title: 'GammaTools',
        status: 'released',
        badgeColor: 'gray',
        badge: 'Q2 2024',
        link: '/placeholdergammatools',
      },
      {
        title: 'DeltaService',
        status: 'released',
        badgeColor: 'green',
        badge: '500$/m',
        link: 'https://deltaserviceplaceholder.com',
      },
      {
        title: 'EpsilonLib',
        status: 'released',
        badgeColor: 'indigo',
        badge: '2023 | Free',
        link: 'https://epsilonlibplaceholder.com',
      },
    ]
  },
  socialSection: [
    {icon: () => <LinkedInLogoIcon />, link: 'https://www.linkedin.com/in/marcin-zaremski-8b3b4714b/'},
    {icon: () => <TwitterLogoIcon />, link: 'https://x.com/marcinzaremski'},
    {icon: () => <InstagramLogoIcon />, link: 'https://instagram.com/mrrrcin'},
    {icon: () => <GitHubLogoIcon />, link: 'https://github.com/mzaremski'},
  ]
}

export default persiteSource;

function FreelancerAccordionContent() {
  return (
    <div>
      Does your project need:
      <ul>
        <li>Technical expertise?</li>
        <li>Additional development support?</li>
        <li>Feature implementation?</li>
      </ul>

      In technologies such as:
      <ul>
        <li>Typescript/Javascript</li>
        <li>React/NextJS</li>
        <li>NodeJS</li>
        <li>SQL</li>
        <li>Cloud Services</li>
      </ul>

      Contact me: <a href="mailto:john@example.com">john@example.com</a><br/>
      Please include your project details and requirements. I will respond promptly.
    </div>
  )
}

function ContractorAccordionContent () {
  return (
    <div>
      <ul>
        <li>Need help with your startup idea?</li>
        <li>Looking to build an MVP?</li>
        <li>Want to create a custom solution?</li>
        <li>Have a technical challenge to solve?</li>
      </ul>
      Contact me: <a href="mailto:john@example.com">john@example.com</a><br />
      Include your project overview and timeline expectations.
    </div>
  )
}

function IndieHackerAccordionContent () {
  return (
    <div>
      <div className="AccordionContentText">
        Interested in building something together? Let's collaborate on innovative projects!
        Contact me here: <a href="mailto:john@example.com">john@example.com</a>
      </div>
    </div>
  )
}

function FullTimeHireAccordionContent () {
  return (
    <div>
      <div className="AccordionContentText">
        View my professional experience: <a href="/John_Doe_CV_2024.pdf">John_Doe_CV_2024.pdf</a>
      </div>
    </div>
  )
}
