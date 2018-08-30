import fs from 'fs';
import path from 'path';
import { printSchema } from 'graphql/utilities';
import Schema from '../graphql/Schema';

fs.writeFileSync(
    path.join(__dirname, './schema.graphql'),
    printSchema(Schema)
);