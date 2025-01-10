import { Section, Container } from "@/components/craft";
import { Grid, Row, Child } from "@/components/grid";

import Link from "next/link";

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
            <Row>
              <Child className="col-span-3 text-muted-foreground">
                <p>
                  © Bridger Tower, 2025-Present,{" "}
                  <Link href="/site">read about my site</Link>
                </p>
              </Child>
              <Child />
            </Row>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
