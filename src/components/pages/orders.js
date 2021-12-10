import { Button, Heading, Pane, Table, TextInputField } from "evergreen-ui"
import "evergreen-ui"
import React, { useEffect, useState } from "react"
import Account from './Account'
import {Link} from 'react-router-dom'
import AccountToOrders from './Account'
import './orders.css'

import { useMongoDB } from "./../../Providers/mongodb"
import { useRealmApp } from "./../../Providers/realm"

function LogInForm(props) {
    return (
        <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={50}>
            <Pane width="50%" padding={16} borderRadius={3} elevation={4}>
                <Heading size={800} marginTop="10" marginBottom="10">
                    Log in
                </Heading>
                <Pane>
                    <TextInputField
                        label="Username"
                        required
                        placeholder="mongodb@example.com"
                        onChange={(e) => props.setEmail(e.target.value)}
                        value={props.email}
                    />
                </Pane>
                <Pane>
                    <TextInputField
                        label="Password"
                        required
                        placeholder="**********"
                        type="password"
                        onChange={(e) => props.setPassword(e.target.value)}
                        value={props.password}
                    />
                </Pane>
                <Button appearance="primary" onClick={props.handleLogIn}>
                    Log in
                </Button>
            </Pane>
        </Pane>
    )
}

function OrderList(props){
    return (
        <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={50}>
            <Pane width="50%" padding={16} borderRadius={3} elevation={4}>
                {props.detes.map((user1) => (
                    <Table key = {user1._id}>
                        <Table.Head>
                            <Table.TextHeaderCell>Order Date {user1.time}:</Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body height={240}>
                            <Table.Row>
                                    <Table.TextCell>
                                        {user1.itemName[0]}
                                    </Table.TextCell>
                                    <Table.TextCell>
                                        ${user1.itemPrice[0]}
                                    </Table.TextCell>
                                    <Table.TextCell>
                                        {user1.itemQuantity[0]}
                                    </Table.TextCell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.TextCell>
                                        {user1.itemName[1]}
                                    </Table.TextCell>
                                    <Table.TextCell>
                                        ${user1.itemPrice[1]}
                                    </Table.TextCell>
                                    <Table.TextCell>
                                        {user1.itemQuantity[1]}
                                    </Table.TextCell>
                                </Table.Row>
                            <Table.Row className={"elem"}>
                                <div >
                                    Total:  {user1.total}
                                </div>
                                </Table.Row>
                        </Table.Body>
                    </Table>
                ))}

                <Link to={{
                    pathname: './Account'
                }}>
                    <Button
                        height={50}
                        marginRight={16}
                        appearance="primary"
                        intent="none"
                    >
                        Go Back
                    </Button>
                </Link>

            </Pane>
        </Pane>
    )
}
function Orders() {
    const { logIn, logOut, user } = useRealmApp()
    const { db } = useMongoDB()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [details, setDetails] = useState([])
    const [details1, setDetails1] = useState([])

    useEffect(() => {
        async function wrapDetails() {
            if (user && db) {
                const userDetails = await db.collection("order").find({cartStatus: true})
                setDetails(userDetails)
                const userDetails1 = await db.collection("item").find()
                setDetails1(userDetails1)
            }
        }
        wrapDetails()
    }, [user, db])

    async function handleLogIn() {
        await logIn(email, password)
    }
    return user && db && user.state === "active" ? (
            <div>
                <OrderList detes={details} theItems = {details1} user={user} logOut={logOut} />
            </div>

        ) :
        (
            <LogInForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogIn={handleLogIn}
            />
        )
}

export default Orders