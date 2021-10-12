import React, { useContext, useEffect, useState } from "react";
import { simpleCredentialGet } from "./api/APIconnexion";
import "./app.css";
import Chat from "./components/Chat";
import ErrorModal from "./components/ErrorModal";
import LoginSub from "./components/LoginSub";
import { ErrorContext } from "./context/ErrorContext";
import { ADDRESS } from "./helpers/Address";

function App() {
  const [err, setErr] = useContext(ErrorContext);
  const [validated, setValidated] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  //cause HTTP only cookie
  useEffect(() => {
    if (validated) return;

    simpleCredentialGet(ADDRESS.cookieValidate)
      .then((data: any) => {
        setId(data.id);
        setValidated(true);
      })
      .catch((data) => console.log("rejected", data.err));
  }, [validated]);

  return (
    <div className="App">
      {err ? <ErrorModal /> : ""}
      {validated ? (
        <Chat id={id} />
      ) : (
        <LoginSub
          setId={setId}
          err={err}
          setErr={setErr}
          setValidated={setValidated}
        />
      )}
    </div>
  );
}

export default App;
