import { Box } from "@mui/material";
import { styled } from "@mui/system";

const MainContainer = styled(Box)({
    backgroundImage: "linear-gradient(to right, rgb(51, 51, 51), black, rgb(51, 51, 51))",
    textAlign: "center",
    color: "white",
    height: "calc(100vh - 104px)",
    overflowY: "auto",

    '&::-webkit-scrollbar': {
        width: "0.5em"
    },

    '&::-webkit-scrollbar-track': {
        boxShadow: "inset 0 0 6px rgba(172, 10, 10, 0.3)"
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: "darkgrey",
        outline: "1px solid slategrey"
    }
});

export default MainContainer;
