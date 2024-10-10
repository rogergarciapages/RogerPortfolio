import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="NewsletterMonster"
        description="The internet archive for newsletters. A tool designed to empower SEO for newsletter marketing while celebrating the forgotten -and often discarded- art present newsletter design, its compellinmg typography, and photos in newsletters."
        link="https://github.com/rogergarciapages/NewsletterMonsterFront.git"
        img={{
          src: '/assets/images/newslettermonster.png',
          alt: 'NewsletterMonster',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.BLUE}>Python</Tags>
            <Tags color={ColorTags.EMERALD}>Supabase</Tags>
          </>
        }
      />
      <Project
        name="Virtual Office Ninja"
        description="A library of backgrounds for virtual conferencing fun. SEO optimised, monetized with Google Adsense. A project that pays for my VPS server every mobth :)"
        link="https://virtualopffice.ninja"
        img={{ src: '/assets/images/virtualoffice.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>Wordpress</Tags>
            <Tags color={ColorTags.EMERALD}>SEO</Tags>
            <Tags color={ColorTags.YELLOW}>Google Analytics</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
