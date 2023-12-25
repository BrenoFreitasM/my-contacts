import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/input";
import Select from "../../components/select";

export default function NewContact() {
  useEffect(() => {
    console.log("passo 3")
}, [])
  return (
    // <PageHeader title="Novo contato"/>
    <>
      <PageHeader title="Novo contato"/>

      <Input type="text" placeholder="Nome"/>
      <Select>
        <option value="123">Instagram</option>
      </Select>
    </>
  )
}
