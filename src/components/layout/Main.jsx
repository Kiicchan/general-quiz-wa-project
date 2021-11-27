import { Container, Box} from "@mui/material";
export default function Main(props) {
    return (
        <main>
            <Box pt={2} pb={2}>
                <Container>
                    {props.children}
                </Container>
            </Box>
        </main>
    )
}