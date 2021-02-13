import { service } from "./MainPage/types";

export type UserStackNavigation = {
    login: undefined;
    signUp: undefined;
    splash: undefined;
    mainPage: undefined;
    uploadProfileImg: undefined;
    verifyPhone: undefined;
    userProfile: undefined;
    services: {service: service, id: string} |undefined;
    adminPage: undefined;
    seeServices: undefined;
}