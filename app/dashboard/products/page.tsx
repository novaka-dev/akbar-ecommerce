"use client";

import { createProduct } from "@/app/actions";
import { UploadDropzone } from "@/app/utils/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { MoreHorizontal, PlusIcon, UserIcon } from "lucide-react";
import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "@/lib/zodSchemas";

export default function ProductPage() {
  const [lastResult, action] = useActionState(createProduct, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },

    shouldValidate: "onBlur",
  });
  return (
    <>
      {/* Add Product */}
      <div className="flex justify-end items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="flex items-center gap-x-2">
              <PlusIcon className="w-3.5 h-3.5" />
              <span>Add Product</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col h-full">
            <SheetHeader>
              <SheetTitle className="mt-5 text-lg font-bold">
                Create Product
              </SheetTitle>
              <SheetDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus dolores, expedita impedit quo dolor velit.
              </SheetDescription>
            </SheetHeader>
            <form className="flex-1 overflow-y-auto">
              <div className="grid auto-rows-min gap-6 px-4">
                <div className="flex flex-col gap-3">
                  <Label>Product Name</Label>
                  <Input
                    placeholder="Product Name"
                    type="text"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Description</Label>
                  <Textarea placeholder="Description your products" />
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Price</Label>
                  <Input placeholder="$40" type="number" className="w-full" />
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Feature Product</Label>
                  <Switch />
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Status</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="publish">Publish</SelectItem>
                      <SelectItem value="archive">Archive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Images</Label>
                  <UploadDropzone
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      alert("Finish Uploading");
                    }}
                    onUploadError={(error) => {
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                </div>
              </div>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      {/* Table */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Manage your products</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <UserIcon className="w-16 h-16" />
                </TableCell>
                <TableCell>Jaket distro terbaru</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>2026-04-09</TableCell>
                <TableCell>$ 100</TableCell>
                <TableCell className="text-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={"ghost"} size={"icon"}>
                        <MoreHorizontal className="w-3.5 h-3.5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem variant="destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
