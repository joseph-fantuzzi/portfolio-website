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
    delay: 0.5,
  },
};

const initialScrollRevealFadeUp = { y: 100, opacity: 0 };

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

export {
  navFadeDownContainer,
  navFadeDown,
  mainFadeUp,
  mainFadeUpContainer,
  toggleFadeLeft,
  navigationFadeRight,
  navigationFadeRightContainer,
  socialsFadeLeft,
  socialsFadeLeftContainer,
  scrollRevealFadeUp,
  initialScrollRevealFadeUp,
  mobileNavFadeLeft,
  logoHover,
  logoTap,
};
