export type Entity<ID extends number | string> = {
    id: ID
}

export type TPagination = {
    filter?: string;
    page?: number;
    offset?: number;
    limit?: number;
    sortBy?: string;
    totalPages?: number;
    sort?: string;
    total?: number;
};

export enum Errors {
    NOT_DATA_FOUND = 'NOT_DATA_FOUND',
    UNAUTHORIZED = 'UNAUTHORIZED',
    FORBIDDEN = 'FORBIDDEN',
    BAD_REQUEST = 'BAD_REQUEST',
    CONFLICT = 'CONFLICT',
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
    MISSING_FIELDS = "MISSING_FIELDS",
    RECORD_NOT_REGISTERED = "RECORD_NOT_REGISTERED"
}

export type TStatus = Entity<number> &{
    description?: string;
}

export type TJson = {
    [x:string]: any;
}

export type TJsonArray = TJson[]