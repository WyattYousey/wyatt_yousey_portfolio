import headshot1 from '../assets/secondary-headshot.jpg';
import headshot2 from '../assets/headshot-3.jpg';
import candid1 from '../assets/candid-1.jpg';
import candid2 from '../assets/candid-2.jpg';
import { screenBreakMap } from '../data/screenBreaks';

import { motion } from 'framer-motion';

const Home = () => {
  const screenWidth = window.innerWidth;

  return (
    <div
      className={`flex ${screenWidth < screenBreakMap.mediumDesktop ? 'justify-center' : ' justify-between'} h-screen w-full p-4`}
    >
      <div
        className={`relative ${screenWidth < screenBreakMap.mediumDesktop ? 'w-full h-full' : ''}`}
      >
        <motion.div
          className={`absolute ${screenWidth < screenBreakMap.largeTablet ? 'bottom-28 left-22 w-55' : screenWidth < screenBreakMap.smallDesktop ? 'bottom-25 left-0 w-85' : 'bottom-28 left-22 w-55'} rounded-full overflow-hidden`}
          initial={{
            opacity: 0,
            x: -250,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.4,
            ease: [0.68, -0.55, 0.27, 1.55],
          }}
        >
          <img
            src={headshot1}
            alt="Man in glasses leaning against pipe fence smiling"
          />
        </motion.div>
        <motion.div
          className={`absolute ${screenWidth < screenBreakMap.largeTablet ? 'top-25 left-0 h-55 w-40' : screenWidth < screenBreakMap.smallDesktop ? 'top-15 left-25 h-82 w-82' : 'top-37 left-12 h-68 w-68'} rounded-full overflow-hidden`}
          initial={{
            opacity: 0,
            x: -250,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 0.3,
            ease: [0.68, -0.55, 0.27, 1.55],
          }}
        >
          <img
            src={headshot2}
            alt="Man and Woman Smiling in front of cherry blossom tree"
          />
        </motion.div>
        <motion.div
          className={`absolute ${screenWidth < screenBreakMap.largeTablet ? 'top-45 right-0 h-35 w-25' : screenWidth < screenBreakMap.smallDesktop ? 'top-45 right-0 h-65 w-45' : screenWidth < screenBreakMap.mediumDesktop ? 'top-25 right-10 h-65 w-55' : 'top-25 left-145 h-55 w-45'} rounded-full overflow-hidden`}
          initial={{
            opacity: 0,
            y: -350,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 0.6,
            ease: [0.68, -0.55, 0.27, 1.55],
          }}
        >
          <img
            src={candid1}
            alt="Man holding welding project in welding attire"
          />
        </motion.div>
        <motion.div
          className={`absolute ${screenWidth < screenBreakMap.largeTablet ? 'bottom-75 right-0 h-45 w-95' : screenWidth < screenBreakMap.smallDesktop ? 'bottom-10 right-0 h-50 w-65' : screenWidth < screenBreakMap.mediumDesktop ? 'bottom-10 right-0 h-95 w-145' : 'bottom-45 left-85 h-75 w-130'} rounded-full overflow-hidden`}
          initial={{
            opacity: 0,
            y: 450,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 0.9,
            ease: [0.68, -0.55, 0.27, 1.55],
          }}
        >
          <img
            className="object-center object-cover"
            src={candid2}
            alt="Man welding metal with his hood down"
          />
        </motion.div>
      </div>
      {screenWidth < screenBreakMap.mediumDesktop && (
        <div className="absolute w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black opacity-70"></div>
      )}
      {screenWidth > screenBreakMap.largeDesktop && (
        <span className="inline-block border-l border-(--color-button-bg) absolute right-220 top-20 h-220"></span>
      )}
      <div
        className={`flex flex-col text-center gap-4 text-(--color-text) font-(--font-primary) z-50 ${screenWidth > screenBreakMap.mediumDesktop ? 'mr-65 mt-25 w-100' : 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-15 w-80'}`}
      >
        <h2 className="typography-heading font-(--font-primary)">About Me</h2>
        <p className={`typography-body text-left ${screenWidth < screenBreakMap.mediumDesktop ? 'text-sm' : 'tracking-[1.5px]'}`}>
          Two years ago, I transitioned into software engineering after working
          in the manufacturing industry in welding and quality control. I was
          looking for a{' '}
          <span className="text-(--accent-1)">greater challenge</span> and found
          myself drawn to <span className="text-(--accent-3)">technology</span>,{' '}
          <span className="text-(--accent-2)">problem-solving</span>, and the
          process of building real systems from the ground up. My background
          taught me <span className="text-(--accent-3)">discipline</span>,{' '}
          <span className="text-(--accent-2)">attention to detail</span>, and
          how to{' '}
          <span className="text-(--accent-4)">perform under pressure</span>,
          qualities that continue to shape the way I approach development today.
        </p>
        <p className={`typography-body text-left ${screenWidth < screenBreakMap.mediumDesktop ? 'text-sm' : 'tracking-[1.5px]'}`}>
          I began by teaching myself programming independently before pursuing a
          more <span className="text-(--accent-3)">structured education</span>{' '}
          through TripleTen, where I completed{' '}
          <span className="text-(--accent-1)">extensive coursework</span> and
          hands-on projects focused on modern software development. Since then,
          I have continued pushing myself through{' '}
          <span className="text-(--accent-4)">real-world projects</span>,{' '}
          <span className="text-(--accent-2)">automation systems</span>, and{' '}
          <span className="text-(--accent-3)">full-stack applications</span>. I
          am passionate about building thoughtful, scalable software and{' '}
          <span className="text-(--accent-4)">constantly improving</span> as
          both a developer and problem solver.
        </p>
      </div>
    </div>
  );
};

export default Home;
