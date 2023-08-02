import Time from "./time";

export default function Footer() {
  return (
    <footer className="flex px-4 py-4 justify-center gap-6 items-center w-full border-t border-stone-800/90">
      <div className="w-full lg:w-[55%] flex justify-between">
        <p className="leading-none m-0">made by ashish</p>
        <Time />
      </div>
    </footer>
  );
}
