import React from "react";
import { ApolloError, gql, useQuery } from "@apollo/client";

export const GET_PLAYERS = gql`
  query players($rank: Int, $position: String, $school: String, $name: String, $orderByDate: Boolean) {
    players(rank: $rank, position: $position, school: $school, name: $name, orderByDate: $orderByDate) {
        rank
        name
        school
        position
        nextgame
    }
  }
`;

export interface GetPlayersQueryProps {
  children: (props: GqlQueryGetPlayerProps) => React.ReactElement<any, any> | null;
  rank: number
  position: string
  school: string
  name: string
  orderByDate: boolean
}

export const PlayerQuery: React.FC<GetPlayersQueryProps> = ({
  rank,
  position,
  school,
  name,
  orderByDate,
  children,
}: GetPlayersQueryProps) => {
  var queryOptions = { variables: { rank, position, school, name, orderByDate } }
  const {error, data, loading} = useQuery(GET_PLAYERS, queryOptions);
  return children({ data, error, loading });
};

export interface GqlQueryGetPlayerProps {
    data: any
    error: ApolloError | undefined
    loading: boolean
  }