import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AddCategory } from "./AddCategory";

type FoodCategoryProps = {
  name: string;
  count: number;
  isActive?: boolean;
  isAddButton?: boolean;
};

export const FoodCategory = ({
  name,
  count,
  isActive = false,
  isAddButton = false,
}: FoodCategoryProps) => {
  if (isAddButton) {
    return <AddCategory />;
  }

  return (
    <Button
      type="button"
      variant="outline"
      className={cn(
        "rounded-full border border-zinc-300 bg-white px-4 py-2 text-[16px] font-medium text-zinc-900 shadow-none hover:bg-zinc-50",
        isActive && "border-[#EF4444] hover:bg-white",
      )}
    >
      <span className="text-[14px]">{name}</span>
      <Badge className="ml-2 min-w-8 rounded-full bg-zinc-900 px-2.5 py-0.5 text-[14px] font-semibold text-white">
        {count}
      </Badge>
    </Button>
  );
};
