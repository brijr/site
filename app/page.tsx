import { Section, Container } from "@/components/craft";
import { Grid, Row, Child } from "@/components/grid";
import { EmailForm } from "@/components/forms/email-form";

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
                  interaction. Background in marketing and advertising.
                </h3>
              </Child>
              <Child className="col-span-2">
                <h4 className="text-muted-foreground">
                  Currently, I run{" "}
                  <a href="https://wip.ac" target="_blank" rel="noreferrer">
                    WIP
                  </a>{" "}
                  and{" "}
                  <a href="https://9d8.dev" target="_blank" rel="noreferrer">
                    9d8
                  </a>{" "}
                  designing and building software.
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
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://x.com/bridgertower"
                  >
                    x.com
                  </a>
                </p>
                <p>
                  + Subscribe on{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://youtube.com/@bridgertower"
                  >
                    youtube.com
                  </a>
                </p>
                <p>
                  + Connect on{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://linkedin.com/in/brijr"
                  >
                    linkedin.com
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
              <Child className="col-span-3">
                <p>Subscribe for design related content</p>
                <EmailForm />
              </Child>
              <Child />
            </Row>
            <Row>
              <Child className="col-span-2 text-muted-foreground">
                <p>© Bridger Tower, 2025</p>
                <p>
                  <Link href="/site">About my site</Link>
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
