const easing = [0.6, -0.05, 0.01, 0.99];

const navFadeDownContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const navFadeDown = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const mainFadeUpContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.6,
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
      staggerChildren: 0.05,
      delayChildren: 1,
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
      staggerChildren: 0.05,
      delayChildren: 1,
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
    duration: 1,
    ease: easing,
    delay: 0.65,
  },
};

const initialScrollRevealFadeUp = { y: 100, opacity: 0 };

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
};
