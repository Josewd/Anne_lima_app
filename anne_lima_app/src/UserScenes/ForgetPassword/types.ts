import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type ForgetNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'forgetPassword'
>;
