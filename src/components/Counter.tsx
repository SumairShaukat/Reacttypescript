import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="max-w-4xl bg-slate-900">
      <main className="">
        <h1>Days Since Last Incident</h1>
        <p className="count font-bold">{count}</p>
        <section className="controls">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </section>
        <section className="controls bg-red-300">
          <form onSubmit={() => {}}>
            <label htmlFor="set-to">Set Count</label>
            <input id="set-to" type="number" />
            <input type="submit " className="bg-red-400 p-4" />
          </form>
        </section>
      </main>
    </div>
  );
};

export default Counter;
