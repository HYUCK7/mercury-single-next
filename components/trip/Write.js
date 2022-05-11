import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Multiline from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';


const theme = createTheme();

export function Write({onChange, onSubmit}) {
    
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    
                    <Typography component="h1" variant="h5">
                        여행 일기 작성
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={onSubmit}
                        noValidate="noValidate"
                        sx={{
                            mt: 1
                        }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="place"
                            label="장소"
                            name="place"
                            autoComplete="place"
                            autoFocus
                            onChange={onChange}/>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="date"
                            label="날짜"
                            name="date"
                            autoComplete="date"
                            autoFocus
                            onChange={onChange}/>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="inOut"
                            label="국내 / 해외"
                            type="inOut"
                            id="inOut"
                            autoComplete="inOut"
                            onChange={onChange}/>
                        <TextField
                            id="subject"
                            name="subject"
                            type="subject"
                            label="일기를 작성하세요"
                            fullWidth
                            multiline="multiline"
                            rows={4}
                            onChange={onChange}
                            />
                    
                        <Button
                            type="submit"
                            fullWidth 
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2
                            }}>
                            작성
                        </Button>
                        
                    </Box>
                </Box>
                
            </Container>
        </ThemeProvider>
    );
}