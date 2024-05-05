import React from "react";
import { Button, Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid #ccc",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    padding: theme.spacing(4),
    borderRadius: "4px",
    
  },
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(4),
  },
  coloredButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: "#f50057", transition: { duration: 0.3 } },
  };

  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <motion.div
          className={classes.container}
          variants={containerVariants}
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
        >
          <Typography variant="h4" gutterBottom>
            Hi, Welcome to <br></br>CG MeetUp Website
          </Typography>
          
          <Box className={classes.buttons}>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button component={Link} to="/register" className={classes.coloredButton} variant="contained">
                Get Started
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
