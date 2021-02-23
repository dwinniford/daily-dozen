import {ChevronRight} from '@styled-icons/feather/ChevronRight'
import styled from 'styled-components'

export const WhiteChevronRight = styled(ChevronRight)`
    color: #ffffff;
    height: 25px;
    font-weight: 600;
    transform: ${(props) => props.down ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: transform 1s ease;
`
