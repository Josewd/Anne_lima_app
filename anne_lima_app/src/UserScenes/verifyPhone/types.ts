import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type VerifyPhoneNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'verifyPhone'
>;
