import styled from 'styled-components'

export const Leaves = styled.img`
    position: absolute;
    z-index: 3;
`

export const RightToMidLeaf = styled(Leaves)`
    height: 250px;
    right: -5%;
    bottom: -12%;
    @media ( max-width: 600px ){
        height: 150px;
        bottom: -8%;
        left: 60%;
    }
`

export const MiddleLeaf = styled(Leaves)`
    height: 250px;
    left: 40%;
    bottom: -20%;
    @media ( max-width: 600px ){
        height: 150px;
        bottom: -10%;
        left: 60%;
    }
`

export const RightLeaf = styled(Leaves)`
    height: 200px;
    right: 0;
    bottom: -20%;
    @media ( max-width: 600px ){
        height: 150px;
        bottom: -10%;
    }
`

export const LeftLeaf = styled(Leaves)`
    height: 250px;
    left: -30px;
    bottom: -5%;
    @media (max-width: 2000px) {
        height: 16vw;
        left: -5%;
        bottom: -5%;
    }
    @media (max-width: 600px) {
        height: 100px;
        bottom: 0;
        left: -8%;
    }
`