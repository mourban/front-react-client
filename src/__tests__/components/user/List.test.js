import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Link} from 'react-router';
import List from '../../../components/user/List';

configure({adapter: new Adapter()});

describe('<List/> Component', () => {
 
    let wrapper;
    let spy;
    const listProps = {
        userId: '6dsklls8353h4t4398eeioj984t9',
        list() { },
        deleteUser() { },
    }

    it('render List', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<List {...listProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find(Update)).toBeDefined();
            done();
        });

    });

    it('exist button editar', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<List {...listProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find('#btn-edit')).toHaveLength(1);
            done();
        });

    });

    it('button click editar', async () => {
        
        beforeAll(async (done) => { 
            wrapper = shallow(<List {...listProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find(Link).props().to).toBe('/user/');
            done();
        });
        
    });

    it('exist button eliminar', () => {

        beforeAll(async (done) => { 
            wrapper = shallow(<List {...listProps} />);
            done();
        });

        afterAll(async (done) => {
            expect(wrapper.find('button')).toHaveLength(1);
            done();
        });

    });

    it('button click eliminar', async () => {
        
        beforeAll(async (done) => { 
            spy = jest.spyOn(List.prototype, 'deleteUser');
            wrapper = mount(<List {...listProps} />);
            await wrapper.find('button').simulate('click', { 
                deleteUser() { }
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