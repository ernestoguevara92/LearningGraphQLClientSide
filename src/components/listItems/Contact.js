import { useState } from 'react'
import { Card } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import RemoveContact from '../buttons/RemoveContact'
import UpdateContact from '../forms/UpdateContact'

const getStyles = () => ({
    card: {
        width: '500px',
        backgroundColor: '#f5f5a5',
    }
})

const Contact = props => {
    const { id, firstName, lastName } = props;
    const styles = getStyles();

    const [editMode, setEditMode] = useState(false);

    const handleButtonClick = () => setEditMode(!editMode);

    return (
        <>
            {editMode ? 
                <UpdateContact 
                id={id}
                firstName={firstName}
                lastName={lastName}
                onButtonClick={handleButtonClick} />
                :
                <Card style={styles.card}
                    actions={[
                        <EditOutlined key='edit' onClick={handleButtonClick} />,
                        <RemoveContact id={id} />
                    ]}
                    >
                    {firstName} {lastName}
                </Card>
            }
        </>
    )
}

export default Contact;