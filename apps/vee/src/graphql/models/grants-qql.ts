import { gql } from 'graphql-request';

export const getRelevantUserGrants = gql`
  query getRelevantUserGrants($user_id: Int!) {
    users_grants(
      where: { _and: { user_id: { _eq: $user_id }, relevant: { _eq: true } } }
    ) {
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

export const getNotInteractedGrants = gql`
  query getNotInteractedGrants($users_ids: jsonb) {
    grants(
      where: {
        _or: [{ _not: { interacted_users_ids: { _contains: $users_ids } } }]
      }
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

export const onSubmitMutation = gql`
  mutation onSubmitMutation(
    $object: users_grants_insert_input!
    $id: Int!
    $interacted_users_ids: jsonb!
  ) {
    insert_users_grants_one(object: $object) {
      feedback
      grant_id
      user_id
      relevant
    }
    update_grants_by_pk(
      pk_columns: { id: $id }
      _append: { interacted_users_ids: $interacted_users_ids }
    ) {
      id
      interacted_users_ids
      name
      updated_at
    }
  }
`;
