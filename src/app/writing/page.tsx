import Writings from "@/components/writings";

export default async function WritingPage() {
  return (
    <div className="flex flex-col gap-12 w-full h-full">
      <section className="w-full flex flex-col justify-start px-[0.4rem]">
        <h2>Writings ~</h2>
        <p className="m-0">
          Things I find interesting and want to share with the world. Writing
          about my experiences, learnings and opinions on various topics.
        </p>
      </section>
      <Writings />
    </div>
  );
}
