import React, { useContext, useEffect, useState } from "react";
import { simpleCredentialGet } from "../api/APIconnexion";
import { postContacts } from "../api/APIcontacts";
import { ErrorContext } from "../context/ErrorContext";
import { useSocket } from "../context/SocketContext";
import { ADDRESS } from "../helpers/Address";
import { searchContacts } from "../helpers/misc";
import { Contact } from "../models/Contact";
import styles from "./styles/SideBar.module.css";

interface SideBarProps {
  setContacts: Function;
  contacts: Contact[];
  chatting: string;
  setChatting: Function;
}

interface ContactButtonProps {
  contact: Contact;
  chatting: string;
  setChatting: Function;
}

export default function SideBar({
  setContacts,
  contacts,
  chatting,
  setChatting,
}: SideBarProps) {
  const socket = useSocket();
  const [err, setErr] = useContext(ErrorContext);
  const [newContact, setNewContact] = useState<string>("");
  const [update, setUpdate] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postContacts({ contact: newContact }, ADDRESS.postContacts)
      .then((data: any) => {
        setErr(data.res);
      })
      .catch((error) => {
        setErr(error.err);
      })
      .finally(() => {
        setNewContact("");
        setUpdate((update) => update + 1);
      });
  };

  useEffect(() => {
    setContacts([]);
    simpleCredentialGet(ADDRESS.getContacts)
      .then((data: any) => {
        console.log(data);
        if (data.length) {
          data.forEach((contact: Contact) => {
            setContacts((prevContacts: any) => [
              ...prevContacts,
              new Contact(contact.id, contact.username),
            ]);
          });
        }
      })
      .catch((data) => console.log("rejected", data));
  }, [setContacts, update]);

  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", async (data: any) => {
      if (
        data.sender_ID !== chatting &&
        !searchContacts(contacts, data.sender_ID)
      ) {
        console.log("posting contact");
        try {
          await postContacts(
            { contact_ID: data.sender_ID },
            ADDRESS.postContacts
          );
          setErr("New connexion sent a message");
          setUpdate((update) => update + 1);
        } catch (error: any) {
          console.log(error);
        }
      }
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, chatting, contacts, setUpdate]);

  return (
    <div className={styles.sideBar}>
      <div className={styles.contactWrap}>
        {contacts.map((contact) => {
          return (
            <ContactButton
              key={contact.id}
              contact={contact}
              chatting={chatting}
              setChatting={setChatting}
            />
          );
        })}
      </div>

      <form className={styles.contactForm} onSubmit={(e) => handleSubmit(e)}>
        <input type="submit" value="Send" />
        <input
          type="text"
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
          placeholder="Add contact"
        />
      </form>
    </div>
  );
}

export function ContactButton({
  contact,
  chatting,
  setChatting,
}: ContactButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setChatting(contact.id);
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      key={contact.id}
      className={
        chatting === contact.id
          ? `${styles.contact} ${styles.clicked}`
          : styles.contact
      }
    >
      <img alt={contact.username} src={contact.pic} />
      <div className={styles.details}>
        <h5>{contact.username}</h5>
        <h6>{contact.username}</h6>
      </div>
    </button>
  );
}
