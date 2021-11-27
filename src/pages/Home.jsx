import Main from "../components/layout/Main"
import Header from "../components/layout/Header";
import { Paper, Typography, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
export default function Home() {
    return(
        <>
            <Header title="Home" Icon={HomeIcon}/>
            <Main>
                <Paper>
                    <Container>
                        <Typography variant="h2">
                            Home
                        </Typography>
                    </Container>
                </Paper>
            </Main>
        </>
    )
}