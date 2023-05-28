import { NextRouter } from "next/router";

export function create_router(router){
    
    return{
        query: {},
        asPath: '',
        push: jest.fn(),
        ...router
    }
}