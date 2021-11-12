import React from "react";
import { ApolloError, gql, useQuery } from "@apollo/client";

export const GET_PLAYERS = gql`
  query players($rank: Int, $position: String, $school: String, $name: String) {
    players(rank: $rank, position: $position, school: $school, name: $name) {
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
}

export const PlayerQuery: React.FC<GetPlayersQueryProps> = ({
  rank,
  position,
  school,
  name,
  children,
}: GetPlayersQueryProps) => {
  var queryOptions = { variables: { rank, position, school, name } }
  const {error, data, loading} = useQuery(GET_PLAYERS, queryOptions);
  return children({ data, error, loading });
};

export interface GqlQueryGetPlayerProps {
    data: any
    error: ApolloError | undefined
    loading: boolean
  }