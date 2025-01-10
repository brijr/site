import { cn } from "@/lib/utils";

export const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid gap-4 ring-[1px] ring-inset ring-muted">
      {children}
    </div>
  );
};

export const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 border-y border-muted">
      {children}
    </div>
  );
};

export const Child = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-4 sm:min-h-32 border-x border-muted hover:ring-orange hover:ring-[1px] hover:ring-inset",
        className
      )}
    >
      {children}
    </div>
  );
};
