import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Link} from 'react-router';
import ListTask from '../../../components/task/ListTask';

configure({adapter: new Adapter()});

describe('<ListTask/> Component', () => {
 
    let wrapper;
    let spy;
    const listProps = {
        taskId: '6dsklls8353h4t4398eeioj984t9',
        list() { },
        deleteUser() { },
    }

    it('render ListTask', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<ListTask {...listProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find(Update)).toBeDefined();
            done();
        });

    });

    it('exist button editar tarea', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<ListTask {...listProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find('#btn-edit')).toHaveLength(1);
            done();
        });

    });

    it('button click editar tarea', async () => {
        
        beforeAll(async (done) => { 
            wrapper = shallow(<ListTask {...listProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find(Link).props().to).toBe('/task/');
            done();
        });
        
    });

    it('exist button eliminar tarea', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<ListTask {...listProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find('button')).toHaveLength(1);
            done();
        });

    });

    it('button click eliminar', async () => {
        
        beforeAll(async (done) => { 
            spy = jest.spyOn(ListTask.prototype, 'deleteTask');
            wrapper = mount(<ListTask {...listProps} />);
            await wrapper.find('button').simulate('click', { 
                deleteTask() { }
            });
            done();
        });

        afterAll(async (done) => {
            expect(spy).toHaveBeenCalled();
            spy.mockClear();
            done();
        });
        
    });

});