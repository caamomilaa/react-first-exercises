// - convertMinutesToHours
//   Crea un componente que reciba una cantidad de minutos, los convierta a horas y minutos y devuelva un h2 con el resultado. (por ejemplo, 130 minutos son 2 horas y 10 minutos)

//funciones debajo del componente

const convertMinutesToHours = ({ minutes }) => {
	if (typeof minutes !== 'number' || minutes < 0) {
		return <p>Error: Minutes are invalid!</p>;
	}

	const totalMinutes = convertMinutes(minutes);

	return (
		<h2>
			{minutes} minutos son {totalMinutes}
		</h2>
	);
};

const convertMinutes = minutes => {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	return `${hours} horas y ${remainingMinutes} minutos`;
};

export default convertMinutesToHours;
