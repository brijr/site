import { PageMeta } from "@/lib/mdx";
import { Row, Child } from "../grid";

interface MetaProps extends PageMeta {
  className?: string;
}

export function Meta({ title, description }: MetaProps) {
  return (
    <Row>
      <Child className="col-span-2">
        <h1 className="!mt-0 font-medium">{title}</h1>
      </Child>
      <Child className="col-span-2">
        {description && <p className="text-muted-foreground">{description}</p>}
      </Child>
    </Row>
  );
}
