export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSONObject: any;
};

export type Address = {
  __typename?: 'Address';
  address_line1: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
};

export type UserGroupModel = IBaseModel & {
  __typename?: 'UserGroupModel';
  _id: Scalars['ID'];
  created_at?: Maybe<Scalars['DateTime']>;
  last_updated_at: Scalars['DateTime'];
  deleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['String']>;
  last_updated_by?: Maybe<Scalars['String']>;
  org_id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type IBaseModel = {
  _id: Scalars['ID'];
  created_at?: Maybe<Scalars['DateTime']>;
  last_updated_at: Scalars['DateTime'];
  deleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['String']>;
  last_updated_by?: Maybe<Scalars['String']>;
  org_id: Scalars['String'];
};

export type StudentModel = IUser & {
  __typename?: 'StudentModel';
  _id: Scalars['ID'];
  created_at?: Maybe<Scalars['DateTime']>;
  last_updated_at: Scalars['DateTime'];
  deleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['String']>;
  last_updated_by?: Maybe<Scalars['String']>;
  org_id: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_verified?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  email_verified?: Maybe<Scalars['Boolean']>;
  password_set?: Maybe<Scalars['Boolean']>;
  status: UserStatusType;
  profile_image?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<UserGroupModel>>;
  languages?: Maybe<Array<LanguageType>>;
  dob?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<GenderType>;
  address?: Maybe<Address>;
  timezone?: Maybe<Scalars['Float']>;
  primary_account_id?: Maybe<Scalars['String']>;
  is_minor?: Maybe<Scalars['Boolean']>;
  interests?: Maybe<Array<Interests>>;
  goals?: Maybe<Array<Scalars['String']>>;
};

export type IUser = {
  _id: Scalars['ID'];
  created_at?: Maybe<Scalars['DateTime']>;
  last_updated_at: Scalars['DateTime'];
  deleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['String']>;
  last_updated_by?: Maybe<Scalars['String']>;
  org_id: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_verified?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  email_verified?: Maybe<Scalars['Boolean']>;
  password_set?: Maybe<Scalars['Boolean']>;
  status: UserStatusType;
  profile_image?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<UserGroupModel>>;
  languages?: Maybe<Array<LanguageType>>;
  dob?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<GenderType>;
  address?: Maybe<Address>;
  timezone?: Maybe<Scalars['Float']>;
};

export enum UserStatusType {
  Pending = 'Pending',
  Active = 'Active',
}

export enum LanguageType {
  English = 'English',
  Spanish = 'Spanish',
  Portuguese = 'Portuguese',
  French = 'French',
  Hindi = 'Hindi',
  Mandarin = 'Mandarin',
  Arabic = 'Arabic',
}

export enum GenderType {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export enum Interests {
  Politics = 'Politics',
  Sport = 'Sport',
  Travels = 'Travels',
  Environment = 'Environment',
  Astronomy = 'Astronomy',
  Science = 'Science',
}

export type TutorModel = IUser & {
  __typename?: 'TutorModel';
  _id: Scalars['ID'];
  created_at?: Maybe<Scalars['DateTime']>;
  last_updated_at: Scalars['DateTime'];
  deleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['String']>;
  last_updated_by?: Maybe<Scalars['String']>;
  org_id: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_verified?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  email_verified?: Maybe<Scalars['Boolean']>;
  password_set?: Maybe<Scalars['Boolean']>;
  status: UserStatusType;
  profile_image?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<UserGroupModel>>;
  languages?: Maybe<Array<LanguageType>>;
  dob?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<GenderType>;
  address?: Maybe<Address>;
  timezone?: Maybe<Scalars['Float']>;
};

export type UserModel = IUser & {
  __typename?: 'UserModel';
  _id: Scalars['ID'];
  created_at?: Maybe<Scalars['DateTime']>;
  last_updated_at: Scalars['DateTime'];
  deleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['String']>;
  last_updated_by?: Maybe<Scalars['String']>;
  org_id: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_verified?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  email_verified?: Maybe<Scalars['Boolean']>;
  password_set?: Maybe<Scalars['Boolean']>;
  status: UserStatusType;
  profile_image?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<UserGroupModel>>;
  languages?: Maybe<Array<LanguageType>>;
  dob?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<GenderType>;
  address?: Maybe<Address>;
  timezone?: Maybe<Scalars['Float']>;
  user_type?: Maybe<UserType>;
};

export enum UserType {
  Tutor = 'tutor',
  Student = 'student',
}

export type OrganizationModel = IMongoModel & {
  __typename?: 'OrganizationModel';
  _id: Scalars['ID'];
  created_at?: Maybe<Scalars['DateTime']>;
  last_updated_at: Scalars['DateTime'];
  deleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  status: OrganizationStatus;
  domain?: Maybe<Scalars['String']>;
};

export type IMongoModel = {
  _id: Scalars['ID'];
  created_at?: Maybe<Scalars['DateTime']>;
  last_updated_at: Scalars['DateTime'];
  deleted?: Maybe<Scalars['Boolean']>;
};

export enum OrganizationStatus {
  Pending = 'Pending',
  Active = 'Active',
  Inactive = 'Inactive',
}

export type StorageItemType = {
  __typename?: 'StorageItemType';
  roles?: Maybe<Array<RoleType>>;
  is_setting_password?: Maybe<Scalars['Boolean']>;
};

export enum RoleType {
  SuperAdmin = 'super_admin',
  Admin = 'admin',
  ContentCreator = 'content_creator',
  ContentConsumer = 'content_consumer',
}

export type SignInSuccessType = {
  __typename?: 'SignInSuccessType';
  accessToken: Scalars['String'];
};

export type Interaction = {
  __typename?: 'Interaction';
  type: Scalars['String'];
  data?: Maybe<Scalars['JSONObject']>;
};

export type Query = {
  __typename?: 'Query';
  user: UserModel;
  me: StudentTutorUnion;
  users: Array<StudentTutorUnion>;
  usersGroups: Array<UserGroupModel>;
  usersOrganization: Scalars['String'];
  getMinorChildren: Array<StudentModel>;
  getAdultChildren: Array<StudentModel>;
  getPrimaryAccount: UserModel;
  members: Array<UserModel>;
  groups: Array<UserGroupModel>;
  organization: OrganizationModel;
  organizations: Array<OrganizationModel>;
  organizationUsers: Array<UserModel>;
  organizationGroups: Array<UserGroupModel>;
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type QueryMembersArgs = {
  group_id: Scalars['String'];
};

export type QueryOrganizationArgs = {
  id: Scalars['String'];
};

export type QueryOrganizationUsersArgs = {
  id: Scalars['String'];
};

export type QueryOrganizationGroupsArgs = {
  id: Scalars['String'];
};

export type StudentTutorUnion = TutorModel | StudentModel;

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserModel;
  updateTutor: TutorModel;
  deleteUser: Scalars['Boolean'];
  assignRole: Scalars['Boolean'];
  unAssignRole: Scalars['Boolean'];
  verifyEmail: Scalars['Boolean'];
  getRedis: StorageItemType;
  createSuperAdmin: UserModel;
  inviteAdultChild: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  setPassword: SignInSuccessType;
  forgotPassword: Scalars['Boolean'];
  updateStudent: StudentModel;
  addMinorChild: StudentModel;
  createUserGroup: UserGroupModel;
  updateUserGroup: UserGroupModel;
  deleteUserGroup: Scalars['Boolean'];
  addUserToGroup: UserModel;
  removeUserFromGroup: UserModel;
  createOrganization: OrganizationModel;
  addAdminToOrganization: OrganizationModel;
  addAdminToDefaultOrganization: OrganizationModel;
  updateOrganization: OrganizationModel;
  signUpTutor: Scalars['Boolean'];
  signUpStudent: Scalars['Boolean'];
  signIn: SignInSuccessType;
  signInMinorChild: SignInSuccessType;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationUpdateTutorArgs = {
  updateTutorInput: UpdateTutorInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type MutationAssignRoleArgs = {
  assignRoleInput: AssignRoleInput;
};

export type MutationUnAssignRoleArgs = {
  assignRoleInput: AssignRoleInput;
};

export type MutationVerifyEmailArgs = {
  encrypted_id: Scalars['String'];
};

export type MutationCreateSuperAdminArgs = {
  createSuperAdmin: CreateUserInput;
};

export type MutationInviteAdultChildArgs = {
  inviteAdultChild: InviteAdultChildInput;
};

export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};

export type MutationSetPasswordArgs = {
  setPasswordInput: SetPasswordInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationUpdateStudentArgs = {
  updateStudentInput: UpdateStudentInput;
};

export type MutationAddMinorChildArgs = {
  addMinorChildInput: AddMinorChildInput;
};

export type MutationCreateUserGroupArgs = {
  createUserGroupInput: CreateUserGroupInput;
};

export type MutationUpdateUserGroupArgs = {
  updateUserGroupInput: UpdateUserGroupInput;
};

export type MutationDeleteUserGroupArgs = {
  user_id: Scalars['String'];
  id: Scalars['String'];
};

export type MutationAddUserToGroupArgs = {
  group_id: Scalars['String'];
};

export type MutationRemoveUserFromGroupArgs = {
  group_id: Scalars['String'];
  user_id: Scalars['String'];
};

export type MutationCreateOrganizationArgs = {
  createOrganizationInput: CreateOrganizationInput;
};

export type MutationAddAdminToOrganizationArgs = {
  addAdminToOrganizationInput: AddAdminToOrganizationInput;
};

export type MutationAddAdminToDefaultOrganizationArgs = {
  admin_id: Scalars['String'];
};

export type MutationUpdateOrganizationArgs = {
  updateOrganizationInput: UpdateOrganizationInput;
};

export type MutationSignUpTutorArgs = {
  signUpTutorInput: SignUpTutorInput;
};

export type MutationSignUpStudentArgs = {
  signUpStudentInput: SignUpStudentInput;
};

export type MutationSignInArgs = {
  signInInput: SignInInput;
};

export type MutationSignInMinorChildArgs = {
  signInMinorChildInput: SignInMinorChildInput;
};

export type CreateUserInput = {
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  org_id?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<GenderType>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  user_type?: Maybe<UserType>;
};

export type UpdateTutorInput = {
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  org_id?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<GenderType>;
  phone?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<LanguageType>>;
  address?: Maybe<AddressInput>;
  timezone?: Maybe<Scalars['Float']>;
};

export type AddressInput = {
  address_line1?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type AssignRoleInput = {
  user_id: Scalars['String'];
  role_type: RoleType;
};

export type InviteAdultChildInput = {
  email: Scalars['String'];
};

export type ChangePasswordInput = {
  previous_password: Scalars['String'];
  new_password: Scalars['String'];
};

export type SetPasswordInput = {
  encrypted_id: Scalars['String'];
  password: Scalars['String'];
};

export type UpdateStudentInput = {
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  org_id?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<GenderType>;
  phone?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<LanguageType>>;
  address?: Maybe<AddressInput>;
  timezone?: Maybe<Scalars['Float']>;
  interests?: Maybe<Array<Interests>>;
  goals?: Maybe<Array<Scalars['String']>>;
};

export type AddMinorChildInput = {
  first_name: Scalars['String'];
  middle_name?: Maybe<Scalars['String']>;
  last_name: Scalars['String'];
  dob: Scalars['DateTime'];
  gender?: Maybe<GenderType>;
};

export type CreateUserGroupInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateUserGroupInput = {
  group_id: Scalars['String'];
  user_id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  org_id?: Maybe<Scalars['String']>;
};

export type CreateOrganizationInput = {
  name: Scalars['String'];
  domain: Scalars['String'];
};

export type AddAdminToOrganizationInput = {
  org_id: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
};

export type UpdateOrganizationInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<OrganizationStatus>;
  domain?: Maybe<Scalars['String']>;
};

export type SignUpTutorInput = {
  email: Scalars['String'];
};

export type SignUpStudentInput = {
  email: Scalars['String'];
  full_name: Scalars['String'];
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignInMinorChildInput = {
  child_id: Scalars['ID'];
};
