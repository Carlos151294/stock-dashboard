import Icon from "@material-ui/core/Icon";

import GoogleLogo from '../../../assets/google-logo.png';

const GoogleIcon = () => {
  return (
    <Icon>
      <img src={GoogleLogo} style={{width: 'inherit', height: 'inherit', display: 'flex'}} alt='icon'/>
    </Icon>
  );
};

export default GoogleIcon;
