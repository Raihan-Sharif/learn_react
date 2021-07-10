import ClockList from './Components/clockList';
import Form from './Components/form';

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
            </center>
        </div>
    );
}

export default App;
