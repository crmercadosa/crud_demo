import { getDetailRow } from "../helpers/Utils";

export function UserModel() {
    let User = {
        USERID: { type: String },
        USERNAME: { type: String },
        ALIAS : { type : String },
        EMAIL: { type: String },
        PHONENUMBER: { type: String },
        DEPARTMENT: { type: String },
        FUNCTION: { type: String },
        COMPANYALIAS: { type: String },
        ROLES: [],
        detail_row: getDetailRow(),
    };
    return User
};