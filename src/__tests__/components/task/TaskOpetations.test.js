import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import * as taskOperations from '../../../components/task/TaskOperations';

configure({adapter: new Adapter()});

describe('Task Operations', () => {

    jest.mock('../../../__mock__/TaskOperationsMock');
    const taskOperationsMock = require('../../../__mock__/TaskOperationsMock');

    it('add Operation', () => {

        const addMock = jest.spyOn(taskOperations, 'add');
        addMock.mockImplementation((newTask) => {
            taskOperationsMock.postAdd(() => null);
        });

        taskOperations.add();

        expect(addMock).toHaveBeenCalled();
        expect(taskOperationsMock.postAdd).toHaveBeenCalledTimes(1);
        addMock.mockRestore();
    });

    it('list Operation', () => {

        const listMock = jest.spyOn(taskOperations, 'list');
        listMock.mockImplementation(() => {
            taskOperationsMock.getList(() => null);
        });

        taskOperations.list();

        expect(listMock).toHaveBeenCalled();
        expect(taskOperationsMock.getList).toHaveBeenCalledTimes(1);
        listMock.mockRestore();
    });

    it('getTask Operation', () => {

        const getTaskMock = jest.spyOn(taskOperations, 'getTask');
        getTaskMock.mockImplementation((userId) => {
            taskOperationsMock.getTask(() => null);
        });

        taskOperations.getTask();

        expect(getTaskMock).toHaveBeenCalled();
        expect(taskOperationsMock.getTask).toHaveBeenCalledTimes(1);
        getTaskMock.mockRestore();
    });

    it('update Operation', () => {

        const updateMock = jest.spyOn(taskOperations, 'update');
        updateMock.mockImplementation((newValues) => {
            taskOperationsMock.putTask(() => null);
        });

        taskOperations.update();

        expect(updateMock).toHaveBeenCalled();
        expect(taskOperationsMock.putTask).toHaveBeenCalledTimes(1);
        updateMock.mockRestore();
    });

    it('deleteUser Operation', () => {

        const deleteUserMock = jest.spyOn(taskOperations, 'deleteTask');
        deleteUserMock.mockImplementation((userId) => {
            taskOperationsMock.deleteTask(() => null);
        });

        taskOperations.deleteTask();

        expect(deleteUserMock).toHaveBeenCalled();
        expect(taskOperationsMock.deleteTask).toHaveBeenCalledTimes(1);
        deleteUserMock.mockRestore();
    });
});