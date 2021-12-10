import { Button, Heading, Pane, Table, TextInputField } from "evergreen-ui"
import "evergreen-ui"
import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom';
import Orders from './orders';
import './Account.css'

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

function MovieList(props) {
    return (
        <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={50}>
            <Pane width="50%" padding={16} borderRadius={3} elevation={4}>
                {props.detes.map((user1) => (
                    <Table key = {user1._id}>
                        <Table.Head>
                            <Table.TextHeaderCell>Details for {user1.name}:</Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body height={240}>
                            <Table.Row>address: {user1.address}</Table.Row>
                            <Table.Row>email: {user1.email}</Table.Row>
                            <Table.Row>Phone Number: {user1.phoneNo}</Table.Row>
                        </Table.Body>
                    </Table>
                ))}

                <Link
                    to={{
                        pathname: "/orders",
                    }}
                    className='a'
                >
                    <Button
                        height={50}
                        marginRight={16}
                        appearance="primary"
                        intent="none"
                    >
                        Previous orders
                    </Button>
                </Link>

                <Button
                    height={50}
                    marginRight={16}
                    appearance="primary"
                    intent="danger"
                    onClick={props.logOut}
                >
                    Log Out
                </Button>
            </Pane>
        </Pane>
    )
}

function Account() {
    const { logIn, logOut, user } = useRealmApp()
    const { db } = useMongoDB()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [details, setDetails] = useState([])


    useEffect(() => {
        async function wrapDetails() {
            if (user && db) {
                const userDetails = await db.collection("userInfo").find()
                setDetails(userDetails)
            }
        }
        wrapDetails()
    }, [user, db])

    async function handleLogIn() {
        await logIn(email, password)
    }
    const AccountToOrder= () => {
        setEmail(email);
        setPassword(password);
    }
    return user && db && user.state === "active" ? (
            <div>
                <MovieList detes={details} user={user} logOut={logOut} />
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

export default Account
