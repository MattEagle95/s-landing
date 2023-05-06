export default function Home() {
  return (
    <main className="h-full flex justify-center items-center">
      <div className="text-4xl font-extrabold">
        {process.env.NEXT_PUBLIC_APP_NAME}
      </div>
    </main>
  );
}
