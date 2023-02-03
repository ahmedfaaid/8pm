import Layout from '../components/layout';
import { Gallery, Hero, Info, WhatWeDo } from '../components/sections';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Info />
      <Gallery />
      <WhatWeDo />
    </Layout>
  );
}
