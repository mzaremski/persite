import type { MetaFunction } from "@vercel/remix";
import { Container, Card, Separator, Button } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import { generateMetaTags } from "~/utils/generateMetaTags";

export const meta: MetaFunction = () => generateMetaTags({
  title: 'Propsify | Supercharge Your Business Credibility with Testimonials',
  description: 'Collect powerful social proof in minutes. Gather testimonials from social media easily and boost your conversion with a client showcase page.',
});

export default function PropsifyPage() {
  return (
    <Container size="2">
      <Card size={{ initial: '2', sm: '5' }}>
        <Header />
        <Separator size="4" my="6" />
          <h2>
            Supercharge Your Business Credibility with Effortless Testimonial Collection
          </h2>
          
          Collect powerful social proof in minutes:

          <ul>
            <li>Gather testimonials from social media easily</li>
            <li>Get quick feedback from users without complex forms</li>
            <li>Boost your conversion with a client showcase page</li>
            <li>Add testimonials section with one code line</li>
          </ul>

          Turn customer feedback into your growth engine - fast, simple, effective.

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
