import React from 'react'

export const About = () => {

    let rickStyle = {
        textDecoration: "none"

    }

    return (
        <div className='container my-5'>
            <h5>Heyy there!</h5>
            <h6>Welcome to TaskMate!</h6>
            <p>
                One of the major things we struggle with, is remembering all the things we have to do.
                So, I hope TaskMate will help you with that :) <br />

                You can add tasks, make sure to type in both the title and description.<br />
                And if you have finished off a task, time to delete them! yay! <br />

                P.S. you wont need to worry about your tasks getting lost. It will be there even if you refresh the page :) <br />
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={rickStyle}>~(˘▾˘~)</a>





            </p>


        </div>
    )
}
