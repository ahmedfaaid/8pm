import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  defaultDescription,
  defaultTitle,
  siteUrl,
  twitterUsername
} from '../lib/seo';
import defaultImage from '../public/images/logo/black-logo.png';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

export default function Seo({ title, description, image, article }: SeoProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  const pageTitle = title ? `${title} - 8PM` : defaultTitle;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      <meta name='image' content={`${siteUrl}/${image || defaultImage}`} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={twitterUsername} />
      <meta name='twitter:title' content={title || defaultTitle} />
      <meta
        name='twitter:description'
        content={description || defaultDescription}
      />
      <meta
        name='twitter:image'
        content={`${siteUrl}/${image || defaultImage}`}
      />
      <meta property='og:url' content={`${siteUrl}${currentPath}`} />
      {article && <meta property='og:type' content='article' />}
      <meta property='og:title' content={title || defaultTitle} />
      <meta
        property='og:description'
        content={description || defaultDescription}
      />
      <meta
        property='og:image'
        content={`${siteUrl}/${image || defaultImage}`}
      />
    </Head>
  );
}
