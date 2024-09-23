import GenerateFullName from './components/generate-full-name/generateFullName';
import WriteBookInfo from './components/write-book-info/WriteBookInfo';
import ConvertMinutesToHours from './components/convert-minutes-to-hours/ConvertMinutesToHours';

// todos los componentes se exportan
const App = () => {
	return (
		<>
			<h1>Mis primeros ejercicios de Componentes</h1>
			<img src='/assets/images/teo.jpg' alt='' width='250' height='150' />

			<GenerateFullName name={'Camila'} surname={'Velazquez'} />
			<WriteBookInfo
				title={'La milla verde'}
				author={'Stephen King'}
				year={2000}
				genre={'terror'}
			/>
			<ConvertMinutesToHours minutes={130} />
		</>
	);
};

export default App;
