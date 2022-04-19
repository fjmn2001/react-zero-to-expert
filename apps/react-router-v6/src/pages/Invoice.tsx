import { useParams } from "react-router-dom"

const Invoice = () => {
  const { invoiceId } = useParams<{ invoiceId: string }>()

  return (
    <>
      <h1>Invoice {invoiceId}</h1>
    </>
  )
}

export default Invoice
