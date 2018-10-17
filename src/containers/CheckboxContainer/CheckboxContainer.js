import React, { Component } from 'react';
import checkboxes from '../../components/Checkbox/checkboxes';
import Checkbox from '../../components/Checkbox/Checkbox';

class CheckboxContainer extends Component {
    state = {
        checkedItems: new Map()
    }

    checkboxHandler = (e) => {
        const name = e.target.name;
        const checked = e.target.checked;
        let newMap = new Map(this.state.checkedItems);
        newMap.set(name, checked);
        this.setState({ checkedItems: newMap });
    }

    render() {
        return (
            <React.Fragment>
                {
                    checkboxes.map((item) => (
                        <label key={item.key}>
                            {item.name}
                            <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.checkboxHandler} />
                        </label>
                    ))
                }
            </React.Fragment>
        );
    }
}

export default CheckboxContainer;