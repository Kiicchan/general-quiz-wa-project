import { Container, Box} from "@mui/material";
export default function Main(props) {
    return (
        <main>
            <Container>
                <Box my={2}>
                    {props.children}
                </Box>
            </Container>
        </main>
    )
}