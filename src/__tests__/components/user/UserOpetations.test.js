import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import * as userOperations from '../../../components/user/UserOperations';

configure({adapter: new Adapter()});

describe('User Operations', () => {

    jest.mock('../../../__mock__/UserOperationsMock');
    const userOperationsMock = require('../../../__mock__/UserOperationsMock');

    it('add Operation', () => {

        const addMock = jest.spyOn(userOperations, 'add');
        addMock.mockImplementation((newUser) => {
            userOperationsMock.postAdd(() => null);
        });

        userOperations.add();

        expect(addMock).toHaveBeenCalled();
        expect(userOperationsMock.postAdd).toHaveBeenCalledTimes(1);
        addMock.mockRestore();
    });

    it('login Operation', () => {

        const loginMock = jest.spyOn(userOperations, 'login');
        loginMock.mockImplementation((user) => {
            userOperationsMock.postLogin(() => null);
        });

        userOperations.login();

        expect(loginMock).toHaveBeenCalled();
        expect(userOperationsMock.postLogin).toHaveBeenCalledTimes(1);
        loginMock.mockRestore();
    });

    it('list Operation', () => {

        const listMock = jest.spyOn(userOperations, 'list');
        listMock.mockImplementation(() => {
            userOperationsMock.getList(() => null);
        });

        userOperations.list();

        expect(listMock).toHaveBeenCalled();
        expect(userOperationsMock.getList).toHaveBeenCalledTimes(1);
        listMock.mockRestore();
    });

    it('getUser Operation', () => {

        const getUserMock = jest.spyOn(userOperations, 'getUser');
        getUserMock.mockImplementation((userId) => {
            userOperationsMock.getUser(() => null);
        });

        userOperations.getUser();

        expect(getUserMock).toHaveBeenCalled();
        expect(userOperationsMock.getUser).toHaveBeenCalledTimes(1);
        getUserMock.mockRestore();
    });

    it('update Operation', () => {

        const updateMock = jest.spyOn(userOperations, 'update');
        updateMock.mockImplementation((newValues) => {
            userOperationsMock.putUser(() => null);
        });

        userOperations.update();

        expect(updateMock).toHaveBeenCalled();
        expect(userOperationsMock.putUser).toHaveBeenCalledTimes(1);
        updateMock.mockRestore();
    });

    it('deleteUser Operation', () => {

        const deleteUserMock = jest.spyOn(userOperations, 'deleteUser');
        deleteUserMock.mockImplementation((userId) => {
            userOperationsMock.deleteUser(() => null);
        });

        userOperations.deleteUser();

        expect(deleteUserMock).toHaveBeenCalled();
        expect(userOperationsMock.deleteUser).toHaveBeenCalledTimes(1);
        deleteUserMock.mockRestore();
    });
});