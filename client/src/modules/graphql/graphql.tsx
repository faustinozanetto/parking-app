import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type AddDomainToUserInput = {
  domain?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<FindUserInput>;
};

export type DeleteObjectResponse = {
  __typename?: 'DeleteObjectResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Domain = {
  __typename?: 'Domain';
  createdAt?: Maybe<Scalars['DateTime']>;
  domain?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type DomainResponse = {
  __typename?: 'DomainResponse';
  domain?: Maybe<Domain>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type DomainsResponse = {
  __typename?: 'DomainsResponse';
  domains?: Maybe<Array<Domain>>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FindDomainInput = {
  domain?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type FindParkInput = {
  uuid?: InputMaybe<Scalars['String']>;
};

export type FindUserDomainsInput = {
  user?: InputMaybe<FindUserInput>;
};

export type FindUserInput = {
  dni?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDomainToUer: DomainResponse;
  removeDomainFromuser: DeleteObjectResponse;
};

export type MutationAddDomainToUerArgs = {
  input: AddDomainToUserInput;
};

export type MutationRemoveDomainFromuserArgs = {
  input: RemoveDomainFromUserInput;
};

export type Park = {
  __typename?: 'Park';
  createdAt?: Maybe<Scalars['DateTime']>;
  domain?: Maybe<Domain>;
  duration?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  uuid?: Maybe<Scalars['String']>;
};

export type ParkResponse = {
  __typename?: 'ParkResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  park?: Maybe<Park>;
};

export type Query = {
  __typename?: 'Query';
  findDomain: DomainResponse;
  findPark: ParkResponse;
  findUser: UserResponse;
  findUserDomains: DomainsResponse;
};

export type QueryFindDomainArgs = {
  input: FindDomainInput;
};

export type QueryFindParkArgs = {
  input: FindParkInput;
};

export type QueryFindUserArgs = {
  input: FindUserInput;
};

export type QueryFindUserDomainsArgs = {
  input: FindUserDomainsInput;
};

export type RemoveDomainFromUserInput = {
  domain?: InputMaybe<FindDomainInput>;
  user?: InputMaybe<FindUserInput>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  dni?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  user?: Maybe<User>;
};

export type DeleteObjectResponseFragment = {
  __typename?: 'DeleteObjectResponse';
  success?: boolean | null;
  errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
};

export type ErrorResponseFragment = { __typename?: 'ErrorResponse'; field: string; message: string };

export type DomainFragment = {
  __typename?: 'Domain';
  uuid?: string | null;
  domain?: string | null;
  createdAt?: any | null;
  updatedAt?: any | null;
};

export type DomainResponseFragment = {
  __typename?: 'DomainResponse';
  domain?: {
    __typename?: 'Domain';
    uuid?: string | null;
    domain?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
  } | null;
  errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
};

export type DomainsResponseFragment = {
  __typename?: 'DomainsResponse';
  domains?: Array<{
    __typename?: 'Domain';
    uuid?: string | null;
    domain?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
  }> | null;
  errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
};

export type AddDomainToUerMutationVariables = Exact<{
  input: AddDomainToUserInput;
}>;

export type AddDomainToUerMutation = {
  __typename?: 'Mutation';
  addDomainToUer: {
    __typename?: 'DomainResponse';
    domain?: {
      __typename?: 'Domain';
      uuid?: string | null;
      domain?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
    errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
  };
};

export type RemoveDomainFromuserMutationVariables = Exact<{
  input: RemoveDomainFromUserInput;
}>;

export type RemoveDomainFromuserMutation = {
  __typename?: 'Mutation';
  removeDomainFromuser: {
    __typename?: 'DeleteObjectResponse';
    success?: boolean | null;
    errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
  };
};

export type FindDomainQueryVariables = Exact<{
  input: FindDomainInput;
}>;

export type FindDomainQuery = {
  __typename?: 'Query';
  findDomain: {
    __typename?: 'DomainResponse';
    domain?: {
      __typename?: 'Domain';
      uuid?: string | null;
      domain?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
    errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
  };
};

export type FindUserDomainsQueryVariables = Exact<{
  input: FindUserDomainsInput;
}>;

export type FindUserDomainsQuery = {
  __typename?: 'Query';
  findUserDomains: {
    __typename?: 'DomainsResponse';
    domains?: Array<{
      __typename?: 'Domain';
      uuid?: string | null;
      domain?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    }> | null;
    errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
  };
};

export type ParkFragment = {
  __typename?: 'Park';
  uuid?: string | null;
  duration?: number | null;
  location?: string | null;
  domain?: {
    __typename?: 'Domain';
    uuid?: string | null;
    domain?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
  } | null;
  user?: {
    __typename?: 'User';
    uuid?: string | null;
    name?: string | null;
    surname?: string | null;
    dni?: string | null;
    email?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
  } | null;
};

export type ParkResponseFragment = {
  __typename?: 'ParkResponse';
  park?: {
    __typename?: 'Park';
    uuid?: string | null;
    duration?: number | null;
    location?: string | null;
    domain?: {
      __typename?: 'Domain';
      uuid?: string | null;
      domain?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
    user?: {
      __typename?: 'User';
      uuid?: string | null;
      name?: string | null;
      surname?: string | null;
      dni?: string | null;
      email?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
  } | null;
  errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
};

export type FindParkQueryVariables = Exact<{
  input: FindParkInput;
}>;

export type FindParkQuery = {
  __typename?: 'Query';
  findPark: {
    __typename?: 'ParkResponse';
    park?: {
      __typename?: 'Park';
      uuid?: string | null;
      duration?: number | null;
      location?: string | null;
      domain?: {
        __typename?: 'Domain';
        uuid?: string | null;
        domain?: string | null;
        createdAt?: any | null;
        updatedAt?: any | null;
      } | null;
      user?: {
        __typename?: 'User';
        uuid?: string | null;
        name?: string | null;
        surname?: string | null;
        dni?: string | null;
        email?: string | null;
        createdAt?: any | null;
        updatedAt?: any | null;
      } | null;
    } | null;
    errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
  };
};

export type UserResponseFragment = {
  __typename?: 'UserResponse';
  user?: {
    __typename?: 'User';
    uuid?: string | null;
    name?: string | null;
    surname?: string | null;
    dni?: string | null;
    email?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
  } | null;
  errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
};

export type UserFragment = {
  __typename?: 'User';
  uuid?: string | null;
  name?: string | null;
  surname?: string | null;
  dni?: string | null;
  email?: string | null;
  createdAt?: any | null;
  updatedAt?: any | null;
};

export type FindUserQueryVariables = Exact<{
  input: FindUserInput;
}>;

export type FindUserQuery = {
  __typename?: 'Query';
  findUser: {
    __typename?: 'UserResponse';
    user?: {
      __typename?: 'User';
      uuid?: string | null;
      name?: string | null;
      surname?: string | null;
      dni?: string | null;
      email?: string | null;
      createdAt?: any | null;
      updatedAt?: any | null;
    } | null;
    errors?: Array<{ __typename?: 'ErrorResponse'; field: string; message: string }> | null;
  };
};

export const ErrorResponseFragmentDoc = gql`
  fragment ErrorResponse on ErrorResponse {
    field
    message
  }
`;
export const DeleteObjectResponseFragmentDoc = gql`
  fragment DeleteObjectResponse on DeleteObjectResponse {
    success
    errors {
      ...ErrorResponse
    }
  }
  ${ErrorResponseFragmentDoc}
`;
export const DomainFragmentDoc = gql`
  fragment Domain on Domain {
    uuid
    domain
    createdAt
    updatedAt
  }
`;
export const DomainResponseFragmentDoc = gql`
  fragment DomainResponse on DomainResponse {
    domain {
      ...Domain
    }
    errors {
      ...ErrorResponse
    }
  }
  ${DomainFragmentDoc}
  ${ErrorResponseFragmentDoc}
`;
export const DomainsResponseFragmentDoc = gql`
  fragment DomainsResponse on DomainsResponse {
    domains {
      ...Domain
    }
    errors {
      ...ErrorResponse
    }
  }
  ${DomainFragmentDoc}
  ${ErrorResponseFragmentDoc}
`;
export const UserFragmentDoc = gql`
  fragment User on User {
    uuid
    name
    surname
    dni
    email
    createdAt
    updatedAt
  }
`;
export const ParkFragmentDoc = gql`
  fragment Park on Park {
    uuid
    duration
    location
    domain {
      ...Domain
    }
    user {
      ...User
    }
  }
  ${DomainFragmentDoc}
  ${UserFragmentDoc}
`;
export const ParkResponseFragmentDoc = gql`
  fragment ParkResponse on ParkResponse {
    park {
      ...Park
    }
    errors {
      ...ErrorResponse
    }
  }
  ${ParkFragmentDoc}
  ${ErrorResponseFragmentDoc}
`;
export const UserResponseFragmentDoc = gql`
  fragment UserResponse on UserResponse {
    user {
      ...User
    }
    errors {
      ...ErrorResponse
    }
  }
  ${UserFragmentDoc}
  ${ErrorResponseFragmentDoc}
`;
export const AddDomainToUerDocument = gql`
  mutation addDomainToUer($input: AddDomainToUserInput!) {
    addDomainToUer(input: $input) {
      ...DomainResponse
    }
  }
  ${DomainResponseFragmentDoc}
`;
export type AddDomainToUerMutationFn = Apollo.MutationFunction<AddDomainToUerMutation, AddDomainToUerMutationVariables>;

/**
 * __useAddDomainToUerMutation__
 *
 * To run a mutation, you first call `useAddDomainToUerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDomainToUerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDomainToUerMutation, { data, loading, error }] = useAddDomainToUerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddDomainToUerMutation(
  baseOptions?: Apollo.MutationHookOptions<AddDomainToUerMutation, AddDomainToUerMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddDomainToUerMutation, AddDomainToUerMutationVariables>(AddDomainToUerDocument, options);
}
export type AddDomainToUerMutationHookResult = ReturnType<typeof useAddDomainToUerMutation>;
export type AddDomainToUerMutationResult = Apollo.MutationResult<AddDomainToUerMutation>;
export type AddDomainToUerMutationOptions = Apollo.BaseMutationOptions<
  AddDomainToUerMutation,
  AddDomainToUerMutationVariables
>;
export const RemoveDomainFromuserDocument = gql`
  mutation removeDomainFromuser($input: RemoveDomainFromUserInput!) {
    removeDomainFromuser(input: $input) {
      ...DeleteObjectResponse
    }
  }
  ${DeleteObjectResponseFragmentDoc}
`;
export type RemoveDomainFromuserMutationFn = Apollo.MutationFunction<
  RemoveDomainFromuserMutation,
  RemoveDomainFromuserMutationVariables
>;

/**
 * __useRemoveDomainFromuserMutation__
 *
 * To run a mutation, you first call `useRemoveDomainFromuserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDomainFromuserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDomainFromuserMutation, { data, loading, error }] = useRemoveDomainFromuserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveDomainFromuserMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveDomainFromuserMutation, RemoveDomainFromuserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveDomainFromuserMutation, RemoveDomainFromuserMutationVariables>(
    RemoveDomainFromuserDocument,
    options
  );
}
export type RemoveDomainFromuserMutationHookResult = ReturnType<typeof useRemoveDomainFromuserMutation>;
export type RemoveDomainFromuserMutationResult = Apollo.MutationResult<RemoveDomainFromuserMutation>;
export type RemoveDomainFromuserMutationOptions = Apollo.BaseMutationOptions<
  RemoveDomainFromuserMutation,
  RemoveDomainFromuserMutationVariables
>;
export const FindDomainDocument = gql`
  query findDomain($input: FindDomainInput!) {
    findDomain(input: $input) {
      ...DomainResponse
    }
  }
  ${DomainResponseFragmentDoc}
`;

/**
 * __useFindDomainQuery__
 *
 * To run a query within a React component, call `useFindDomainQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDomainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDomainQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindDomainQuery(baseOptions: Apollo.QueryHookOptions<FindDomainQuery, FindDomainQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindDomainQuery, FindDomainQueryVariables>(FindDomainDocument, options);
}
export function useFindDomainLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FindDomainQuery, FindDomainQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindDomainQuery, FindDomainQueryVariables>(FindDomainDocument, options);
}
export type FindDomainQueryHookResult = ReturnType<typeof useFindDomainQuery>;
export type FindDomainLazyQueryHookResult = ReturnType<typeof useFindDomainLazyQuery>;
export type FindDomainQueryResult = Apollo.QueryResult<FindDomainQuery, FindDomainQueryVariables>;
export const FindUserDomainsDocument = gql`
  query findUserDomains($input: FindUserDomainsInput!) {
    findUserDomains(input: $input) {
      ...DomainsResponse
    }
  }
  ${DomainsResponseFragmentDoc}
`;

/**
 * __useFindUserDomainsQuery__
 *
 * To run a query within a React component, call `useFindUserDomainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserDomainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserDomainsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindUserDomainsQuery(
  baseOptions: Apollo.QueryHookOptions<FindUserDomainsQuery, FindUserDomainsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindUserDomainsQuery, FindUserDomainsQueryVariables>(FindUserDomainsDocument, options);
}
export function useFindUserDomainsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FindUserDomainsQuery, FindUserDomainsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindUserDomainsQuery, FindUserDomainsQueryVariables>(FindUserDomainsDocument, options);
}
export type FindUserDomainsQueryHookResult = ReturnType<typeof useFindUserDomainsQuery>;
export type FindUserDomainsLazyQueryHookResult = ReturnType<typeof useFindUserDomainsLazyQuery>;
export type FindUserDomainsQueryResult = Apollo.QueryResult<FindUserDomainsQuery, FindUserDomainsQueryVariables>;
export const FindParkDocument = gql`
  query findPark($input: FindParkInput!) {
    findPark(input: $input) {
      ...ParkResponse
    }
  }
  ${ParkResponseFragmentDoc}
`;

/**
 * __useFindParkQuery__
 *
 * To run a query within a React component, call `useFindParkQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindParkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindParkQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindParkQuery(baseOptions: Apollo.QueryHookOptions<FindParkQuery, FindParkQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindParkQuery, FindParkQueryVariables>(FindParkDocument, options);
}
export function useFindParkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindParkQuery, FindParkQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindParkQuery, FindParkQueryVariables>(FindParkDocument, options);
}
export type FindParkQueryHookResult = ReturnType<typeof useFindParkQuery>;
export type FindParkLazyQueryHookResult = ReturnType<typeof useFindParkLazyQuery>;
export type FindParkQueryResult = Apollo.QueryResult<FindParkQuery, FindParkQueryVariables>;
export const FindUserDocument = gql`
  query findUser($input: FindUserInput!) {
    findUser(input: $input) {
      ...UserResponse
    }
  }
  ${UserResponseFragmentDoc}
`;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindUserQuery(baseOptions: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
}
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
}
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
