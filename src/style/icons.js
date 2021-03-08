import {ChevronRight} from '@styled-icons/feather/ChevronRight'
import styled from 'styled-components'
import {Plus} from '@styled-icons/feather/Plus'

import {X} from '@styled-icons/feather/X'

export const WhiteChevronRight = styled(ChevronRight)`
    color: #ffffff;
    height: 25px;
    font-weight: 600;
    transform: ${(props) => props.down ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: transform 1s ease;
`
export const WhitePlus = styled(Plus)`
    color: #ffffff;
    height: 25px;
    font-weight: 600;
`
export const WhiteX = styled(X)`
    color: #ffffff;
    height: 25px;
    font-weight: 600;
`
