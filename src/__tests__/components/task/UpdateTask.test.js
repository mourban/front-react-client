import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UpdateTask from '../../../components/task/UpdateTask';

configure({adapter: new Adapter()});

describe('<UpdateTask/> Component', () => {
 
    let wrapper;
    let spy;
    const updateProps = {
        match: {
            params: {
                id: '6dsklls8353h4t4398eeioj984t9'
            }
        },
        getTask() { }
    }

    it('render Update', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<UpdateTask {...updateProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find(UpdateTask)).toBeDefined();
            done();
        });

    });

    it('description field check', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<UpdateTask {...updateProps} />);
            wrapper.find('input[name="description"]')
            .simulate('change', {target: {name: 'description', value: 'Description'}});
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.state('description')).toEqual('Description');
            done();
        });
        
    });

    it('exist button actualizar tarea', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<UpdateTask {...updateProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find('#btn-update-task')).toHaveLength(1);
            done();
        });

    });

    it('button click actualizar tarea', async () => {
        
        beforeAll(async (done) => { 
            spy = jest.spyOn(UpdateTask.prototype, 'onSubmit');
            wrapper = mount(<UpdateTask {...updateProps} />);
            await wrapper.find('form').simulate('submit', { 
                preventDefault() { },
                update() { }
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