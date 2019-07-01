import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Update from '../../../components/user/Update';

configure({adapter: new Adapter()});

describe('<Update/> Component', () => {
 
    let wrapper;
    let spy;
    const updateProps = {
        match: {
            params: {
                id: '6dsklls8353h4t4398eeioj984t9'
            }
        },
        getUser() { }
    }

    it('render Update', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<Update {...updateProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find(Update)).toBeDefined();
            done();
        });

    });

    it('first_name field check', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<Update {...updateProps} />);
            wrapper.find('input[name="first_name"]')
            .simulate('change', {target: {name: 'first_name', value: 'First Name'}});
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.state('first_name')).toEqual('First Name');
            done();
        });
        
    });

    it('last_name field check', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<Update {...updateProps} />);
            wrapper.find('input[name="last_name"]')
            .simulate('change', {target: {name: 'last_name', value: 'Last Name'}});
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.state('last_name')).toEqual('Last Name');
            done();
        });
        
    });

    it('email field check', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<Update {...updateProps} />);
            wrapper.find('input[type="email"]')
            .simulate('change', {target: {name: 'email', value: 'test@test.com'}});
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.state('email')).toEqual('test@test.com');
            done();
        });

    });

    it('password field check', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<Update {...updateProps} />);
            wrapper.find('input[type="password"]')
            .simulate('change', {target: {name: 'password', value: 'test.test'}});
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.state('password')).toEqual('test.test');
            done();
        });
        
    });

    it('exist button actualizar', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<Update {...updateProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find('button')).toHaveLength(1);
            done();
        });

    });

    it('button click actualizar', async () => {
        
        beforeAll(async (done) => { 
            spy = jest.spyOn(Update.prototype, 'onSubmit');
            wrapper = mount(<Update {...updateProps} />);
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