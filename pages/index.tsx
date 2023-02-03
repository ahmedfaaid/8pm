import Layout from '../components/layout';
import { Gallery, Hero, Info } from '../components/sections';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Info />
      <Gallery />
    </Layout>
  );
}
