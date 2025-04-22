import Hero from '../components/Hero';
import { AnimatedGradientDemo } from '@/components/ui/animated-gradient-demo';
import Benefits from '../components/Benefits';
import Stats from '../components/Stats';
import ValueProposition from '../components/ValueProposition';
import Industries from '../components/Industries';
import Platform from '../components/Platform';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Stats />
      <ValueProposition />
      <Industries />
      <Platform />
      <CTA />
    </main>
  );
}