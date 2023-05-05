import { config } from '@/config/config';

export default function Home() {
  return (
    <main className="h-full flex justify-center items-center">
      <div className="text-4xl font-extrabold">{config.app.name}</div>
    </main>
  );
}
