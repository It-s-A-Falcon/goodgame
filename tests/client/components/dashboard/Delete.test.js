// delete btn component 
import React from 'react';
import { shallow } from 'enzyme';
// import Result to Delete
import Delete from '../../../../components/dashboard/Delete'

// beforeAll(()=> {
//     wrapper = mount(<DeleteBtn /> );
// })

describe('<Delete />', ()=>{
     // check for delete button 
    const component = shallow(<DeleteBtn />)
     
    it('should render successfully', () => {
        expect(component.exists()).toEqual(true);
    })

    const nodeWrapper = wrapper.find('input[type="submit"]');
    expect(nodeWrapper).toHaveLength(1);
});

// test for click simulation of delete
    it('it deletes result when delete btn is clicked', () => {
        // shallow render stored in wrapper to simulate 
        const wrapper = shallow(<DeleteBtn />);
        const deleteBtn = wrapper.find('button.delete');
        // simulate click event on deleteBtn
        deleteBtn.simulate('click');
        // find something - Result entry to delete 
        // expect something - expect not to find it 
    })
    
    const wrapper = shallow(<Delete />);
