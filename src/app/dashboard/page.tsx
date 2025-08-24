import { ChartAreaDefault } from "@/components/charts/chart-area-default";

export default async function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col gap-2 rounded-lg border bg-accent p-4">
          <span className="text-sm text-muted-foreground">Total Revenue</span>
          <span className="text-lg font-semibold">$15,231.89</span>
          <span className="text-sm text-muted-foreground">
            +20.1% from last month
          </span>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border bg-accent p-4">
          <span className="text-sm text-muted-foreground">Total Revenue</span>
          <span className="text-lg font-semibold">$15,231.89</span>
          <span className="text-sm text-muted-foreground">
            +20.1% from last month
          </span>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border bg-accent p-4">
          <span className="text-sm text-muted-foreground">Total Revenue</span>
          <span className="text-lg font-semibold">$15,231.89</span>
          <span className="text-sm text-muted-foreground">
            +20.1% from last month
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ChartAreaDefault />
        <ChartAreaDefault />
      </div>
    </div>
  );
}
