import {ChevronRight} from '@styled-icons/feather/ChevronRight'
import styled from 'styled-components'
import {Plus} from '@styled-icons/feather/Plus'
import {Circle} from '@styled-icons/feather/Circle'
import {CheckCircle} from '@styled-icons/feather/CheckCircle'
import {Minus} from '@styled-icons/feather/Minus'
import {Edit} from '@styled-icons/feather/Edit'
import {X} from '@styled-icons/feather/X'
import {Save} from '@styled-icons/feather/Save'

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
export const WhiteMinus = styled(Minus)`
    color: #ffffff;
    height: 25px;
    font-weight: 600;
`

export const WhiteX = styled(X)`
    color: #ffffff;
    height: 25px;
    font-weight: 600;
`
export const EmptyCircle = styled(Circle)`
    color: #ffffff;
    height: 25px;
    font-weight: 600;
`
export const WhiteCheckCircle = styled(CheckCircle)`
    color: #ffffff;
    height: 25px;
    font-weight: 600;
`
export const EditPencil = styled(Edit)`
    color: #fff;
    height: 25px;
    font-weight: 600;
`

export const SaveDisk = styled(Save)`
    color: #fff;
    height: 25px;
    font-weight: 600;
`