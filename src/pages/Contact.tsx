import ContactFormCard from '../components/cards/ContactFormCard';
import MiscCard from '../components/cards/MiscCard';
import { contact } from '../data/contact';

const Contact = () => {
  type ContactKey = keyof typeof contact;

  const handleSocialLinkClick = (contactKey: ContactKey) => {
    return (window.location.href = contact[contactKey]);
  };

  return (
    <div className="p-6">
      <div>
        <h2 className="typography-heading text-(--color-text) ml-10 mt-10">
          Contact Me
        </h2>
        <p className="typography-large text-(--color-text) ml-14 mt-10 tracking-[1.5px]">
          Interested in <span className="text-(--accent-1)">collaborating</span>
          , <span className="text-(--accent-2)">discussing a role</span>, or{' '}
          <span className="text-(--accent-4)">just talking software</span>? Feel
          free to reach out.
        </p>
      </div>
      <div>
        <h3 className="typography-heading text-(--color-text) ml-10 mt-10">
          Email Me
        </h3>
        <ContactFormCard
          nameInput="Your Name:"
          emailInput="Return Email:"
          messageInput="Message:"
        />
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <h4 className="typography-heading text-(--color-text) ml-10 mt-10">
            Other Contact Methods
          </h4>
          <MiscCard>
            <button
              className="w-fit bg-transparent text-(--accent-1) typography-button hover:cursor-pointer hover:text-shadow-(--accent-1-shadow) transition-all duration-450 ease-in-out"
              type="button"
              onClick={() => handleSocialLinkClick('email')}
            >
              Email
            </button>
            <button
              className="w-fit bg-transparent text-(--accent-2) typography-button hover:cursor-pointer hover:text-shadow-(--accent-2-shadow) transition-all duration-450 ease-in-out"
              type="button"
              onClick={() => handleSocialLinkClick('github')}
            >
              Github
            </button>
            <button
              className="w-fit bg-transparent text-(--accent-3) typography-button hover:cursor-pointer hover:text-shadow-(--accent-3-shadow) transition-all duration-450 ease-in-out"
              type="button"
              onClick={() => handleSocialLinkClick('discord')}
            >
              Discord
            </button>
            <button
              className="w-fit bg-transparent text-(--accent-4) typography-button hover:cursor-pointer hover:text-shadow-(--accent-4-shadow) transition-all duration-450 ease-in-out"
              type="button"
              onClick={() => handleSocialLinkClick('linkedin')}
            >
              LinkedIn
            </button>
          </MiscCard>
        </div>
        <div>
          <h5 className="typography-heading text-(--color-text) ml-10 mt-10">
            Current Status
          </h5>
          <MiscCard>
            <p className="typography-body">Open to:</p>
            <div className="flex flex-col pl-15 pt-5 typography-body">
              <span>• Software Engineering Roles</span>
              <span>• Freelance Projects</span>
              <span>• Collaboration Opportunities</span>
            </div>
          </MiscCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;
