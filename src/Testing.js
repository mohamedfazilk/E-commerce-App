import React from 'react';
import styled from 'styled-components'

const Testing = () => {
  return (
       <Wrapper>
       <h3>Heloo world</h3>
        <p>gfhfhfh</p>
       </Wrapper>
 
  )
}

const Wrapper = styled.div`
h3{
   background:red;
}
p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }

`

export default Testing