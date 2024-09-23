import React, { useState, useEffect } from 'react'

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    // Khi darkMode thay đổi, cập nhật class của body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode])

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    )
}

export default DarkModeToggle
