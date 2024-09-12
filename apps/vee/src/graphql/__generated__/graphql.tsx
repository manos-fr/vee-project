import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type CreateSomeInput = {
  amount: Scalars['Float']['input'];
  areas: Array<Scalars['String']['input']>;
  deadline?: InputMaybe<Scalars['DateTime']['input']>;
  foundation: Scalars['String']['input'];
  location: Scalars['String']['input'];
  match_date?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Somes = {
  __typename?: 'Somes';
  amount: Scalars['Float']['output'];
  areas: Array<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  deadline?: Maybe<Scalars['DateTime']['output']>;
  foundation: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  match_date?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "business.somes" */
export type Business_Somes = {
  __typename?: 'business_somes';
  amount: Scalars['numeric']['output'];
  areas: Scalars['jsonb']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  foundation?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  location?: Maybe<Scalars['String']['output']>;
  match_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "business.somes" */
export type Business_SomesAreasArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "business.somes" */
export type Business_Somes_Aggregate = {
  __typename?: 'business_somes_aggregate';
  aggregate?: Maybe<Business_Somes_Aggregate_Fields>;
  nodes: Array<Business_Somes>;
};

/** aggregate fields of "business.somes" */
export type Business_Somes_Aggregate_Fields = {
  __typename?: 'business_somes_aggregate_fields';
  avg?: Maybe<Business_Somes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Business_Somes_Max_Fields>;
  min?: Maybe<Business_Somes_Min_Fields>;
  stddev?: Maybe<Business_Somes_Stddev_Fields>;
  stddev_pop?: Maybe<Business_Somes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Business_Somes_Stddev_Samp_Fields>;
  sum?: Maybe<Business_Somes_Sum_Fields>;
  var_pop?: Maybe<Business_Somes_Var_Pop_Fields>;
  var_samp?: Maybe<Business_Somes_Var_Samp_Fields>;
  variance?: Maybe<Business_Somes_Variance_Fields>;
};


/** aggregate fields of "business.somes" */
export type Business_Somes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Business_Somes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Business_Somes_Append_Input = {
  areas?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Business_Somes_Avg_Fields = {
  __typename?: 'business_somes_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "business.somes". All fields are combined with a logical 'AND'. */
export type Business_Somes_Bool_Exp = {
  _and?: InputMaybe<Array<Business_Somes_Bool_Exp>>;
  _not?: InputMaybe<Business_Somes_Bool_Exp>;
  _or?: InputMaybe<Array<Business_Somes_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  areas?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deadline?: InputMaybe<Timestamptz_Comparison_Exp>;
  foundation?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  match_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "business.somes" */
export enum Business_Somes_Constraint {
  /** unique or primary key constraint on columns "id" */
  SomesPkey = 'somes_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Business_Somes_Delete_At_Path_Input = {
  areas?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Business_Somes_Delete_Elem_Input = {
  areas?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Business_Somes_Delete_Key_Input = {
  areas?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "business.somes" */
export type Business_Somes_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "business.somes" */
export type Business_Somes_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  foundation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  match_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Business_Somes_Max_Fields = {
  __typename?: 'business_somes_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  foundation?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  match_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Business_Somes_Min_Fields = {
  __typename?: 'business_somes_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  foundation?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  match_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "business.somes" */
export type Business_Somes_Mutation_Response = {
  __typename?: 'business_somes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Business_Somes>;
};

/** on_conflict condition type for table "business.somes" */
export type Business_Somes_On_Conflict = {
  constraint: Business_Somes_Constraint;
  update_columns?: Array<Business_Somes_Update_Column>;
  where?: InputMaybe<Business_Somes_Bool_Exp>;
};

/** Ordering options when selecting data from "business.somes". */
export type Business_Somes_Order_By = {
  amount?: InputMaybe<Order_By>;
  areas?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deadline?: InputMaybe<Order_By>;
  foundation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  match_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: business.somes */
export type Business_Somes_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Business_Somes_Prepend_Input = {
  areas?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "business.somes" */
export enum Business_Somes_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Areas = 'areas',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Deadline = 'deadline',
  /** column name */
  Foundation = 'foundation',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  MatchDate = 'match_date',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "business.somes" */
export type Business_Somes_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  foundation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  match_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Business_Somes_Stddev_Fields = {
  __typename?: 'business_somes_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Business_Somes_Stddev_Pop_Fields = {
  __typename?: 'business_somes_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Business_Somes_Stddev_Samp_Fields = {
  __typename?: 'business_somes_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "business_somes" */
export type Business_Somes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Business_Somes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Business_Somes_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  foundation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  match_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Business_Somes_Sum_Fields = {
  __typename?: 'business_somes_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "business.somes" */
export enum Business_Somes_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Areas = 'areas',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Deadline = 'deadline',
  /** column name */
  Foundation = 'foundation',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  MatchDate = 'match_date',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Business_Somes_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Business_Somes_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Business_Somes_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Business_Somes_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Business_Somes_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Business_Somes_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Business_Somes_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Business_Somes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Business_Somes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Business_Somes_Var_Pop_Fields = {
  __typename?: 'business_somes_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Business_Somes_Var_Samp_Fields = {
  __typename?: 'business_somes_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Business_Somes_Variance_Fields = {
  __typename?: 'business_somes_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "grants" */
export type Grants = {
  __typename?: 'grants';
  amount: Scalars['numeric']['output'];
  areas: Scalars['jsonb']['output'];
  created_at: Scalars['timestamptz']['output'];
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  foundation: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  interacted_users_ids?: Maybe<Scalars['jsonb']['output']>;
  location: Scalars['String']['output'];
  match_date?: Maybe<Scalars['timestamptz']['output']>;
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  users_grants: Array<Users_Grants>;
  /** An aggregate relationship */
  users_grants_aggregate: Users_Grants_Aggregate;
};


/** columns and relationships of "grants" */
export type GrantsAreasArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "grants" */
export type GrantsInteracted_Users_IdsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "grants" */
export type GrantsUsers_GrantsArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


/** columns and relationships of "grants" */
export type GrantsUsers_Grants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};

/** aggregated selection of "grants" */
export type Grants_Aggregate = {
  __typename?: 'grants_aggregate';
  aggregate?: Maybe<Grants_Aggregate_Fields>;
  nodes: Array<Grants>;
};

/** aggregate fields of "grants" */
export type Grants_Aggregate_Fields = {
  __typename?: 'grants_aggregate_fields';
  avg?: Maybe<Grants_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Grants_Max_Fields>;
  min?: Maybe<Grants_Min_Fields>;
  stddev?: Maybe<Grants_Stddev_Fields>;
  stddev_pop?: Maybe<Grants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Grants_Stddev_Samp_Fields>;
  sum?: Maybe<Grants_Sum_Fields>;
  var_pop?: Maybe<Grants_Var_Pop_Fields>;
  var_samp?: Maybe<Grants_Var_Samp_Fields>;
  variance?: Maybe<Grants_Variance_Fields>;
};


/** aggregate fields of "grants" */
export type Grants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Grants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Grants_Append_Input = {
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Grants_Avg_Fields = {
  __typename?: 'grants_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "grants". All fields are combined with a logical 'AND'. */
export type Grants_Bool_Exp = {
  _and?: InputMaybe<Array<Grants_Bool_Exp>>;
  _not?: InputMaybe<Grants_Bool_Exp>;
  _or?: InputMaybe<Array<Grants_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  areas?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deadline?: InputMaybe<Timestamptz_Comparison_Exp>;
  foundation?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  interacted_users_ids?: InputMaybe<Jsonb_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  match_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users_grants?: InputMaybe<Users_Grants_Bool_Exp>;
  users_grants_aggregate?: InputMaybe<Users_Grants_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "grants" */
export enum Grants_Constraint {
  /** unique or primary key constraint on columns "id" */
  GrantsPkey = 'grants_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Grants_Delete_At_Path_Input = {
  areas?: InputMaybe<Array<Scalars['String']['input']>>;
  interacted_users_ids?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Grants_Delete_Elem_Input = {
  areas?: InputMaybe<Scalars['Int']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Grants_Delete_Key_Input = {
  areas?: InputMaybe<Scalars['String']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "grants" */
export type Grants_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "grants" */
export type Grants_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  foundation?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  match_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users_grants?: InputMaybe<Users_Grants_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Grants_Max_Fields = {
  __typename?: 'grants_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  foundation?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  match_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Grants_Min_Fields = {
  __typename?: 'grants_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  foundation?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  match_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "grants" */
export type Grants_Mutation_Response = {
  __typename?: 'grants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Grants>;
};

/** input type for inserting object relation for remote table "grants" */
export type Grants_Obj_Rel_Insert_Input = {
  data: Grants_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Grants_On_Conflict>;
};

/** on_conflict condition type for table "grants" */
export type Grants_On_Conflict = {
  constraint: Grants_Constraint;
  update_columns?: Array<Grants_Update_Column>;
  where?: InputMaybe<Grants_Bool_Exp>;
};

/** Ordering options when selecting data from "grants". */
export type Grants_Order_By = {
  amount?: InputMaybe<Order_By>;
  areas?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deadline?: InputMaybe<Order_By>;
  foundation?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interacted_users_ids?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  match_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_grants_aggregate?: InputMaybe<Users_Grants_Aggregate_Order_By>;
};

/** primary key columns input for table: grants */
export type Grants_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Grants_Prepend_Input = {
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "grants" */
export enum Grants_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Areas = 'areas',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Deadline = 'deadline',
  /** column name */
  Foundation = 'foundation',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  InteractedUsersIds = 'interacted_users_ids',
  /** column name */
  Location = 'location',
  /** column name */
  MatchDate = 'match_date',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "grants" */
export type Grants_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  foundation?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  match_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Grants_Stddev_Fields = {
  __typename?: 'grants_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Grants_Stddev_Pop_Fields = {
  __typename?: 'grants_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Grants_Stddev_Samp_Fields = {
  __typename?: 'grants_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "grants" */
export type Grants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Grants_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Grants_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  foundation?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  match_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Grants_Sum_Fields = {
  __typename?: 'grants_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "grants" */
export enum Grants_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Areas = 'areas',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Deadline = 'deadline',
  /** column name */
  Foundation = 'foundation',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  InteractedUsersIds = 'interacted_users_ids',
  /** column name */
  Location = 'location',
  /** column name */
  MatchDate = 'match_date',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Grants_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Grants_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Grants_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Grants_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Grants_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Grants_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Grants_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Grants_Set_Input>;
  /** filter the rows which have to be updated */
  where: Grants_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Grants_Var_Pop_Fields = {
  __typename?: 'grants_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Grants_Var_Samp_Fields = {
  __typename?: 'grants_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Grants_Variance_Fields = {
  __typename?: 'grants_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  createSome: Somes;
  /** delete data from the table: "business.somes" */
  delete_business_somes?: Maybe<Business_Somes_Mutation_Response>;
  /** delete single row from the table: "business.somes" */
  delete_business_somes_by_pk?: Maybe<Business_Somes>;
  /** delete data from the table: "grants" */
  delete_grants?: Maybe<Grants_Mutation_Response>;
  /** delete single row from the table: "grants" */
  delete_grants_by_pk?: Maybe<Grants>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_grants" */
  delete_users_grants?: Maybe<Users_Grants_Mutation_Response>;
  /** delete single row from the table: "users_grants" */
  delete_users_grants_by_pk?: Maybe<Users_Grants>;
  /** insert data into the table: "business.somes" */
  insert_business_somes?: Maybe<Business_Somes_Mutation_Response>;
  /** insert a single row into the table: "business.somes" */
  insert_business_somes_one?: Maybe<Business_Somes>;
  /** insert data into the table: "grants" */
  insert_grants?: Maybe<Grants_Mutation_Response>;
  /** insert a single row into the table: "grants" */
  insert_grants_one?: Maybe<Grants>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users_grants" */
  insert_users_grants?: Maybe<Users_Grants_Mutation_Response>;
  /** insert a single row into the table: "users_grants" */
  insert_users_grants_one?: Maybe<Users_Grants>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "business.somes" */
  update_business_somes?: Maybe<Business_Somes_Mutation_Response>;
  /** update single row of the table: "business.somes" */
  update_business_somes_by_pk?: Maybe<Business_Somes>;
  /** update multiples rows of table: "business.somes" */
  update_business_somes_many?: Maybe<Array<Maybe<Business_Somes_Mutation_Response>>>;
  /** update data of the table: "grants" */
  update_grants?: Maybe<Grants_Mutation_Response>;
  /** update single row of the table: "grants" */
  update_grants_by_pk?: Maybe<Grants>;
  /** update multiples rows of table: "grants" */
  update_grants_many?: Maybe<Array<Maybe<Grants_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "users_grants" */
  update_users_grants?: Maybe<Users_Grants_Mutation_Response>;
  /** update single row of the table: "users_grants" */
  update_users_grants_by_pk?: Maybe<Users_Grants>;
  /** update multiples rows of table: "users_grants" */
  update_users_grants_many?: Maybe<Array<Maybe<Users_Grants_Mutation_Response>>>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootCreateSomeArgs = {
  input: CreateSomeInput;
};


/** mutation root */
export type Mutation_RootDelete_Business_SomesArgs = {
  where: Business_Somes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Business_Somes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GrantsArgs = {
  where: Grants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Grants_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Users_GrantsArgs = {
  where: Users_Grants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Grants_By_PkArgs = {
  grant_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Business_SomesArgs = {
  objects: Array<Business_Somes_Insert_Input>;
  on_conflict?: InputMaybe<Business_Somes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Business_Somes_OneArgs = {
  object: Business_Somes_Insert_Input;
  on_conflict?: InputMaybe<Business_Somes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GrantsArgs = {
  objects: Array<Grants_Insert_Input>;
  on_conflict?: InputMaybe<Grants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Grants_OneArgs = {
  object: Grants_Insert_Input;
  on_conflict?: InputMaybe<Grants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_GrantsArgs = {
  objects: Array<Users_Grants_Insert_Input>;
  on_conflict?: InputMaybe<Users_Grants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Grants_OneArgs = {
  object: Users_Grants_Insert_Input;
  on_conflict?: InputMaybe<Users_Grants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Business_SomesArgs = {
  _append?: InputMaybe<Business_Somes_Append_Input>;
  _delete_at_path?: InputMaybe<Business_Somes_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Business_Somes_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Business_Somes_Delete_Key_Input>;
  _inc?: InputMaybe<Business_Somes_Inc_Input>;
  _prepend?: InputMaybe<Business_Somes_Prepend_Input>;
  _set?: InputMaybe<Business_Somes_Set_Input>;
  where: Business_Somes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Business_Somes_By_PkArgs = {
  _append?: InputMaybe<Business_Somes_Append_Input>;
  _delete_at_path?: InputMaybe<Business_Somes_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Business_Somes_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Business_Somes_Delete_Key_Input>;
  _inc?: InputMaybe<Business_Somes_Inc_Input>;
  _prepend?: InputMaybe<Business_Somes_Prepend_Input>;
  _set?: InputMaybe<Business_Somes_Set_Input>;
  pk_columns: Business_Somes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Business_Somes_ManyArgs = {
  updates: Array<Business_Somes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GrantsArgs = {
  _append?: InputMaybe<Grants_Append_Input>;
  _delete_at_path?: InputMaybe<Grants_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Grants_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Grants_Delete_Key_Input>;
  _inc?: InputMaybe<Grants_Inc_Input>;
  _prepend?: InputMaybe<Grants_Prepend_Input>;
  _set?: InputMaybe<Grants_Set_Input>;
  where: Grants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Grants_By_PkArgs = {
  _append?: InputMaybe<Grants_Append_Input>;
  _delete_at_path?: InputMaybe<Grants_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Grants_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Grants_Delete_Key_Input>;
  _inc?: InputMaybe<Grants_Inc_Input>;
  _prepend?: InputMaybe<Grants_Prepend_Input>;
  _set?: InputMaybe<Grants_Set_Input>;
  pk_columns: Grants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Grants_ManyArgs = {
  updates: Array<Grants_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_GrantsArgs = {
  _inc?: InputMaybe<Users_Grants_Inc_Input>;
  _set?: InputMaybe<Users_Grants_Set_Input>;
  where: Users_Grants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Grants_By_PkArgs = {
  _inc?: InputMaybe<Users_Grants_Inc_Input>;
  _set?: InputMaybe<Users_Grants_Set_Input>;
  pk_columns: Users_Grants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Grants_ManyArgs = {
  updates: Array<Users_Grants_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "business.somes" */
  business_somes: Array<Business_Somes>;
  /** fetch aggregated fields from the table: "business.somes" */
  business_somes_aggregate: Business_Somes_Aggregate;
  /** fetch data from the table: "business.somes" using primary key columns */
  business_somes_by_pk?: Maybe<Business_Somes>;
  /** fetch data from the table: "grants" */
  grants: Array<Grants>;
  /** fetch aggregated fields from the table: "grants" */
  grants_aggregate: Grants_Aggregate;
  /** fetch data from the table: "grants" using primary key columns */
  grants_by_pk?: Maybe<Grants>;
  some: Somes;
  somes: Array<Somes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_grants: Array<Users_Grants>;
  /** An aggregate relationship */
  users_grants_aggregate: Users_Grants_Aggregate;
  /** fetch data from the table: "users_grants" using primary key columns */
  users_grants_by_pk?: Maybe<Users_Grants>;
};


export type Query_RootBusiness_SomesArgs = {
  distinct_on?: InputMaybe<Array<Business_Somes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Business_Somes_Order_By>>;
  where?: InputMaybe<Business_Somes_Bool_Exp>;
};


export type Query_RootBusiness_Somes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Business_Somes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Business_Somes_Order_By>>;
  where?: InputMaybe<Business_Somes_Bool_Exp>;
};


export type Query_RootBusiness_Somes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGrantsArgs = {
  distinct_on?: InputMaybe<Array<Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Grants_Order_By>>;
  where?: InputMaybe<Grants_Bool_Exp>;
};


export type Query_RootGrants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Grants_Order_By>>;
  where?: InputMaybe<Grants_Bool_Exp>;
};


export type Query_RootGrants_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSomeArgs = {
  id: Scalars['Float']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsers_GrantsArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


export type Query_RootUsers_Grants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


export type Query_RootUsers_Grants_By_PkArgs = {
  grant_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "business.somes" */
  business_somes: Array<Business_Somes>;
  /** fetch aggregated fields from the table: "business.somes" */
  business_somes_aggregate: Business_Somes_Aggregate;
  /** fetch data from the table: "business.somes" using primary key columns */
  business_somes_by_pk?: Maybe<Business_Somes>;
  /** fetch data from the table in a streaming manner: "business.somes" */
  business_somes_stream: Array<Business_Somes>;
  /** fetch data from the table: "grants" */
  grants: Array<Grants>;
  /** fetch aggregated fields from the table: "grants" */
  grants_aggregate: Grants_Aggregate;
  /** fetch data from the table: "grants" using primary key columns */
  grants_by_pk?: Maybe<Grants>;
  /** fetch data from the table in a streaming manner: "grants" */
  grants_stream: Array<Grants>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_grants: Array<Users_Grants>;
  /** An aggregate relationship */
  users_grants_aggregate: Users_Grants_Aggregate;
  /** fetch data from the table: "users_grants" using primary key columns */
  users_grants_by_pk?: Maybe<Users_Grants>;
  /** fetch data from the table in a streaming manner: "users_grants" */
  users_grants_stream: Array<Users_Grants>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootBusiness_SomesArgs = {
  distinct_on?: InputMaybe<Array<Business_Somes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Business_Somes_Order_By>>;
  where?: InputMaybe<Business_Somes_Bool_Exp>;
};


export type Subscription_RootBusiness_Somes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Business_Somes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Business_Somes_Order_By>>;
  where?: InputMaybe<Business_Somes_Bool_Exp>;
};


export type Subscription_RootBusiness_Somes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootBusiness_Somes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Business_Somes_Stream_Cursor_Input>>;
  where?: InputMaybe<Business_Somes_Bool_Exp>;
};


export type Subscription_RootGrantsArgs = {
  distinct_on?: InputMaybe<Array<Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Grants_Order_By>>;
  where?: InputMaybe<Grants_Bool_Exp>;
};


export type Subscription_RootGrants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Grants_Order_By>>;
  where?: InputMaybe<Grants_Bool_Exp>;
};


export type Subscription_RootGrants_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGrants_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Grants_Stream_Cursor_Input>>;
  where?: InputMaybe<Grants_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUsers_GrantsArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


export type Subscription_RootUsers_Grants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


export type Subscription_RootUsers_Grants_By_PkArgs = {
  grant_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


export type Subscription_RootUsers_Grants_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Grants_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  active: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  users_grants: Array<Users_Grants>;
  /** An aggregate relationship */
  users_grants_aggregate: Users_Grants_Aggregate;
};


/** columns and relationships of "users" */
export type UsersUsers_GrantsArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsers_Grants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users_grants?: InputMaybe<Users_Grants_Bool_Exp>;
  users_grants_aggregate?: InputMaybe<Users_Grants_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** columns and relationships of "users_grants" */
export type Users_Grants = {
  __typename?: 'users_grants';
  created_at: Scalars['timestamptz']['output'];
  feedback?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  grant: Grants;
  grant_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  relevant?: Maybe<Scalars['Boolean']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "users_grants" */
export type Users_Grants_Aggregate = {
  __typename?: 'users_grants_aggregate';
  aggregate?: Maybe<Users_Grants_Aggregate_Fields>;
  nodes: Array<Users_Grants>;
};

export type Users_Grants_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Grants_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Grants_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Grants_Aggregate_Bool_Exp_Count>;
};

export type Users_Grants_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Grants_Select_Column_Users_Grants_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Grants_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Grants_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Grants_Select_Column_Users_Grants_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Grants_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Grants_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Grants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Grants_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users_grants" */
export type Users_Grants_Aggregate_Fields = {
  __typename?: 'users_grants_aggregate_fields';
  avg?: Maybe<Users_Grants_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Grants_Max_Fields>;
  min?: Maybe<Users_Grants_Min_Fields>;
  stddev?: Maybe<Users_Grants_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Grants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Grants_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Grants_Sum_Fields>;
  var_pop?: Maybe<Users_Grants_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Grants_Var_Samp_Fields>;
  variance?: Maybe<Users_Grants_Variance_Fields>;
};


/** aggregate fields of "users_grants" */
export type Users_Grants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Grants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users_grants" */
export type Users_Grants_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Grants_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Grants_Max_Order_By>;
  min?: InputMaybe<Users_Grants_Min_Order_By>;
  stddev?: InputMaybe<Users_Grants_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Grants_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Grants_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Grants_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Grants_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Grants_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Grants_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users_grants" */
export type Users_Grants_Arr_Rel_Insert_Input = {
  data: Array<Users_Grants_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_Grants_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Grants_Avg_Fields = {
  __typename?: 'users_grants_avg_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "users_grants" */
export type Users_Grants_Avg_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users_grants". All fields are combined with a logical 'AND'. */
export type Users_Grants_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Grants_Bool_Exp>>;
  _not?: InputMaybe<Users_Grants_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Grants_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  feedback?: InputMaybe<String_Comparison_Exp>;
  grant?: InputMaybe<Grants_Bool_Exp>;
  grant_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  relevant?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_grants" */
export enum Users_Grants_Constraint {
  /** unique or primary key constraint on columns "user_id", "id", "grant_id" */
  UsersGrantsPkey = 'users_grants_pkey'
}

/** input type for incrementing numeric columns in table "users_grants" */
export type Users_Grants_Inc_Input = {
  grant_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users_grants" */
export type Users_Grants_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  grant?: InputMaybe<Grants_Obj_Rel_Insert_Input>;
  grant_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relevant?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Users_Grants_Max_Fields = {
  __typename?: 'users_grants_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  feedback?: Maybe<Scalars['String']['output']>;
  grant_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "users_grants" */
export type Users_Grants_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  feedback?: InputMaybe<Order_By>;
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Grants_Min_Fields = {
  __typename?: 'users_grants_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  feedback?: Maybe<Scalars['String']['output']>;
  grant_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "users_grants" */
export type Users_Grants_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  feedback?: InputMaybe<Order_By>;
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users_grants" */
export type Users_Grants_Mutation_Response = {
  __typename?: 'users_grants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Grants>;
};

/** on_conflict condition type for table "users_grants" */
export type Users_Grants_On_Conflict = {
  constraint: Users_Grants_Constraint;
  update_columns?: Array<Users_Grants_Update_Column>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};

/** Ordering options when selecting data from "users_grants". */
export type Users_Grants_Order_By = {
  created_at?: InputMaybe<Order_By>;
  feedback?: InputMaybe<Order_By>;
  grant?: InputMaybe<Grants_Order_By>;
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  relevant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_grants */
export type Users_Grants_Pk_Columns_Input = {
  grant_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

/** select columns of table "users_grants" */
export enum Users_Grants_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  GrantId = 'grant_id',
  /** column name */
  Id = 'id',
  /** column name */
  Relevant = 'relevant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "users_grants_aggregate_bool_exp_bool_and_arguments_columns" columns of table "users_grants" */
export enum Users_Grants_Select_Column_Users_Grants_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Relevant = 'relevant'
}

/** select "users_grants_aggregate_bool_exp_bool_or_arguments_columns" columns of table "users_grants" */
export enum Users_Grants_Select_Column_Users_Grants_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Relevant = 'relevant'
}

/** input type for updating data in table "users_grants" */
export type Users_Grants_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  grant_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relevant?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Users_Grants_Stddev_Fields = {
  __typename?: 'users_grants_stddev_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "users_grants" */
export type Users_Grants_Stddev_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Grants_Stddev_Pop_Fields = {
  __typename?: 'users_grants_stddev_pop_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "users_grants" */
export type Users_Grants_Stddev_Pop_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Grants_Stddev_Samp_Fields = {
  __typename?: 'users_grants_stddev_samp_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "users_grants" */
export type Users_Grants_Stddev_Samp_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "users_grants" */
export type Users_Grants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Grants_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Grants_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  grant_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relevant?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Users_Grants_Sum_Fields = {
  __typename?: 'users_grants_sum_fields';
  grant_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "users_grants" */
export type Users_Grants_Sum_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "users_grants" */
export enum Users_Grants_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  GrantId = 'grant_id',
  /** column name */
  Id = 'id',
  /** column name */
  Relevant = 'relevant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Users_Grants_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Grants_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Grants_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Grants_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Grants_Var_Pop_Fields = {
  __typename?: 'users_grants_var_pop_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "users_grants" */
export type Users_Grants_Var_Pop_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Grants_Var_Samp_Fields = {
  __typename?: 'users_grants_var_samp_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "users_grants" */
export type Users_Grants_Var_Samp_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Grants_Variance_Fields = {
  __typename?: 'users_grants_variance_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "users_grants" */
export type Users_Grants_Variance_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users_grants?: InputMaybe<Users_Grants_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_grants_aggregate?: InputMaybe<Users_Grants_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type GetRelevantUserGrantsQueryVariables = Exact<{
  user_id: Scalars['Int']['input'];
}>;


export type GetRelevantUserGrantsQuery = { __typename?: 'query_root', users_grants: Array<{ __typename?: 'users_grants', feedback?: string | null, relevant?: boolean | null, grant: { __typename?: 'grants', amount: any, areas: any, created_at: any, deadline?: any | null, foundation: string, id: number, location: string, match_date?: any | null, name: string, status: string, updated_at: any, icon?: string | null, interacted_users_ids?: any | null } }> };

export type GetNotInteractedGrantsQueryVariables = Exact<{
  users_ids?: InputMaybe<Scalars['jsonb']['input']>;
}>;


export type GetNotInteractedGrantsQuery = { __typename?: 'query_root', grants: Array<{ __typename?: 'grants', amount: any, areas: any, created_at: any, deadline?: any | null, foundation: string, icon?: string | null, id: number, location: string, match_date?: any | null, name: string, status: string, interacted_users_ids?: any | null }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', email: string, name: string, id: number }> };


export const GetRelevantUserGrantsDocument = gql`
    query getRelevantUserGrants($user_id: Int!) {
  users_grants(where: {_and: {user_id: {_eq: $user_id}, relevant: {_eq: true}}}) {
    feedback
    grant {
      amount
      areas
      created_at
      deadline
      foundation
      id
      location
      match_date
      name
      status
      updated_at
      icon
      interacted_users_ids
    }
    relevant
  }
}
    `;

/**
 * __useGetRelevantUserGrantsQuery__
 *
 * To run a query within a React component, call `useGetRelevantUserGrantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRelevantUserGrantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRelevantUserGrantsQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetRelevantUserGrantsQuery(baseOptions: Apollo.QueryHookOptions<GetRelevantUserGrantsQuery, GetRelevantUserGrantsQueryVariables> & ({ variables: GetRelevantUserGrantsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRelevantUserGrantsQuery, GetRelevantUserGrantsQueryVariables>(GetRelevantUserGrantsDocument, options);
      }
export function useGetRelevantUserGrantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRelevantUserGrantsQuery, GetRelevantUserGrantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRelevantUserGrantsQuery, GetRelevantUserGrantsQueryVariables>(GetRelevantUserGrantsDocument, options);
        }
export function useGetRelevantUserGrantsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRelevantUserGrantsQuery, GetRelevantUserGrantsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRelevantUserGrantsQuery, GetRelevantUserGrantsQueryVariables>(GetRelevantUserGrantsDocument, options);
        }
export type GetRelevantUserGrantsQueryHookResult = ReturnType<typeof useGetRelevantUserGrantsQuery>;
export type GetRelevantUserGrantsLazyQueryHookResult = ReturnType<typeof useGetRelevantUserGrantsLazyQuery>;
export type GetRelevantUserGrantsSuspenseQueryHookResult = ReturnType<typeof useGetRelevantUserGrantsSuspenseQuery>;
export type GetRelevantUserGrantsQueryResult = Apollo.QueryResult<GetRelevantUserGrantsQuery, GetRelevantUserGrantsQueryVariables>;
export const GetNotInteractedGrantsDocument = gql`
    query getNotInteractedGrants($users_ids: jsonb) {
  grants(
    where: {_or: [{_not: {interacted_users_ids: {_contains: $users_ids}}}, {interacted_users_ids: {_is_null: true}}]}
  ) {
    amount
    areas
    created_at
    deadline
    foundation
    icon
    id
    location
    match_date
    name
    status
    interacted_users_ids
  }
}
    `;

/**
 * __useGetNotInteractedGrantsQuery__
 *
 * To run a query within a React component, call `useGetNotInteractedGrantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotInteractedGrantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotInteractedGrantsQuery({
 *   variables: {
 *      users_ids: // value for 'users_ids'
 *   },
 * });
 */
export function useGetNotInteractedGrantsQuery(baseOptions?: Apollo.QueryHookOptions<GetNotInteractedGrantsQuery, GetNotInteractedGrantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotInteractedGrantsQuery, GetNotInteractedGrantsQueryVariables>(GetNotInteractedGrantsDocument, options);
      }
export function useGetNotInteractedGrantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotInteractedGrantsQuery, GetNotInteractedGrantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotInteractedGrantsQuery, GetNotInteractedGrantsQueryVariables>(GetNotInteractedGrantsDocument, options);
        }
export function useGetNotInteractedGrantsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetNotInteractedGrantsQuery, GetNotInteractedGrantsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNotInteractedGrantsQuery, GetNotInteractedGrantsQueryVariables>(GetNotInteractedGrantsDocument, options);
        }
export type GetNotInteractedGrantsQueryHookResult = ReturnType<typeof useGetNotInteractedGrantsQuery>;
export type GetNotInteractedGrantsLazyQueryHookResult = ReturnType<typeof useGetNotInteractedGrantsLazyQuery>;
export type GetNotInteractedGrantsSuspenseQueryHookResult = ReturnType<typeof useGetNotInteractedGrantsSuspenseQuery>;
export type GetNotInteractedGrantsQueryResult = Apollo.QueryResult<GetNotInteractedGrantsQuery, GetNotInteractedGrantsQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  users {
    email
    name
    id
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;