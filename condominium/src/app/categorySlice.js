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
  value: "",
};

const valid = {
  value: true,
};

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (category) => {
    const addCategoryRef = await addDoc(collection(db, "Categories"), category);
    const newCategory = { id: addCategoryRef.id, category };
    return newCategory;
  }
);

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const querySnapshot = await getDocs(collection(db, "Categories"));
    const categories = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      category: doc.data(),
    }));
    console.log(categories);
    return categories;
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id) => {
    const categories = await getDocs(collection(db, "Categories"));
    for (var snap of categories.docs) {
      if (snap.id === id) {
        await deleteDoc(doc(db, "Categories", snap.id));
      }
    }
    return id;
  }
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (editedCategory) => {
    const categories = await getDocs(collection(db, "Categories"));
    for (var snap of categories.docs) {
      if (snap.id === editedCategory.id) {
        const categoryRef = doc(db, "Categories", snap.id);
        await updateDoc(categoryRef, editedCategory.category);
      }
    }
    return editedCategory;
  }
);

const categoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    actual: "",
    category,
    valid,
    categoriesArray: [],
  },
  reducers: {
    setValidations: (state, action) => {
      const { name, value } = action.payload;
      state.category[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categoriesArray.push(action.payload);
        state.actual = "";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
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

export const { setValidations } = categoriesSlice.actions;
export default categoriesSlice.reducer;