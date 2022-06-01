import { useParams } from "react-router-dom"
import useInvoices from "../hooks/useInvoices"

const { getInvoice } = useInvoices()

const Invoice = () => {
  const { invoiceId } = useParams<{ invoiceId: string }>()
  const { amount, name, number, due } = getInvoice(invoiceId ?? "")!

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {amount}</h2>
      <p>
        {name}: {number}
      </p>
      <p>Due Date: {due}</p>
    </main>
  )
}

export default Invoice
