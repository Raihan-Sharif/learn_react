import ClockList from './Components/clockList';
import Form from './Components/form';
import Calculator from './Components/TempCalculator/calculator';

function App() {
    console.log('App component render.');
    const clockItemsData = [1, 2, 3];
    return (
        <div>
            <center>
                Hello world! Now this time is{' '}
                <ClockList clockItems={clockItemsData} show="Clock List" locale="en-US" />
                <br />
                <br />
                <Form />
                <Calculator />
            </center>
        </div>
    );
}

export default App;
