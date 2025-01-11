import { PageMeta } from "@/lib/mdx";
import { Row, Child } from "../grid";

interface MetaProps extends PageMeta {
  className?: string;
}

export function Meta({ title, description }: MetaProps) {
  return (
    <>
      <Row>
        <Child className="col-span-2">
          <h1 className="!mt-0">{title}</h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </Child>
        <Child />
        <Child />
      </Row>
      <Row className="sm:hidden">
        <Child />
        <Child />
        <Child />
        <Child />
      </Row>
    </>
  );
}
