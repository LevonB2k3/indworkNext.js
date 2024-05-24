'use client'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './styles/Home.module.css';

const Page = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/levoncv.jpeg';
    link.download = '/levoncv.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Levon Portfolio</title>
      </Head>
      <div className={styles.header}>
        <h1>Levon Berejikian</h1>
        <p>Information Technology 3rd year</p>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/mypic.jpeg' alt="My Profile Image" width={250} height={300} />
      </div>
      <div className={styles.specialities}>
        <h2>My specialities</h2>
        <ul>
          <li>drawing</li>
          <li>coding</li>
        </ul>
      </div>
      <div className={styles.clients}>
        <h2>Recent Clients</h2>
        <ul>
          <li>Insta</li>
          <li>procreate</li>
          <li>Adobe</li>
          <li>Slack</li>
          <li>Tiktok</li>
        </ul>
      </div>
      <div className={styles.footer}>
        <button onClick={handleDownload} className={styles.downloadButton}>
          Download CV
        </button>
        <p>Follow me on: Instagram</p>
        <ul>
          <li><a href="https://www.instagram.com/_.levv._/">_.levv._</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
