import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Strings from '../../shared/constants/strings';
import useStyles from './styles';

const ContactPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.authorDataField}>
        <Typography variant='h2'>
          <Box fontStyle='italic'>{Strings.CONTACT.AUTHOR_COPYRIGHT}</Box>
        </Typography>
      </div>
      <div className={classes.authorDataField}>
        <Typography variant='h4'>
          <Box fontStyle='italic'>{Strings.CONTACT.AUTHOR_EMAIL}</Box>
        </Typography>
      </div>
    </div>
  );
};

export default ContactPage;
