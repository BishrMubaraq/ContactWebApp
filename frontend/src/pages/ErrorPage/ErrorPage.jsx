import React from 'react'
import ErrorPageContent from '../../components/ErrorPageContent/ErrorPageContent'
import Layout from '../../components/Layout/Layout'

const ErrorPage = () => {
    return (
        <Layout children={<ErrorPageContent />} />
    )
}

export default ErrorPage