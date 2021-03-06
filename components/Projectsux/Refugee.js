

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withTranslation } from '~/i18n';
import logo from '../../public/images/profile-logo.svg';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './ux-style';
import flow from '../../public/images/profile/ux-images/ref_flow.svg';
import mosk from '../../public/images/profile/ux-images/ref_mosk.svg';
import clsx from 'clsx';

const Refugee = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();


    return (
    <div>

      <div className={classes.root}>
      
        <Container maxWidth="md" component="footer">
            <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
              <Typography variant="h2" align="center" gutterBottom>
              Refugee Kitchen
              </Typography>
              <Typography variant="h4" align="center">
                Mobile app design
              </Typography>
            </section>
              <Typography variant="h6" align="left" >
                Project Description:
              </Typography>
              <Typography className={text.paragraph}>
              This startup company was created as the owner saw a need to help refugees integrate into the community. Many people feel very isolated in a new place. After working with so many refugees the owner realised that most people had a real passion for food so this series of classes was born. Briefbox.me published the request for design of a directory app. The app should include information about the person hosting the class, what dishes they’ll be teaching and another screen for information on their home country.
              </Typography>
              <Typography variant="h6" align="left" color="primary">
              Desk research:
              </Typography>
              <Typography className={text.paragraph}>
              I started with looking up what is already in the App Store and Google Play. There are several recipe manager apps (Copy me That recipe manager, Recipe Keeper, Favorite Recipes ). For communication and classes people use other apps MeetUp and Facebook. 
              </Typography>
              <Typography variant="h6" align="left" color="primary">
                User research:
              </Typography>
              <Typography className={text.paragraph}>
              I know that there were cooking classes about healthy recipes in our area. It was organised using Facebook and text messages. It would take some efforts to make people use an app dedicated for only one purpose. This app needs to be simple and give a strong feeling of connection to real people in the real world.
              </Typography>
              <Typography variant="h6" align="left" color="primary">
                Persona creation:
              </Typography>
              <Typography className={text.paragraph}>
              It was a brief project. Personas help to prioritize functions and help create thoughtful user-centered design. My personas for this project were: a yang man and a woman over 50. She has a need to be useful and would like to teach classes. Yang man would like to have a reason to go out and meet other people. I made a list of their tasks and what they have to see in the app to enjoy it. Looking at personas helps to create flowchart.
              </Typography>
              <Typography variant="h6" align="left" color="primary">
              Flowchart:
              </Typography>
        </Container> 
        <Container maxWidth="lg" component="footer">
       
              <br /><br /><br />
              <img src={flow} align="center" width="100%" alt="Refugee Kitchen flowchart" />
              <br /><br /><br /><br /><br />
        </Container> 
        <Container maxWidth="md" component="footer">
              <Typography variant="h6" align="left" color="primary">
              Wireframes:
              </Typography>
              <Typography className={text.paragraph}>
                Every funstion on the flow chart has at least one UI element for user to see. The order and different kinds where choosen by industry standarts. What make it easy for user to understand and easy for developers to create as it was all seen before. 
              </Typography>
        </Container> 
        
        <Container maxWidth="lg" component="footer">
                   <img src={mosk} align="center" width="100%" alt="Refugee Kitchen app mosk up" />
        </Container>          
                <br/> <br/>
               
              
          

        
        </div>  
       
    </div>
    );
  }

  Refugee.propTypes = {
    t: PropTypes.func.isRequired
  };
  
  export default withTranslation(['profile-landing'])(Refugee);