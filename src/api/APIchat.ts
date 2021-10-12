export const getMessages = (receiver_ID: string, address: string) => {
  console.log(receiver_ID);
  return new Promise((resolve, reject) => {
    fetch(address, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        receiver_ID,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.err ? reject(data) : resolve(data);
      });
  });
};
