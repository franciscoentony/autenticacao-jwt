import EmConstrucao from "./_components/EmConstrucao";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="h-full flex w-full max-w-3xl flex-col items-center justify-center bg-white dark:bg-black">
        <EmConstrucao />
      </main>
    </div>
  );
}
