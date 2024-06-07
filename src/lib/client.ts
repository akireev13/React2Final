import { getSdk } from "@/generated/graphql";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwue04wd02z008umie77j5nc/master")

export const sdk = getSdk(client)