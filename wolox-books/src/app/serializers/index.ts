import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

export const toCamelCase = new CamelcaseSerializer();
export const toSnakeCase = new SnakecaseSerializer();
