"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addCategory } from "@/lib/services/add-category";
import { LoaderCircle, Plus } from "lucide-react";
import { ChangeEventHandler, useState } from "react";

export const AddCategory = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (
    event,
  ) => {
    setCategoryName(event.target.value);
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      await addCategory(categoryName);

      setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger>
          <Plus className="size-3" strokeWidth={2.2} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add new category</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Category name</Label>
              <Input
                value={categoryName}
                onChange={onChange}
                id="name-1"
                name="name"
                placeholder="end nemeh category oo bich!!!!!!"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose>Cancel</DialogClose>
            <Button type="submit" onClick={onSubmit} disabled={loading}>
              Add Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
