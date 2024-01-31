import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import type { profileType } from "../../redux/profile-person-reducer";
type PropsType = {
    profile: profileType 
    status: string
    updateStatus: any
    profileUserId: number

  }
const ProfileStatus: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [value, setValue] = useState(props.status)

    const dispatch = useDispatch<any>()
    const inputRef = useRef(0)
    const activeEditMode = () => {
        if (props.profileUserId === 30236) {
            setEditMode(true)
        }
    }
    const deactiveEditMode = () => {
        if (props.profileUserId === 30236) {
            setEditMode(false)
             //@ts-ignore
            dispatch(props.updateStatus(inputRef.current.value))
        }
    }
    return (
        <Row>
            <Status>Status:</Status>
            {!editMode
                ? <span onClick={activeEditMode}>{value
                    ? <TextBottomBorder>{value}</TextBottomBorder>
                    : <TextBottomBorder>no status</TextBottomBorder>}
                    </span>
                                 //@ts-ignore

                : <Input ref={inputRef} autoFocus={true} onChange={event => setValue(event.target.value)} onBlur={deactiveEditMode} type="text" value={value} />}
        </Row>
    )
}
export default ProfileStatus;
const Input = styled.input`
    border:1px solid black;
    
`;
const TextBottomBorder = styled.div`
  color:blue;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: end;
`;
const Status = styled.div`
    color:black;
    white-space:nowrap;
    font-size:16px;
`;