import { useDispatch, useSelector } from "react-redux";
import { setValidations } from "@app/formSlice";
import { addUser, updateUser } from "@app/userSlice";
import { addResidential, updateResidential } from "@app/residentialSlice";
import { addMaintenance, updateMaintenance } from "@app/maintenanceSlice";
import { addTicket, updateTicket } from "@app/ticketSlice";
import { addCategory, updateCategory } from "@app/categorySlice";
import { setValues } from "@app/formSlice";
import { clean } from "@app/formSlice";

export const getSelector = (from) => {
  const state = useSelector((state) => state.form);
  const values = state.values[from];
  const valid = state.valids[from];
  const actual = state.actual;
  return { values, valid, actual };
};

export const handleInputChange = (e, target, dispatch) => {
  const { name, value } = e.target;
  dispatch(setValues({ target, name, value }));
};

export const handleAdd = (id, target, actual, dispatch, navigate) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  let entity;

  switch (id) {
    case 1:
      entity = {
        name: "user",
        add: addUser,
        update: updateUser,
      };
      break;
    case 2:
      entity = {
        name: "residentials",
        add: addResidential,
        update: updateResidential,
      };
      break;
    case 3:
      entity = {
        name: "Maintenance",
        add: addMaintenance,
        update: updateMaintenance,
      };
      break;
    case 4:
      entity = {
        name: "ticket",
        add: addTicket,
        update: updateTicket,
      };
      break;
    case 5:
      entity = {
        name: "category",
        add: addCategory,
        update: updateCategory,
      };
  }
  let isFormValid = true;

  Object.keys(target).forEach((fieldName) => {
    const fieldValue =
      typeof target[fieldName] === "string"
        ? target[fieldName].trim()
        : target[fieldName];
    const isValid = fieldValue !== "";

    dispatch(
      setValidations({ target: entity.name, name: fieldName, value: isValid })
    );

    if (!isValid) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    if (actual === "") {
      dispatch(entity.add(target));
      dispatch(clean());
      navigate(capitalize(`/${entity.name}s`));
    } else {
      dispatch(entity.update({ id: actual, target }));
    }
  }
};
