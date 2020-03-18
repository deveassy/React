import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
    }
    render() {
        const { data,onRemove, onUpdate } = this.props;

        const list = data.map(
            info => (
            <PhoneInfo 
            onRemove={onRemove}
            onUpdate={onUpdate}
            info={info} 
            key={info.id} 
            />)
        )

        //static defaultProps 대신 사용 가능한 것
        //if(!data) return null; 로 밑에까지 실행이 되지 않게 함
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;