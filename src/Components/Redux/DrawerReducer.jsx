const drawerState = {
    label: <img src='./keep.png' height="40"></img>,
    label2:'Keep'
}

export const DrawerReducer = (state = drawerState, action) => {
    switch (action.type) {
        case 'Notes':
            return {
                ...state,
                label: <img src='./keep.png' height="40"></img>,
                label2:'Keep'
            }
        case 'Reminders':
            return {
                ...state,
                label: 'Reminders',
                label2:' '
            }
        case 'Edit':
            return {
                ...state,
                label: 'Edit',
                label2:' '
            }
        case 'Archive':
            return {
                ...state,
                label: 'Archive',
                label2:' '
            }
        case 'Trash':
            return {
                ...state,
                label: 'Trash',
                label2:' '
            }
        default: 
            return state
    }
}