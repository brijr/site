import { Section, Container } from "@/components/craft";
import { Grid, Row, Child } from "@/components/grid";

import Link from "next/link";

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="text-lg tracking-tight leading-tight">
      <Section>
        <Container>
          <Grid>
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
