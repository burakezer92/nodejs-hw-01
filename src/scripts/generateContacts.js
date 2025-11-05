import { createFakeContact } from "../utils/createFakeContact.js"
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
    let contacts = await readContacts();
    for (let i = 0; i < number; i++) {
        await contacts.push(createFakeContact());
    }

    writeContacts(contacts);
};

generateContacts(5);