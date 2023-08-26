import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser, deleteUser, fetchUsers } from "@app/userSlice";
import {
  addResidential,
  updateResidential,
  deleteResidential,
  fetchResidentials,
} from "@app/residentialSlice";
import {
  addTicket,
  updateTicket,
  deleteTicket,
  fetchTickets,
} from "@app/ticketSlice";
import {
  addMaintenance,
  updateMaintenance,
  deleteMaintenance,
  fetchMaintenances,
} from "@app/maintenanceSlice";
import {
  addCategory,
  updateCategory,
  deleteCategory,
  fetchCategories,
} from "@app/categorySlice";
import { setValues, setValidations, setActual, clean } from "@app/formSlice";
import { documentId } from "firebase/firestore";

export const getTarget = (id) => {
  let currentTarget;
  switch (id) {
    case 1:
      currentTarget = {
        fetch: fetchUsers,
        data: useSelector((state) => state.user.usersArray),
      };
      break;
    case 2:
      currentTarget = {
        fetch: fetchResidentials,
        data: useSelector((state) => state.residential.residentialArray),
      };
      break;
    case 3:
      currentTarget = {
        fetch: fetchTickets,
        data: useSelector((state) => state.ticket.ticketsArray),
      };
      break;
    case 4:
      currentTarget = {
        fetch: fetchMaintenances,
        data: useSelector((state) => state.maintenance.maintenancesArray),
      };
      break;
    case 5:
      currentTarget = {
        fetch: fetchCategories,
        data: useSelector((state) => state.category.categoriesArray),
      };
      break;
  }
  return currentTarget;
};

export const handleDelete = (func, id, dispatch) => {
  dispatch(func(id));
};

export const handleInputChange = (e, target, dispatch) => {
  const { name, value } = e.target;
  dispatch(setValues({ target, name, value }));
};

const handleAdd = async (func, document, name, actual, navigate, dispatch) => {
  let isFormValid = true;
  Object.keys(document).forEach((field) => {
    const value =
      typeof document[field] === "string"
        ? document[field].trim()
        : document[field];
    const isValid = value !== "";

    dispatch(setValidations({ target: name, name: field, value: isValid }));

    if (!isValid) {
      isFormValid = false;
    }
  });
  if (isFormValid) {
    if (actual === "") {
      await dispatch(func.add(document));
      await dispatch(clean());
      navigate(`/${name}s`);
    } else {
      await dispatch(func.update({ id: actual, name: document }));
      await dispatch(clean());
      navigate(`/${name}s`);
    }
  }
};

const handleActual = (target, document, dispatch) => {
  dispatch(
    setActual({ target: target, fields: document[target], id: document.id })
  );
};

export const handleAction = (id, action, dispatch) => {
  const { value, document, actual, navigate } = action;
  let currentTarget;

  switch (id) {
    case 1:
      currentTarget = {
        name: "user",
        fetch: fetchUsers,
        add: addUser,
        update: updateUser,
        delete: deleteUser,
      };
      break;
    case 2:
      currentTarget = {
        name: "residential",
        fetch: fetchResidentials,
        add: addResidential,
        update: updateResidential,
        delete: deleteResidential,
      };
      break;
    case 3:
      currentTarget = {
        name: "ticket",
        fetch: fetchTickets,
        add: addTicket,
        update: updateTicket,
        delete: deleteTicket,
      };
      break;
    case 4:
      currentTarget = {
        name: "maintenance",
        fetch: fetchMaintenances,
        add: addMaintenance,
        update: updateMaintenance,
        delete: deleteMaintenance,
      };
      break;
    case 5:
      currentTarget = {
        name: "cateogory",
        fetch: fetchCategories,
        add: addCategory,
        update: updateCategory,
        delete: deleteCategory,
      };
      break;
  }

  switch (value) {
    case "fetch":
      return currentTarget.fetch;
    case "add":
      handleAdd(
        { add: currentTarget.add, update: currentTarget.update },
        document,
        currentTarget.name,
        actual,
        navigate,
        dispatch
      );
      break;
    case "set":
      handleActual(currentTarget.name, document, dispatch);
      break;
    case "delete":
      handleDelete(currentTarget.delete, document, dispatch);
      break;
  }
};
