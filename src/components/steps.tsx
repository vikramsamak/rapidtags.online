import { Card, CardContent } from '@/components/ui/card';

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface StepsProps {
  title: string;
  description: string;
  steps: Step[];
}

export function Steps({ title, description, steps }: StepsProps) {
  return (
    <section id="how-it-works" className="bg-background py-8 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
            {description}
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-border bg-card hover-lift glow-border relative border transition-all duration-300"
            >
              <CardContent className="flex items-start space-x-4 p-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                    <step.icon className="text-foreground h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-foreground text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-pretty">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
