import axios from "axios";

type sendUserData = {
    email: string,
    password: string
}
export async function SendAuth(userData: sendUserData, event: any) {
    event.preventDefault();

    

}