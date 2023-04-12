import { Col, Input, Radio, Row, Select, Tag, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { priorityFilterChange, searchFilterChange, statusFilterChange } from "../../Redux/actions";

const { Search } = Input;

export default function Filters() {
    const [searchText, setSearchText] = useState("");
    const [filterStatus, setFilterStatus] = useState('All')
    const [filterPriorities, setFilterPriorities] = useState([])
    const dispatch = useDispatch()

    const handleSearchTextChange = (e) => {
        // console.log(e.target.value);
        setSearchText(e.target.value);
        dispatch(searchFilterChange(e.target.value))
    };

    const handleStatusChange = (e) => {
        setFilterStatus(e.target.value)
        dispatch(statusFilterChange(e.target.value))
        console.log(e.target.value)
    }

    const handlePriorityChange = (value) => {
        // console.log(e)
        setFilterPriorities(value)
        dispatch(priorityFilterChange(value))
    }

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    placeholder='Typing something you want to search'
                    value={searchText}
                    onChange={handleSearchTextChange}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter by status
                </Typography.Paragraph>
                <Radio.Group value={filterStatus} onChange={handleStatusChange}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter by priority
                </Typography.Paragraph>
                <Select
                    value={filterPriorities}
                    onChange={handlePriorityChange}
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: "100%" }}
                >
                    <Select.Option value='High' label='High'>
                        <Tag color='red'>High</Tag>
                    </Select.Option>
                    <Select.Option value='Medium' label='Medium'>
                        <Tag color='blue'>Medium</Tag>
                    </Select.Option>
                    <Select.Option value='Low' label='Low'>
                        <Tag color='gray'>Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    );
}
