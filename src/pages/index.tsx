import { StatCard } from "@/components/cards";
import InventoryTable from "@/components/cards/InventoryTable";
import AdminBreadcrumbs from "@/components/core/BreadCrumbs";
import { AdminLayout } from "@/layouts";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/router";
import { AiOutlineAlert, AiOutlineDatabase } from "react-icons/ai";

const Inventory = () => {
  const router = useRouter();
  return (
    <AdminLayout title="Inventory">
      <section className="main-container">
        <AdminBreadcrumbs links={links} />
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 md:pt-4 pt-2 mb-6">
          <p className="text-gray-600 font-medium text-xl">Inventory Summary</p>
          <div
            onClick={() => router.push("/add-new-inventory")}
            className="flex items-center gap-2 text-slate-50 primary-button"
          >
            <Add />
            <p>Add a New Product</p>
          </div>
        </header>
        {/* Main Section */}
        <section className="w-full flex flex-col items-center gap-7">
          {/* Grid Section with Two Boxes */}
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-7">
            <StatCard
              title="Product Overview"
              arr={productOverviewStats}
              icon={<AiOutlineDatabase />}
              iconColor="bg-indigo-300/40 text-indigo-800"
              cardBgColor="bg-blue-200/70"
            />
            <StatCard
              title="Stock Alerts"
              arr={stockAlerts}
              icon={<AiOutlineAlert />}
              iconColor="bg-red-300/40 text-red-800"
            />
          </div>
          {/* Tabular view of Inventory Data*/}
          <InventoryTable />
        </section>
      </section>
    </AdminLayout>
  );
};

export default Inventory;

const links = [{ id: 2, page: "Inventory", link: "/" }];

const productOverviewStats = [
  {
    name: "All products",
    value: "350",
  },
  {
    name: "Active",
    value: "316",
  },
];
const stockAlerts = [
  { name: "Low Stock Alert", value: "23" },
  { name: "Expired", value: "3" },
  { name: "1 start Rating", value: "2" },
];
