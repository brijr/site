import { Section, Container } from "@/components/craft";
import { Grid, Row, Child } from "@/components/grid";

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="text-xl tracking-tight leading-tight">
      <Section>
        <Container>
          <Grid>
            {children}
            <Row>
              <Child />
              <Child />
              <Child />
              <Child />
            </Row>
            <Row>
              <Child className="col-span-3 text-muted-foreground">
                <p>© Bridger Tower, 2025</p>
              </Child>
              <Child />
            </Row>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
