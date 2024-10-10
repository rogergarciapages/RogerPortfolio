// eslint-disable-next-line import/no-extraneous-dependencies
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'; // Import Tabler Icons
import { HeroAvatar, Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={<>Hello I'm Roger 👋</>}
      description={
        <>
          I am SEO, Data Analyst and Revenue Manager based in Tenerife.
          Passionate developer using Python and NextJs.
        </>
      }
      avatar={
        <img
          className="h-60 w-60"
          src="/assets/images/rogergarcia.webp"
          alt="Roger Garcia"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/roger-garcia-pages/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <IconBrandLinkedin className="h-16 w-16 hover:text-cyan-600" />{' '}
            {/* Adjust size and color */}
          </a>
          {/* GitHub Button */}
          <a
            href="https://github.com/rogergarciapages"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub className="h-16 w-16 hover:text-cyan-600" />{' '}
            {/* Adjust size and color */}
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
