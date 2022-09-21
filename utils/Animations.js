const easing = [0.6, -0.05, 0.01, 0.99];

const navFadeDownContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navFadeDown = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const mainFadeUpContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.7,
    },
  },
};

const archiveFadeDownContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.25,
    },
  },
};

const archiveFadeDownContainer2 = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
};

const archiveFadeDownContainer3 = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.2,
    },
  },
};

const archiveFadeDownContainer4 = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.6,
    },
  },
};

const archiveFadeDownContainer5 = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 2.0,
    },
  },
};

const projectFadeRightContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectFadeDownContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.0,
    },
  },
};

const arrowFadeDownContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const arrowFadeDown = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const projectFadeRight = {
  initial: {
    x: -60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const archiveFadeDown = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const projectFadeDown = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const projectFadeDownDelayed = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
      delay: 0.7,
    },
  },
};

const mainFadeUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const archiveFadeRight = {
  initial: {
    x: -60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const archiveFadeLeft = {
  initial: {
    x: 60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const toggleFadeLeft = {
  initial: {
    x: 60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const navigationFadeRightContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.3,
    },
  },
};

const navigationFadeRight = {
  initial: {
    x: -60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const socialsFadeLeftContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.3,
    },
  },
};

const socialsFadeLeftContainerArchive = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const socialsFadeLeft = {
  initial: {
    x: 60,
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const scrollRevealFadeUp = {
  y: 0,
  opacity: 1,
  transition: {
    duration: 1.25,
    ease: easing,
    delay: 0.2,
  },
};

const initialScrollRevealFadeUp = { y: 50, opacity: 0 };

const mobileNavFadeLeft = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: easing,
    },
  }),
  hidden: {
    opacity: 0,
    x: 350,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const logoHover = {
  scale: 1.2,
  transition: { duration: 0.5 },
};

const logoTap = { scale: 0.8 };

const arrowHover = {
  scale: 1.1,
  rotate: 360,
  transition: { duration: 0.5 },
};

const arrowTap = {
  scale: 0.9,
};

export {
  navFadeDownContainer,
  navFadeDown,
  mainFadeUp,
  archiveFadeDownContainer2,
  archiveFadeDownContainer3,
  archiveFadeDownContainer4,
  archiveFadeDownContainer5,
  archiveFadeRight,
  archiveFadeLeft,
  archiveFadeDown,
  archiveFadeDownContainer,
  mainFadeUpContainer,
  toggleFadeLeft,
  navigationFadeRight,
  navigationFadeRightContainer,
  socialsFadeLeft,
  socialsFadeLeftContainer,
  socialsFadeLeftContainerArchive,
  scrollRevealFadeUp,
  initialScrollRevealFadeUp,
  mobileNavFadeLeft,
  logoHover,
  logoTap,
  arrowHover,
  arrowTap,
  projectFadeDown,
  projectFadeRightContainer,
  projectFadeRight,
  projectFadeDownContainer,
  projectFadeDownDelayed,
  arrowFadeDownContainer,
  arrowFadeDown,
};
