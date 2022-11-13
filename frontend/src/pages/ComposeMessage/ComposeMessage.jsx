import ComposeMessageContent from "../../components/ComposeMessageContent/ComposeMessageContent"
import Layout from "../../components/Layout/Layout"

const ComposeMessage = () => {
    return (
        <>
            <Layout children={<ComposeMessageContent />} />
        </>
    )
}

export default ComposeMessage