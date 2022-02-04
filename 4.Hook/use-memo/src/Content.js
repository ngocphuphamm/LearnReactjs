import {memo} from 'react';

function Content(){
    console.log("render")
    return (
        <h1>Hello </h1>
    )
}
export default memo(Content);