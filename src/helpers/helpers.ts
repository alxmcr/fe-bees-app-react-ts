import { ContactPageParams } from "../@types/appRouterTypes"

export const getContactIdFromParams = (params: ContactPageParams) => {
    return params?.id !== undefined ? parseInt(params?.id) : 1
}