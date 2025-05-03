import { UserModel } from "../models/UsersModel";

export const UserValues = (values)=>{
    let User =  UserModel()
    User.USERID=values.UserId,
    User.USERNAME=values.UserName,
    User.ALIAS=values.Alias,
    User.EMAIL=values.Email,
    User.PHONENUMBER=values.PhoneNumber,
    User.DEPARTMENT=values.Department,
    User.FUNCTION=values.Function,
    User.COMPANYALIAS=values.CompanyAlias
    return User
 }