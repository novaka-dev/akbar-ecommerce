import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DollarSign,
  ShoppingBag,
  ShoppingBagIcon,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-1">
            <CardTitle>Total Reveune</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Rp. 100.000</p>
            <p className="text-xs text-muted-foreground">
              Loremloremm mem meeem
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-1">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Rp. 100.000</p>
            <p className="text-xs text-muted-foreground">
              Loremloremm mem meeem
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-1">
            <CardTitle>Total Products</CardTitle>
            <ShoppingCart className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Rp. 100.000</p>
            <p className="text-xs text-muted-foreground">
              Loremloremm mem meeem
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-1">
            <CardTitle>Total User</CardTitle>
            <User className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Rp. 100.000</p>
            <p className="text-xs text-muted-foreground">
              Loremloremm mem meeem
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transaction</CardTitle>
            <CardDescription>Latest transactions kiw kiw </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sale</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>NS</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <p className="text-sm font-medium">Novaka Saputra</p>
                <p className="text-xs text-muted-foreground">
                  ajbdbjd@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium text-green-500">+ $100</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>NS</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <p className="text-sm font-medium">Novaka Saputra</p>
                <p className="text-xs text-muted-foreground">
                  ajbdbjd@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium text-green-500">+ $100</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>NS</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <p className="text-sm font-medium">Novaka Saputra</p>
                <p className="text-xs text-muted-foreground">
                  ajbdbjd@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium text-green-500">+ $100</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
