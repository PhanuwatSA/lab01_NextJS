'use client';

import Navbar from '../../components/Navbar';
import styles from './page.module.css';

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>About Me</h1>
        <p className={styles.info}>
          ชื่อ: นายภานุวัฒน์ สารวงษ์<br />
          อีเมล: phanuwat.sa@kkumail.com<br />
          คณะ: สหวิทยาการ<br />
          สาขา: วิทยาการคอมพิวเตอร์และสารสนเทศ
        </p>
      </div>
    </div>
  );
};

export default AboutMe;