"use client";

import { ChangeEvent, DragEvent, useState } from "react";
import Image from "next/image";
import { ImagePlus, Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FoodForm = {
  foodName: string;
  price: string;
  ingredients: string;
  category: string;
};

type FoodAddDialogProps = {
  sectionName?: string;
  mode?: "add" | "edit";
  initialFood?: Partial<FoodForm> & {
    imagePreview?: string | null;
    imageName?: string;
  };
};

export function FoodAddDialog({
  sectionName = "Appetizers",
  mode = "add",
  initialFood,
}: FoodAddDialogProps) {
  const createInitialFood = (): FoodForm => ({
    foodName: initialFood?.foodName ?? "",
    price: initialFood?.price ?? "",
    ingredients: initialFood?.ingredients ?? "",
    category: initialFood?.category ?? sectionName,
  });

  const [open, setOpen] = useState(false);
  const [food, setFood] = useState<FoodForm>(createInitialFood);
  const [imagePreview, setImagePreview] = useState<string | null>(
    initialFood?.imagePreview ?? null,
  );
  const [imageName, setImageName] = useState(initialFood?.imageName ?? "");

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (nextOpen) {
      setFood(createInitialFood());
      setImagePreview(initialFood?.imagePreview ?? null);
      setImageName(initialFood?.imageName ?? "");
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFood((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageFile = (file?: File) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(typeof reader.result === "string" ? reader.result : null);
      setImageName(file.name);
    };

    reader.readAsDataURL(file);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleImageFile(event.target.files?.[0]);
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    handleImageFile(event.dataTransfer.files?.[0]);
  };

  const handleSubmit = () => {
    console.log("Food data:", food);
    console.log("Image name:", imageName);
    console.log("Image preview:", imagePreview);
  };

  const dialogTitle =
    mode === "edit" ? "Dishes info" : `Add new Dish to ${sectionName}`;
  const actionLabel = mode === "edit" ? "Save changes" : "Add Dish";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {mode === "edit" ? (
          <button
            type="button"
            className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-500 transition hover:bg-[#FFF5F5]"
          >
            <Pencil className="size-3.5" strokeWidth={2.6} />
          </button>
        ) : (
          <Button
            type="button"
            className="flex min-h-55 w-full flex-col items-center justify-center rounded-[18px] border border-dashed border-[#FCA5A5] bg-white px-5 py-6 text-center transition hover:border-[#EF4444] hover:bg-[#FFF8F8]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EF4444] text-white shadow-sm">
              <Plus className="size-4" strokeWidth={2.4} />
            </span>
            <span className="mt-5 max-w-40 text-[20px] leading-7 font-semibold text-[#18181B]">
              {`Add new Dish to ${sectionName}`}
            </span>
          </Button>
        )}
      </DialogTrigger>

      <DialogContent
        className={
          mode === "edit"
            ? "w-[360px] max-w-[calc(100%-2rem)] gap-0 rounded-md p-0 sm:max-w-[360px]"
            : "w-[560px] max-w-[calc(100%-2rem)] rounded-2xl p-6 sm:max-w-[560px]"
        }
      >
        {mode === "edit" ? (
          <>
            <DialogHeader className="border-b border-[#E4E4E7] px-4 py-3 pr-10">
              <DialogTitle className="text-[14px] font-semibold text-[#18181B]">
                {dialogTitle}
              </DialogTitle>
              <DialogDescription />
            </DialogHeader>

            <div className="space-y-3 px-4 py-3">
              <div className="grid grid-cols-[84px_1fr] items-center gap-2">
                <Label className="text-[11px] font-normal text-[#A1A1AA]">
                  Dish name
                </Label>
                <Input
                  type="text"
                  placeholder=""
                  name="foodName"
                  value={food.foodName}
                  onChange={handleChange}
                  className="h-8 rounded-md border-[#E4E4E7] px-2 text-[12px] shadow-none"
                />
              </div>

              <div className="grid grid-cols-[84px_1fr] items-center gap-2">
                <Label className="text-[11px] font-normal text-[#A1A1AA]">
                  Dish category
                </Label>
                <Input
                  type="text"
                  placeholder=""
                  name="category"
                  value={food.category}
                  onChange={handleChange}
                  className="h-8 rounded-md border-[#E4E4E7] px-2 text-[12px] shadow-none"
                />
              </div>

              <div className="grid grid-cols-[84px_1fr] items-start gap-2">
                <Label className="pt-2 text-[11px] font-normal text-[#A1A1AA]">
                  Ingredients
                </Label>
                <textarea
                  placeholder=""
                  name="ingredients"
                  value={food.ingredients}
                  onChange={handleChange}
                  className="min-h-14 w-full rounded-md border border-[#E4E4E7] px-2 py-2 text-[12px] outline-none transition focus:border-[#F87171]"
                />
              </div>

              <div className="grid grid-cols-[84px_1fr] items-center gap-2">
                <Label className="text-[11px] font-normal text-[#A1A1AA]">
                  Price
                </Label>
                <Input
                  type="text"
                  placeholder=""
                  name="price"
                  value={food.price}
                  onChange={handleChange}
                  className="h-8 rounded-md border-[#E4E4E7] px-2 text-[12px] shadow-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end border-t border-[#E4E4E7] px-4 py-3">
              <DialogClose asChild>
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className="h-9 rounded-md bg-[#18181B] px-4 text-[12px] font-medium text-white hover:bg-[#2A2A2E]"
                >
                  {actionLabel}
                </Button>
              </DialogClose>
            </div>
          </>
        ) : (
          <>
            <DialogHeader className="pr-8">
              <DialogTitle className="text-[24px] font-semibold text-[#18181B]">
                {dialogTitle}
              </DialogTitle>
              <DialogDescription />
            </DialogHeader>

            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-[#18181B]">
                    Food name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Type food name"
                    name="foodName"
                    value={food.foodName}
                    onChange={handleChange}
                    className="h-11 rounded-xl border-[#E4E4E7] px-3 text-sm shadow-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-[#18181B]">
                    Food price
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter price..."
                    name="price"
                    value={food.price}
                    onChange={handleChange}
                    className="h-11 rounded-xl border-[#E4E4E7] px-3 text-sm shadow-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-[#18181B]">
                  Ingredients
                </Label>
                <textarea
                  placeholder="List ingredients..."
                  name="ingredients"
                  value={food.ingredients}
                  onChange={handleChange}
                  className="min-h-28 w-full rounded-xl border border-[#E4E4E7] px-3 py-3 text-sm outline-none transition focus:border-[#F87171]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-[#18181B]">
                  Food image
                </Label>

                <label
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={handleDrop}
                  className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#D4D4D8] bg-[#FAFAFA] px-4 py-6 text-center transition hover:border-[#F87171] hover:bg-[#FFF8F8]"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />

                  {imagePreview ? (
                    <div className="w-full space-y-3">
                      <Image
                        src={imagePreview}
                        alt={imageName || "Food preview"}
                        width={480}
                        height={128}
                        unoptimized
                        className="h-32 w-full rounded-xl object-cover"
                      />
                      <p className="text-sm font-medium text-[#18181B]">
                        {imageName}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#71717A] shadow-sm">
                        <ImagePlus className="size-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-[#18181B]">
                          Choose a file or drag & drop it here
                        </p>
                      </div>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 rounded-xl px-5 text-sm font-medium"
                >
                  Cancel
                </Button>
              </DialogClose>

              <DialogClose asChild>
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className="h-10 rounded-xl bg-[#18181B] px-5 text-sm font-medium text-white hover:bg-[#2A2A2E]"
                >
                  {actionLabel}
                </Button>
              </DialogClose>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
