import { cn } from "@/lib/utils";

export const Grid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid gap-4 ring-[1px] ring-inset ring-muted dark:ring-muted/50",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Row = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 lg:grid-cols-4 border-y border-muted dark:border-muted/50",
        className
      )}
    >
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
        "p-0 sm:min-h-32 border-x border-muted dark:border-muted/50",
        className
      )}
    >
      {children}
    </div>
  );
};
