import { Contact } from "../models/Contact";

export const searchContacts = (
  contacts: Contact[],
  sender: string
): boolean => {
  let exists: boolean = false;

  console.log("contacts", contacts);

  contacts.forEach((contact) => {
    if (contact.id === sender) {
      exists = true;
    }
  });

  return exists;
};
