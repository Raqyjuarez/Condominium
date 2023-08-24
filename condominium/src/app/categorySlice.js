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

const category = {
  userId: "",
  categoryId: "",
};

const valid = {
  userId: true,
  categoryId: true,
};

export const addCategory = createAsyncThunk(
  "categorys/addCategory",
  async (category) => {
    const addCategoryRef = await addDoc(collection(db, "Categorys"), category);
    const newCategory = { id: addCategoryRef.id, category };
    return newCategory;
  }
);

export const fetchCategorys = createAsyncThunk(
  "categorys/fetchCategorys",
  async () => {
    const querySnapshot = await getDocs(collection(db, "Categorys"));
    const categorys = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      category: doc.data(),
    }));
    console.log(categorys);
    return categorys;
  }
);

export const deleteCategory = createAsyncThunk(
  "categorys/deleteCategory",
  async (id) => {
    const categorys = await getDocs(collection(db, "Categorys"));
    for (var snap of categorys.docs) {
      if (snap.id === id) {
        await deleteDoc(doc(db, "Categorys", snap.id));
      }
    }
    return id;
  }
);

export const updateCategory = createAsyncThunk(
  "categorys/updateCategory",
  async (editedCategory) => {
    const categorys = await getDocs(collection(db, "Categorys"));
    for (var snap of categorys.docs) {
      if (snap.id === editedCategory.id) {
        const categoryRef = doc(db, "Categorys", snap.id);
        await updateDoc(categoryRef, editedCategory.category);
      }
    }
    return editedCategory;
  }
);

const categorysSlice = createSlice({
  name: "Categorys",
  initialState: {
    actual: "",
    category,
    valid,
    categoriesArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categoriesArray.push(action.payload);
        state.actual = "";
      })
      .addCase(fetchCategorys.fulfilled, (state, action) => {
        state.categoriesArray = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categoriesArray = state.categoriesArray.filter(
          (category) => category.id !== action.payload
        );
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const { id, category } = action.payload;
        const categoryIndex = state.categoriesArray.findIndex(
          (category) => category.id === id
        );
        if (categoryIndex !== -1) {
          state.categoriesArray[categoryIndex] = { id: id, category };
        }
      });
  },
});

export default categorysSlice.reducer;
