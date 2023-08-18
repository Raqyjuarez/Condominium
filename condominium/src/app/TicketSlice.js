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

const ticket = {
  title: "",
  description: "",
  userId: "",
  categoryId: "",
  maintenanceId: "",
};

const valid = {
  title: true,
  description: true,
  userId: true,
  categoryId: true,
  maintenanceId: true,
};

export const addTicket = createAsyncThunk("tickets/addTicket", async (ticket) => {
  const addTicketRef = await addDoc(collection(db, "Tickets"), ticket);
  const newTicket = { id: addTicketRef.id, ticket };
  return newTicket;
});

export const fetchTickets = createAsyncThunk("tickets/fetchTickets", async () => {
  const querySnapshot = await getDocs(collection(db, "Tickets"));
  const tickets = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ticket: doc.data(),
  }));
  console.log(tickets);
  return tickets;
});

export const deleteTicket = createAsyncThunk("tickets/deleteTicket", async (id) => {
  const tickets = await getDocs(collection(db, "Tickets"));
  for (var snap of tickets.docs) {
    if (snap.id === id) {
      await deleteDoc(doc(db, "Tickets", snap.id));
    }
  }
  return id;
});

export const updateTicket = createAsyncThunk(
  "tickets/updateTicket",
  async (editedTicket) => {
    const tickets = await getDocs(collection(db, "Tickets"));
    for (var snap of tickets.docs) {
      if (snap.id === editedTicket.id) {
        const ticketRef = doc(db, "Tickets", snap.id);
        await updateDoc(ticketRef, editedTicket.ticket);
      }
    }
    return editedTicket;
  }
);

const ticketsSlice = createSlice({
  name: "Tickets",
  initialState: {
    actual: "",
    ticket,
    valid,
    ticketsArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTicket.fulfilled, (state, action) => {
        state.ticketsArray.push(action.payload);
        state.actual = "";
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.ticketsArray = action.payload;
      })
      .addCase(deleteTicket.fulfilled, (state, action) => {
        state.ticketsArray = state.ticketsArray.filter(
          (ticket) => ticket.id !== action.payload
        );
      })
      .addCase(updateTicket.fulfilled, (state, action) => {
        const { id, ticket } = action.payload;
        const ticketIndex = state.ticketsArray.findIndex((ticket) => ticket.id === id);
        if (ticketIndex !== -1) {
          state.ticketsArray[ticketIndex] = { id: id, ticket };
        }
      });
  },
});

export default ticketsSlice.reducer;
