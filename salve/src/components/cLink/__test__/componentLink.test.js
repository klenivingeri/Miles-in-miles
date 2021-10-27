import React from 'react'
import renderer from 'react-test-renderer';
import ComponentLink from '../componentLink'

describe('Teste de link', () =>{
  it('Should Component Link', () =>{
    const container = (<ComponentLink link="http://www.google.com.br" descricao="Shoppe"/>);
    const tree = renderer
      .create(container)
      .toJSON();
      expect(tree).toMatchSnapshot()
  })
})