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

const residential = {
  OwnerId: "",
  ResidentId: "",
  Address: "",
  Phone: "",
};

const valid = {
  OwnerId: true,
  ResidentId: true,
  Address: true,
  Phone: true,
};

export const addResidential = createAsyncThunk("residentials/addResidential", async (residential) => {
  const addResidentialRef = await addDoc(collection(db, "Residentials"), residential);
  const newResidential = { id: addResidentialRef.id, residential };
  return newResidential;
});

export const fetchResidentials = createAsyncThunk("residentials/fetchResidentials", async () => {
  const querySnapshot = await getDocs(collection(db, "Residentials"));
  const residentials = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    residential: doc.data(),
  }));
  console.log(residentials);
  return residentials;
});

export const deleteResidential = createAsyncThunk("residentials/deleteResidential", async (id) => {
  const residentials = await getDocs(collection(db, "Residentials"));
  for (var snap of residentials.docs) {
    if (snap.id === id) {
      await deleteDoc(doc(db, "Residentials", snap.id));
    }
  }
  return id;
});

export const updateResidential = createAsyncThunk(
  "residentials/updateResidential",
  async (editedResidential) => {
    const residentials = await getDocs(collection(db, "Residentials"));
    for (var snap of residentials.docs) {
      if (snap.id === editedResidential.id) {
        const residentialRef = doc(db, "Residentials", snap.id);
        await updateDoc(residentialRef, editedResidential.residential);
      }
    }
    return editedResidential;
  }
);

const residentialsSlice = createSlice({
  name: "Residentials",
  initialState: {
    actual: "",
    residential,
    valid,
    residentialsArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addResidential.fulfilled, (state, action) => {
        state.residentialsArray.push(action.payload);
        state.actual = "";
      })
      .addCase(fetchResidentials.fulfilled, (state, action) => {
        state.residentialsArray = action.payload;
      })
      .addCase(deleteResidential.fulfilled, (state, action) => {
        state.residentialsArray = state.residentialsArray.filter(
          (residential) => residential.id !== action.payload
        );
      })
      .addCase(updateResidential.fulfilled, (state, action) => {
        const { id, residential } = action.payload;
        const residentialIndex = state.residentialsArray.findIndex((residential) => residential.id === id);
        if (residentialIndex !== -1) {
          state.residentialsArray[residentialIndex] = { id: id, residential };
        }
      });
  },
});

export default residentialsSlice.reducer;
