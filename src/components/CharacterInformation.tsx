import { CharacterType } from "./Characters";
import { Table, TableRow } from "./Table";

export const CharacterInformation = ({
  characters,
}: {
  characters: CharacterType;
}) => {
  return (
    <article>
      <header>
        <h1>{characters.name}</h1>
      </header>
      <Table>
        <TableRow heading="Alignment" value={characters.alignment} />
        <TableRow heading="Intelligence" value={characters.intelligence} />
        <TableRow heading="Strength" value={characters.strength} />
        <TableRow heading="Speed" value={characters.speed} />
        <TableRow heading="Durability" value={characters.durability} />
        <TableRow heading="Power" value={characters.power} />
        <TableRow heading="Combat" value={characters.combat} />
        <TableRow heading="Total" value={characters.total} />
      </Table>
    </article>
  );
};
