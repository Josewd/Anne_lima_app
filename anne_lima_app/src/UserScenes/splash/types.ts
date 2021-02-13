import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type SplashNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'splash'
>;
