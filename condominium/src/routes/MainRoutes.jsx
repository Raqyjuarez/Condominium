import EnhancedTable from "../pages/EnhancedTable";
import MainLayout from "../MainLayout";
import Test from "../pages/Test";
import Forms from "../pages/Forms";

const tables = {
  categories: {
    name: "Categories",
    fields: [
      { id: "id", headerName: "ID" },
      { id: "category", headerName: "Category" },
    ],
  },
};

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Test />,
    },
    {
      path: "/Users",
      element: <Forms formId={1} />,
    },
    {
      path: "/Residentials",
      element: <Forms formId={2} />,
    },
    {
      path: "/Tickets",
      element: <Forms formId={3} />,
    },
    {
      path: "/Maintenance",
      element: <Forms formId={4} />,
    },
    {
      path: "/Categories",
      element: <EnhancedTable Unit={tables.categories} />,
    },
  ],
};

export default MainRoutes;
