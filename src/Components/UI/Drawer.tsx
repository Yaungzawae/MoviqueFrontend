import { Avatar, Box, Divider, SwipeableDrawer, Typography } from "@mui/material";

import MovieIcon from '@mui/icons-material/Movie';
import ScheduleIcon from '@mui/icons-material/Schedule';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TvIcon from '@mui/icons-material/Tv';
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../app/store";
import { toggleMenu } from "../../features/menuSlice";





const AppDrawer = () =>{
    const dispatch = useDispatch();
    const open = useSelector((state:IRootState)=>state.menu.value);
    
    const toggleDrawer = ()=> dispatch(toggleMenu())
    


    const DrawerList = () => (
        <Box sx={{width: "100%"}} role="presentation">
            <Avatar sx={{width: 100, height: 100, my: "4rem", mx: "auto"}}>YZ</Avatar>
            <Divider/>
            <Accordion square disableGutters defaultExpanded sx={{bgcolor: 'primary.dark', width: "100%", borderRadius: "0%"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color: "secondary.light"}}/>}
                >
                    <Box
                    sx={{display:"flex", justifyContent: "center", alignContent: "center", gap: 2}}
                    >
                        <MovieIcon fontSize="large"/>
                        <Typography
                        variant="h6"
                        component="h6"
                        color="white"
                        >
                            Movies  
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                    sx={{display:"flex", gap: 2, width: "100%" , py: "0.5rem"}}
                    component="div"
                    onClick={()=>alert("hel")}
                    >
                        <TrendingUpIcon/>
                        <Typography
                        color="white"
                        variant="body1"
                        >
                            Trending
                        </Typography>
                    </Box>

                    <Box
                    sx={{display:"flex", gap: 2, width: "100%" , py: "0.5rem"}}
                    component="div"
                    onClick={()=>alert("hel")}
                    >
                        <ScheduleIcon/>
                        <Typography
                        color="white"
                        variant="body1"
                        >
                            Recent
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square disableGutters sx={{bgcolor: 'primary.dark', width: "100%", borderRadius: "0%"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color: "secondary.light"}}/>}
                >
                    <Box
                    sx={{display:"flex", justifyContent: "center", alignContent: "center", gap: 2}}
                    >
                        <TvIcon fontSize="large"/>
                        <Typography
                        variant="h6"
                        component="h6"
                        color="white"
                        >
                            Tv Shows   
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                    sx={{display:"flex", gap: 2, width: "100%" , py: "0.5rem"}}
                    component="div"
                    onClick={()=>alert("hel")}
                    >
                        <TrendingUpIcon/>
                        <Typography
                        color="white"
                        variant="body1"
                        >
                            Trending
                        </Typography>
                    </Box>

                    <Box
                    sx={{display:"flex", gap: 2, width: "100%" , py: "0.5rem"}}
                    component="div"
                    onClick={()=>alert("hel")}
                    >
                        <ScheduleIcon/>
                        <Typography
                        color="white"
                        variant="body1"
                        >
                            Recent
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>

        </Box>
    )

    return (
        <div>
            <SwipeableDrawer
            open={open}
            anchor="left"
            variant="temporary"
            PaperProps={{sx:{bgcolor: "primary.dark", width: '250px'}}}
            sx={{display: {md: "none"}}}
            onOpen={toggleDrawer}
            onClose={toggleDrawer}
            >
                <DrawerList/>
            </SwipeableDrawer>
        </div>
    )
}

export default AppDrawer;