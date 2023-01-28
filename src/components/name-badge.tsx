import React from "react";

const NameBadge = ({ name }: { name: string }) => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="teext-5xl">Hello</h1>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name}</p>
      </div>
    </section>
  );
};

export default NameBadge;
