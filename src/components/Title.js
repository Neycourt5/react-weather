import React from 'react'

const Title = ({ city }) => {
    let titleText = city;
    titleText = titleText.split('')
    titleText[0] = titleText[0].toUpperCase()
    titleText = titleText.join('')
    return (
        <div>
            <h1>{titleText}</h1>
        </div>
    )
}

export default Title
