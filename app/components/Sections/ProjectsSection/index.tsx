import React from 'react';
import { Section, Badge, Spinner } from '@radix-ui/themes';
import { Link } from '@remix-run/react';
import persiteSource from 'PERSITE_SOURCE';

const ProjectsSection = () => {
    return (
      <Section size="1">
        <h2>{persiteSource.projectsSection.title}</h2>
        <ul className="project_list">
          {
            persiteSource.projectsSection.items.map((item) => (
            <li className="project_list_item" key={item.title}>
              <Link to={item.link}>
                <span>{item.title}</span>
                <Badge color={item.badgeColor}>
                  {item.status === 'in_progress' && <Spinner size="1" style={{ display: 'inline-block', }} />}
                  {item.badge}
                </Badge>
              </Link>
            </li>
            ))
          }
        </ul>
      </Section>
    );
  }

  export default ProjectsSection;