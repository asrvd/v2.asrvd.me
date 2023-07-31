/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import FM from "@/components/fm";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 w-full h-full">
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2>Prologue ~</h2>
        <p>
          20 y/o semicolon dev trying to build better web interfaces. taught by
          the web itself, I love php but I write typescript, I love mern stack
          but I use the <a>t3-stack</a> ~ cus <a>theo</a> said{" "}
          <mark>typesaftey isn't optional</mark> apparently & btw I don't use
          neovim.
        </p>
        <p>
          I'm a student, a fullstack dev, oss fanboy, techical writer, shitpost
          creator, hackathon grinder, and somewhat of a gamer as well. I can
          write ts, python, rust, go, ruby and I'm currently being forced to
          learn c & cpp for my uni courses.
        </p>
        <p className="mb-0">
          I like minimalism and simplicity and I try to reflect that in my works
          as well. I often jam to music while working usually to genres like
          pop, synth, glitchcore, hyperpop, rock, and jpop. Meaningful and deep
          lyrics is what I look for in songs. My all time fav artist is{" "}
          <a>EDEN</a>. According to <a>last.fm</a>, I have listened to his songs
          a total of <mark>4066</mark> times. I also like reading books, mostly
          fiction. Currently reading <a>The wind up bird chronicle</a> by{" "}
          <a>Haruki Murakami</a>. Apart from this I also like playing FPS games
          like <a>VALORANT</a>, lifting <mark>weights</mark>, and just sitting by myself on the terrace and
          looking at the night sky.
        </p>
      </section>
      {/* <p className="divider italic">{"/ / / / / / / /"}</p> */}
      <FM />
      {/* <p className="divider italic">{"/ / / / / / / /"}</p> */}
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2>Find me here ~</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-x-12">
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">GitHub</p>
            <a href="https://github.com/asrvd">@asrvd</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">Twitter</p>
            <a href="https://twitter.com/_asheeshh">@_asheeshh</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">YouTube</p>
            <a href="https://youtube.com/@asrvd">@asrvd</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">Email</p>
            <a href="mailto:asheeshh@duck.com">asheeshh@duck.com</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">Discord</p>
            <a href="https://discord.com/users/784363251940458516">asheeshh#4872</a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold">CV</p>
            <a href="https://read.cv/asrvd">read.cv/asrvd</a>
          </div>
        </div>
      </section>
    </div>
  );
}
