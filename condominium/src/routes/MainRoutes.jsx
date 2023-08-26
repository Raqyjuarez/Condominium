import MainLayout from "../MainLayout";
import Forms from "../pages/Forms";
import Tickets from "../pages/Tickets";
import Dashboard from "../pages/Dashboard/index.jsx";
import UsersTable from "@tables/UsersTable";
import ResidentialsTable from "@tables/ResidentialsTable";
import TicketsTable from "@tables/TicketsTable";
import MaintenancesTable from "@tables/MaintenancesTable";
import CategoriesTable from "@tables/CategoriesTable";
import Login from '../pages/Login'

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "Users",
      children: [
        {
          path: "/Users",
          element: <UsersTable />,
        },
        {
          path: "/Users/CU",
          element: <Forms formId={1} />,
        },
      ],
    },
    {
      path: "Residentials",
      children: [
        {
          path: "/Residentials",
          element: <ResidentialsTable />,
        },
        {
          path: "/Residentials/CU",
          element: <Forms formId={2} />,
        },
      ],
    },
    {
      path: "Tickets",
      children: [
        {
          path: "/Tickets",
          element:   <TicketsTable />,
        },
        {
          path: "/Tickets/CU",
          element: <Forms formId={3} />,
        },
        ,
      ],
    },
    {
      path: "Maintenance",
      children: [
        {
          path: "/Maintenance",
          element: <MaintenancesTable />,
        },
        {
          path: "/Maintenance/CU",
          element: <Forms formId={4} />,
        },
      ],
    },
    {
      path: "Categories",
      children: [
        {
          path: "/Categories",
          element: <CategoriesTable />,
        },
        {
          path: "/Categories/CU",
          element: <Forms formId={5} />,
        },
      ],
    },
    { path: '/MyTickets',
  element: <Tickets />}
  ],
};

export default MainRoutes;
