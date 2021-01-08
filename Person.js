const Person = ({name, age, hobbies}) => {
    return (
        <div>
            <p>Learn some information about this person.</p>
            <h3>{age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
            <ol>
                {hobbies.map(i => <li>{i}</li>)}
            </ol>
        </div>
    )
}
