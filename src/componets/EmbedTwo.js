import React from 'react'
// if we create multiple conpontes in single file 
// so we don't need to import componets just use it

const EmbedTwo = () => {
    return (
        <>
        <h1>Here i am embed two compnets in single compontes</h1>
        <One/>
        <Two/> 
        </>
    )
}
const One = () => {
    return (
        <>
        <h1>This is first componest</h1>   
        </>
    )
}
const Two = () => {
    return (
        <>
        <h1>This is second componets </h1> 
        </>
    )
}
export default EmbedTwo
