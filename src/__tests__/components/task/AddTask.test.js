import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddTask from '../../../components/task/AddTask';

configure({adapter: new Adapter()});

describe('<AddTask/> Component', () => {
 
    let wrapper;
    let spy;

    it('render AddTask', () => {
        wrapper = shallow(<AddTask/>);
        expect(wrapper.find(AddTask)).toBeDefined();
    });

    it('description field check', () => {
        wrapper = shallow(<AddTask/>);
        wrapper.find('textarea[name="description"]')
        .simulate('change', {target: {name: 'description', value: 'Description'}});
        
        expect(wrapper.state('description')).toEqual('Description');
    });

    it('exist button agregar', () => {
        wrapper = shallow(<AddTask/>)
        expect(wrapper.find('#btn-add-task')).toHaveLength(1);
    });

    it('button click agregar', async () => {
        
        beforeAll(async (done) => {    
            spy = jest.spyOn(AddTask.prototype, 'onSubmit');
            wrapper = mount(<AddTask/>);
            await wrapper.find('form').simulate('submit', { 
                preventDefault() { },
                add() { }
            });
            done();
        });

        afterAll(async (done) => {
            expect(spy).toHaveBeenCalled();
            spy.mockClear();
            done();
        });
    });
   
})