import {ChevronRight} from '@styled-icons/feather/ChevronRight'
import styled from 'styled-components'

export const WhiteChevronRight = styled(ChevronRight)`
    color: #ffffff;
    height: 20px;
    transform: ${(props) => props.down ? 'rotate(90deg)' : 'rotate(0deg)'};
`
