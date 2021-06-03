import Head from 'next/head';
import { Fragment } from 'react';
import ContactForm from '../../components/contact/contact-form';

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact | Kris Chamberlin</title>
        <meta
          name="description"
          content="Contact Kris Chamberlin at kris.elliott.chamberlin@gmail.com"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
