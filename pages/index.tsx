import Layout from '../components/layout';
import { Contact, Gallery, Hero, Info, WhatWeDo } from '../components/sections';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Info />
      <Gallery />
      <WhatWeDo />
      <Contact />
    </Layout>
  );
}
