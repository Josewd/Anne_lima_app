import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type UserProfileNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'userProfile'
>;

export type userDb = {
  name: any;
  email: any;
  birthday: any;
  role:any;
}
