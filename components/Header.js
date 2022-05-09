import * as React from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';


export function Header() {
    return (<>
        <Head>
        <link rel="stylesheet"  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, user-scalable=no,
            initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            </meta>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <title>My Trip Web</title>
        </Head>
        <AppBar position="relative" color = ""  >
          <Toolbar >
            <Typography
              variant="h6"
              align="center"
              color="#009688"
              fontFamily={'sans-serif'}
              fontSize = {30}
              fontWeight = {600}
              noWrap
              sx={{ flexGrow: 14 }}
            > My Trip Web
            </Typography>
            </Toolbar>
        </AppBar>
        </>
    )
}