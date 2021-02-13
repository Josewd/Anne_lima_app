import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type SeeServicesNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'seeServices'
>;