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

const user = {
  username: '',
  password: '',
  name: "",
  lastname: "",
  email: "",
  userPhone: "",
  userRole: "",
};

const valid = {
  username: true,
  password: true,
  name: true,
  lastname: true,
  email: true,
  userPhone: true,
  userRole: true,
};

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const addUserRef = await addDoc(collection(db, "Users"), user);
  const newUser = { id: addUserRef.id, user };
  return newUser;
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const querySnapshot = await getDocs(collection(db, "Users"));
  const users = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    user: doc.data(),
  }));
  return users;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  const users = await getDocs(collection(db, "Users"));
  for (var snap of users.docs) {
    if (snap.id === id) {
      await deleteDoc(doc(db, "Users", snap.id));
    }
  }
  return id;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (editedUser) => {
    console.log(editedUser)
    const users = await getDocs(collection(db, "Users"));
    for (var snap of users.docs) {
      if (snap.id === editedUser.id) {
        const userRef = doc(db, "Users", snap.id);
        await updateDoc(userRef, editedUser.user);
      }
    }
    return editedUser;
  }
);

const usersSlice = createSlice({
  name: "Users",
  initialState: {
    actual: "",
    user,
    valid,
    usersArray: [],
  },
  reducers: {
    setValidations: (state, action) => {
      const { name, value } = action.payload;
      state.user[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.fulfilled, (state, action) => {
        state.usersArray.push(action.payload);
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersArray = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.usersArray = state.usersArray.filter(
          (user) => user.id !== action.payload
        );
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { id, user } = action.payload;
        const userIndex = state.usersArray.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
          state.usersArray[userIndex] = { id: id, user };
        }
      });
  },
});

export const { setValidations } = usersSlice.actions;
export default usersSlice.reducer;