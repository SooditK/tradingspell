import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  accordion_details: {
    backgroundColor: "#1a202c",
    color: "white",
    border: 1,
    borderColor: "White",
    fontSize: theme.typography.pxToRem(17),
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className="w-full sm:w-4/5 m-auto text-xl">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            How many sessions will be there?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion_details}>
          <Typography>
            There will be 5 Pre-recorded Session, Each session will be of at
            least 90 minutes long.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Will the support be provided after the program?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion_details}>
          <Typography>
            Yes, Lifetime Support will be provided to you. You will be able to
            ask doubts on Whatsapp. Also you will get the LIFETIME Access to
            TradingSpell Discord Communit
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Where will I access the Recordings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion_details}>
          <Typography>
            You will get access to the recordings on our App. (Available for
            Mobile and TABS).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            What are the new things that will be discussed in MTAR?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion_details}>
          <Typography>
            Everything in MTAP + The Updated MTAP (2.0) + Long Term Trading
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            What will be covered in the Program?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion_details}>
          <Typography>
            Everything in Technical Analysis will be discussed in detail. From
            Price Action, Trading Strategies, Volume Analysis + Indicators +
            Sectoral Analysis + Swing Trading + Intraday Trading + Index Trading
            and Much More...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            What is the vision of this Program?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordion_details}>
          <Typography>
            The vision of this Program is to make you an Independent Trader and
            to create an edge over the market by keeping things super simple.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
