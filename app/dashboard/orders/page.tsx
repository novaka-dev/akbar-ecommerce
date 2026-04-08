import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Manage your orders</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p className="font-semibold">Vaka Ganteng</p>
                <p className="hidden md:flex text-sm text-muted-foreground">
                  ahahaha@gmail.com
                </p>
              </TableCell>
              <TableCell>Delivered</TableCell>
              <TableCell>Cash</TableCell>
              <TableCell>2026-04-08</TableCell>
              <TableCell className="text-right">$100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="font-semibold">Vaka Ganteng</p>
                <p className="hidden md:flex text-sm text-muted-foreground">
                  ahahaha@gmail.com
                </p>
              </TableCell>
              <TableCell>Delivered</TableCell>
              <TableCell>Cash</TableCell>
              <TableCell>2026-04-08</TableCell>
              <TableCell className="text-right">$100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="font-semibold">Vaka Ganteng</p>
                <p className="hidden md:flex text-sm text-muted-foreground">
                  ahahaha@gmail.com
                </p>
              </TableCell>
              <TableCell>Delivered</TableCell>
              <TableCell>Cash</TableCell>
              <TableCell>2026-04-08</TableCell>
              <TableCell className="text-right">$100</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
