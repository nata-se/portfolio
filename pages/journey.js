import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Gallery from '../components/Gallery/Gallery'
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';
import JourneyWP from '../projects/projecksWP/JourneyWP'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const sectionMargin = margin => (margin * 10);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing())
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing())
  },
  blueWrap: {
    backgroundImage: `linear-gradient(120deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main}, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main})`,
    padding: theme.spacing(10, 0),
    
    },
  containerWrap: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    '& > section': {
      position: 'relative'
    },
  },
  img4decCaption: {
    textAlign: 'center',
    color: '#efefef',
    fontStyle: 'italic',
  }
}));

function NVMAapp(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir, t } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.profile.name }
          &nbsp; - Journey with the Messiah website
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert
        />
         <div className={classes.headderImg} ><img src="/images/projects/journey/journey_header.jpg" align="center" width="100%"  alt="App on mobile" /> </div>
        <main className={classes.containerWrap}>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)}>
            <Typography variant="h2" align="center" gutterBottom>
              Journey with the Messiah website
            </Typography> 
            <Typography variant="h5" align="center">
            <Link color="primary" className={classes.websiteLink} href="https://journeyswiththemessiah.org/" target="_blank">JourneysWithTheMessiah.org</Link>
            </Typography>
           
          </section>
          <JourneyWP/> 
          </main>
          
            <div className={classes.blueWrap}>
              <Container>
              <img src="/images/projects/journey/journey_screenshot.jpg" alt="Juorney screenshot" align="center" width="100%"/><br/><br/>
              <div className={classes.img4decCaption}>JourneysWithTheMessiah.org screenshot </div><br/>
              </Container>
              </div>  
         
          
          <Gallery/>
        
        {/* <Notification /> */}
      </div>
    </React.Fragment>
  );
}

NVMAapp.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

NVMAapp.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(NVMAapp);