import { Loader2Icon } from 'lucide-react';

export default function Loading() {
  return (
    <main className="h-full flex justify-center items-center">
      <Loader2Icon size={42} className="primary animate-spin" />
    </main>
  );
}
