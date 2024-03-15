import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-16">
      <div className="max-w-[900px] ml-auto mr-auto">

        <section className="flex justify-center">
          <div className="mr-10 flex flex-col justify-between max-w-[600px]">
            <h1 className="font-bold text-3xl">Sergey Kachaliuk</h1>
            <h2 className="mt-2">Front-End Engineer</h2>
            <p className="mt-6 font-bold mb-3">Hello, I&apos;m glad to see you here!</p>
            <p className="mt-0">My name is Sergey, I am a Front-End Engineer and I&apos;m passionate about creating beautiful, creative and inspiring websites &amp; applications that help people and businesses reach their goals and make our life easier.</p>
            <p className="mt-5 mb-3">To find out more about me and my skills, please check out my social media:</p>
            <div className="flex">
              <a href="https://github.com/17Sergey" title="GitHub" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-8 mr-2" />
              </a>
              <a href="https://www.linkedin.com/in/sergey-kachaliuk-3a5b762b6/" title="LinkedIn" target="_blank">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" className="w-8" />
              </a>
            </div>
          </div>
          <img src="./me.jpg" alt="" className="w-[300px]" />
        </section>

        <section className="mt-20">
          <h3 className="font-bold text-2xl">Projects:</h3>

          <ul className="mt-10 flex-col">
            <li className="text-left px-6 py-4 border-2 border-cyan-300">
              <p className="font-bold text-lg ">ChashaChurch freelance project</p>
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
