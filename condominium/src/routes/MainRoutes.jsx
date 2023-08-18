import EnhancedTable from "../pages/EnhancedTable.jsx";
import MainLayout from "../MainLayout";
import Forms from "../pages/Forms";
import Home from "../pages/Home";

const tables = {
  categories: {
    name: "Category",
    headers: [
      { id: "id", label: "ID" },
      { id: "category", label: "Category" },
    ],
  },
};

function createData(id, category) {
  return { id, category };
}

const rows = [
  createData(1, "Gardening"),
  createData(2, "Plumbing"),
  createData(3, "Cleaning"),
  createData(4, "Electronics"),
  createData(5, "Cooking"),
  createData(6, "Furniture"),
  createData(7, "Automotive"),
  createData(8, "Sports"),
  createData(9, "Fashion"),
  createData(10, "Books"),
];


const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
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
      element: <EnhancedTable options={tables.categories} series={rows} />,
    },
  ],
};

export default MainRoutes;
