import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import persiteSource from "PERSITE_SOURCE";
import { Section } from "@radix-ui/themes"
import type { ComponentProps } from "react";

interface AccordionTriggerProps extends ComponentProps<typeof Accordion.Trigger> {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = ({ children, className, ...props }: AccordionTriggerProps) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames("AccordionTrigger", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
);

interface AccordionContentProps extends ComponentProps<typeof Accordion.Content> {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = ({ children, className, ...props }: AccordionContentProps) => (
  <Accordion.Content
    className={classNames("AccordionContent", className)}
    {...props}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
);

const AccordionComponent = () => (
  <Accordion.Root
    className="AccordionRoot"
    collapsible
    type="single"
  >
    {persiteSource.accordionSection.items.map((item, index) => (
      <Accordion.Item
        key={index}
        value={item.title}
        className="AccordionItem"
      >
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>{item.content()}</AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

const AccordionSection = () => {
  return (
    <Section size="1">
      <h2>{persiteSource.accordionSection.title}</h2>
      <AccordionComponent />
    </Section>
  );
};

export default AccordionSection;
