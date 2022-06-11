export function Logger(props) {
    console.log(props);
    return(
        <>
            <h1>Submitted data</h1>
            <div>
                <pre>
                    {JSON.stringify(props.submittedData, null, 2)}
                </pre>
            </div>
        </>
    )
}