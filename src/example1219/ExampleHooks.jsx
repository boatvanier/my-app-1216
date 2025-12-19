import {useState, useEffect} from 'react'
import {Button} from "@mui/material";

export default function ExampleHooks(){
    // set initial state is 0
    // count is the state variable
    // setCount is the function use to update the count
    const [count, setCount] = useState(0);

    // every time count changes, seEffect update the page title
    useEffect(()=>{
        document.title = `you clicked ${count} times`
        }, [count]
    )

    return (
        <Button onClick={()=> setCount(count+1)}>
            clicked: {count}
        </Button>
    )
}