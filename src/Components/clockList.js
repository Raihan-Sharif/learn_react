import Clock from './Clock';

export default function ClockList(props) {
    const { clockItems: items, show, locale } = props;
    return (
        <div>
            {show && <h1>{show}</h1>}

            {items.map((element) => (
                <Clock key={element} locale={locale && locale} />
            ))}
        </div>
    );
}
