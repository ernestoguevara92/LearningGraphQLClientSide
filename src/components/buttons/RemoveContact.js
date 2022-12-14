import { DeleteOutlined } from "@ant-design/icons"
import { useMutation } from "@apollo/client"
import { REMOVE_CONTACT, GET_CONTACTS } from "../../queries"
import filter from 'lodash.filter'

const RemoveContact = ({id}) => {
    const [removeContact] = useMutation(REMOVE_CONTACT, {
        update(cache, { data: { removeContact}}) {
            const { contacts } = cache.readQuery({ query: GET_CONTACTS })
            cache.writeQuery({
                query: GET_CONTACTS,
                data: {
                    contacts: filter(contacts, o => {
                        return o.id !== removeContact.id
                    })
                }
            })
        }
    })

    const handleButtonClick = () => {
        let result = window.confirm("Are you sure you want to delete this contact?")

        if (result) {
            removeContact({
                variables: {
                    id
                }
            })
        }
    }

    return <DeleteOutlined key='delete' onClick={handleButtonClick} style={{color: 'red'}} />
}

export default RemoveContact