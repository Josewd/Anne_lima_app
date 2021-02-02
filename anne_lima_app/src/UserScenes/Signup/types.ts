import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type SignUpNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'signUp'
>;
