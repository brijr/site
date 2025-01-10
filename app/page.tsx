import { Section, Container } from "@/components/craft";
import { Grid, Row, Child } from "@/components/grid";

import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Section>
        <Container>
          <Grid>
            <Row>
              <Child className="col-span-2">
                <h1>Bridger Tower</h1>
                <h2 className="text-muted-foreground">
                  Designer and Software Engineer
                </h2>
              </Child>
              <Child></Child>
              <Child></Child>
            </Row>
            <Row>
              <Child className="col-span-2">
                <h3>
                  Design Engineer exploring ui design, applied artificial
                  intelligence, and human computer interaction.
                </h3>
              </Child>
              <Child className="col-span-2">
                <h4>
                  Currently, I work at Ampry and 9d8 building marketing and
                  sales software.
                </h4>
              </Child>
            </Row>
            <Row>
              <Child />
              <Child />
              <Child />
              <Child />
            </Row>
            <Row>
              <Child className="col-span-2 flex flex-col">
                <Link href="/work">View my work</Link>
                <Link href="/posts">Read my thoughts</Link>
              </Child>
              <Child className="col-span-2 flex flex-col">
                <a target="_blank" href="https://x.com/bridgertower">
                  X.com
                </a>
                <a target="_blank" href="https://youtube.com/@bridgertower">
                  YouTube
                </a>
                <a target="_blank" href="https://github.com/brijr">
                  GitHub
                </a>
                <a target="_blank" href="https://linkedin.com/in/brijr">
                  LinkedIn
                </a>
                <a target="_blank" href="mailto:bridger@wip.ac">
                  Email
                </a>
              </Child>
            </Row>
            <Row>
              <Child />
              <Child />
              <Child />
              <Child />
            </Row>
            <Row>
              <Child className="col-span-2 text-muted-foreground">
                © Bridger Tower, 2025-Present
              </Child>
              <Child />
              <Child />
            </Row>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
