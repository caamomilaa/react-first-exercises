// - generateFullName
//   Crea un componente que reciba un nombre y un apellido, y devuelva un h2 con el nombre completo.

const GenerateFullName = ({ name, surname }) => {
	if (!name || !surname) return <p>Wrong Information. Try again later.</p>;
	return (
		<p>
			Mi nombre es {name} y mi primer apellido es {surname}
		</p>
	);
};

export default GenerateFullName;
