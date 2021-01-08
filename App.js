function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent />
            <h2>Tweets</h2>
            <Tweet name="Alice" message="Hi!" username="Alice123" date="1/1/1" />
            <Tweet name="Bob" message="Hello!" username="Bob456" date="1/1/1" />
            <Tweet name="Charlie" message="Welcome!" username="Charlie789" date="1/1/1" />
            <Person hobbies name="Alice" age="18" hobbies={["reading", "music"]} />
            <Person hobbies name="Bob" age="17" hobbies={["fashion", "art"]} />
            <Person hobbies name="Charlie" age="21" hobbies={["cooking", "movies"]} />
        </div>
    );
}
