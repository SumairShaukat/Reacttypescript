import React, { useState } from "react";

function Data() {
  const [message, setMessage] = useState("");
  const [update, setUpdate] = useState(message);
  const InputHandler = (e) => {
    setMessage(e.target.value);
  };
  const UpdateChange = () => {
    setUpdate(message);
    console.log(message);
  };

  return (
    <div>
      <h1>MESSAGE: {message}</h1>
      <h1> UPDATED: {update}</h1>
      <form className="flex  bg-red-400">
        <input
          className="bg-green"
          onChange={InputHandler}
          placeholder="type herer"
          value={message}
        />
        <button onClick={UpdateChange} type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Data;
