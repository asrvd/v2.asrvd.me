/* eslint-disable react/no-unescaped-entities */

const timelineElements = [
  {
    date: "July, 2021",
    title: "Graduated from high school, start of programming journey",
    description:
      `I graduated from high school and started learning web development. Back then I was only familiar with Python. So, I started building discord bots and one of them even got verified by discord. This was one of the very first achievements I had in this amazing journey.`,
  },
  {
    date: "October, 2021",
    title: "Started learning JavaScript",
    description:
      `After working a lot with Python, I wanted to learn a new language and JavaScript seemed to be a good choice as I wanted to dive in web development anyways. Back then I used to watch videos on YouTube and buidl small JavaScript projects - I even made the <a href="https://github.com/asrvd/Javascript-Projects">repo</a> public on GitHub (lol). I made my first iteration of my <a href="https://asrvd.github.io/">personal site</a> during this time as well and I was really proud of it.`,
  },
  {
    date: "January, 2022",
    title: "Started learning React",
    description:
      `Till mid january I kept working on discord bots and javascript, but I wanted to dive deeper into the web dev world. React was the next step for me - I found a free course on <a href="https://scrimba.io">scrimba</a> and started learning react using it. My first react app was an unresponsive <a href="https://tod-generator.netlify.app/">truth or dare app</a>, made using react, javascript, & hosted on netlify.`,
  },
  {
    date: "March, 2022",
    title: "Got my first few stars on GitHub",
    description: `I kept building a lot of projects after learning React and then eventually moving on to Next.js. All of my projects were open sourced and I was really happy or rather surprised when I saw random people starring my projects on GitHub. That was like serotonin for me those days lol and it motivated me to keep building oss projects.`,
  },
  {
    date: "May, 2022",
    title: "Started content writing",
    description: `By now I had got quite comfortable with React, Next.js, and other techs around web dev. Back then, I used to read blog posts from platforms like dev.to and hashnode and so I went like - Why don't I do it myself? This was the beginning of my content writing journey. I started writing blog posts about web dev on dev.to. My first few articles got no engagement at all and it was really hard to continue writing. But somehow I managed to keep writing consistently, it was only after a few weeks that I started getting some engagement on my articles. And now I've more than 1.5k followers and more than 100k views on my blogs on dev.to. Go check out my profile (I haven't written anything since long but I'll start writing again soon).`,
  },
  {
    date: "July, 2022",
    title: "Landed my first freelancing gig",
    description: `By July I already had thousands of views on my blogs and I had started getting a hold of it. Just then, Scrimba announced in their discord server that they needed freelance writers to write about web dev for them. I applied for it (I was sure I won't make it) but (wtf) I actually made it and wrote my first blog post for them - Create a new React app with Vite. This blog actually blew up on both dev.to and hashnode and recieved a lot of love from readers. And you can't imagine just how happy I was after seeing the response on the blog and my paycheck as well lol.`,
  },
  {
    date: "August, 2022",
    title: "Won my first hackathon",
    description: `In July, Hashnode announced a month-long virtual hackathon partenered with Planetscale. I had never participated in any hackathons before and this was the perfect opportunity for me to test my skills I had been learning since months. My submission fo the hackathon was a web app that lets you create embeddable widgets with all your sponsrship links listed at one place. It was like a linktree but only for your sponsorship links. Again, I wasn't expecting to win at all but when the winners got announced in August and my project was in the top 5 submissions, I couldn't believe it.`
  },
  {
    date: "Present",
    title: "Building & Learning",
    description: `Since August, 2022, I've been working on a lot of open source projects and even became maintainer for a lot of projects. I even won a track prize in an offline hackathon and won an online hackathon by Supabase. Things have been going quite slow but time's running faster these days - thanks to my college life. But nevertheless the grind never stops. Hopefully, I still would have a lot of stories to share her about my journey. If you actually read it till here - thanks a lot ${"<3"}`
  }
];

export default function TimelinePage() {
  return (
    <div className="flex flex-col gap-12 w-full h-full">
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2>Lifelogs ~</h2>
        <div className="flex flex-col gap-4 border-l border-stone-800/90 pl-4">
        {timelineElements.map((element, index) => (
          <div className="flex flex-col gap-2 justify-start before:content-[''] before:absolute before:h-2 before:w-2 before:bg-stone-700 before:rounded-full before:-left-[1.25rem] before:top-1/2 relative" key={index}>
            <div>
              <span className="text-xs">{element.date}</span>
              <h4 className="m-0">{element.title}</h4>
            </div>
            <p className="text-zinc-200" dangerouslySetInnerHTML={{__html: element.description}}></p>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
}
