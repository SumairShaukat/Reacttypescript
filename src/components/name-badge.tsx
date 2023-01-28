import React from "react";
type NameBadgeProps = {
  name: string;
  greeting?: string;
};
const NameBadge = ({ name, greeting }: NameBadgeProps) => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="teext-5xl">{greeting}</h1>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name}</p>
      </div>
    </section>
  );
};

export default NameBadge;
