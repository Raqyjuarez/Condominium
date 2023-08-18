import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import db from "../config/firebase";

const maintenance = {
  userId: "",
  categoryId: "",
};

const valid = {
  userId: true,
  categoryId: true,
};

export const addMaintenance = createAsyncThunk("maintenances/addMaintenance", async (maintenance) => {
  const addMaintenanceRef = await addDoc(collection(db, "Maintenances"), maintenance);
  const newMaintenance = { id: addMaintenanceRef.id, maintenance };
  return newMaintenance;
});

export const fetchMaintenances = createAsyncThunk("maintenances/fetchMaintenances", async () => {
  const querySnapshot = await getDocs(collection(db, "Maintenances"));
  const maintenances = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    maintenance: doc.data(),
  }));
  console.log(maintenances);
  return maintenances;
});

export const deleteMaintenance = createAsyncThunk("maintenances/deleteMaintenance", async (id) => {
  const maintenances = await getDocs(collection(db, "Maintenances"));
  for (var snap of maintenances.docs) {
    if (snap.id === id) {
      await deleteDoc(doc(db, "Maintenances", snap.id));
    }
  }
  return id;
});

export const updateMaintenance = createAsyncThunk(
  "maintenances/updateMaintenance",
  async (editedMaintenance) => {
    const maintenances = await getDocs(collection(db, "Maintenances"));
    for (var snap of maintenances.docs) {
      if (snap.id === editedMaintenance.id) {
        const maintenanceRef = doc(db, "Maintenances", snap.id);
        await updateDoc(maintenanceRef, editedMaintenance.maintenance);
      }
    }
    return editedMaintenance;
  }
);

const maintenancesSlice = createSlice({
  name: "Maintenances",
  initialState: {
    actual: "",
    maintenance,
    valid,
    maintenancesArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMaintenance.fulfilled, (state, action) => {
        state.maintenancesArray.push(action.payload);
        state.actual = "";
      })
      .addCase(fetchMaintenances.fulfilled, (state, action) => {
        state.maintenancesArray = action.payload;
      })
      .addCase(deleteMaintenance.fulfilled, (state, action) => {
        state.maintenancesArray = state.maintenancesArray.filter(
          (maintenance) => maintenance.id !== action.payload
        );
      })
      .addCase(updateMaintenance.fulfilled, (state, action) => {
        const { id, maintenance } = action.payload;
        const maintenanceIndex = state.maintenancesArray.findIndex((maintenance) => maintenance.id === id);
        if (maintenanceIndex !== -1) {
          state.maintenancesArray[maintenanceIndex] = { id: id, maintenance };
        }
      });
  },
});

export default maintenancesSlice.reducer;
