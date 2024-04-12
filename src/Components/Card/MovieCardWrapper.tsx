import data from "../../data.json"
const results = data.results


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
import { Box, Button, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";


const {xs, sm, md, lg, xl} = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
}

const res = {
    large: {
        breakpoint: {max: 3000, min: 2000},
        items: 8
    },
    desktop: {
        breakpoint: {max: 2000 , min: xl},
        items:7
    },
    laptop: {
        breakpoint: {max: xl, min: lg},
        items:6
    },
    tablet: {
        breakpoint: {max: lg , min: md},
        items:5
    },
    phone: {
        breakpoint: {max: md , min: sm},
        items:4
    },
    smallPhone: {
        breakpoint: {max: sm , min: xs},
        items: 3
    },
}



const ButtonGroup = ({ next, previous}:any) => {
    // const { carouselState: { currentSlide } } = rest;
    return (
        <Box sx={{position: "absolute", right: "4%", top: "2.5%", display: {xs: "none", md: "flex"}, gap: 1}}>
            <Button
            size="small"
            color="secondary"
            variant="contained"
            sx={{m:0}}
            onClick={()=>previous()}>
                <ArrowLeft/>
            </Button>
            <Button
            size="small"
            color="secondary"
            variant="contained"
            sx={{m:0}}
            onClick={()=>next()}>
                <ArrowRight/>
            </Button>
        </Box>
    //   <div className="carousel-button-group"> 
    //     <button onClick={() => previous()} />
    //     <button onClick={() => next()} />
    //   </div>
    );
  };

const MovieCardWrapper = () =>{
    return <Box sx={{px: "1rem",mx: "auto",my: "1rem", maxWidth: {xl:"1500px", lg: "1100px", md: "900px"}, userSelect: "none", position: 'relative'}}>
        <Typography variant="h4" sx={{my:'1.5rem'}}>
            Trending
        </Typography>
        <Carousel responsive={res} renderButtonGroupOutside={true} infinite arrows={false} customButtonGroup={<ButtonGroup/>}>
            {results.map((result)=>
            <MovieCard data={result} />
            )}
        </Carousel>
    </Box>
    
}

export default MovieCardWrapper