import React from 'react'
import renderer from 'react-test-renderer';
import  { ComponenteDeTeste } from './component'

describe('Testando component', () =>{
  it('Mostra componente', () => {
    const component  = (<ComponenteDeTeste a={10} b={20} />)
    const tree = renderer
      .create(component)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})