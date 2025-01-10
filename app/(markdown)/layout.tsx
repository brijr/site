import { Section, Container, Article } from "@/components/craft";
import { Grid, Row, Child } from "@/components/grid";

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="text-lg">
      <Section>
        <Container>
          <Grid>
            <Row>
              <Child className="col-span-2">
                <p>Bridger Tower</p>
                <p className="text-muted-foreground">
                  Designer and Software Engineer
                </p>
              </Child>
              <Child></Child>
              <Child></Child>
            </Row>
            {children}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
