import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Add from '../../../components/user/Add';

configure({adapter: new Adapter()});

describe('<Add/> Component', () => {
 
    let wrapper;
    let spy;

    it('render Add', () => {
        wrapper = shallow(<Add/>);
        expect(wrapper.find(Add)).toBeDefined();
    });

    it('first_name field check', () => {
        wrapper = shallow(<Add/>);
        wrapper.find('input[name="first_name"]')
        .simulate('change', {target: {name: 'first_name', value: 'First Name'}});
        
        expect(wrapper.state('first_name')).toEqual('First Name');
    });

    it('last_name field check', () => {
        wrapper = shallow(<Add/>);
        wrapper.find('input[name="last_name"]')
        .simulate('change', {target: {name: 'last_name', value: 'Last Name'}});
        
        expect(wrapper.state('last_name')).toEqual('Last Name');
    });

    it('email field check', () => {
        wrapper = shallow(<Add/>);
        wrapper.find('input[type="email"]')
        .simulate('change', {target: {name: 'email', value: 'test@test.com'}});
        
        expect(wrapper.state('email')).toEqual('test@test.com');
    });

    it('password field check', () => {
        wrapper = shallow(<Add/>);
        wrapper.find('input[type="password"]')
        .simulate('change', {target: {name: 'password', value: 'test.test'}});
        
        expect(wrapper.state('password')).toEqual('test.test');
    });

    it('exist button agregar', () => {
        wrapper = shallow(<Add/>)
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('button click agregar', async () => {
        
        beforeAll(async (done) => {    
            spy = jest.spyOn(Add.prototype, 'onSubmit');
            wrapper = mount(<Add/>);
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