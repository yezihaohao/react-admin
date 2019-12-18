import React, { useState } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { IFMenu } from '../routes/config';
import { MenuProps } from 'antd/lib/menu';

const renderMenuItem = (
    item: IFMenu // item.route 菜单单独跳转的路由
) => (
    <Menu.Item key={item.key}>
        <Link to={(item.route || item.key) + (item.query || '')}>
            {item.icon && <Icon type={item.icon} />}
            <span className="nav-text">{item.title}</span>
        </Link>
    </Menu.Item>
);

const renderSubMenu = (item: IFMenu) => {
    return (
        <Menu.SubMenu
            key={item.key}
            title={
                <span>
                    {item.icon && <Icon type={item.icon} />}
                    <span className="nav-text">{item.title}</span>
                </span>
            }
        >
            {item.subs!.map(sub => (sub.subs ? renderSubMenu(sub) : renderMenuItem(sub)))}
        </Menu.SubMenu>
    );
};

type SiderMenuProps = MenuProps & {
    menus: any;
    onClick: (e: any) => void;
    selectedKeys: string[];
    openKeys?: string[];
    onOpenChange: (v: string[]) => void;
};

export default ({ menus, ...props }: SiderMenuProps) => {
    const [dragItems, setDragItems] = useState(menus);
    const reorder = (list: any, startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };
    const onDragEnd = (result: any) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const _items = reorder(dragItems, result.source.index, result.destination.index);
        setDragItems(_items);
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {dragItems.map((item: IFMenu, index: number) => (
                            <Draggable key={item.key} draggableId={item.key} index={index}>
                                {(provided, snapshot) => (
                                    <div>
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                        >
                                            <Menu {...props}>
                                                {item.subs!
                                                    ? renderSubMenu(item)
                                                    : renderMenuItem(item)}
                                            </Menu>
                                        </div>
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};
