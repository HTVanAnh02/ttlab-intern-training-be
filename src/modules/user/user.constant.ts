import { User } from 'src/database/schemas/user.schema';

export enum UserOrderBy {
    ID = 'id',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updatedAt',
}

export const UserAttributesForList: (keyof User)[] = [
    'createdAt',
    'updatedAt',
    '_id',
    'id',
    'name',
    'email',
    'password',
    'dateofbirth',
    'phone',
    'avatar',
    'role',
];

export const UserAttributesForDetail: (keyof User)[] = [
    'createdAt',
    'updatedAt',
    '_id',
    'id',
    'name',
    'email',
    'password',
    'dateofbirth',
    'phone',
    'avatar',
    'role',
];
