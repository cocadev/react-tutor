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
  JSONObject: any;
  DateTime: any;
};

export type Content = {
  __typename?: 'Content';
  description?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['String']>;
  type: ContentType;
  metadata?: Maybe<Scalars['JSONObject']>;
};

export enum ContentType {
  Image = 'Image',
  Video = 'Video',
  Text = 'Text',
}

export type TagModel = IBaseModel & {
  __typename?: 'TagModel';
  _id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  created_by?: Maybe<Scalars['String']>;
  last_updated_at?: Maybe<Scalars['DateTime']>;
  last_updated_by?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  org_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  likes?: Maybe<Array<Scalars['String']>>;
  subscribers?: Maybe<Array<Scalars['String']>>;
  text: Scalars['String'];
  system_inferred?: Maybe<Scalars['Boolean']>;
};

export type IBaseModel = {
  _id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  created_by?: Maybe<Scalars['String']>;
  last_updated_at?: Maybe<Scalars['DateTime']>;
  last_updated_by?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  org_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  likes?: Maybe<Array<Scalars['String']>>;
  subscribers?: Maybe<Array<Scalars['String']>>;
};

export type Answer = {
  __typename?: 'Answer';
  text: Scalars['String'];
  id: Scalars['Float'];
  image_url?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  original?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  is_correct?: Maybe<Scalars['Boolean']>;
};

export type QuestionModel = IBaseModel & {
  __typename?: 'QuestionModel';
  _id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  created_by?: Maybe<Scalars['String']>;
  last_updated_at?: Maybe<Scalars['DateTime']>;
  last_updated_by?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  org_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  likes?: Maybe<Array<Scalars['String']>>;
  subscribers?: Maybe<Array<Scalars['String']>>;
  text: Scalars['String'];
  micro_lesson_id?: Maybe<Scalars['String']>;
  type: QuestionType;
  active?: Maybe<Scalars['Boolean']>;
  users_viewed?: Maybe<Array<Scalars['String']>>;
  answers?: Maybe<Array<Answer>>;
  tags?: Maybe<Array<TagModel>>;
};

export enum QuestionType {
  MultipleChoice = 'Multiple_Choice',
  MultipleSelect = 'Multiple_Select',
  TrueFalse = 'True_False',
  AgreeDisagree = 'Agree_Disagree',
  Range = 'Range',
  InputText = 'Input_Text',
  InputNumber = 'Input_Number',
}

export type MicroLessonModel = IBaseModel & {
  __typename?: 'MicroLessonModel';
  _id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  created_by?: Maybe<Scalars['String']>;
  last_updated_at?: Maybe<Scalars['DateTime']>;
  last_updated_by?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  org_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  likes?: Maybe<Array<Scalars['String']>>;
  subscribers?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  content?: Maybe<Content>;
  emotions?: Maybe<Array<Scalars['String']>>;
  is_published?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Array<TagModel>>;
  questions?: Maybe<Array<QuestionModel>>;
};

export type LessonModel = IBaseModel & {
  __typename?: 'LessonModel';
  _id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  created_by?: Maybe<Scalars['String']>;
  last_updated_at?: Maybe<Scalars['DateTime']>;
  last_updated_by?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  org_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  likes?: Maybe<Array<Scalars['String']>>;
  subscribers?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  goal?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  is_published?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  micro_lessons?: Maybe<Array<MicroLessonModel>>;
  tags?: Maybe<Array<TagModel>>;
};

export type CourseModel = IBaseModel & {
  __typename?: 'CourseModel';
  _id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  created_by?: Maybe<Scalars['String']>;
  last_updated_at?: Maybe<Scalars['DateTime']>;
  last_updated_by?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  org_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  likes?: Maybe<Array<Scalars['String']>>;
  subscribers?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  rating: Scalars['Float'];
  total_rating: Scalars['Int'];
  users_rated?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  is_published?: Maybe<Scalars['Boolean']>;
  navigation?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  lessons?: Maybe<Array<LessonModel>>;
  tags?: Maybe<Array<TagModel>>;
};

export type Interaction = {
  __typename?: 'Interaction';
  data?: Maybe<Scalars['JSONObject']>;
  type: UserInteractionTypes;
};

export enum UserInteractionTypes {
  UserCreatedQuestion = 'user_created_question',
  UserLikedQuestion = 'user_liked_question',
  UserUnlikedQuestion = 'user_unliked_question',
  UserViewedQuestion = 'user_viewed_question',
  UserAnsweredQuestion = 'user_answered_question',
  UserUpdatedQuestion = 'user_updated_question',
  UserDeletedQuestion = 'user_deleted_question',
  UserAddedTagsToQuestion = 'user_added_tags_to_question',
  UserDeletedTagsFromQuestion = 'user_deleted_tags_from_question',
  UserUpdatedQuestionsTags = 'user_updated_questions_tags',
  UserCreatedAnswer = 'user_created_answer',
  UserUpdatedAnswer = 'user_updated_answer',
  UserDeletedAnswer = 'user_deleted_answer',
  UserSuggestedAnswer = 'user_suggested_answer',
  UserCreatedLesson = 'user_created_lesson',
  UserUpdatedLesson = 'user_updated_lesson',
  UserDeletedLesson = 'user_deleted_lesson',
  UserStartedLesson = 'user_started_lesson',
  UserCompletedLesson = 'user_completed_lesson',
  UserAddedTagToLesson = 'user_added_tag_to_lesson',
  UserAddedMicroLessonToLesson = 'user_added_micro_lesson_to_lesson',
  UserDeletedMicroLessonFromLesson = 'user_deleted_micro_lesson_from_lesson',
  UserAddedTagsToLesson = 'user_added_tags_to_lesson',
  UserDeletedTagsFromLesson = 'user_deleted_tags_from_lesson',
  UserUpdatedLessonsTags = 'user_updated_lessons_tags',
  UserLikedLesson = 'user_liked_lesson',
  UserUnlikedLesson = 'user_unliked_lesson',
  UserSubscribedLesson = 'user_subscribed_lesson',
  UserUnsubscribedLesson = 'user_unsubscribed_lesson',
  UserPublishedLesson = 'user_published_lesson',
  UserCreatedMicroLesson = 'user_created_micro_lesson',
  UserUpdatedMicroLesson = 'user_updated_micro_lesson',
  UserDeletedMicroLesson = 'user_deleted_micro_lesson',
  UserStartedMicroLesson = 'user_started_micro_lesson',
  UserLikedMicroLesson = 'user_liked_micro_lesson',
  UserUnlikedMicroLesson = 'user_unliked_micro_lesson',
  UserSubscribedOnMicroLesson = 'user_subscribed_on_micro_lesson',
  UserUnsubscribedFromMicroLesson = 'user_unsubscribed_from_micro_lesson',
  UserCompletedMicroLesson = 'user_completed_micro_lesson',
  UserAddedTagsToMicroLesson = 'user_added_tags_to_micro_lesson',
  UserDeletedTagsFromMicroLesson = 'user_deleted_tags_from_micro_lesson',
  UserUpdatedMicroLessonsTags = 'user_updated_micro_lessons_tags',
  UserPublishedMicroLesson = 'user_published_micro_lesson',
  UserCreatedCourse = 'user_created_course',
  UserUpdatedCourse = 'user_updated_course',
  UserDeletedCourse = 'user_deleted_course',
  UserAddedLessonToCourse = 'user_added_lesson_to_course',
  UserDeletedLessonFromCourse = 'user_deleted_lesson_from_course',
  UserRatedCourse = 'user_rated_course',
  UserAddedTagsToCourse = 'user_added_tags_to_course',
  UserDeletedTagsFromCourse = 'user_deleted_tags_from_course',
  UserUpdatedCoursesTags = 'user_updated_courses_tags',
  UserLikedCourse = 'user_liked_course',
  UserUnlikedCourse = 'user_unliked_course',
  UserSubscribedOnCourse = 'user_subscribed_on_course',
  UserUnsubscribedFromCourse = 'user_unsubscribed_from_course',
  UserPublishedCourse = 'user_published_course',
  UserCreatedTag = 'user_created_tag',
  UserUpdatedTag = 'user_updated_tag',
  UserDeletedTag = 'user_deleted_tag',
  UserSearchedTag = 'user_searched_tag',
  UserLikedTag = 'user_liked_tag',
  UserUnlikedTag = 'user_unliked_tag',
}

export type Query = {
  __typename?: 'Query';
  getTags: Array<TagModel>;
  getTagsCreatedByUser: Array<TagModel>;
  getTag: TagModel;
  getCourse: CourseModel;
  getCourses: Array<CourseModel>;
  getCoursesCreatedByUser: Array<CourseModel>;
  getCourseRate: Scalars['Float'];
  getLessonsFromCourse: Array<LessonModel>;
  getTagsFromCourse: Array<TagModel>;
  getLessons: Array<LessonModel>;
  getLessonsCreatedByUser: Array<LessonModel>;
  getLesson: LessonModel;
  getLessonTags: Array<TagModel>;
  getLessonMicroLessons: Array<MicroLessonModel>;
  getQuestions: Array<QuestionModel>;
  getQuestionsCreatedByUser: Array<QuestionModel>;
  getQuestion: QuestionModel;
  getAnswers: Array<Answer>;
  getQuestionTags: Array<TagModel>;
  getMicroLesson: MicroLessonModel;
  getMicroLessonQuestions: Array<QuestionModel>;
  getMicroLessons: Array<MicroLessonModel>;
  getMicroLessonsCreatedByUser: Array<MicroLessonModel>;
  getMicroLessonTags: Array<TagModel>;
  getMicroLessonContent?: Maybe<Content>;
};

export type QueryGetTagArgs = {
  id: Scalars['String'];
};

export type QueryGetCourseArgs = {
  id: Scalars['String'];
};

export type QueryGetCourseRateArgs = {
  id: Scalars['String'];
};

export type QueryGetLessonsFromCourseArgs = {
  id: Scalars['String'];
};

export type QueryGetTagsFromCourseArgs = {
  id: Scalars['String'];
};

export type QueryGetLessonArgs = {
  id: Scalars['String'];
};

export type QueryGetLessonTagsArgs = {
  id: Scalars['String'];
};

export type QueryGetLessonMicroLessonsArgs = {
  id: Scalars['String'];
};

export type QueryGetQuestionArgs = {
  id: Scalars['String'];
};

export type QueryGetAnswersArgs = {
  id: Scalars['String'];
};

export type QueryGetQuestionTagsArgs = {
  id: Scalars['String'];
};

export type QueryGetMicroLessonArgs = {
  id: Scalars['String'];
};

export type QueryGetMicroLessonQuestionsArgs = {
  id: Scalars['String'];
};

export type QueryGetMicroLessonTagsArgs = {
  id: Scalars['String'];
};

export type QueryGetMicroLessonContentArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTag: TagModel;
  updateTag: TagModel;
  deleteTag: Scalars['Boolean'];
  likeTag: TagModel;
  unlikeTag: TagModel;
  createCourse: CourseModel;
  updateCourse: CourseModel;
  deleteCourse: Scalars['Boolean'];
  addLessonToCourse: CourseModel;
  updateCourseLessons: CourseModel;
  deleteLessonFromCourse: CourseModel;
  rateCourse: CourseModel;
  addTagsToCourse: Array<TagModel>;
  deleteTagsFromCourse: Array<TagModel>;
  updateCoursesTags?: Maybe<Array<TagModel>>;
  likeCourse: CourseModel;
  unlikeCourse: CourseModel;
  subscribeOnCourse: CourseModel;
  unsubscribeFromCourse: CourseModel;
  publishCourse: Scalars['Boolean'];
  deleteLesson: Scalars['Boolean'];
  createLesson: LessonModel;
  updateLesson: LessonModel;
  addMicroLessonToLesson: LessonModel;
  deleteMicroLessonFromLesson: LessonModel;
  updateMicroLessonsInLesson: LessonModel;
  addTagsToLesson?: Maybe<Array<TagModel>>;
  deleteTagsFromLesson?: Maybe<Array<TagModel>>;
  updateLessonsTags?: Maybe<Array<TagModel>>;
  likeLesson: LessonModel;
  unlikeLesson: LessonModel;
  subscribeOnLesson: LessonModel;
  unsubscribeFromLesson: LessonModel;
  publishLesson: Scalars['Boolean'];
  createQuestion: QuestionModel;
  updateQuestion: QuestionModel;
  createAnswer: QuestionModel;
  updateAnswer: QuestionModel;
  deleteAnswer: QuestionModel;
  answerQuestion: QuestionModel;
  setUserViewedQuestion: QuestionModel;
  deleteQuestion: Scalars['Boolean'];
  addTagsToQuestion?: Maybe<Array<TagModel>>;
  deleteTagsFromQuestion?: Maybe<Array<TagModel>>;
  updateQuestionsTags?: Maybe<Array<TagModel>>;
  likeQuestion: QuestionModel;
  unlikeQuestion: QuestionModel;
  createMicroLesson: MicroLessonModel;
  updateMicroLesson: MicroLessonModel;
  deleteMicroLesson: Scalars['Boolean'];
  addTagsToMicroLesson?: Maybe<Array<TagModel>>;
  deleteTagsFromMicroLesson?: Maybe<Array<TagModel>>;
  updateMicroLessonsTags?: Maybe<Array<TagModel>>;
  likeMicroLesson: MicroLessonModel;
  unlikeMicroLesson: MicroLessonModel;
  subscribeOnMicroLesson: MicroLessonModel;
  unsubscribeFromMicroLesson: MicroLessonModel;
  publishMicroLesson: Scalars['Boolean'];
};

export type MutationCreateTagArgs = {
  createTagInput: CreateTagInput;
};

export type MutationUpdateTagArgs = {
  updateTagInput: UpdateTagInput;
};

export type MutationDeleteTagArgs = {
  id: Scalars['String'];
};

export type MutationLikeTagArgs = {
  id: Scalars['String'];
};

export type MutationUnlikeTagArgs = {
  id: Scalars['String'];
};

export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput;
};

export type MutationUpdateCourseArgs = {
  courseUpdateInput: UpdateCourseInput;
};

export type MutationDeleteCourseArgs = {
  id: Scalars['String'];
};

export type MutationAddLessonToCourseArgs = {
  addLessonToCourseInput: AddDeleteLessonInput;
};

export type MutationUpdateCourseLessonsArgs = {
  updateCourseLessonsInput: UpdateCourseLessonsInput;
};

export type MutationDeleteLessonFromCourseArgs = {
  deleteLessonFromCourse: AddDeleteLessonInput;
};

export type MutationRateCourseArgs = {
  rateCourseInput: RateCourseInput;
};

export type MutationAddTagsToCourseArgs = {
  addTagsInput: AddOrDeleteTagsInput;
};

export type MutationDeleteTagsFromCourseArgs = {
  deleteTagsInput: AddOrDeleteTagsInput;
};

export type MutationUpdateCoursesTagsArgs = {
  updateCoursesTagsInput: AddOrDeleteTagsInput;
};

export type MutationLikeCourseArgs = {
  id: Scalars['String'];
};

export type MutationUnlikeCourseArgs = {
  id: Scalars['String'];
};

export type MutationSubscribeOnCourseArgs = {
  id: Scalars['String'];
};

export type MutationUnsubscribeFromCourseArgs = {
  id: Scalars['String'];
};

export type MutationPublishCourseArgs = {
  id: Scalars['String'];
};

export type MutationDeleteLessonArgs = {
  id: Scalars['String'];
};

export type MutationCreateLessonArgs = {
  createLessonInput: CreateLessonInput;
};

export type MutationUpdateLessonArgs = {
  updateLessonInput: UpdateLessonInput;
};

export type MutationAddMicroLessonToLessonArgs = {
  addMicroLessonToLessonInput: AddOrDeleteMicroLessonFromLessonInput;
};

export type MutationDeleteMicroLessonFromLessonArgs = {
  deleteMicroLessonFromLessonInput: AddOrDeleteMicroLessonFromLessonInput;
};

export type MutationUpdateMicroLessonsInLessonArgs = {
  updateMicroLessonsInLessonInput: UpdateMicroLessonsInLessonInput;
};

export type MutationAddTagsToLessonArgs = {
  addTagsToLessonInput: AddOrDeleteTagsInput;
};

export type MutationDeleteTagsFromLessonArgs = {
  deleteTagsFromLessonInput: AddOrDeleteTagsInput;
};

export type MutationUpdateLessonsTagsArgs = {
  updateLessonsTagsInput: AddOrDeleteTagsInput;
};

export type MutationLikeLessonArgs = {
  id: Scalars['String'];
};

export type MutationUnlikeLessonArgs = {
  id: Scalars['String'];
};

export type MutationSubscribeOnLessonArgs = {
  id: Scalars['String'];
};

export type MutationUnsubscribeFromLessonArgs = {
  id: Scalars['String'];
};

export type MutationPublishLessonArgs = {
  id: Scalars['String'];
};

export type MutationCreateQuestionArgs = {
  createQuestionInput: CreateQuestionInput;
};

export type MutationUpdateQuestionArgs = {
  updateQuestionInput: UpdateQuestionInput;
};

export type MutationCreateAnswerArgs = {
  createAnswerInput: CreateAnswerInput;
};

export type MutationUpdateAnswerArgs = {
  updateAnswerInput: UpdateAnswerInput;
};

export type MutationDeleteAnswerArgs = {
  deleteAnswerInput: DeleteAnswerInput;
};

export type MutationAnswerQuestionArgs = {
  answerQuestionInput: AnswerQuestionInput;
};

export type MutationSetUserViewedQuestionArgs = {
  id: Scalars['String'];
};

export type MutationDeleteQuestionArgs = {
  id: Scalars['String'];
};

export type MutationAddTagsToQuestionArgs = {
  addTagsToQuestionInput: AddOrDeleteTagsInput;
};

export type MutationDeleteTagsFromQuestionArgs = {
  deleteTagsFromQuestionInput: AddOrDeleteTagsInput;
};

export type MutationUpdateQuestionsTagsArgs = {
  updateQuestionsTagsInput: AddOrDeleteTagsInput;
};

export type MutationLikeQuestionArgs = {
  id: Scalars['String'];
};

export type MutationUnlikeQuestionArgs = {
  id: Scalars['String'];
};

export type MutationCreateMicroLessonArgs = {
  createMicroLesson: CreateMicroLessonInput;
};

export type MutationUpdateMicroLessonArgs = {
  updateMicroLessonInput: UpdateMicroLessonInput;
};

export type MutationDeleteMicroLessonArgs = {
  id: Scalars['String'];
};

export type MutationAddTagsToMicroLessonArgs = {
  addTagsToMicroLessonInput: AddOrDeleteTagsInput;
};

export type MutationDeleteTagsFromMicroLessonArgs = {
  deleteTagsFromMicroLessonInput: AddOrDeleteTagsInput;
};

export type MutationUpdateMicroLessonsTagsArgs = {
  updateMicroLessonsTagsInput: AddOrDeleteTagsInput;
};

export type MutationLikeMicroLessonArgs = {
  id: Scalars['String'];
};

export type MutationUnlikeMicroLessonArgs = {
  id: Scalars['String'];
};

export type MutationSubscribeOnMicroLessonArgs = {
  id: Scalars['String'];
};

export type MutationUnsubscribeFromMicroLessonArgs = {
  id: Scalars['String'];
};

export type MutationPublishMicroLessonArgs = {
  id: Scalars['String'];
};

export type CreateTagInput = {
  text: Scalars['String'];
  system_inferred?: Maybe<Scalars['Boolean']>;
};

export type UpdateTagInput = {
  text: Scalars['String'];
  system_inferred?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
};

export type CreateCourseInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  navigation?: Maybe<CourseNavigationType>;
};

export enum CourseNavigationType {
  Random = 'Random',
  Seq = 'Seq',
}

export type UpdateCourseInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  navigation?: Maybe<CourseNavigationType>;
  id: Scalars['String'];
};

export type AddDeleteLessonInput = {
  id: Scalars['String'];
  lesson_id: Scalars['String'];
};

export type UpdateCourseLessonsInput = {
  id: Scalars['String'];
  lessons: Array<Scalars['String']>;
};

export type RateCourseInput = {
  id: Scalars['String'];
  rating: Scalars['Int'];
};

export type AddOrDeleteTagsInput = {
  id: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type CreateLessonInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  goal?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type UpdateLessonInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  goal?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type AddOrDeleteMicroLessonFromLessonInput = {
  id: Scalars['String'];
  micro_lesson_id: Scalars['String'];
};

export type UpdateMicroLessonsInLessonInput = {
  lesson_id: Scalars['String'];
  micro_lessons: Array<Scalars['String']>;
};

export type CreateQuestionInput = {
  type: QuestionType;
  text: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
  micro_lesson_id: Scalars['String'];
};

export type UpdateQuestionInput = {
  id: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  type?: Maybe<QuestionType>;
};

export type CreateAnswerInput = {
  text: Scalars['String'];
  image_url?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  original?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  is_correct?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  question_id: Scalars['String'];
};

export type UpdateAnswerInput = {
  text?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  original?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  is_correct?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  question_id: Scalars['String'];
  answer_id: Scalars['Float'];
};

export type DeleteAnswerInput = {
  id: Scalars['String'];
  answer_id: Scalars['Float'];
};

export type AnswerQuestionInput = {
  answer: Scalars['String'];
  id: Scalars['String'];
};

export type CreateMicroLessonInput = {
  title: Scalars['String'];
  content?: Maybe<ContentModelInput>;
};

export type ContentModelInput = {
  description?: Maybe<Scalars['String']>;
  data: Scalars['String'];
  type: ContentType;
  metadata?: Maybe<Scalars['JSONObject']>;
};

export type UpdateMicroLessonInput = {
  title: Scalars['String'];
  content?: Maybe<ContentModelInput>;
  id: Scalars['String'];
  emotions?: Maybe<Array<Scalars['String']>>;
};
