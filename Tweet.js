const Tweet = ({username, name, date, message}) => {
    return (
        <div>
            <h4><b>{name}</b> {username}</h4>
            <p>{message}</p>
            <p>{date}</p>
        </div>
    )
}
