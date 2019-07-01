import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../../../components/user/Login';

configure({adapter: new Adapter()});

describe('<Login/> Component', () => {
 
    let wrapper;
    let spy;

    it('render Login', () => {
        wrapper = shallow(<Login/>);
        expect(wrapper.find(Login)).toBeDefined();
    });

    it('email field check', () => {
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="email"]')
        .simulate('change', {target: {name: 'email', value: 'test@test.com'}});
        
        expect(wrapper.state('email')).toEqual('test@test.com');
    });

    it('password field check', () => {
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="password"]')
        .simulate('change', {target: {name: 'password', value: 'test.test'}});
        
        expect(wrapper.state('password')).toEqual('test.test');
    });

    it('exist button login', () => {
        wrapper = shallow(<Login/>)
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('button click login', async () => {
        
        beforeAll(async (done) => {
            spy = jest.spyOn(Login.prototype, 'onSubmit');
            wrapper = mount(<Login/>);
            await wrapper.find('form').simulate('submit', { 
                preventDefault() { },
                login() { }
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