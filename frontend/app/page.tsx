import { NavBar } from '@/components/nav-bar';
import { TradingInterface } from '@/components/trading-interface';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <TradingInterface />
    </main>
  );
}