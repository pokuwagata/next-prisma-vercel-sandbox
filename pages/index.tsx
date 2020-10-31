import { GetStaticProps } from "next";

type Props = {
  name: string;
};

const Home: React.FC<Props> = ({ name }) => {
  return <div>{name}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("/api/hello");
  const { name: test } = await res.json();
  return { props: { name: test } };
};

export default Home;
