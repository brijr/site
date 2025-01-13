import { Section, Container } from "@/components/craft";
import { Grid, Row, Child } from "@/components/grid";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="text-xl tracking-tight leading-tight">
      <Section>
        <Container>
          <Grid>
            <Row>
              <Child className="col-span-2">
                <h1 className="text-3xl font-medium leading-none -mt-1 -ml-px">
                  Bridger Tower
                </h1>
                <h2 className="text-muted-foreground mt-2 sm:mt-1">
                  Designer and Software Engineer
                </h2>
              </Child>
              <Child />
              <Child />
            </Row>
            <Row>
              <Child className="col-span-2">
                <h3>
                  UI design, applied artificial intelligence, and human-computer
                  interaction.
                </h3>
              </Child>
              <Child className="col-span-2">
                <h4 className="text-muted-foreground">
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
                  + <Link href="/posts">Read my posts</Link>
                </p>
              </Child>
              <Child className="col-span-2 flex flex-col text-muted-foreground">
                <p>
                  + Follow me on{" "}
                  <a target="_blank" href="https://x.com/bridgertower">
                    x.com
                  </a>
                </p>
                <p>
                  + Subscribe on{" "}
                  <a target="_blank" href="https://youtube.com/@bridgertower">
                    youtube.com
                  </a>
                </p>
                <p>
                  + See my resume on{" "}
                  <a target="_blank" href="https://read.cv/brijr">
                    read.cv
                  </a>
                </p>
              </Child>
            </Row>
            <Row className="sm:hidden">
              <Child />
              <Child />
              <Child />
              <Child />
            </Row>
            <Row>
              <Child className="col-span-2 text-muted-foreground">
                <p>© Bridger Tower, 2025</p>
                <p>
                  Site based on{" "}
                  <a href="https://designbooks.org/grid-system-in-graphic-design">
                    grids
                  </a>
                </p>
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
