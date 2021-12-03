import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function SimpleAccordion() {
  return (
    <Accordion className="bg-white">
      <AccordionItem>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            Will the support be provided after the program?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-gray-900 p-4">
          <p>
            Yes, Lifetime Support will be provided to you. You will be able to
            ask doubts on Whatsapp. Also you will get the LIFETIME Access to
            TradingSpell Discord Community
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            What are the new things that will be discussed in MTAP (2.0)?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-gray-900 p-4">
          <p>
            New Insights are added in every topic of the previous MTAP program.
            Index Trading, Long Term Investing, How to Trade Newly Listed
            Stocks, Earning Analysis, Growth Stocks
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            What will be covered in the Program?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-gray-900 p-4">
          <p>
            Everything in Technical Analysis will be discussed in detail. From
            Price Action, Trading Strategies, Volume Analysis + Indicators +
            Sectoral Analysis + Swing Trading + Intraday Trading + Index Trading
            and Much More...
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            What if I miss any Live Session?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-gray-900 p-4">
          <p>
            You will get the Recordings of the live sessions as well. The access
            will be provided to you for atleast 60 days.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            How long will the session be?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-gray-900 p-4">
          <p>
            On 14th December, Each Session will be atleast 90+ minutes long.
            English: 3:00 PM onwards, HINDI: 5:00 PM onwards.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            How many session will be there?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-gray-900 p-4">
          <p>
            There will be 17 Sessions, 14 Recorded + 3 Live Sessions Each
            session will be of at least 90 minutes long
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            Where will I access the recordings?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-gray-900 p-4">
          <p>
            You will get access to the Recordings on our App. (Available for
            Mobile and TABS).
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            Will there be any doubts session?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-gray-900 p-4">
          <p>
            YES, Doubt Sessions will be included in the Recordings and we will
            have 3 LIVE Doubt Session Classes. You will get the recordings.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            Where will the sessions be conducted?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-gray-900 p-4">
          <p>The sessions will be conducted on ZOOM.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-bold">
          <AccordionItemButton>
            What is the vision of the program?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-gray-900 p-4">
          <p>
            The vision of this Program is to make you an Independent Trader and
            to create an edge over the market by keeping things super simple.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { BsCaretDownFill } from "react-icons";

// const SimpleAccordion = () => {
//   return (
//     <div>
//       <Accordion>
//

//         >
//           <Typography></Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>

//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<BsCaretDownFill />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography></Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<BsCaretDownFill />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography></Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>

//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<BsCaretDownFill />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Where will I access the Recordings?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             You will get access to the Recordings on our App. (Available for
//             Mobile and TABS).
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<BsCaretDownFill />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Will there be any Doubt Session?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             YES, Doubt Sessions will be included in the Recordings and we will
//             have 3 LIVE Doubt Session Classes. You will get the recordings.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<BsCaretDownFill />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Where will the session be conducted?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>The sessions will be conducted on ZOOM.</Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<BsCaretDownFill />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>What is the vision of this Program?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             The vision of this Program is to make you an Independent Trader and
//             to create an edge over the market by keeping things super simple.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// };

// export default SimpleAccordion;
