import { Atom, Brain, TrendingUp, Cog } from 'lucide-react';
import { Card } from "@/components/ui/Card";

const cards = [
  {
    title: 'Engineering Excellence',
    description: 'Access our network of world-class engineering talent and accelerate your roadmap with our proven development methodologies.',
    icon: Atom,
  },
  {
    title: 'Applied AI & Innovation',
    description: 'Leverage cutting-edge AI functionality tailored to your unique vertical, guided by our in-house team of AI experts.',
    icon: Brain,
  },
  {
    title: 'Growth & Scale',
    description: 'Tap into our proven playbook for scaling software companies, from customer acquisition to global market expansion.',
    icon: TrendingUp,
  },
  {
    title: 'Operational Excellence',
    description: 'Benefit from our extensive experience in optimizing software operations, from infrastructure to customer success.',
    icon: Cog,
  },
];



export default function WhatsInItForYou() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-1">
            What We Do
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-1">
            We partner with exceptional founders to build and grow enduring software companies.
          </p>
        </div>
        <div className="mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card
            title="Engineering Excellence"
            icon={<Atom className="w-6 h-6" />}
          >
            <p className="text-sm text-gray-600 text-center leading-normal mt-2">
              Access our network of world-class engineering talent and accelerate your roadmap with our proven development methodologies.
            </p>
          </Card>
          <Card
            title="Applied AI & Innovation"
            icon={<Brain className="w-6 h-6" />}
          >
            <p className="text-sm text-gray-600 text-center leading-normal mt-2">
              Leverage cutting-edge AI functionality tailored to your unique vertical, guided by our in-house team of AI experts.
            </p>
          </Card>
          <Card
            title="Growth & Scale"
            icon={<TrendingUp className="w-6 h-6" />}
          >
            <p className="text-sm text-gray-600 text-center leading-normal mt-2">
              Tap into our proven playbook for scaling software companies, from customer acquisition to global market expansion.
            </p>
          </Card>
          <Card
            title="Operational Excellence"
            icon={<Cog className="w-6 h-6" />}
          >
            <p className="text-sm text-gray-600 text-center leading-normal mt-2">
              Benefit from our extensive experience in optimizing software operations, from infrastructure to customer success.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
