import { Row, Child } from "../grid";
import { Article } from "../craft";

export const PostWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Row>
      <Child className="col-span-4 flex flex-col">
        <Article>{children}</Article>
      </Child>
    </Row>
  );
};
