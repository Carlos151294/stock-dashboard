import Strings from '../../shared/constants/strings';
import useStyles from './styles';

const ContactPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.authorDataField}>
        {Strings.CONTACT.AUTHOR_COPYRIGHT}
      </div>
      <div className={classes.authorDataField}>
        {Strings.CONTACT.AUTHOR_EMAIL}
      </div>
    </div>
  );
};

export default ContactPage;
