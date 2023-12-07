import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";

export default function NewContact() {
  useEffect(() => {
    console.log("passo 3")
}, [])
  return (
    <PageHeader title="Novo contato"/>
  )
}
