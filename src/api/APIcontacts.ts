interface Data {
  contact?: string;
  contact_ID?: string;
}

export const postContacts = (post: Data, address: string) => {
  let stringify = post.contact
    ? { contact: post.contact }
    : { contact_ID: post.contact_ID };
  return new Promise((resolve, reject) => {
    fetch(address, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
      },
      body: JSON.stringify(stringify),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          reject(data);
          return;
        }
        resolve(data);
      })
      .catch((err) => reject(err));
  });
};
