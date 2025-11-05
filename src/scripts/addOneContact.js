import {createFakeContact} from "../utils/createFakeContact.js"
import {writeContacts} from "../utils/writeContacts.js";
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
    let contacts = await readContacts();
    await contacts.push(createFakeContact());
    writeContacts(contacts);
};

addOneContact();
