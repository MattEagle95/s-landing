import { Button } from '../components/ui/button';
import { config } from '../config/config';

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center gap-2">
      <div className="text-4xl font-extrabold">{config.app.name}</div>
      <Button variant={'outline'}>Login</Button>
    </main>
  );
}
