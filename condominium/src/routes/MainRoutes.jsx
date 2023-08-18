import EnhancedTable from "../pages/EnhancedTable.jsx";
import MainLayout from "../MainLayout";
import Forms from "../pages/Forms";
import Home from "../pages/Home";

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
      id: 1,
      name: "Pedro",
      lastname: "Gutierres Vargas",
      email: "pvargas@gmail.com",
      rol: "Admin",
      phone: "12345678",
    },
    {
      id: 2,
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
      element: <Home />,
    },
    {
      path: "Users",
      children: [
        {
          path: "/Users",
          element: (
            <EnhancedTable
              key={headers.users.name}
              options={headers.users}
              series={data.users}
            />
          ),
        },
        {
          path: "/Users/CU",
          element: <Forms key={1} formId={1} />,
        },
      ],
    },
    {
      path: "Residentials",
      children: [
        {
          path: "/Residentials",
          element: (
            <EnhancedTable
              key={headers.residentials.name}
              options={headers.residentials}
              series={data.residentials}
            />
          ),
        },
        {
          path: "/Residentials/CU",
          element: <Forms key={2} formId={2} />,
        },
      ],
    },
    {
      path: "Tickets",
      children: [
        {
          path: "/Tickets",
          element: (
            <EnhancedTable
              key={headers.tickets.name}
              options={headers.tickets}
              series={data.tickets}
            />
          ),
        },
        {
          path: "/Tickets/CU",
          element: <Forms key={3} formId={3} />,
        },
        ,
      ],
    },
    {
      path: "Maintenance",
      children: [
        {
          path: "/Maintenance",
          element: (
            <EnhancedTable
              key={headers.maintenance.name}
              options={headers.maintenance}
              series={data.maintenance}
            />
          ),
        },
        {
          path: "/Maintenance/CU",
          element: <Forms key={4} formId={4} />,
        },
      ],
    },
    {
      path: "Categories",
      children: [
        {
          path: "/Categories",
          element: (
            <EnhancedTable
              key={headers.categories.name}
              options={headers.categories}
              series={data.categories}
            />
          ),
        },
        {
          path: "/Categories/CU",
          element: <Forms key={5} formId={5} />,
        },
      ],
    },
  ],
};

export default MainRoutes;
