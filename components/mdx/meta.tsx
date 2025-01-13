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
          <h1 className="text-3xl font-medium leading-none -mt-1 -ml-px">
            {title}
          </h1>
          {description && (
            <p className="mt-2 sm:mt-1 text-muted-foreground">{description}</p>
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
