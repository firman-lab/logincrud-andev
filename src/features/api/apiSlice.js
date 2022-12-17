import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://639a9636d514150197394862.mockapi.io/' }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => 'user',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Users']
        }),
        getUsers: builder.query({
            query: (id) => `user/${id}`,
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: '/user',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: builder.mutation({
            query: ({ id, user }) => ({
                url: `user/${id}`,
                method: 'PUT',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
    }),
});

export const { useGetAllUsersQuery, useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation } = userApi;