import React from 'react'

export const Footer = () => {
    return (
        <div>
            <footer className="pt-5 my-5 text-muted border-top">
    Created by the Mr. Aziz &middot; &copy; 2021
            <p>Current Time is {new Date().toLocaleTimeString()}.</p>
  </footer>
        </div>
    )
}
