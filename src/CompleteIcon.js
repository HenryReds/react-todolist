import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({completed}) {
    
    return (
        <TodoIcon
            type="check"
            color={ completed == true ? 'green' : 'gray' }
        />
    );
}

export { CompleteIcon };