import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <main className="Counter">
        <h1>Days Since Last Incident</h1>
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Reset</button>
          <button>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={() => {}}>
            <label htmlFor="set-to">Set Count</label>
            <input id="set-to" type="number" />
            <input type="submit" />
          </form>
        </section>
      </main>
    </div>
  );
};

export default Counter;
