import { List } from 'antd'

const getStyles = () => ({
    list: {
        display: 'flex',
        justifyContent: 'center',
    }
})

const Contacts = () => {
    const styles = getStyles();

    return (
        <List>
            <List.Item>Hello</List.Item>
        </List>
    )
}

export default Contacts