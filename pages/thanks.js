import Head from "next/head";
import Thanks from "../components/Thanks";

const thanks = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>Joseph Fantuzzi</title>
      </Head>
      <Thanks />
    </>
  );
};

export default thanks;
