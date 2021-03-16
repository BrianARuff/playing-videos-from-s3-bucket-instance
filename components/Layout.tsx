import * as React from "react";
import Head from "next/head";
import {Container} from "@material-ui/core";

const Layout = ({children}) => {
    return (
        <Container>
            <Head>
                <title>ASMR</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>
            {children}
        </Container>
    )
}

export  default Layout;