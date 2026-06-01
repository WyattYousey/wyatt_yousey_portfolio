import headshot1 from '../assets/secondary-headshot.jpg';
import headshot2 from '../assets/headshot-3.jpg';
import candid1 from '../assets/candid-1.jpg';
import candid2 from '../assets/candid-2.jpg';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex h-screen p-6">
      <div className="relative h-full">
        <motion.div
          className="absolute bottom-28 left-22 w-55 rounded-full overflow-hidden"
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
          className="absolute top-37 left-12 h-68 w-68 rounded-full overflow-hidden"
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
          className="absolute top-5 left-145 h-55 w-45 rounded-full overflow-hidden"
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
          className="absolute bottom-78 left-85 h-75 w-130 rounded-full overflow-hidden"
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
      <span className="inline-block h-full w-px bg-(--color-button-bg) m-auto"></span>
      <div className="absolute flex top-45 right-85 flex-col w-100 text-center gap-6 text-(--color-text) font-(--font-primary)">
        <h2 className="text-3xl font-(--font-primary)">About Me</h2>
        <p className="text-left font-(--font-primary) tracking-[1.5px]">
          Two years ago, I transitioned into software engineering after working
          in the manufacturing industry in welding and quality control. I was
          looking for a{' '}
          <span className="text-(--accent-1)">greater challenge</span> and found
          myself drawn to <span className="text-(--accent-3)">technology</span>,{' '}
          <span className="text-(--accent-2)">problem-solving</span>, and the
          process of building real systems from the ground up. My background
          taught me <span className="text-(--accent-3)">discipline</span>,{' '}
          <span className="text-(--accent-2)">attention to detail</span>, and how
          to <span className="text-(--accent-4)">perform under pressure</span>,
          qualities that continue to shape the way I approach development today.
        </p>
        <p className="text-left tracking-[1.5px]">
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
