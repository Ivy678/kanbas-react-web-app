import JsonPre from "./JsonPre";

function JsonStringify(){
    const squares = [1, 4, 16, 25, 36];
    console.log(squares);
    return (
        <>
            <h3>JSON Stringify</h3>
            squares = {JSON.stringify(squares)}<br />
            {/* <JsonPre json={squares} /> */}
        </>
    )

}

export default JsonStringify;