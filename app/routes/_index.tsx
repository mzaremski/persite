import type { MetaFunction } from "@vercel/remix";
import { Link } from "@remix-run/react";
import persiteSource from 'PERSITE_SOURCE';
import { Box, Container, Section, Card} from "@radix-ui/themes";
import AccordionSection from "~/components/Sections/Accordion";
import Header from "~/components/Header";

// TODO: Pro
// import WaitlistForm from "~/components/WaitlistForm";
import { generateMetaTags } from "~/utils/generateMetaTags";
import ProjectsSection from "~/components/Sections/ProjectsSection";
import BlogSection from "~/components/Sections/BlogSection";

export const meta: MetaFunction = () => generateMetaTags({
  title: persiteSource.mainPageTitle,
  description: persiteSource.mainPageDescription,
});

export default function Index() {
  return (
    <>
      <Container size="2">
        <Card size={{initial: '2', sm:'5'}}>
            <Section size="1">
              <Header/>
              <p style={{ paddingTop: '1em' }}>
                {persiteSource.headerSection.personalDescription}
              </p>
              <p>
                {persiteSource.headerSection.personalSlogan}
              </p>
            </Section>

            <div style={{ marginBottom: '42px' }}>
              {
                persiteSource.theme.projectSectionFirst
                ? (
                  <>
                    <ProjectsSection/>
                    <AccordionSection/>
                  </>
                )
                : (
                  <>
                    <AccordionSection/>
                    <ProjectsSection/>
                  </>
                )
              }

              {
                persiteSource.theme.shouldShowBlogSection && persiteSource.theme.blogInsideMainCard && (
                  <BlogSection/>
                )
              }
            </div>


            {/* TODO: Pro version  */}
            {/* <WaitlistForm /> */}
            {/* <div style={{ marginBottom  : '160px' }}></div> */}

            {/* // TODO: Change to Flex */}
            <Box width="100%" height="60px" style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${persiteSource.socialSection.length}, 1fr)`,
                gap: '0px',
                position: 'absolute',
                bottom: '0',
                left: '0',
                borderTop: '1px solid var(--gray-a6)',
              }}>
              {
                persiteSource.socialSection.map((item, index) => (
                  <Box style={{ textAlign: 'center', borderRight: persiteSource.socialSection.length-1 === index ? 'none' : '1px solid var(--gray-a6)' }} key={item.link}>
                    <Link
                      to={item.link}
                      style={{ color: 'var(--gray-a11)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}
                      target="_blank" rel="noreferrer"
                    >
                      {item.icon()}
                    </Link>
                  </Box>
                ))
              }
            </Box>
          </Card>
      </Container>

      {
        persiteSource.theme.shouldShowBlogSection && !persiteSource.theme.blogInsideMainCard && (
          <Container size="2">
            <BlogSection/>
          </Container>
        )
      }
    </>
  );
}
