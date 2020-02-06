import fs from 'fs';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = fs.readFileSync('schema/typeDefs.gql', 'utf8').toString();

export default makeExecutableSchema({ resolvers, typeDefs });
