import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    let contacts = await readContacts();
    console.log(contacts);
};

getAllContacts();