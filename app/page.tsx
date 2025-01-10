import { Section, Container } from "@/components/craft";
import { Grid, Row, Child } from "@/components/grid";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="text-lg tracking-tight leading-tight">
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
                  UI design, applied artificial intelligence, and human-computer
                  interaction.
                </h3>
              </Child>
              <Child className="col-span-2">
                <h4>
                  Currently, I work at{" "}
                  <a href="https://ampry.com" target="_blank">
                    Ampry
                  </a>{" "}
                  and{" "}
                  <a href="https://9d8.dev" target="_blank">
                    9d8
                  </a>{" "}
                  building marketing and sales software.
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
                <p>
                  + <Link href="/work">View my work</Link>
                </p>
                <p>
                  + <Link href="/posts">Read my thoughts</Link>
                </p>
              </Child>
              <Child className="col-span-2 flex flex-col">
                <p>
                  Subscribe on{" "}
                  <a target="_blank" href="https://youtube.com/@bridgertower">
                    YouTube
                  </a>
                </p>
                <p>
                  See my resume on{" "}
                  <a target="_blank" href="https://read.cv/brijr">
                    read.cv
                  </a>
                </p>
                <p>
                  Follow me on{" "}
                  <a target="_blank" href="https://x.com/bridgertower">
                    x.com
                  </a>
                </p>
              </Child>
            </Row>
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
