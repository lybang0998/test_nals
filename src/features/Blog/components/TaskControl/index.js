import React from 'react';
import Search from './Search';
import Sort from './Sort';

function TaskControl(props) {
    return (
        <section className="task-control">
            <div className="container">
                <div className="pt-5">
                    <div className="row justify-content-center">
                        {/* search */}
                        <Search />

                        {/* sort */}
                        <Sort />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default TaskControl;