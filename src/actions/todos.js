import * as uuid from 'uuid';

let todos = [{
    text: 'take out the trash',
    id: uuid.v4()
}];

const getAll = () => {
    return todos;
}

const add = (val) => {
    const todo = {
        text: val,
        id: uuid.v4()
    };
    todos.push(todo);

    return todos;
}

const remove = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    return todos;
}

export default {
    getAll,
    add,
    remove
}