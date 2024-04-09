import Image from "next/image";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <section className={styles.me}>
          <div className={styles.info}>
            <h1 className={styles.name}>Sergey Kachaliuk</h1>
            <h2>Front-End Engineer</h2>
            <p className={styles.hello}>Hello, I&apos;m glad to see you here!</p>
            <p>My name is Sergey, I am a Front-End Engineer and I&apos;m passionate about creating beautiful, creative and inspiring websites &amp; applications that help people and businesses reach their goals and make our life easier.</p>
            <p className={styles.more}>To find out more about me and my skills, please check out my social media:</p>
            <div className={styles.links}>
              <a href="https://github.com/17Sergey" title="GitHub" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/sergey-kachaliuk-3a5b762b6/" title="LinkedIn" target="_blank">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <img src="./me.jpg" alt="" className={styles.photo} />
        </section>


        <section className="mt-20">
          <h3 className="font-bold text-2xl">Projects:</h3>

          <ul className="mt-10 flex-col max-w-[800px] ml-auto mr-auto">
            <li className="text-left px-6 py-4 border-2 border-cyan-300">
              <p className="font-bold text-lg ">ChashaChurch web-application</p>
              <p className="mt-5 max-w-[400px]">Website for a church organization was created to make it possible for people of different ages to simply use the website and get the needed information. The website is still in use and growing with more functionality.</p>
              <a
                className="inline-block text-sm mt-5 px-4 py-1.5 bg-cyan-300 rounded-2xl"
                target="_blank"
                href="https://chasha.netlify.app/"
                title="ChashaChurch"
              >Open website</a>
            </li>
            <li className="my-4 text-left px-6 py-4 border-2 border-cyan-300">
              <p className="font-bold text-lg ">Furious World university project</p>
              <p className="mt-5 max-w-[400px]">Website for fans of the Fast&amp;Furious movies franchise. It was created using React, Redux and TypeScript.</p>
              <a
                className="inline-block text-sm mt-5 px-4 py-1.5 bg-cyan-300 rounded-2xl"
                target="_blank"
                href="https://furiousworld.netlify.app/"
                title="Furious World"
              >Open website</a>
            </li>
            <li className="text-left px-6 py-4 border-2 border-cyan-300">
              <p className="font-bold text-lg ">Alpha Paintball Club university project</p>
              <p className="mt-5 max-w-[400px]">Website of a paintball club &apos;Alpha&apos; with lots of interactive interfaces that may wonder the user. It was created with HTML5, CSS3. SCSS. JavaScript, JQuery.</p>
              <a
                className="inline-block text-sm mt-5 px-4 py-1.5 bg-cyan-300 rounded-2xl"
                target="_blank"
                href="https://alphapaintball.netlify.app/"
                title="Alpha Paintball Club"
              >Open website</a>
            </li>
          </ul>
        </section>

      </div>

    </main>
  );
}
