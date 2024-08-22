import {useLink} from 'solito/link';
import {Button} from 'tamagui';

export const Logo = () => {
  const linkProps = useLink({
    href: '/',
  });

  return <Button size={'$6'} chromeless focusStyle={{}} {...linkProps} />;
};
