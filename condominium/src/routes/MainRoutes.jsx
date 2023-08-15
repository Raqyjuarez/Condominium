import EnhancedTable from "../pages/EnhancedTable";
import { useSelector } from "react-redux";
import Form from "../pages/Form";
import { useEffect } from "react";

const Testing = () => {
    const Inputs = useSelector((state) => state.form);

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
            element: <Form page={Inputs.users} />,
          },
          {
            path: "/Residentials",
            element: <Form page={Inputs.residentials} />,
          },
          {
            path: "/Tickets",
            element: <Form page={Inputs.tickets} />,
          },
          {
            path: "/Maintenance",
            element: <Form page={Inputs.maintenance} />,
          },
          {
            path: "/Categories",
            element: <EnhancedTable Unit={tables.categories} />,
          },
        ],
      };

    return MainRoutes;
}

const tables = {
  categories: {
    name: "Categories",
    fields: [
      { id: "id", headerName: "ID" },
      { id: "category", headerName: "Category" },
    ],
  },
};

export default Testing;
