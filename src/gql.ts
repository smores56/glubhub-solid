import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  GqlDate: string;
  GqlDateTime: string;
  UniformColor: string;
};

export type AbsenceRequest = {
  __typename?: 'AbsenceRequest';
  /** The event they requested absence from */
  event: Event;
  /** The member that requested an absence */
  member: Member;
  /** The reason the member petitioned for absence with */
  reason: Scalars['String'];
  /** The current state of the request */
  state: AbsenceRequestState;
  /** The time this request was placed */
  time: Scalars['GqlDateTime'];
};

export enum AbsenceRequestState {
  Approved = 'APPROVED',
  Denied = 'DENIED',
  Pending = 'PENDING'
}

export type ActiveSemester = {
  __typename?: 'ActiveSemester';
  /** Whether the member was registered for the class */
  enrollment: Enrollment;
  /** The grades for the member in the given semester */
  grades: Grades;
  /** The email of the member */
  member: Scalars['String'];
  /** What section the member sang in */
  section?: Maybe<Scalars['String']>;
  /** The name of the semester */
  semester: Scalars['String'];
};

export type Attendance = {
  __typename?: 'Attendance';
  /** The absence request made by the current member, if they requested one */
  absenceRequest?: Maybe<AbsenceRequest>;
  /** Whether the absence is approved */
  approvedAbsence: Scalars['Boolean'];
  /** Whether the member confirmed that they would attend */
  confirmed: Scalars['Boolean'];
  /** If credit for attending the event should be denied */
  denyCredit: Scalars['Boolean'];
  /** Whether the member did attend the event */
  didAttend: Scalars['Boolean'];
  /** The email of the member this attendance belongs to */
  member: Member;
  /** How late the member was if they attended */
  minutesLate: Scalars['Int'];
  /** If the member is not allowed to RSVP, this is why */
  rsvpIssue?: Maybe<Scalars['String']>;
  /** Whether the member is expected to attend the event */
  shouldAttend: Scalars['Boolean'];
};

export type AttendanceUpdate = {
  confirmed: Scalars['Boolean'];
  didAttend: Scalars['Boolean'];
  minutesLate: Scalars['Int'];
  shouldAttend: Scalars['Boolean'];
};

export type Carpool = {
  __typename?: 'Carpool';
  /** The driver of the carpool */
  driver: Member;
  /** The event it belongs to */
  event: Scalars['Int'];
  /** The ID of the carpool */
  id: Scalars['Int'];
  /** The passengers of the carpool */
  passengers: Array<Member>;
};

export type ClubTransaction = {
  __typename?: 'ClubTransaction';
  /** How much this transaction was for */
  amount: Scalars['Int'];
  /** A description of what the member was charged for specifically */
  description: Scalars['String'];
  /** The ID of the transaction */
  id: Scalars['Int'];
  /** The member this transaction was charged to */
  member: Scalars['String'];
  /** Whether the member has paid the amount requested in this transaction */
  resolved: Scalars['Boolean'];
  /** Optionally, the name of the semester this tranaction was made during */
  semester?: Maybe<Scalars['String']>;
  /** When this transaction was charged */
  time: Scalars['GqlDateTime'];
  /** The name of the type of transaction */
  type: Scalars['String'];
};

/** A link to a Google Doc or other important document. */
export type Document = {
  __typename?: 'Document';
  /** The name of the document */
  name: Scalars['String'];
  /** A link to the document */
  url: Scalars['String'];
};

export enum Enrollment {
  Class = 'CLASS',
  Club = 'CLUB'
}

export type Event = {
  __typename?: 'Event';
  allAttendance: Array<Attendance>;
  /** The attendance for a specific member at this event */
  attendance: Attendance;
  /** When members are expected to arrive to the event */
  callTime: Scalars['GqlDateTime'];
  carpools: Array<Carpool>;
  /** General information or details about this event */
  comments?: Maybe<Scalars['String']>;
  /** Whether members are assumed to attend (we assume as much for most events) */
  defaultAttend: Scalars['Boolean'];
  /** The gig for this event, if it is a gig */
  gig?: Maybe<Gig>;
  /** Whether this event counts toward the volunteer gig count for the semester */
  gigCount: Scalars['Boolean'];
  /** The ID of the event */
  id: Scalars['Int'];
  /** Where this event will be held */
  location?: Maybe<Scalars['String']>;
  /** The name of the event */
  name: Scalars['String'];
  /** How many points attendance of this event is worth */
  points: Scalars['Int'];
  /** When members are probably going to be released */
  releaseTime?: Maybe<Scalars['GqlDateTime']>;
  /** The name of the semester this event belongs to */
  semester: Scalars['String'];
  setlist: Array<Song>;
  /** The type of the event (see EventType) */
  type: Scalars['String'];
  /** The attendance for the current user at this event */
  userAttendance?: Maybe<Attendance>;
};


export type EventAttendanceArgs = {
  member: Scalars['String'];
};

export type EventType = {
  __typename?: 'EventType';
  /** The name of the type of event */
  name: Scalars['String'];
  /** The amount of points this event is normally worth */
  weight: Scalars['Int'];
};

export type EventWithGradeChange = {
  __typename?: 'EventWithGradeChange';
  /** What grade change occurred, for what reason */
  change: GradeChange;
  /** The event a grade was received for */
  event: Event;
};

export type Fee = {
  __typename?: 'Fee';
  /** The amount to charge members */
  amount: Scalars['Int'];
  /** A longer description of what it is charging members for */
  description: Scalars['String'];
  /** The short name of the fee */
  name: Scalars['String'];
};

export type Gig = {
  __typename?: 'Gig';
  /** The email of the contact for this gig */
  contactEmail?: Maybe<Scalars['String']>;
  /** The name of the contact for this gig */
  contactName?: Maybe<Scalars['String']>;
  /** The phone number of the contact for this gig */
  contactPhone?: Maybe<Scalars['String']>;
  /** A description of this event for the external site (if it is public) */
  description?: Maybe<Scalars['String']>;
  /** The ID of the event this gig belongs to */
  event: Scalars['Int'];
  /** When members are expected to actually perform */
  performanceTime: Scalars['GqlDateTime'];
  /** The price we are charging for this gig */
  price?: Maybe<Scalars['Int']>;
  /** Whether this gig is visible on the external website */
  public: Scalars['Boolean'];
  /** A summary of this event for the external site (if it is public) */
  summary?: Maybe<Scalars['String']>;
  /** The uniform for this gig */
  uniform: Uniform;
};

export type GigRequest = {
  __typename?: 'GigRequest';
  /** Any comments about the event */
  comments?: Maybe<Scalars['String']>;
  /** The phone number of the contact for the potential event */
  contactEmail: Scalars['String'];
  /** The name of the contact for the potential event */
  contactName: Scalars['String'];
  /** The email of the contact for the potential event */
  contactPhone: Scalars['String'];
  /** If and when an event is created from a request, this is the event */
  event?: Maybe<Event>;
  /** The ID of the gig request */
  id: Scalars['Int'];
  /** Where the event will be happening */
  location: Scalars['String'];
  /** The name of the potential event */
  name: Scalars['String'];
  /** The organization requesting a performance from the Glee Club */
  organization: Scalars['String'];
  /** When the event will probably happen */
  startTime: Scalars['GqlDateTime'];
  /** The current status of whether the request was accepted */
  status: GigRequestStatus;
  /** When the gig request was placed */
  time: Scalars['GqlDateTime'];
};

export enum GigRequestStatus {
  Accepted = 'ACCEPTED',
  Dismissed = 'DISMISSED',
  Pending = 'PENDING'
}

export type GradeChange = {
  __typename?: 'GradeChange';
  /** How much the grade changed */
  change: Scalars['Float'];
  /** What the final grade was up to this event */
  partialScore: Scalars['Float'];
  /** The reason the grade change was incurred */
  reason: Scalars['String'];
};

export type Grades = {
  __typename?: 'Grades';
  /** The events of the semester, with the grade changes for those events */
  eventsWithChanges: Array<EventWithGradeChange>;
  /** The overall grade for the semester */
  grade: Scalars['Float'];
  /** The number of volunteer gigs attended over the semester */
  volunteerGigsAttended: Scalars['Int'];
};

export type MediaType = {
  __typename?: 'MediaType';
  /** The name of the type of media */
  name: Scalars['String'];
  /** The order of where this media type appears in a song's link section */
  order: Scalars['Int'];
  /** The type of storage that this type of media points to */
  storage: StorageType;
};

export type Member = {
  __typename?: 'Member';
  /** A short biography written by the member */
  about?: Maybe<Scalars['String']>;
  /** What year the member arrived at Georgia Tech */
  arrivedAtTech?: Maybe<Scalars['Int']>;
  /** What conflicts with rehearsal the member may have */
  conflicts?: Maybe<Scalars['String']>;
  /** Any dietary restrictions the member may have */
  dietaryRestrictions?: Maybe<Scalars['String']>;
  /** The member's email, which must be unique */
  email: Scalars['String'];
  /** The member's first name */
  firstName: Scalars['String'];
  /** The member's full name */
  fullName: Scalars['String'];
  /** What got them to join Glee Club */
  gatewayDrug?: Maybe<Scalars['String']>;
  /** The grades for the member in the given semester (default the current semester) */
  grades: Grades;
  /** Where the member came from */
  hometown?: Maybe<Scalars['String']>;
  /** The member's last name */
  lastName: Scalars['String'];
  /** Where the member lives */
  location: Scalars['String'];
  /** The member's academic major */
  major?: Maybe<Scalars['String']>;
  /** The member's academic minor */
  minor?: Maybe<Scalars['String']>;
  /** Whether the member lives on campus */
  onCampus?: Maybe<Scalars['Boolean']>;
  /** How many people the member can drive to events (besides themself) */
  passengers: Scalars['Int'];
  /** The permissions currently held by the member */
  permissions: Array<MemberPermission>;
  /** The member's phone number */
  phoneNumber: Scalars['String'];
  /** An optional link to a profile picture for the member */
  picture?: Maybe<Scalars['String']>;
  /** The officer positions currently held by the member */
  positions: Array<Role>;
  /** The member's nick name */
  preferredName?: Maybe<Scalars['String']>;
  /** The semester TODO */
  semester?: Maybe<ActiveSemester>;
  /** The semester TODO */
  semesters: Array<ActiveSemester>;
  /** All of the member's transactions for their entire time in Glee Club */
  transactions: Array<ClubTransaction>;
};


export type MemberGradesArgs = {
  semester?: InputMaybe<Scalars['String']>;
};

export type MemberPermission = {
  __typename?: 'MemberPermission';
  /** Optionally, the type of event the permission applies to */
  eventType?: Maybe<Scalars['String']>;
  /** The name of the permission */
  name: Scalars['String'];
};

export type MemberRole = {
  __typename?: 'MemberRole';
  /** The member holding the role */
  member: Member;
  /** The name of the role being held */
  role: Scalars['String'];
};

export type MemberUpdate = {
  about?: InputMaybe<Scalars['String']>;
  arrivedAtTech?: InputMaybe<Scalars['Int']>;
  conflicts?: InputMaybe<Scalars['String']>;
  dietaryRestrictions?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  enrollment?: InputMaybe<Enrollment>;
  firstName: Scalars['String'];
  gatewayDrug?: InputMaybe<Scalars['String']>;
  hometown?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  location: Scalars['String'];
  major?: InputMaybe<Scalars['String']>;
  minor?: InputMaybe<Scalars['String']>;
  onCampus?: InputMaybe<Scalars['Boolean']>;
  passHash?: InputMaybe<Scalars['String']>;
  passengers: Scalars['Int'];
  phoneNumber: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  preferredName?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Scalars['String']>;
};

export type Minutes = {
  __typename?: 'Minutes';
  /** When these notes were initially created */
  date: Scalars['GqlDate'];
  /** The ID of the meeting minutes */
  id: Scalars['Int'];
  /** The name of the meeting */
  name: Scalars['String'];
  /** The private, complete officer notes */
  private?: Maybe<Scalars['String']>;
  /** The public, redacted notes visible by all members */
  public?: Maybe<Scalars['String']>;
};

export enum Mode {
  Major = 'MAJOR',
  Minor = 'MINOR'
}

export type MutationRoot = {
  __typename?: 'MutationRoot';
  addBatchOfTransactions: Array<ClubTransaction>;
  addOfficership: Scalars['Boolean'];
  addPermissionToRole: Scalars['Boolean'];
  chargeDues: Array<ClubTransaction>;
  chargeLateDues: Array<ClubTransaction>;
  confirmForEvent: Attendance;
  createDocument: Document;
  createEvent: Event;
  createEventFromGigRequest: Event;
  createMeetingMinutes: Minutes;
  createSemester: Semester;
  createSong: Song;
  createSongLink: SongLink;
  createUniform: Uniform;
  deleteDocument: Document;
  /** Deletes an event and returns its ID */
  deleteEvent: Scalars['Int'];
  deleteMeetingMinutes: Minutes;
  /** Deletes a member and returns their email */
  deleteMember: Scalars['String'];
  deleteSong: Song;
  deleteSongLink: SongLink;
  deleteUniform: Uniform;
  dismissGigRequest: GigRequest;
  emailMeetingMinutes: Minutes;
  forgotPassword: Scalars['String'];
  /** Gets a login token on successful login */
  login: Scalars['String'];
  loginAs: Scalars['String'];
  /** Logs the member out */
  logout: Scalars['String'];
  registerForSemester: Member;
  registerMember: Member;
  removeOfficership: Scalars['Boolean'];
  removePermissionFromRole: Scalars['Boolean'];
  reopenGigRequest: GigRequest;
  resetPassword: Scalars['String'];
  resolveTransaction: ClubTransaction;
  respondToAbsenceRequest: AbsenceRequest;
  rsvpForEvent: Attendance;
  setCurrentSemester: Semester;
  setVariable: Variable;
  submitAbsenceRequest: AbsenceRequest;
  submitGigRequest: GigRequest;
  unsetVariable: Scalars['String'];
  updateAttendance: Attendance;
  updateCarpools: Array<Carpool>;
  updateEvent: Event;
  updateFeeAmount: Fee;
  updateMeetingMinutes: Minutes;
  updateMember: Member;
  updateProfile: Member;
  updateSemester: Semester;
  updateSong: Song;
  updateSongLink: SongLink;
  updateUniform: Uniform;
};


export type MutationRootAddBatchOfTransactionsArgs = {
  batch: TransactionBatch;
};


export type MutationRootAddOfficershipArgs = {
  email: Scalars['String'];
  role: Scalars['String'];
};


export type MutationRootAddPermissionToRoleArgs = {
  rolePermission: NewRolePermission;
};


export type MutationRootConfirmForEventArgs = {
  id: Scalars['Int'];
};


export type MutationRootCreateDocumentArgs = {
  name: Scalars['String'];
  url: Scalars['String'];
};


export type MutationRootCreateEventArgs = {
  newEvent: NewEvent;
};


export type MutationRootCreateEventFromGigRequestArgs = {
  newEvent: NewEvent;
  requestId: Scalars['Int'];
};


export type MutationRootCreateMeetingMinutesArgs = {
  name: Scalars['String'];
};


export type MutationRootCreateSemesterArgs = {
  newSemester: NewSemester;
};


export type MutationRootCreateSongArgs = {
  newSong: NewSong;
};


export type MutationRootCreateSongLinkArgs = {
  newLink: NewSongLink;
  songId: Scalars['Int'];
};


export type MutationRootCreateUniformArgs = {
  newUniform: NewUniform;
};


export type MutationRootDeleteDocumentArgs = {
  name: Scalars['String'];
};


export type MutationRootDeleteEventArgs = {
  id: Scalars['Int'];
};


export type MutationRootDeleteMeetingMinutesArgs = {
  id: Scalars['Int'];
};


export type MutationRootDeleteMemberArgs = {
  email: Scalars['String'];
};


export type MutationRootDeleteSongArgs = {
  id: Scalars['Int'];
};


export type MutationRootDeleteSongLinkArgs = {
  id: Scalars['Int'];
};


export type MutationRootDeleteUniformArgs = {
  id: Scalars['Int'];
};


export type MutationRootDismissGigRequestArgs = {
  id: Scalars['Int'];
};


export type MutationRootEmailMeetingMinutesArgs = {
  id: Scalars['Int'];
};


export type MutationRootForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRootLoginArgs = {
  email: Scalars['String'];
  passHash: Scalars['String'];
};


export type MutationRootLoginAsArgs = {
  email: Scalars['String'];
};


export type MutationRootRegisterForSemesterArgs = {
  newSemester: RegisterForSemesterForm;
};


export type MutationRootRegisterMemberArgs = {
  newMember: NewMember;
};


export type MutationRootRemoveOfficershipArgs = {
  email: Scalars['String'];
  role: Scalars['String'];
};


export type MutationRootRemovePermissionFromRoleArgs = {
  rolePermission: NewRolePermission;
};


export type MutationRootReopenGigRequestArgs = {
  id: Scalars['Int'];
};


export type MutationRootResetPasswordArgs = {
  passHash: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRootResolveTransactionArgs = {
  id: Scalars['Int'];
  resolved: Scalars['Boolean'];
};


export type MutationRootRespondToAbsenceRequestArgs = {
  approved: Scalars['Boolean'];
  email: Scalars['String'];
  eventId: Scalars['Int'];
};


export type MutationRootRsvpForEventArgs = {
  attending: Scalars['Boolean'];
  id: Scalars['Int'];
};


export type MutationRootSetCurrentSemesterArgs = {
  name: Scalars['String'];
};


export type MutationRootSetVariableArgs = {
  key: Scalars['String'];
  value: Scalars['String'];
};


export type MutationRootSubmitAbsenceRequestArgs = {
  eventId: Scalars['Int'];
  reason: Scalars['String'];
};


export type MutationRootSubmitGigRequestArgs = {
  request: NewGigRequest;
};


export type MutationRootUnsetVariableArgs = {
  key: Scalars['String'];
};


export type MutationRootUpdateAttendanceArgs = {
  email: Scalars['String'];
  eventId: Scalars['Int'];
  update: AttendanceUpdate;
};


export type MutationRootUpdateCarpoolsArgs = {
  carpools: Array<UpdatedCarpool>;
  eventId: Scalars['Int'];
};


export type MutationRootUpdateEventArgs = {
  id: Scalars['Int'];
  newEvent: NewEvent;
};


export type MutationRootUpdateFeeAmountArgs = {
  amount: Scalars['Int'];
  name: Scalars['String'];
};


export type MutationRootUpdateMeetingMinutesArgs = {
  id: Scalars['Int'];
  update: UpdatedMeetingMinutes;
};


export type MutationRootUpdateMemberArgs = {
  email: Scalars['String'];
  newMember: MemberUpdate;
};


export type MutationRootUpdateProfileArgs = {
  newMember: MemberUpdate;
};


export type MutationRootUpdateSemesterArgs = {
  name: Scalars['String'];
  update: NewSemester;
};


export type MutationRootUpdateSongArgs = {
  id: Scalars['Int'];
  update: SongUpdate;
};


export type MutationRootUpdateSongLinkArgs = {
  id: Scalars['Int'];
  update: SongLinkUpdate;
};


export type MutationRootUpdateUniformArgs = {
  id: Scalars['Int'];
  update: NewUniform;
};

export type NewEvent = {
  event: NewEventFields;
  gig?: InputMaybe<NewGig>;
  repeat?: InputMaybe<NewEventPeriod>;
};

export type NewEventFields = {
  callTime: Scalars['GqlDateTime'];
  comments?: InputMaybe<Scalars['String']>;
  defaultAttend: Scalars['Boolean'];
  gigCount?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  points: Scalars['Int'];
  releaseTime?: InputMaybe<Scalars['GqlDateTime']>;
  semester: Scalars['String'];
  type: Scalars['String'];
};

export type NewEventPeriod = {
  period: Period;
  repeatUntil: Scalars['GqlDateTime'];
};

export type NewGig = {
  contactEmail?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  performanceTime: Scalars['GqlDateTime'];
  price?: InputMaybe<Scalars['Int']>;
  public: Scalars['Boolean'];
  summary?: InputMaybe<Scalars['String']>;
  uniform: Scalars['Int'];
};

export type NewGigRequest = {
  comments?: InputMaybe<Scalars['String']>;
  contactEmail: Scalars['String'];
  contactName: Scalars['String'];
  contactPhone: Scalars['String'];
  location: Scalars['String'];
  name: Scalars['String'];
  organization: Scalars['String'];
  startTime: Scalars['GqlDateTime'];
};

export type NewMember = {
  about?: InputMaybe<Scalars['String']>;
  arrivedAtTech?: InputMaybe<Scalars['Int']>;
  conflicts?: InputMaybe<Scalars['String']>;
  dietaryRestrictions?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  enrollment: Enrollment;
  firstName: Scalars['String'];
  gatewayDrug?: InputMaybe<Scalars['String']>;
  hometown?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  location: Scalars['String'];
  major?: InputMaybe<Scalars['String']>;
  minor?: InputMaybe<Scalars['String']>;
  onCampus?: InputMaybe<Scalars['Boolean']>;
  passHash: Scalars['String'];
  passengers: Scalars['Int'];
  phoneNumber: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  preferredName?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<Scalars['String']>;
};

export type NewRolePermission = {
  /** Optionally, the type of the event the permission applies to */
  eventType?: InputMaybe<Scalars['String']>;
  /** The name of the permission the role is awarded */
  permission: Scalars['String'];
  /** The name of the role this junction refers to */
  role: Scalars['String'];
};

export type NewSemester = {
  endDate: Scalars['GqlDate'];
  gigRequirement: Scalars['Int'];
  name: Scalars['String'];
  startDate: Scalars['GqlDate'];
};

export type NewSong = {
  info?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type NewSongLink = {
  content?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  target: Scalars['String'];
  type: Scalars['String'];
};

export type NewUniform = {
  color?: InputMaybe<Scalars['UniformColor']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export enum Period {
  Biweekly = 'BIWEEKLY',
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export type Permission = {
  __typename?: 'Permission';
  /** A description of what the permission entails */
  description?: Maybe<Scalars['String']>;
  /** The name of the permission */
  name: Scalars['String'];
  /** Whether the permission applies to a type of event or generally */
  type: PermissionType;
};

export enum PermissionType {
  Event = 'EVENT',
  Static = 'STATIC'
}

export enum Pitch {
  A = 'A',
  AFlat = 'A_FLAT',
  ASharp = 'A_SHARP',
  B = 'B',
  BFlat = 'B_FLAT',
  BSharp = 'B_SHARP',
  C = 'C',
  CFlat = 'C_FLAT',
  CSharp = 'C_SHARP',
  D = 'D',
  DFlat = 'D_FLAT',
  DSharp = 'D_SHARP',
  E = 'E',
  EFlat = 'E_FLAT',
  ESharp = 'E_SHARP',
  F = 'F',
  FFlat = 'F_FLAT',
  FSharp = 'F_SHARP',
  G = 'G',
  GFlat = 'G_FLAT',
  GSharp = 'G_SHARP'
}

export type PublicSong = {
  __typename?: 'PublicSong';
  current: Scalars['Boolean'];
  title: Scalars['String'];
  videos: Array<PublicVideo>;
};

export type PublicVideo = {
  __typename?: 'PublicVideo';
  title: Scalars['String'];
  url: Scalars['String'];
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  absenceRequests: Array<AbsenceRequest>;
  allMeetingMinutes: Array<Minutes>;
  currentPermissions: Array<RolePermission>;
  currentSemester: Semester;
  documents: Array<Document>;
  event: Event;
  events: Array<Event>;
  fees: Array<Fee>;
  gigRequest: GigRequest;
  gigRequests: Array<GigRequest>;
  meetingMinutes: Minutes;
  member: Member;
  members: Array<Member>;
  officers: Array<MemberRole>;
  publicSongs: Array<PublicSong>;
  semester: Semester;
  semesters: Array<Semester>;
  song: Song;
  songLink: SongLink;
  songs: Array<Song>;
  static: StaticData;
  transactions: Array<ClubTransaction>;
  uniform: Uniform;
  uniforms: Array<Uniform>;
  user?: Maybe<Member>;
  variable: Variable;
};


export type QueryRootEventArgs = {
  id: Scalars['Int'];
};


export type QueryRootGigRequestArgs = {
  id: Scalars['Int'];
};


export type QueryRootMeetingMinutesArgs = {
  id: Scalars['Int'];
};


export type QueryRootMemberArgs = {
  email: Scalars['String'];
};


export type QueryRootMembersArgs = {
  includeClass?: Scalars['Boolean'];
  includeClub?: Scalars['Boolean'];
  includeInactive?: Scalars['Boolean'];
};


export type QueryRootSemesterArgs = {
  name: Scalars['String'];
};


export type QueryRootSongArgs = {
  id: Scalars['Int'];
};


export type QueryRootSongLinkArgs = {
  id: Scalars['Int'];
};


export type QueryRootUniformArgs = {
  id: Scalars['Int'];
};


export type QueryRootVariableArgs = {
  key: Scalars['String'];
};

export type RegisterForSemesterForm = {
  conflicts: Scalars['String'];
  dietaryRestrictions: Scalars['String'];
  enrollment: Enrollment;
  location: Scalars['String'];
  onCampus?: InputMaybe<Scalars['Boolean']>;
  section: Scalars['String'];
};

/** Roles that can be held by members to grant permissions */
export type Role = {
  __typename?: 'Role';
  /**
   * The maximum number of the position allowed to be held at once.
   * If it is 0 or less, no maximum is enforced
   */
  maxQuantity: Scalars['Int'];
  /** The name of the role */
  name: Scalars['String'];
  /** Used for ordering the positions (e.g. President beforee Ombudsman) */
  rank: Scalars['Int'];
};

export type RolePermission = {
  __typename?: 'RolePermission';
  /** Optionally, the type of the event the permission applies to */
  eventType?: Maybe<Scalars['String']>;
  /** The ID of the role permission */
  id: Scalars['Int'];
  /** The name of the permission the role is awarded */
  permission: Scalars['String'];
  /** The name of the role this junction refers to */
  role: Scalars['String'];
};

export type SectionType = {
  __typename?: 'SectionType';
  /** The name of the section (Tenor, Baritone, etc.) */
  name: Scalars['String'];
};

export type Semester = {
  __typename?: 'Semester';
  /** Whether this is the current semester */
  current: Scalars['Boolean'];
  /** When the semester ends */
  endDate: Scalars['GqlDateTime'];
  /** How many volunteer gigs are required for the semester (default: 5) */
  gigRequirement: Scalars['Int'];
  /** The name of the semester */
  name: Scalars['String'];
  /** When the semester starts */
  startDate: Scalars['GqlDateTime'];
};

export type Song = {
  __typename?: 'Song';
  /** Whether it is in this semester's repertoire */
  current: Scalars['Boolean'];
  /** The ID of the song */
  id: Scalars['Int'];
  /**
   * Any information related to the song
   * (minor changes to the music, who wrote it, soloists, etc.)
   */
  info?: Maybe<Scalars['String']>;
  /** The key of the song */
  key?: Maybe<Pitch>;
  /** The links connected to the song sorted into sections */
  links: Array<SongLinkSection>;
  /** The mode of the song (Major or Minor) */
  mode?: Maybe<Mode>;
  /** The starting pitch for the song */
  startingPitch?: Maybe<Pitch>;
  /** The title of the song */
  title: Scalars['String'];
};

export type SongLink = {
  __typename?: 'SongLink';
  /** The ID of the song link */
  id: Scalars['Int'];
  /** The name of this link */
  name: Scalars['String'];
  /** The ID of the song this link belongs to */
  song: Scalars['Int'];
  /** The target this link points to */
  target: Scalars['String'];
  /** The type of this link (e.g. MIDI) */
  type: Scalars['String'];
};

export type SongLinkSection = {
  __typename?: 'SongLinkSection';
  links: Array<SongLink>;
  name: Scalars['String'];
};

export type SongLinkUpdate = {
  name: Scalars['String'];
  target: Scalars['String'];
};

export type SongUpdate = {
  current: Scalars['Boolean'];
  info?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Pitch>;
  mode?: InputMaybe<Mode>;
  startingPitch?: InputMaybe<Pitch>;
  title: Scalars['String'];
};

export type StaticData = {
  __typename?: 'StaticData';
  eventTypes: Array<EventType>;
  mediaTypes: Array<MediaType>;
  permissions: Array<Permission>;
  roles: Array<Role>;
  sections: Array<SectionType>;
  transactionTypes: Array<TransactionType>;
};

export enum StorageType {
  Local = 'LOCAL',
  Remote = 'REMOTE'
}

export type TransactionBatch = {
  amount: Scalars['Int'];
  description: Scalars['String'];
  members: Array<Scalars['String']>;
  type: Scalars['String'];
};

export type TransactionType = {
  __typename?: 'TransactionType';
  name: Scalars['String'];
};

export type Uniform = {
  __typename?: 'Uniform';
  /** The associated color (In the format #HHH, H being a hex digit) */
  color?: Maybe<Scalars['UniformColor']>;
  /** The explanation of what to wear when wearing the uniform */
  description?: Maybe<Scalars['String']>;
  /** The ID of the uniform */
  id: Scalars['Int'];
  /** The name of the uniform */
  name: Scalars['String'];
};

export type UpdatedCarpool = {
  driver: Scalars['String'];
  passengers: Array<Scalars['String']>;
};

export type UpdatedMeetingMinutes = {
  name: Scalars['String'];
  private?: InputMaybe<Scalars['String']>;
  public: Scalars['String'];
};

/** Arbitrary variables for developer usage. */
export type Variable = {
  __typename?: 'Variable';
  /** The name of the variable. */
  key: Scalars['String'];
  /** The value of the variable. */
  value: Scalars['String'];
};

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'QueryRoot', user?: { __typename?: 'Member', email: string, fullName: string } | null };


export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;