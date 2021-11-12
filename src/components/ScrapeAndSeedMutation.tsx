import React from "react";
import { ApolloError, gql, useMutation } from "@apollo/client";

export const SCRAPE_AND_SEED = gql`
  mutation ScrapeAndSeed {
    scrapeAndSeed
  }
`;

export interface ScrapeAndSeedMutationProps {
  children: (props: GqlMutationScrapeAndSeedProps) => React.ReactElement<any, any> | null;
}

export const ScrapeAndSeedMutation: React.FC<ScrapeAndSeedMutationProps> = ({
  children,
}: ScrapeAndSeedMutationProps) => {
  const [scrapeAndSeed, {error, data, loading}] = useMutation(SCRAPE_AND_SEED);
  return children({ scrapeAndSeed, data, error, loading });
};

export interface GqlMutationScrapeAndSeedProps {
    scrapeAndSeed: Function
    data: any
    error: ApolloError | undefined
    loading: boolean
  }