import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            name: contact.name,
            number: contact.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
const persistContactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const contactsReducer = persistReducer(
  persistContactsConfig,
  contactsSlice.reducer
);
