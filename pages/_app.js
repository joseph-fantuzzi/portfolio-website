import "../styles/globals.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
