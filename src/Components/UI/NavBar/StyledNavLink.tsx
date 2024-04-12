import { styled } from "@mui/material"

const StyledNavLink = styled('h5')(()=>({     ////// Change 'a' to Link after adding react-router dom
    background: `linear-gradient(to right, rgba(11, 16, 22, 1), rgba(11, 16, 22, 1)), linear-gradient(to right, #FEE715, #FEE715)`,
    backgroundSize: '100% 0.1em, 0 0.1em',
    backgroundPosition: '100% 100%, 0 100%',
    backgroundRepeat : 'no-repeat',
    transition: 'background-size 400ms',
    margin: 'auto',
    height: '100%',
    padding: '1.5rem 1rem',
    ":hover":  {backgroundSize: '0 0.1em, 100% 0.1em'},
  }))

  export default StyledNavLink