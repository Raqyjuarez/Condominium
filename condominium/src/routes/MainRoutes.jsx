import EnhancedTable from "../pages/EnhancedTable.jsx";
import MainLayout from "../MainLayout";
import Forms from "../pages/Forms";
import Tickets from "../pages/Tickets";
import Dashboard from "../pages/Dashboard/index.jsx";
import { useSelector } from "react-redux";
import { fetchUsers } from "../app/userSlice.js";
import UsersTable from "../pages/Tables/UsersTable";
import ResidentialsTable from "../pages/Tables/ResidentialsTable";
import TicketsTable from "../pages/Tables/TicketsTable.jsx";
import MaintenanceTable from "../pages/Tables/MaintenanceTable.jsx";
import CategoriesTable from "../pages/Tables/CategoriesTable.jsx";
import Login from '../pages/Login'
import TestTable from "../pages/Tables/TestTable.jsx";

const headers = {
  users: {
    name: "Users",
    headers: ["ID", "Name", "Lastname", "Email", "Rol", "Phone"],
  },
  residentials: {
    name: "Residentials",
    headers: ["ID", "Owner ID", "Resident ID", "Address", "Phone"],
  },
  tickets: {
    name: "Tickets",
    headers: [
      "ID",
      "Title",
      "Description",
      "User ID",
      "Category ID",
      "Maintenance ID",
    ],
  },
  maintenance: {
    name: "Maintenance",
    headers: ["ID", "Users ID", "Skill"],
  },
  categories: {
    name: "Categories",
    headers: ["ID", "Category"],
  },
};

const data = {
  users: [
    {
      id: '3ra7dCgpNpJeZutrE9Gs',
      name: "Pedro",
      lastname: "Gutierres Vargas",
      email: "pvargas@gmail.com",
      rol: "Admin",
      phone: "12345678",
    },
    {
      id: 'J08hWWMxyo6keHAztTv8',
      name: "Juan",
      lastname: "Villegas Martinez",
      email: "jmartinez@gmail.com",
      rol: "Employee",
      phone: "12345678",
    },
  ],
  residentials: [
    {
      id: 1,
      ownerId: 1,
      residentId: 2,
      address: "123 Main Street",
      phone: "12345678",
    },
  ],
  tickets: [
    {
      id: 1,
      tittle: "Example ticket",
      description: "This is a example Ticket",
      userId: 1,
      categoryId: 3,
      maintenanceId: 2,
    },
  ],
  maintenance: [
    { id: 1, userId: 2, categoryId: 1 },
    { id: 2, userId: 2, categoryId: 2 },
  ],
  categories: [
    { id: 1, category: "Gardening" },
    { id: 2, category: "Plumbing" },
    { id: 3, category: "Cleaning" },
    { id: 4, category: "Electronics" },
    { id: 5, category: "Cooking" },
    { id: 6, category: "Furniture" },
    { id: 7, category: "Automotive" },
    { id: 8, category: "Sports" },
    { id: 9, category: "Fasion" },
    { id: 10, category: "Books" },
  ],
};

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
          element: <TestTable />,
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
          element: <MaintenanceTable />,
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
