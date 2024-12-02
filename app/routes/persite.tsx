import type { MetaFunction } from "@vercel/remix";
import { Button, Card, Container, Separator, Text, Heading, Strong, Link as RadixLink } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import { generateMetaTags } from "~/utils/generateMetaTags";

export const meta: MetaFunction = () => generateMetaTags({
  title: 'PerSite | one-click free personal website & blog boilerplate',
  description: 'Create your personal website with a blog, analytics, deployment, custom design in one click and 10 minutes!',
});


export default function PostsLayout() {
  return (
    <Container size="2">
      <Card size={{ initial: '2', sm: '5' }}>
        <Header />
        <Separator size="4" my="6" />

        <Heading size="7" mb="4">Create your personal website in one click</Heading>
        <Text as="p" mb="4">
          <Strong>PerSite</Strong> is a personal website with a blog, analytics, deployment, design.
        </Text>

        <Text as="p" mb="4">
          Are you an indie hacker, developer or do online business? This boilerplate is for you.
        </Text>

        <Separator size="2" my="6" />

        <Text as="p" mb="2">✨ Built with modern tech stack:</Text>
        <ul style={{ marginLeft: '2em', marginBottom: '1em' }}>
          <li>Remix - for server-side rendering and optimal performance</li>
          <li>Radix UI - for beautiful, accessible components</li>
          <li>TypeScript - for type safety and better development experience</li>
          <li>Simple Analytics - for privacy-focused analytics</li>
        </ul>

        <Text as="p" mb="2">🎨 Beautiful and customizable:</Text>
        <ul style={{ marginLeft: '2em', marginBottom: '1em' }}>
          <li>Multiple background animations to choose from</li>
          <li>Dark/light mode support</li>
          <li>Fully responsive design</li>
          <li>SEO and social media friendly with OG tags</li>
        </ul>

        <Text as="p" mb="2">🚀 Easy to deploy:</Text>
        <ul style={{ marginLeft: '2em', marginBottom: '1em' }}>
          <li>Ready for deployment on Vercel</li>
          <li>Simple configuration through a single data file</li>
          <li>Minimal setup required</li>
        </ul>

        <Separator size="2" my="6" />

        <Heading size="5" mb="3">🛠️ How to use:</Heading>
        <ol>
          <li>Deploy with just one button</li>
          <li>Fill .json file with your data</li>
          <li>Optional customizations:
            <ul style={{ marginLeft: '2em', marginTop: '0.5em' }}>
              <li>Dark/Light mode</li>
              <li>Background (5 options)</li>
              <li>Main colour and grey hue</li>
              <li>Rounded corners</li>
              <li>Transcluent or solid variant</li>
            </ul>
          </li>
          <li>Write blog posts in .md format</li>
          <li>Optional: Create an account on simpleanalytics (the script is already installed)</li>
        </ol>


        <Text as="p" mb="4">
          Want to use PerSite for your own website? Check out the{' '}
          <RadixLink href="https://github.com/mzaremski/persite" target="_blank">GitHub repository</RadixLink>.
        </Text>

        <Separator size="4" my="6" />
        <Link to="/">
          <Button size="2" variant="ghost">
            Back to home
          </Button>
        </Link>
      </Card>
    </Container>
  );
}
