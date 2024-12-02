import { Flex, Avatar } from "@radix-ui/themes";
import persiteSource from 'PERSITE_SOURCE';
import { TypeAnimation } from "react-type-animation"; 

export default function Header({ ogImage }: { ogImage?: boolean }) {
  return (
    <Flex gap="4" align="center">
      <Avatar
        src="../avatar.jpg"
        fallback="A"
        size="7"
      />
      <div>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>{persiteSource.name}</h1>
        {
          ogImage
          ? (
            <h2 style={{ fontSize: '1.5rem', margin: '0' }}>Freelancer & Indie Hacker</h2>
          )
          : (
            <span style={{ fontSize: '1.5rem' }}>
          A<TypeAnimation
            speed={2}
            repeat={Infinity}
            sequence={persiteSource.headerSection.typeAnimationSequence}
          />
        </span>
          )
        }
      </div>
    </Flex>
  )
}
