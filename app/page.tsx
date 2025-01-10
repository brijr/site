import { Section, Container, Box } from "@/components/craft";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <main>
      <Section>
        <Container>
          <Grid>
            <Child className="col-span-2">Bridger Tower</Child>
            <Child></Child>
            <Child></Child>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 border-accent border-y">
      {children}
    </div>
  );
};

const Child = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("p-2 border-x border-accent", className)}>
      {children}
    </div>
  );
};
