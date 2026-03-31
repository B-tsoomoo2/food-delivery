import { Category } from "@/lib/services/get-categories";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategorySelectorProps = {
  categories: Category[];
  onSelect: (categoryId: number) => void;
  value?: number | null;
  className?: string;
};

export function CategorySelector(props: CategorySelectorProps) {
  const { categories, onSelect, value, className } = props;

  return (
    <Select
      onValueChange={(value) => onSelect(Number(value))}
      value={value ? String(value) : undefined}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          {categories.map((category) => {
            return (
              <SelectItem key={category.id} value={String(category.id)}>
                {category.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
