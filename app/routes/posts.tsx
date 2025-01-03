import { Button, Card, Container, Separator } from "@radix-ui/themes";
import { Link, Outlet } from "@remix-run/react";
import Header from "~/components/Header";
import SocialMediaSection from "~/components/SocialMediaSection";
export default function PostsLayout() {
  return (
    <Container size="2">
      <Card size={{ initial: '2', sm: '5' }}>
        <Header />
        <Separator size="4" my="6" />

        <Outlet />

        <Separator size="4" my="6" />

        <Link to="/#blog-list">
          <Button size="2" variant="ghost">
            Back to the posts list
          </Button>
        </Link>

        <div style={{ marginTop: '38px' }}>
          <SocialMediaSection/>
        </div>
      </Card>
    </Container>
  );
}
