import React from 'react'

export default function Form({ children, handleSubmitForm }) {
    return (
        <form onSubmit={handleSubmitForm}>{children}</form>
        )
}

