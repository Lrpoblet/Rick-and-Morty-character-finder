import { useParams, Link } from 'react-router-dom';

const CharacterDetail = ({ findCharacter }) => {
  const params = useParams();

  const characterFound = findCharacter(params.id);

  return (
    <div className="card">
      <h2>Detalle de {characterFound.name}</h2>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default CharacterDetail;
