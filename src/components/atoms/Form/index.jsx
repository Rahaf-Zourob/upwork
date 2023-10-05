'use client'
import React from 'react'
export default function Form({ children, handleSubmitForm,formId }) {
    return (
        <form id={formId} onSubmit={handleSubmitForm}>{children}</form>
        )
}

