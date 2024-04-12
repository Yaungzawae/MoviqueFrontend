import { Box, Card, Typography } from "@mui/material"
import 'react-circular-progressbar/dist/styles.css';
import StarIcon from '@mui/icons-material/Star';




const MovieCard = (props: any) => {
    const data = props.data
    return <Box sx={{width:{xs: "108px", md: "150px"}, mx: "auto", py: "1rem" ,":hover": {transform: 'scale(1.1)'}, transitionDuration: '1000ms'}}>
        <Card
        component="img"
        // effect="blur"
        sx={{width: {xs: "108px", sm: "150px"}, height: {xs: "162px", sm: "225px"} ,borderRadius: "7.5%"}}
        src={'https://image.tmdb.org/t/p/w300/' + data.poster_path}
        draggable="false"
        />
        <Box sx={{display: "flex"}}>
            <StarIcon/>
            <Typography
            component="label"
            >
                {Math.round(data.vote_average * 10)/10}
            </Typography>
        </Box>
        <Typography variant="body1" noWrap>
            {data.original_title} 
        </Typography>
        <Typography variant="body2">
            {data.release_date}
        </Typography>
    </Box>
}

export default MovieCard