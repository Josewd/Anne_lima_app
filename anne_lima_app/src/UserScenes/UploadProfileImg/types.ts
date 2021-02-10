import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type UploadProfileImgNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'uploadProfileImg'
>;

export type image = {uri: string|undefined }
