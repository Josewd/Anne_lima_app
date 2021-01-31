import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type LoginNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'login'
>;
