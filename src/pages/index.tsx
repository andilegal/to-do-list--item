import { Button } from '@/components/button'
import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { ModalRoot } from '@/components/modal'
import { Table } from '@/components/table'
import { TableBody } from '@/components/table/table-body'
import { TABLEHEAD } from '@/constants'
import { db } from '@/firebase/config'
import { formatCurrency } from '@/utils'
import { collection, addDoc, deleteDoc, getDocs, updateDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

type DataProps = {
  bill: string
  expirationDate: string
  price: string
  qts: string
  id: string
}

export default function Home() {
  const accountsRef = collection(db, 'account-control')
  const [formData, setFormData] = useState({
    bill: '',
    expirationDate: '',
    price: '',
    qts: '',
    id: '',
  })
  const [data, setData] = useState<DataProps[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    async function getAccounts() {
      const accountSnapshot = await getDocs(accountsRef)
      data &&
        setData(accountSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as DataProps[])
    }
    getAccounts()
  }, [data])

  async function handleClick() {
    await addDoc(accountsRef, formData)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLFormElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleDelete(e: React.MouseEvent<HTMLButtonElement> & { target: { id: string } }) {
    const id = e.target.id
    const accountDoc = doc(db, 'account-control', id)
    await deleteDoc(accountDoc)
  }

  function handleEdit(e: React.MouseEvent<HTMLButtonElement> & { target: { id: string } }) {
    const id = e.target.id
    setFormData(data.find(item => item.id === id) as DataProps)
    setIsOpen(true)
  }

  function onChangeEdit(e: React.ChangeEvent<HTMLInputElement | HTMLFormElement>) {
    const newEditData = { [e.target.name]: e.target.value }
    setFormData(prev => ({ ...prev, ...newEditData }) as DataProps)
  }

  async function handleConfirmEdit(
    e: React.MouseEvent<HTMLButtonElement> & { target: { id: string } },
  ) {
    const id = e.target.id
    const accountDoc = doc(db, 'account-control', id)

    formData && (await updateDoc(accountDoc, formData))
    setIsOpen(false)
  }

  return (
    <main className="container mx-auto">
      <Form onChange={handleChange}>
        <Input name="bill" label="Nome da Conta" />
        <Input name="price" label="Preço da compra" type="number" placeholder="Ex: 1.000,00" />
        <Input name="qts" label="Quantidade de parcelas" type="number" />
        <Input name="expirationDate" label="Dia de vencimento" type="number" />
        <div className="mt-9">
          <Button size="full" color="primary" type="button" onClick={handleClick}>
            Adicionar
          </Button>
        </div>
      </Form>

      <Table>
        <Table.Head>
          <Table.Row>
            {TABLEHEAD.map(({ name }, i) => (
              <Table.Column key={i}>{name}</Table.Column>
            ))}
          </Table.Row>
        </Table.Head>
        <TableBody>
          {data.map(({ bill, expirationDate, price, qts, id }, i) => (
            <TableBody.Row key={i}>
              <TableBody.Cell>{id}</TableBody.Cell>
              <TableBody.Cell>{bill}</TableBody.Cell>
              <TableBody.Cell>{formatCurrency(price)}</TableBody.Cell>
              <TableBody.Cell>{qts}x</TableBody.Cell>
              <TableBody.Cell>Dia {expirationDate}</TableBody.Cell>
              <TableBody.Cell>
                <div className="flex justify-center">
                  <Button size="medium" color="outline" onClick={handleEdit} id={id}>
                    edit
                  </Button>
                  <Button size="little" color="secondary" onClick={handleDelete} id={id}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash pointer-events-none"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </Button>
                </div>
              </TableBody.Cell>
            </TableBody.Row>
          ))}
        </TableBody>
      </Table>

      {isOpen && (
        <ModalRoot open={isOpen} onClose={() => setIsOpen(false)}>
          <Form onChange={onChangeEdit}>
            <Input name="id" disabled value={formData?.id} label="Identificador" />
            <Input name="bill" label="Nome da Conta" value={formData?.bill} />
            <Input
              name="price"
              label="Preço da compra"
              type="number"
              placeholder="Ex: 1.000,00"
              value={formData?.price}
            />
            <Input name="qts" label="Quantidade de parcelas" type="number" value={formData?.qts} />
            <Input
              name="expirationDate"
              label="Dia de vencimento"
              type="number"
              value={formData?.expirationDate}
            />
            <div className="mt-9">
              <Button
                size="full"
                color="primary"
                type="button"
                onClick={handleConfirmEdit}
                id={formData?.id}
              >
                Editar
              </Button>
            </div>
          </Form>
        </ModalRoot>
      )}
    </main>
  )
}
