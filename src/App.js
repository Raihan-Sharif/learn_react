import ClockList from './Components/clockList';

function App() {
    console.log('App component render.');
    const clockItemsData = [1, 2, 3];
    return (
        <div>
            <center>
                Hello world! Now this time is{' '}
                <ClockList clockItems={clockItemsData} show="Clock List" locale="en-US" />
            </center>
        </div>
    );
}

export default App;
